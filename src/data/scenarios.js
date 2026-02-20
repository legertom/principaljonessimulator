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
