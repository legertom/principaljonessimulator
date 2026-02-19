"use client";

import { createContext, useContext, useState, useCallback, useRef } from "react";
import { scenarios } from "@/data/scenarios";

export const InstructionalContext = createContext();

function getInitialHistory() {
    const ts = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    // Queue ALL scenarios as ticket cards upfront
    return scenarios.map((scenario, idx) => ({
        id: Date.now() + idx,
        sender: "system",
        text: scenario.description,
        timestamp: ts,
        variant: "ticket",
        scenarioId: scenario.id
    }));
}

export function InstructionalProvider({ children }) {
    // Start with no active scenario — user picks from the ticket queue
    const [activeScenarioId, setActiveScenarioId] = useState(null);
    const [currentStepId, setCurrentStepId] = useState(null);
    const [history, setHistory] = useState(getInitialHistory);
    const [showHint, setShowHint] = useState(false);
    const [coachMarksEnabled, setCoachMarksEnabled] = useState(true);
    const [score, setScore] = useState(0);
    const [currentNavId, setCurrentNavId] = useState(null);
    const [completedScenarios, setCompletedScenarios] = useState(new Set());

    // Refs to avoid stale closures in setTimeout callbacks
    const activeScenarioIdRef = useRef(activeScenarioId);
    const currentStepIdRef = useRef(currentStepId);
    const currentNavIdRef = useRef(currentNavId);
    const coachMarksEnabledRef = useRef(coachMarksEnabled);

    // Keep refs in sync
    activeScenarioIdRef.current = activeScenarioId;
    currentStepIdRef.current = currentStepId;
    currentNavIdRef.current = currentNavId;
    coachMarksEnabledRef.current = coachMarksEnabled;

    // Derived state
    const activeScenario = scenarios.find(s => s.id === activeScenarioId);
    const currentStep = currentStepId
        ? activeScenario?.steps.find(s => s.id === currentStepId)
        : null;
    const scenarioSettings = activeScenario?.settings ?? {};

    // Are we waiting for the user to pick a ticket? (no scenario in progress)
    const waitingForTicket = !currentStepId;

    const timestamp = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const addMessageToHistory = useCallback((step) => {
        if (!step.text) return;
        setHistory(prev => [
            ...prev,
            {
                id: Date.now(),
                sender: step.sender || "system",
                text: step.text,
                timestamp: timestamp(),
                isCurrentStep: true
            }
        ]);
    }, []);

    const acceptTicket = useCallback((scenarioId, guided = true) => {
        const scenario = scenarios.find(s => s.id === scenarioId);
        if (!scenario) return;

        const firstStep = scenario.steps[0];
        if (!firstStep) return;

        setCoachMarksEnabled(guided);
        setActiveScenarioId(scenarioId);
        setCurrentStepId(firstStep.id);
        setShowHint(guided && !!firstStep.autoShowHint);

        // Add the first customer message after a short delay
        setTimeout(() => {
            if (firstStep.text) {
                setHistory(prev => [
                    ...prev,
                    {
                        id: Date.now(),
                        sender: firstStep.sender || "system",
                        text: firstStep.text,
                        timestamp: timestamp(),
                        isCurrentStep: true
                    }
                ]);
            }
        }, 400);
    }, []);

    const skipTicket = useCallback(() => {
        const scenarioId = activeScenarioIdRef.current;
        if (!scenarioId) return;

        // Mark as skipped (treated same as completed for UI purposes)
        setCompletedScenarios(prev => new Set([...prev, scenarioId]));
        setHistory(prev => [...prev, {
            id: Date.now(),
            sender: "system",
            text: "Ticket skipped.",
            timestamp: timestamp(),
            variant: "warning"
        }]);
        setActiveScenarioId(null);
        setCurrentStepId(null);
        setShowHint(false);
    }, []);

    const advanceStep = useCallback((nextStepId) => {
        const scenarioId = activeScenarioIdRef.current;

        if (!nextStepId) {
            // End of scenario — mark completed, return to ticket queue
            setCompletedScenarios(prev => new Set([...prev, scenarioId]));
            setHistory(prev => [...prev, {
                id: Date.now(),
                sender: "system",
                text: "Scenario completed!",
                timestamp: timestamp(),
                variant: "success"
            }]);
            setActiveScenarioId(null);
            setCurrentStepId(null);
            setShowHint(false);
            return;
        }

        const scenario = scenarios.find(s => s.id === scenarioId);
        const nextStep = scenario?.steps.find(s => s.id === nextStepId);
        if (nextStep) {
            setCurrentStepId(nextStepId);
            setShowHint(coachMarksEnabledRef.current && !!nextStep.autoShowHint);
            addMessageToHistory(nextStep);

            // If this is a task step and user is already on the goal page, auto-advance
            if (nextStep.type === "task" && nextStep.goalRoute && nextStep.nextStep) {
                const navId = currentNavIdRef.current;
                if (navId === nextStep.goalRoute) {
                    setTimeout(() => advanceStep(nextStep.nextStep), 800);
                }
            }
        }
    }, [addMessageToHistory]);

    const handleAction = useCallback((action) => {
        const scenarioId = activeScenarioIdRef.current;
        const stepId = currentStepIdRef.current;

        if (action.type === 'submitted_answer') {
            const step = scenarios.find(s => s.id === scenarioId)
                ?.steps.find(s => s.id === stepId);

            const isCorrect = step?.correctAnswer &&
                action.text.trim().toLowerCase() === step.correctAnswer.toLowerCase();

            setHistory(prev => [
                ...prev,
                {
                    id: Date.now(),
                    sender: "agent",
                    text: action.text,
                    timestamp: timestamp()
                }
            ]);

            if (isCorrect) {
                setScore(prev => prev + 1);
                setTimeout(() => advanceStep(step.successStep), 600);
            } else {
                setHistory(prev => [
                    ...prev,
                    {
                        id: Date.now() + 1,
                        sender: "system",
                        text: "That doesn't look quite right. Try again!",
                        timestamp: timestamp(),
                        variant: "warning"
                    }
                ]);
            }
            return;
        }

        // Standard button action
        setHistory(prev => [
            ...prev,
            {
                id: Date.now(),
                sender: "agent",
                text: action.label,
                timestamp: timestamp()
            }
        ]);

        if (action.nextStep) {
            setTimeout(() => advanceStep(action.nextStep), 600);
        } else {
            setTimeout(() => advanceStep(null), 600);
        }
    }, [advanceStep]);

    const toggleHint = () => {
        setShowHint(prev => !prev);
    };

    const toggleCoachMarks = () => {
        setCoachMarksEnabled(prev => {
            const next = !prev;
            // If disabling, also hide any active hint
            if (!next) setShowHint(false);
            return next;
        });
    };

    const checkNavigationGoal = useCallback((navId) => {
        setCurrentNavId(navId);

        const scenarioId = activeScenarioIdRef.current;
        const stepId = currentStepIdRef.current;

        const step = scenarios.find(s => s.id === scenarioId)
            ?.steps.find(s => s.id === stepId);

        if (step?.type === "task" && step.goalRoute === navId && step.nextStep) {
            advanceStep(step.nextStep);
        }
    }, [advanceStep]);

    const checkActionGoal = (actionId) => {
        const scenarioId = activeScenarioIdRef.current;
        const stepId = currentStepIdRef.current;

        const step = scenarios.find(s => s.id === scenarioId)
            ?.steps.find(s => s.id === stepId);

        if (step?.type === "task" && step.goalAction === actionId) {
            // Future action-based goals
        }
    };

    const value = {
        activeScenario,
        scenarioSettings,
        currentStep,
        history,
        showHint,
        coachMarksEnabled,
        score,
        waitingForTicket,
        completedScenarios,
        handleAction,
        acceptTicket,
        skipTicket,
        toggleHint,
        toggleCoachMarks,
        checkNavigationGoal,
        checkActionGoal,
        advanceStep
    };

    return (
        <InstructionalContext.Provider value={value}>
            {children}
        </InstructionalContext.Provider>
    );
}

export function useInstructional() {
    return useContext(InstructionalContext);
}
