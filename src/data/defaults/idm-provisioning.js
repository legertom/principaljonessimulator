/**
 * Deterministic mock data for the Google Provisioning Setup wizard.
 * Models the 8-step wizard flow matching live Clever IDM.
 */

export const WIZARD_STEPS = [
    { id: "connect", label: "Connect to Google", number: 1 },
    { id: "management-level", label: "Select your IDM Management Level", number: 2 },
    { id: "users", label: "Select users", number: 3 },
    { id: "credentials", label: "Set login credentials", number: 4 },
    { id: "ous", label: "Organize OUs", number: 5 },
    { id: "groups", label: "Configure groups", number: 6 },
    { id: "summary", label: "Summary", number: 7 },
    { id: "preview", label: "Preview and provision", number: 8 },
];

/** Default wizard state — represents a fully-configured provisioning setup */
export const DEFAULT_PROVISIONING_STATE = {
    /* Step 1 — Connect to Google */
    googleConnected: true,

    /* Step 2 — Management Level */
    managementLevel: "full", // "full" | "password-only"
    transitionMode: false,

    /* Step 3 — Select Users */
    provisionStudents: true,
    provisionTeachers: true,
    provisionStaff: true,
    studentCount: 20,
    teacherCount: 10,
    staffCount: 10,

    /* Step 4 — Login Credentials */
    credentials: {
        students: {
            completed: true,
            email: "{{name.first}}{{name.last}}@maytonlyceum.com",
            password: "{{student.student_number}}{{student.grade}}{{school.sis_id}}",
            domain: "maytonlyceum.com",
            emailTokens: ["{{name.first}}", "{{name.last}}"],
        },
        teachers: {
            completed: true,
            email: "{{name.first}}{{name.last}}@maytonlyceum.com",
            password: "{{teacher.teacher_number}}0420",
            domain: "maytonlyceum.com",
            emailTokens: ["{{name.first}}", "{{name.last}}"],
        },
        staff: {
            completed: true,
            email: "{{name.first}}{{name.last}}@maytonlyceum.com",
            password: "{{staff.title}}{{school.sis_id}}",
            domain: "maytonlyceum.com",
            emailTokens: ["{{name.first}}", "{{name.last}}"],
        },
    },

    /* Step 5 — Organize OUs */
    ous: {
        students: { completed: true, path: "/Students/{{school_name}}/{{student.grade}}" },
        teachers: { completed: true, path: "/Users/Staff/Teachers" },
        staff:    { completed: true, path: "/Users/Staff/{{staff.department}}" },
        archive:  { completed: true, path: "/" },
        ignored:  { completed: true, path: "/" },
    },

    /* Step 6 — Configure Groups */
    groups: {
        students: { rulesConfigured: 0 },
        teachers: { rulesConfigured: 0 },
        staff:    { rulesConfigured: 0 },
    },

    /* Step 8 — Preview */
    preview: {
        lastRun: "3 months ago",
        accountsToCreate: 1,
        accountsToUpdate: 0,
        accountsToArchive: 0,
        syncIssues: 0,
        details: [
            { action: "Matched",       detail: "0 Clever accounts will be matched with Google accounts.",    nextSteps: "-" },
            { action: "Creates",       detail: "1 Google account will be created based on Clever data.",     nextSteps: "-" },
            { action: "Total Updates", detail: "0 Google accounts will be updated based on Clever data.",    nextSteps: "-" },
            { action: "Archives",      detail: "0 Google accounts will be suspended and moved to an archive OU since the users are no longer present in Clever data.", nextSteps: "-" },
            { action: "Total Issues",  detail: "There will be 0 issues.",                                   nextSteps: "-" },
            { action: "Conflicts",     detail: "0 accounts will not be created or matched because of conflicts. Conflicts happen when Clever IDM is attempting to create or match a user, but their email address is already taken by another Clever IDM user.", nextSteps: "-" },
        ],
    },
};

/** Sample student for credential preview */
export const SAMPLE_STUDENT = {
    name: "Rogelio Waelchi",
    sisEmail: "rogelio_waelchi63@maytonlyceum.com",
    sisId: "b8452e96-7f29-4890-bde9-beb2996bee71",
    districtUsername: "",
    districtPassword: "",
    graduationYear: "2031",
    birthday: "05/12/2013",
    stateId: "XVLLJSDS8AUP",
    studentNumber: "000001",
    exampleEmail: "rogeliowaelchi@maytonlyceum.com",
};

export const SAMPLE_TEACHER = {
    name: "Sarah Johnson",
    sisEmail: "sarah.johnson@maytonlyceum.com",
    sisId: "a1234567-89ab-cdef-0123-456789abcdef",
    teacherNumber: "T001",
    exampleEmail: "sarah.johnson@maytonlyceum.com",
};

export const SAMPLE_STAFF = {
    name: "Michael Brown",
    sisEmail: "michael.brown@maytonlyceum.com",
    sisId: "b2345678-90ab-cdef-1234-567890abcdef",
    title: "Counselor",
    exampleEmail: "michael.brown@maytonlyceum.com",
};
