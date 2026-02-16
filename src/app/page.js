"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import PortalLobby from "@/components/pages/PortalLobby";
import { buildDashboardRoute, DEFAULT_DASHBOARD_PAGE } from "@/lib/routing";

export default function HomePage() {
    const router = useRouter();

    const handleLaunchApp = useCallback((navTarget) => {
        router.push(buildDashboardRoute(navTarget));
    }, [router]);

    const handleEnterDashboard = useCallback(() => {
        router.push(buildDashboardRoute(DEFAULT_DASHBOARD_PAGE));
    }, [router]);

    return <PortalLobby onLaunchApp={handleLaunchApp} onEnterDashboard={handleEnterDashboard} />;
}
