/**
 * Team domain data
 * Extracted from: AdminTeam.jsx
 */

export const teamMembers = [
    {
        id: 1,
        name: "Tom Leger",
        nickname: "🖊️",
        email: "tomleger+printdemo@gmail.com",
        roles: "Clever Admin (Owner)",
        title: "Dev Dude",
        mfaStatus: "Unactivated MFA",
        isOwner: true,
    },
    {
        id: 2,
        name: "Jane Smith",
        nickname: "👤",
        email: "detailed-textbook-3790@clever.com",
        roles: "Clever Admin",
        title: "",
        mfaStatus: "Unactivated MFA",
        isOwner: false,
    },
];

export const pageActionsMenu = [
    { label: "Add team member", isHighlighted: true },
    { label: "Create custom role" },
    { label: "Change account owner" },
];

export const rowActionsMenu = [
    { label: "Access Portal as user" },
    { label: "Access Dashboard as user" },
];
