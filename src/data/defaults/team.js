/**
 * Team domain data
 * Extracted from: AdminTeam.jsx
 */

export const teamMembers = [
    {
        id: 1,
        name: "Clever Admin",
        userTypeIcon: "sync",
        email: "admin@clever.com",
        roles: "Clever Admin (Owner)",
        title: "",
        mfaStatus: "Unactivated MFA",
        isOwner: true,
    },
    {
        id: 2,
        name: "Clever Admin",
        userTypeIcon: "manual",
        email: "admin2@clever.com",
        roles: "Clever Admin",
        title: "admin",
        mfaStatus: "Unactivated MFA",
        isOwner: false,
    },
];

export const pageActionsMenu = [
    { label: "Add team member", isHighlighted: true },
    { label: "Create custom role" },
];

export const rowActionsMenu = [
    { label: "Access Portal as user" },
    { label: "Access Dashboard as user" },
];
