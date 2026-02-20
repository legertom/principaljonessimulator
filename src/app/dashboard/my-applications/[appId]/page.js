"use client";

import { useEffect, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import MyApplicationDetails from "@/components/pages/MyApplicationDetails";
import { useScenario } from "@/context/ScenarioContext";
import {
    buildApplicationDetailsRoute,
    buildDashboardRoute,
    getRouteParamValue,
    parseApplicationId,
} from "@/lib/routing";

export default function MyApplicationDetailsRoute() {
    const params = useParams();
    const router = useRouter();
    const { scenario } = useScenario();
    const applications = scenario.applications?.myApplications;

    const rawAppId = getRouteParamValue(params?.appId);
    const hasRouteParam = rawAppId.trim().length > 0;
    const parsedAppId = useMemo(() => parseApplicationId(rawAppId), [rawAppId]);
    const hasApplications = Array.isArray(applications);

    const selectedApp = useMemo(() => {
        if (parsedAppId === null) {
            return null;
        }

        const appList = Array.isArray(applications) ? applications : [];
        return appList.find((app) => app.id === parsedAppId) ?? null;
    }, [applications, parsedAppId]);

    useEffect(() => {
        if (!hasRouteParam) {
            return;
        }

        if (parsedAppId === null) {
            router.replace(buildDashboardRoute("my-applications"));
            return;
        }

        if (rawAppId !== String(parsedAppId)) {
            router.replace(buildApplicationDetailsRoute(parsedAppId));
            return;
        }

        if (hasApplications && !selectedApp) {
            router.replace(buildDashboardRoute("my-applications"));
        }
    }, [hasApplications, hasRouteParam, parsedAppId, rawAppId, router, selectedApp]);

    if (!hasRouteParam || !selectedApp) {
        return null;
    }

    return <MyApplicationDetails app={selectedApp} />;
}
