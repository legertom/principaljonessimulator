"use client";

import { SessionProvider } from "next-auth/react";
import { ScenarioProvider } from "@/context/ScenarioContext";

/**
 * Global application providers.
 * 
 * Includes:
 * 1. SessionProvider (NextAuth): Manages user authentication state.
 * 2. ScenarioProvider (Context): Manages simulated scenario data.
 */
export function Providers({ children }) {
    return (
        <SessionProvider>
            <ScenarioProvider>
                {children}
            </ScenarioProvider>
        </SessionProvider>
    );
}
