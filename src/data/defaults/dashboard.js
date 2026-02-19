/**
 * Dashboard domain data
 * Extracted from: DashboardHome.jsx
 * Matched to live Clever dashboard (ss_683559wx0)
 */

export const dashboardStats = {
    students: 20,
    teachers: 10,
    staff: 10
};

export const sisSync = {
    status: "success",
    statusLabel: "Successful",
    lastSync: "about 4 hours ago",
    message: "Your SIS data has been synced successfully."
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
    appsWithDataShared: 10,
    pendingAppInvites: 1,
    appsWithNoDataShared: 0
};

export const pinnedApplications = [
    {
        name: "Waffle Wizard Academy",
        icon: "WW",
        iconType: "print",
        students: 148,
        teachers: 19
    },
    {
        name: "SnuggleMath",
        icon: "SM",
        iconType: "sso",
        students: 122,
        teachers: 16
    },
    {
        name: "ZapCat Science Lab",
        icon: "ZC",
        iconType: "sso",
        students: 132,
        teachers: 21
    }
];
