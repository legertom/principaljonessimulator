/**
 * SIS Sync domain data
 * Extracted from: SISSync.jsx
 */

export const SYNC_STATES = {
    OUT_OF_DATE: {
        id: "OUT_OF_DATE",
        badgeText: "Out of date",
        badgeVariant: "warning",
        statusText: "Your authorized applications may have outdated student rosters. Please start another sync to refresh your data.",
        lastSync: "7 months ago",
        bannerVariant: "warning",
        bannerText: "If data is missing or incorrect in Clever, consider downloading the SIS data below and ensuring it's being sent from your SIS to Clever. Learn more about ",
        data: [
            { type: "Schools", existing: 4, created: 0, updated: 0, deleted: 0, errors: 0, hasDownload: true },
            { type: "Students", existing: 14, created: 0, updated: 0, deleted: 0, errors: 0, hasDownload: true },
            { type: "Teachers", existing: 7, created: 0, updated: 0, deleted: 0, errors: 0, hasDownload: true },
            { type: "Sections", existing: 33, created: 0, updated: 0, deleted: 0, errors: 703, hasDownload: true, hasChanges: true },
            { type: "Contacts", existing: 14, created: 0, updated: 0, deleted: 0, errors: 0, hasDownload: false },
            { type: "Courses", existing: 6, created: 0, updated: 0, deleted: 0, errors: 0, hasDownload: false },
            { type: "Terms", existing: 1, created: 0, updated: 0, deleted: 0, errors: 0, hasDownload: false },
            { type: "Staff", existing: 6, created: 0, updated: 0, deleted: 0, errors: 0, hasDownload: true },
            { type: "District Admins", existing: 0, created: 0, updated: 0, deleted: 0, errors: 0, hasDownload: false },
        ]
    },
    SUCCESSFUL: {
        id: "SUCCESSFUL",
        badgeText: "Successful",
        badgeVariant: "success",
        statusText: "Your authorized applications are receiving updated student rosters.",
        lastSync: "4 minutes ago",
        bannerVariant: "info",
        bannerText: "If data is missing or incorrect in Clever, consider downloading the SIS data below and ensuring it's being sent from your SIS to Clever. Learn more about ",
        data: [
            { type: "Schools", existing: 4, created: 3, updated: 0, deleted: 3, errors: 0, hasDownload: true },
            { type: "Students", existing: 14, created: 500, updated: 0, deleted: 14, errors: 0, hasDownload: true },
            { type: "Teachers", existing: 7, created: 25, updated: 0, deleted: 7, errors: 0, hasDownload: true },
            { type: "Sections", existing: 33, created: 50, updated: 0, deleted: 33, errors: 0, hasDownload: true },
            { type: "Contacts", existing: 14, created: 0, updated: 0, deleted: 14, errors: 0, hasDownload: false, hasChanges: true },
            { type: "Courses", existing: 6, created: 50, updated: 0, deleted: 6, errors: 0, hasDownload: false, hasChanges: true },
            { type: "Terms", existing: 1, created: 1, updated: 0, deleted: 1, errors: 0, hasDownload: false, hasChanges: true },
            { type: "Staff", existing: 6, created: 15, updated: 0, deleted: 6, errors: 0, hasDownload: true, hasChanges: true },
            { type: "District Admins", existing: 1, created: 0, updated: 0, deleted: 0, errors: 0, hasDownload: false },
        ]
    }
};

export const syncMetadata = {
    syncType: "SFTP",
    syncManager: "District Administrator"
};
