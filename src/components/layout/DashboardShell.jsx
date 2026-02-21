"use client";

import { useCallback, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { InstructionalProvider, useInstructional } from "@/context/InstructionalContext";
import { DataVariantProvider } from "@/context/DataVariantContext";
import Sidebar from "@/components/layout/Sidebar";
import TopNav from "@/components/layout/TopNav";
import CoachMark from "@/components/guidance/CoachMark";
import RightPanel from "@/components/helpdesk/RightPanel";
import TicketToast from "@/components/notifications/TicketToast";
import { buildApplicationDetailsRoute, buildDashboardRoute, DEFAULT_DASHBOARD_PAGE } from "@/lib/routing";
import styles from "./DashboardShell.module.css";

function DashboardShellContent({ activeNav, children, showChatPanel }) {
    const router = useRouter();
    const pathname = usePathname();
    const { checkNavigationGoal, activeScenario, rightPanelView, pendingNotifications, dismissNotification } = useInstructional();
    const activeScenarioId = activeScenario?.id ?? null;
    const prevScenarioIdRef = useRef(activeScenarioId);

    const handleNavChange = useCallback((navId, options = {}) => {
        checkNavigationGoal(navId);

        let targetRoute = buildDashboardRoute(navId);

        if (options.applicationId !== undefined && options.applicationId !== null) {
            targetRoute = buildApplicationDetailsRoute(options.applicationId);
        } else if (options.appId !== undefined && options.appId !== null) {
            const searchParams = new URLSearchParams();
            searchParams.set("appId", String(options.appId));
            targetRoute = `${targetRoute}?${searchParams.toString()}`;
        }

        router.push(targetRoute);
    }, [checkNavigationGoal, router]);

    const handleSwitchToPortal = useCallback(() => {
        router.push("/");
    }, [router]);

    // When a new ticket is accepted, navigate to the dashboard homepage so the
    // user starts from a clean state (e.g. exits the provisioning wizard).
    useEffect(() => {
        const prev = prevScenarioIdRef.current;
        prevScenarioIdRef.current = activeScenarioId;

        // Only act on the transition from no-scenario → active-scenario
        if (prev || !activeScenarioId) return;

        const homePath = buildDashboardRoute(DEFAULT_DASHBOARD_PAGE);
        if (pathname !== homePath) {
            router.push(homePath);
        }
    }, [activeScenarioId, pathname, router]);

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

            {showChatPanel ? (
                <div className={styles.chatPanelContainer}>
                    <RightPanel />
                </div>
            ) : null}

            <TicketToast
                notifications={pendingNotifications}
                onDismiss={dismissNotification}
                onClickNotification={(notification) => {
                    dismissNotification(notification.id);
                }}
            />
        </div>
    );
}

export default function DashboardShell({ activeNav, children, showChatPanel = true }) {
    return (
        <InstructionalProvider>
            <DataVariantProvider>
                <DashboardShellContent activeNav={activeNav} showChatPanel={showChatPanel}>
                    {children}
                </DashboardShellContent>
            </DataVariantProvider>
        </InstructionalProvider>
    );
}
