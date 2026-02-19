"use client";

import { useState, useRef, useEffect } from "react";
import { useInstructional } from "@/context/InstructionalContext";
import { useScenario } from "@/context/ScenarioContext";
import styles from "./ChatPanel.module.css";

export default function ChatPanel() {
    const { scenario } = useScenario();
    const { customerInfo } = scenario.chat;
    const {
        activeScenario,
        currentStep,
        history,
        waitingForTicket,
        completedScenarios,
        coachMarksEnabled,
        handleAction,
        acceptTicket,
        skipTicket,
        toggleCoachMarks
    } = useInstructional();

    const [inputValue, setInputValue] = useState("");
    // null = not yet clicked, true = showing mode picker
    const [showModePicker, setShowModePicker] = useState(false);
    const [pendingScenarioId, setPendingScenarioId] = useState(null);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [history, currentStep, showModePicker]);

    const handleSend = () => {
        const text = inputValue.trim();
        if (!text) return;

        handleAction({ type: "submitted_answer", text });
        setInputValue("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handleTicketClick = (scenarioId) => {
        setPendingScenarioId(scenarioId);
        setShowModePicker(true);
    };

    const handleModeSelect = (guided) => {
        setShowModePicker(false);
        acceptTicket(pendingScenarioId, guided);
        setPendingScenarioId(null);
    };

    return (
        <div className={styles.chatPanel}>
            <div className={styles.header}>
                <div className={styles.customerInfo}>
                    <div className={styles.avatar}>
                        <span>{customerInfo.avatar}</span>
                    </div>
                    <div className={styles.customerDetails}>
                        <div className={styles.customerName}>{customerInfo.name}</div>
                        <div className={styles.customerStatus}>
                            <span className={styles.statusDot}></span>
                            {customerInfo.school}
                        </div>
                    </div>
                </div>
                <div className={styles.headerActions}>
                    {currentStep && (
                        <button
                            className={`${styles.coachToggle} ${coachMarksEnabled ? styles.coachToggleOn : ""}`}
                            onClick={toggleCoachMarks}
                            title={coachMarksEnabled ? "Disable coach marks" : "Enable coach marks"}
                        >
                            💡
                        </button>
                    )}
                    <span className={styles.badge}>{customerInfo.badge}</span>
                </div>
            </div>

            {currentStep && (
                <div className={styles.contextBanner}>
                    <div className={styles.contextIcon}>📋</div>
                    <div className={styles.contextText}>
                        <strong>Scenario:</strong> {activeScenario?.description || "Training scenario"}
                    </div>
                </div>
            )}

            <div className={styles.messages}>
                {history.map((msg) => {
                    if (msg.variant === "ticket") {
                        const isDone = completedScenarios.has(msg.scenarioId);
                        const isClickable = waitingForTicket && !isDone && !showModePicker;
                        return (
                            <div key={msg.id} className={styles.ticketNotification}>
                                <div
                                    className={`${styles.ticketCard} ${isDone ? styles.ticketDone : ""} ${isClickable ? styles.ticketClickable : ""}`}
                                    onClick={isClickable ? () => handleTicketClick(msg.scenarioId) : undefined}
                                    role={isClickable ? "button" : undefined}
                                    tabIndex={isClickable ? 0 : undefined}
                                >
                                    <div className={styles.ticketIcon}>{isDone ? "✅" : "🎫"}</div>
                                    <div className={styles.ticketContent}>
                                        <span className={styles.ticketLabel}>{isDone ? "Completed" : "New Ticket"}</span>
                                        <span className={styles.ticketText}>{msg.text}</span>
                                        {isClickable && (
                                            <span className={styles.ticketCta}>Click to open</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    }

                    if (msg.sender === "system") {
                        return (
                            <div key={msg.id} className={styles.systemMessage}>
                                <div className={`${styles.systemBubble} ${msg.variant ? styles[msg.variant] : ""}`}>
                                    {msg.text}
                                </div>
                            </div>
                        );
                    }

                    return (
                        <div
                            key={msg.id}
                            className={`${styles.message} ${styles[msg.sender] || styles.customer}`}
                        >
                            {msg.sender === "customer" && (
                                <div className={styles.messageAvatar}>{customerInfo.avatar}</div>
                            )}
                            <div className={styles.messageBubble}>
                                <div className={styles.messageText}>{msg.text}</div>
                                <div className={styles.messageTime}>{msg.timestamp}</div>
                            </div>
                        </div>
                    );
                })}

                {showModePicker && (
                    <div className={styles.modePicker}>
                        <div className={styles.modePickerLabel}>How would you like to proceed?</div>
                        <div className={styles.modeButtons}>
                            <button
                                className={styles.modeButton}
                                onClick={() => handleModeSelect(true)}
                            >
                                <span className={styles.modeButtonIcon}>💡</span>
                                <span className={styles.modeButtonText}>
                                    <strong>Guided</strong>
                                    <small>Coach marks will show you where to go</small>
                                </span>
                            </button>
                            <button
                                className={`${styles.modeButton} ${styles.modeButtonAlt}`}
                                onClick={() => handleModeSelect(false)}
                            >
                                <span className={styles.modeButtonIcon}>🧭</span>
                                <span className={styles.modeButtonText}>
                                    <strong>Unguided</strong>
                                    <small>Figure it out on your own</small>
                                </span>
                            </button>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            <div className={styles.inputArea}>
                {waitingForTicket && !showModePicker ? (
                    <div className={styles.inputHint}>Click a ticket above to start your mission.</div>
                ) : showModePicker ? (
                    <div className={styles.inputHint}>Choose your mode above to begin.</div>
                ) : currentStep?.actions?.length ? (
                    <div className={styles.actionButtons}>
                        {currentStep.actions.map((action, idx) => (
                            <button
                                key={`${action.label}-${idx}`}
                                className={styles.actionButton}
                                onClick={() => handleAction(action)}
                            >
                                {action.label}
                            </button>
                        ))}
                    </div>
                ) : currentStep?.type === "input" ? (
                    <div className={styles.inputWrapper}>
                        <textarea
                            className={styles.input}
                            placeholder="Type your response"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyDown}
                            rows={1}
                        />
                        <button
                            className={styles.sendButton}
                            onClick={handleSend}
                            disabled={!inputValue.trim()}
                        >
                            Send
                        </button>
                    </div>
                ) : (
                    <div className={styles.inputHint}>Waiting for next training step…</div>
                )}

                {currentStep && !showModePicker ? (
                    <div className={styles.inputFooter}>
                        <span className={styles.inputHint}>Press Enter to send</span>
                        <button className={styles.skipButton} onClick={skipTicket}>
                            Skip this ticket
                        </button>
                    </div>
                ) : !waitingForTicket && !showModePicker ? (
                    <div className={styles.inputHint}>Press Enter to send • Shift+Enter for new line</div>
                ) : null}
            </div>
        </div>
    );
}
