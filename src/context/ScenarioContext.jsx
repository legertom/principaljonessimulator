"use client";

/**
 * ScenarioContext - Centralized scenario data management
 * 
 * Provides scenario data to all components via React Context.
 * This allows components to read scenario data without prop drilling
 * and enables future scenario switching/editing capabilities.
 * 
 * Usage in components:
 *   import { useScenario } from '@/context/ScenarioContext';
 *   
 *   function MyComponent() {
 *     const { scenario, updateScenario } = useScenario();
 *     // Access scenario.team, scenario.applications, etc.
 *   }
 */

import { createContext, useContext, useState } from "react";
import { defaultScenario } from "@/data/defaults";

const ScenarioContext = createContext(undefined);

export function ScenarioProvider({ children }) {
    const [scenario, setScenario] = useState(defaultScenario);

    /**
     * Update scenario data (partial update)
     * @param {Object} updates - Partial scenario object to merge
     */
    const updateScenario = (updates) => {
        setScenario((prev) => ({
            ...prev,
            ...updates,
            meta: {
                ...prev.meta,
                lastModified: new Date().toISOString()
            }
        }));
    };

    /**
     * Reset scenario to defaults
     */
    const resetScenario = () => {
        setScenario(defaultScenario);
    };

    const value = {
        scenario,
        updateScenario,
        resetScenario
    };

    return (
        <ScenarioContext.Provider value={value}>
            {children}
        </ScenarioContext.Provider>
    );
}

/**
 * Hook to access scenario context
 * @returns {Object} { scenario, updateScenario, resetScenario }
 */
export function useScenario() {
    const context = useContext(ScenarioContext);
    if (context === undefined) {
        throw new Error("useScenario must be used within a ScenarioProvider");
    }
    return context;
}

export default ScenarioContext;
