"use client";

import { useSelectedLayoutSegments } from "next/navigation";
import DashboardShell from "@/components/layout/DashboardShell";
import { parseDashboardPage } from "@/lib/routing";

export default function DashboardRouteLayout({ children }) {
    const segments = useSelectedLayoutSegments();
    const activeNav = parseDashboardPage(segments[0]);
    return (
        <DashboardShell activeNav={activeNav}>
            {children}
        </DashboardShell>
    );
}
