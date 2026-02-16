"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { InstructionalProvider, useInstructional } from "@/context/InstructionalContext";
import Sidebar from "@/components/layout/Sidebar";
import TopNav from "@/components/layout/TopNav";
import ChatPanel from "@/components/chat/ChatPanel";
import CoachMark from "@/components/guidance/CoachMark";
import GuidancePanel from "@/components/guidance/GuidancePanel";
import { buildDashboardRoute } from "@/lib/routing";
import styles from "./DashboardShell.module.css";

function DashboardShellContent({ activeNav, children }) {
    const router = useRouter();
    const { checkNavigationGoal } = useInstructional();

    const handleNavChange = useCallback((navId) => {
        checkNavigationGoal(navId);
        router.push(buildDashboardRoute(navId));
    }, [checkNavigationGoal, router]);

    const handleSwitchToPortal = useCallback(() => {
        router.push("/");
    }, [router]);

    return (
        <div className={styles.appContainer}>
            <CoachMark />
            <div className={styles.dashboardContainer}>
                <Sidebar activeNav={activeNav} onNavChange={handleNavChange} />

                <div className={styles.contentColumn}>
                    <TopNav onNavChange={handleNavChange} onSwitchToPortal={handleSwitchToPortal} />
                    <main className={styles.dashboardMain}>{children}</main>
                </div>
            </div>

            <div className={styles.chatPanelContainer}>
                <GuidancePanel />
                <ChatPanel />
            </div>
        </div>
    );
}

export default function DashboardShell({ activeNav, children }) {
    return (
        <InstructionalProvider>
            <DashboardShellContent activeNav={activeNav}>{children}</DashboardShellContent>
        </InstructionalProvider>
    );
}
