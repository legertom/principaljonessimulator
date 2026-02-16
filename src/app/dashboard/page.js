import { redirect } from "next/navigation";
import { buildDashboardRoute, DEFAULT_DASHBOARD_PAGE } from "@/lib/routing";

export default function DashboardRootPage() {
    redirect(buildDashboardRoute(DEFAULT_DASHBOARD_PAGE));
}
