/**
 * Profile domain data
 * Extracted from: Profile.jsx
 */

export const profileData = {
    firstName: "Tom",
    lastName: "Leger",
    jobTitle: "Dev Dude",
    phoneNumber: "",
    email: "tomleger+printdemo@gmail.com"
};

export const emailPrefs = {
    sync: true,
    syncIssues: false,
    syncPause: true,
    connectedApps: true,
    inviteChanges: true,
    inviteInitiations: false
};

export const emailPreferences = [
    { key: "sync", title: "Sync", description: "Informational updates on the status of your sync" },
    { key: "syncIssues", title: "Sync issues", description: "Errors and hold notices from your sync" },
    { key: "syncPause", title: "Sync pause", description: "Reminders about your district pause settings" },
    { key: "connectedApps", title: "Connected apps", description: "Notifications about changes to your connected apps" },
    { key: "inviteChanges", title: "Requests and invite changes", description: "Notifications about status updates on your application requests and invitations" },
    { key: "inviteInitiations", title: "Requests and invite initiations", description: "Notifications about new invitations from applications" }
];
