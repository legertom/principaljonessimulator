/**
 * Dashboard domain data
 * Extracted from: DashboardHome.jsx
 */

export const dashboardStats = {
    students: 14,
    teachers: 7,
    staff: 6
};

export const sisSync = {
    status: "warning",
    statusLabel: "Sync out of date",
    lastSync: "7 months ago",
    message: "Your authorized applications may have outdated student rosters. Please start another sync to refresh your data."
};

export const ssoStatus = {
    status: "success",
    statusLabel: "Operational",
    timeframe: "last 5d",
    studentLogins: "—",
    teacherStaffLogins: "—"
};

export const awaitingAction = {
    count: 0,
    message: "All action items have been addressed."
};

export const applicationStats = {
    appsWithDataShared: 2,
    pendingAppInvites: 0,
    appsWithNoDataShared: 0
};

export const pinnedApplications = [
    {
        name: "Print Center (Dev)",
        icon: "Print",
        iconType: "print",
        students: "—",
        teachers: 0
    },
    {
        name: "SSO Explorer",
        icon: "SSO",
        iconType: "sso",
        students: 0,
        teachers: 0
    }
];
