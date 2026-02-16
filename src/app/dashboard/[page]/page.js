"use client";

import { useEffect, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import IDM from "@/components/pages/IDM";
import PlaceholderPage from "@/components/dashboard/pages/PlaceholderPage";
import { DASHBOARD_PAGE_COMPONENTS } from "@/lib/dashboard-pages";
import {
    buildDashboardRoute,
    buildProvisioningRoute,
    getRouteParamValue,
    parseDashboardPage,
} from "@/lib/routing";

export default function DashboardPageRoute() {
    const params = useParams();
    const router = useRouter();

    const rawPage = getRouteParamValue(params?.page);
    const normalizedPage = useMemo(() => parseDashboardPage(rawPage), [rawPage]);

    useEffect(() => {
        if (rawPage.toLowerCase() !== normalizedPage) {
            router.replace(buildDashboardRoute(normalizedPage));
        }
    }, [normalizedPage, rawPage, router]);

    if (normalizedPage === "idm") {
        return <IDM onEditProvisioning={() => router.push(buildProvisioningRoute(1))} />;
    }

    const PageComponent = DASHBOARD_PAGE_COMPONENTS[normalizedPage];

    if (PageComponent) {
        return <PageComponent />;
    }

    return (
        <PlaceholderPage
            title={normalizedPage.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase())}
            icon="📄"
        />
    );
}
