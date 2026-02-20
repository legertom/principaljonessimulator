import { demoCustomer } from "@/data/demoIdentity";

/**
 * Training scenarios for the Help Desk Simulator.
 *
 * Each scenario is a sequence of steps that simulate a customer support ticket.
 * Scenarios are grouped into modules via curriculum.js.
 *
 * New optional fields (consumed by the TicketInbox UI):
 *   customerId   — key into CHARACTERS (characters.js)
 *   moduleId     — which curriculum module owns this scenario
 *   ticketSubject — one-line subject shown in the ticket inbox
 *   ticketPriority — "low" | "normal" | "high"
 *   ticketNumber — display number (e.g. 1005 → "#1005")
 */

export const scenarios = [
    // ═══════════════════════════════════════════════════════════════
    //  MODULE 1 — IDM Overview & Navigation
    //  Two scenarios: page orientation + tab exploration
    // ═══════════════════════════════════════════════════════════════

    // ── Scenario 1A: IDM Page Orientation ────────────────────────
    {
        id: "scenario_idm_orientation",
        title: "IDM Page Orientation",
        description: "Help Principal Jones find and understand the IDM page layout.",
        customerId: "principalJones",
        moduleId: "mod_overview",
        ticketSubject: "Where do I find the Google sync settings?",
        ticketPriority: "normal",
        ticketNumber: 1001,
        nextScenario: null,
        settings: {},

        steps: [
            // ── 1. Customer opens the ticket ──────────────────────
            {
                id: "step_orient_intro",
                type: "message",
                text: "Hi! I heard we use Clever IDM for managing Google accounts. Where do I find that in the dashboard?",
                sender: "customer",
                actions: [
                    { label: "Let me pull up the IDM page for you.", nextStep: "step_orient_nav_idm" },
                ],
            },
            // ── 2. Navigate to IDM ───────────────────────────────
            {
                id: "step_orient_nav_idm",
                type: "task",
                text: "Great, I'll wait while you navigate there.",
                sender: "customer",
                goalRoute: "idm",
                nextStep: "step_orient_provider",
                guideMessage: "Navigate to the IDM page under User management.",
                hint: {
                    target: "idm",
                    message: "Click 'IDM' in the sidebar under User management.",
                },
                autoShowHint: true,
            },
            // ── 3. Identify the provider ─────────────────────────
            {
                id: "step_orient_provider",
                type: "message",
                text: "OK, I can see the page. What provider is shown on the provider card?",
                sender: "customer",
                actions: [
                    { label: "Google Workspace", nextStep: "step_orient_status" },
                    { label: "Microsoft Entra ID", nextStep: "step_orient_provider_wrong" },
                    { label: "Both Google and Microsoft", nextStep: "step_orient_provider_wrong" },
                ],
            },
            // ── 3a. Wrong provider branch ────────────────────────
            {
                id: "step_orient_provider_wrong",
                type: "message",
                text: "Hmm, that doesn't look right. Take another look at the provider card — what logo and name do you see?",
                sender: "customer",
                actions: [
                    { label: "Google Workspace", nextStep: "step_orient_status" },
                ],
            },
            // ── 4. Provider card status ──────────────────────────
            {
                id: "step_orient_status",
                type: "input",
                text: "Good — Google Workspace. What status does the provider card show?",
                sender: "customer",
                guideMessage: "Read the status badge on the Google Workspace provider card.",
                correctAnswer: "active",
                matchMode: "includes",
                successStep: "step_orient_last_sync",
                hint: {
                    target: "google-provider-card",
                    message: "Look at the status badges on the provider card.",
                },
                autoShowHint: true,
            },
            // ── 5. Last sync timestamp ───────────────────────────
            {
                id: "step_orient_last_sync",
                type: "input",
                text: "When was the last sync? You should see a timestamp below the provider card.",
                sender: "customer",
                guideMessage: "Find the last sync timestamp displayed below the provider card.",
                correctAnswer: ["02/16/2026", "feb 16", "february 16", "2/16/2026", "feb 16, 2026"],
                matchMode: "oneOf",
                successStep: "step_orient_issues",
                hint: {
                    target: "last-sync-timestamp",
                    message: "Check the sync timestamp text below the provider card.",
                },
                autoShowHint: false,
            },
            // ── 6. Issues count ──────────────────────────────────
            {
                id: "step_orient_issues",
                type: "input",
                text: "How many issues does the provider card show?",
                sender: "customer",
                guideMessage: "Look at the stats row on the provider card for the Issue count.",
                correctAnswer: "1",
                matchMode: "exact",
                successStep: "step_orient_managed",
                hint: {
                    target: "google-provider-card",
                    message: "Check the Issue stat on the provider card.",
                },
                autoShowHint: false,
            },
            // ── 7. Managed users count ───────────────────────────
            {
                id: "step_orient_managed",
                type: "input",
                text: "Last question about the overview — how many Google users is IDM managing? You should see a notification about it.",
                sender: "customer",
                guideMessage: "Find the notification card that mentions how many Google users IDM manages.",
                correctAnswer: "40",
                matchMode: "exact",
                successStep: "step_orient_done",
                hint: {
                    target: "managed-users-notification",
                    message: "Look at the notification card in the Tasks tab.",
                },
                autoShowHint: false,
            },
            // ── 8. Done ──────────────────────────────────────────
            {
                id: "step_orient_done",
                type: "message",
                text: "Now I know where to find IDM and what the provider card tells us. Thanks for the walkthrough!",
                sender: "customer",
                actions: [
                    { label: "You're welcome! Feel free to reach out if you have more questions.", nextStep: null },
                ],
            },
        ],
    },

    // ── Scenario 1B: Exploring IDM Tabs ──────────────────────────
    {
        id: "scenario_idm_tab_exploration",
        title: "Exploring IDM Tabs",
        description: "Help Sarah Chen navigate and understand each IDM tab.",
        customerId: "sarahChen",
        moduleId: "mod_overview",
        ticketSubject: "I need to check our recent sync logs",
        ticketPriority: "normal",
        ticketNumber: 1002,
        nextScenario: null,
        settings: {},

        steps: [
            // ── 1. Customer opens the ticket ──────────────────────
            {
                id: "step_tabs_intro",
                type: "message",
                text: "Hi there! Can you walk me through the IDM tabs? I want to understand what each one shows so I know where to look when troubleshooting.",
                sender: "customer",
                actions: [
                    { label: "Sure, let's start with Sync History.", nextStep: "step_tabs_click_sync" },
                ],
            },
            // ── 2. Click Sync History tab ────────────────────────
            {
                id: "step_tabs_click_sync",
                type: "task",
                text: "Go ahead and click on the Sync History tab.",
                sender: "customer",
                goalAction: "idm-tab-sync-history",
                nextStep: "step_tabs_sync_count",
                guideMessage: "Click the 'Sync History' tab on the IDM page.",
                hint: {
                    message: "Click the 'Sync History' tab near the top of the page.",
                },
                autoShowHint: true,
            },
            // ── 3. Count sync records ────────────────────────────
            {
                id: "step_tabs_sync_count",
                type: "input",
                text: "How many sync records are shown in the table?",
                sender: "customer",
                guideMessage: "Count the number of rows in the Sync History table.",
                correctAnswer: "14",
                matchMode: "exact",
                successStep: "step_tabs_sync_issues",
                hint: {
                    message: "Count all the rows in the Sync History table.",
                },
                autoShowHint: false,
            },
            // ── 4. Issues per sync ───────────────────────────────
            {
                id: "step_tabs_sync_issues",
                type: "input",
                text: "And how many issues does each sync show?",
                sender: "customer",
                guideMessage: "Look at the Issues column in the Sync History table.",
                correctAnswer: "1",
                matchMode: "exact",
                successStep: "step_tabs_click_exports",
                hint: {
                    message: "Check the Issues column — what number appears on each row?",
                },
                autoShowHint: false,
            },
            // ── 5. Click Exports tab ─────────────────────────────
            {
                id: "step_tabs_click_exports",
                type: "task",
                text: "Good. Now let's check the Exports tab.",
                sender: "customer",
                goalAction: "idm-tab-exports",
                nextStep: "step_tabs_exports_sftp",
                guideMessage: "Click the 'Exports' tab.",
                hint: {
                    message: "Click the 'Exports' tab near the top of the page.",
                },
                autoShowHint: true,
            },
            // ── 6. SFTP question ─────────────────────────────────
            {
                id: "step_tabs_exports_sftp",
                type: "message",
                text: "Is there an option for automated export on this tab?",
                sender: "customer",
                actions: [
                    { label: "Yes, there's an SFTP toggle for automated exports.", nextStep: "step_tabs_click_events" },
                    { label: "No, there are no automated export options.", nextStep: "step_tabs_exports_wrong" },
                ],
            },
            // ── 6a. Wrong SFTP answer ────────────────────────────
            {
                id: "step_tabs_exports_wrong",
                type: "message",
                text: "Look more carefully — there should be an SFTP section at the bottom of the Exports tab.",
                sender: "customer",
                actions: [
                    { label: "Yes, I see the SFTP toggle now for enabling automated exports.", nextStep: "step_tabs_click_events" },
                ],
            },
            // ── 7. Click Events tab ──────────────────────────────
            {
                id: "step_tabs_click_events",
                type: "task",
                text: "Last one — open the Events tab.",
                sender: "customer",
                goalAction: "idm-tab-events",
                nextStep: "step_tabs_events_student",
                guideMessage: "Click the 'Events' tab.",
                hint: {
                    message: "Click the 'Events' tab near the top of the page.",
                },
                autoShowHint: true,
            },
            // ── 8. Find first Student event ──────────────────────
            {
                id: "step_tabs_events_student",
                type: "input",
                text: "Find the first Student event in the list. What's the student's name?",
                sender: "customer",
                guideMessage: "Look through the events list for the first entry with a Student user type.",
                correctAnswer: ["janelle rodriguez", "janelle", "rodriguez"],
                matchMode: "oneOf",
                successStep: "step_tabs_done",
                hint: {
                    target: "events-tab-content",
                    message: "Look at the User column — the first two events are Staff and Teacher. Find the Student event after those.",
                },
                autoShowHint: false,
            },
            // ── 9. Done ──────────────────────────────────────────
            {
                id: "step_tabs_done",
                type: "message",
                text: "Great, now I know how to check sync status and find specific events. This will be really helpful for troubleshooting. Thanks!",
                sender: "customer",
                actions: [
                    { label: "Happy to help! The Events tab is great for tracking individual user changes.", nextStep: null },
                ],
            },
        ],
    },

    // ═══════════════════════════════════════════════════════════════
    //  MODULE 3 — Credential Configuration
    //  (legacy scenario, promoted from the original scenario chain)
    // ═══════════════════════════════════════════════════════════════
    {
        id: "scenario_idm_credentials",
        title: "Changing IDM Student Email Format",
        description: `Help ${demoCustomer.title} ${demoCustomer.lastName} change the student email format in Clever IDM from first name + last name to first initial + last name.`,

        // ── New metadata ──
        customerId: "principalJones",
        moduleId: "mod_credentials",
        ticketSubject: "Change student email format to first initial + last name",
        ticketPriority: "normal",
        ticketNumber: 1005,

        // ── Legacy fields cleaned up ──
        nextScenario: null,
        settings: {},

        steps: [
            // ── 1. Customer opens the ticket ──────────────────────────
            {
                id: "step_idm_request",
                type: "message",
                text: "Hi! We need to change how student emails are formatted in Clever IDM. Right now they're set to first name + last name (like rogeliowaelchi@maytonlyceum.com), but we need it changed to first initial + last name (like rwaelchi@maytonlyceum.com). Can you walk me through where to update that?",
                sender: "customer",
                actions: [
                    { label: "Absolutely! Let me pull up the IDM page.", nextStep: "step_nav_idm" },
                    { label: "Sure — do you know where the credential settings are?", nextStep: "step_customer_unsure" }
                ]
            },
            // ── 2. Optional branch: customer doesn't know ────────────
            {
                id: "step_customer_unsure",
                type: "message",
                text: "Not exactly. I think it's somewhere under the Identity Management settings? I remember there's a provisioning setup wizard.",
                sender: "customer",
                actions: [
                    { label: "That's right — it's in the IDM page. Let me go there now.", nextStep: "step_nav_idm" }
                ]
            },
            // ── 3. Navigate to IDM ───────────────────────────────────
            {
                id: "step_nav_idm",
                type: "task",
                text: "Great, I'll wait while you pull that up.",
                sender: "customer",
                goalRoute: "idm",
                nextStep: "step_click_edit_provisioning",
                guideMessage: "Navigate to the 'IDM' page under User management.",
                hint: {
                    target: "idm",
                    message: "Click 'IDM' in the sidebar under User management."
                },
                autoShowHint: true
            },
            // ── 4. Click Edit Google provisioning ────────────────────
            {
                id: "step_click_edit_provisioning",
                type: "task",
                text: "OK, I can see the IDM page. Now we need to get into the provisioning setup to find the credential settings.",
                sender: "customer",
                goalAction: "edit-provisioning",
                nextStep: "step_find_credentials_step",
                guideMessage: "Click the 'Edit Google provisioning' button to open the wizard.",
                hint: {
                    target: "edit-provisioning",
                    message: "Click the 'Edit Google provisioning' button."
                },
                autoShowHint: true
            },
            // ── 5. Identify the credentials step in the wizard ───────
            {
                id: "step_find_credentials_step",
                type: "message",
                text: "I can see the provisioning wizard. Which step do we need to go to for changing the email format?",
                sender: "customer",
                actions: [
                    { label: "Step 4 — 'Set login credentials'", nextStep: "step_nav_to_credentials" },
                    { label: "Step 1 — 'Connect to Google'", nextStep: "step_wrong_step" },
                    { label: "Step 5 — 'Organize OUs'", nextStep: "step_wrong_step" }
                ]
            },
            // ── 5a. Wrong step branch ────────────────────────────────
            {
                id: "step_wrong_step",
                type: "message",
                text: "Hmm, that doesn't sound right for email format changes. Can you check the step list again?",
                sender: "customer",
                actions: [
                    { label: "Sorry — it's actually Step 4, 'Set login credentials'.", nextStep: "step_nav_to_credentials" }
                ]
            },
            // ── 6. Navigate to the credentials step ──────────────────
            {
                id: "step_nav_to_credentials",
                type: "message",
                text: "That's the one! Go ahead and click on that step.",
                sender: "customer",
                actions: [
                    { label: "I'm on the Set login credentials step now.", nextStep: "step_read_current_format" }
                ]
            },
            // ── 7. Identify the current student email format ─────────
            {
                id: "step_read_current_format",
                type: "input",
                text: "OK, I can see the credential cards. What's the current email format shown on the Student credentials card?",
                sender: "customer",
                guideMessage: "Look at the Student credentials card and enter the current email format.",
                correctAnswer: ["{{name.first}}{{name.last}}@maytonlyceum.com", "name.first name.last", "first name last name", "firstname lastname"],
                matchMode: "oneOf",
                successStep: "step_explain_change",
                hint: {
                    target: "email-format-students",
                    message: "Look at the EMAIL field on the Student credentials card."
                },
                autoShowHint: true
            },
            // ── 8. Explain what needs to change ──────────────────────
            {
                id: "step_explain_change",
                type: "message",
                text: "Right, so it's currently using the full first name + last name. We need to change it so it uses just the first initial + last name instead. Where would I click to change the email format for students?",
                sender: "customer",
                actions: [
                    { label: "Click the 'Edit' button on the Student credentials card.", nextStep: "step_confirm_edit_location" },
                    { label: "You'd need to go to the SIS sync page.", nextStep: "step_wrong_location" }
                ]
            },
            // ── 8a. Wrong location branch ────────────────────────────
            {
                id: "step_wrong_location",
                type: "message",
                text: "I don't think SIS sync controls the email format. Isn't there an Edit button right on the credentials card?",
                sender: "customer",
                actions: [
                    { label: "You're right — click 'Edit' on the Student credentials card.", nextStep: "step_confirm_edit_location" }
                ]
            },
            // ── 9. Confirm they know where the format editor is ──────
            {
                id: "step_confirm_edit_location",
                type: "message",
                text: "Got it! And once I click Edit and get to the email config section, I'd click 'Edit your format' to open the format builder where I can change the variables, right?",
                sender: "customer",
                actions: [
                    { label: "Exactly! That opens the format editor where you can rebuild the email pattern.", nextStep: "step_knowledge_check" },
                    { label: "Yes — you can rearrange or replace the format segments there.", nextStep: "step_knowledge_check" }
                ]
            },
            // ── 10. Final knowledge check ────────────────────────────
            {
                id: "step_knowledge_check",
                type: "input",
                text: "Perfect. So just to make sure I understand — using the sample student Rogelio Waelchi, what would their email look like with the new first-initial + last-name format?",
                sender: "customer",
                guideMessage: "What would Rogelio Waelchi's email be with a first-initial + last-name format at maytonlyceum.com?",
                correctAnswer: "rwaelchi@maytonlyceum.com",
                successStep: "step_idm_success",
                hint: {
                    message: "First initial of 'Rogelio' = 'r', last name = 'waelchi', domain = 'maytonlyceum.com' → rwaelchi@maytonlyceum.com"
                },
                autoShowHint: false
            },
            // ── 11. Success ──────────────────────────────────────────
            {
                id: "step_idm_success",
                type: "message",
                text: "That's exactly right — rwaelchi@maytonlyceum.com! Now I know exactly where to go and what the result should look like. Thank you so much for walking me through this!",
                sender: "customer",
                actions: [
                    { label: "You're welcome! Let us know if you need help with the actual format change.", nextStep: null },
                    { label: `Glad I could help, ${demoCustomer.title} ${demoCustomer.lastName}!`, nextStep: null }
                ]
            }
        ]
    }
];
