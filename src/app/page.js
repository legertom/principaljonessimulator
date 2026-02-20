"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import PortalLobby from "@/components/pages/PortalLobby";
import {
    buildApplicationDetailsRoute,
    buildDashboardRoute,
    DEFAULT_DASHBOARD_PAGE
} from "@/lib/routing";

export default function HomePage() {
    const router = useRouter();

    const handleLaunchApp = useCallback((navTarget, options = {}) => {
        if (options.applicationId !== undefined && options.applicationId !== null) {
            router.push(buildApplicationDetailsRoute(options.applicationId));
            return;
        }

        router.push(buildDashboardRoute(navTarget));
    }, [router]);

    const handleEnterDashboard = useCallback(() => {
        router.push(buildDashboardRoute(DEFAULT_DASHBOARD_PAGE));
    }, [router]);

    return <PortalLobby onLaunchApp={handleLaunchApp} onEnterDashboard={handleEnterDashboard} />;
}
