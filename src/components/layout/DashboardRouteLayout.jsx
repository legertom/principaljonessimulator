"use client";

import { useSelectedLayoutSegments } from "next/navigation";
import DashboardShell from "@/components/layout/DashboardShell";
import { parseDashboardPage } from "@/lib/routing";

export default function DashboardRouteLayout({ children }) {
    const segments = useSelectedLayoutSegments();
    const activeNav = parseDashboardPage(segments[0]);
    const isProvisioningFlow = segments[0] === "idm" && segments[1] === "provisioning";

    return (
        <DashboardShell activeNav={activeNav} showChatPanel={!isProvisioningFlow}>
            {children}
        </DashboardShell>
    );
}
