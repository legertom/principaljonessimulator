/**
 * Course and module definitions for the Help Desk Training Simulator.
 *
 * This is the top-level organizational layer that sits above scenarios.
 * It groups scenario IDs into pedagogical modules, defines prerequisites,
 * and provides the boss character's intro/completion messages.
 *
 * DESIGN DECISION — Module 1 covers all four IDM tabs:
 * The tabs (Tasks, Sync History, Exports, Events) show the *output* of IDM —
 * what happened during syncs, what issues exist, what data can be exported.
 * Teaching "reading comprehension" before "writing" gives learners a mental
 * model of what the system *does* before they learn to *configure* it.
 */

export const COURSES = [
    {
        id: "course_idm_fundamentals",
        title: "Clever IDM Fundamentals",
        description: "Master identity management for Google Workspace provisioning",
        modules: [
            // ── Module 1 ──────────────────────────────────────────────
            {
                id: "mod_overview",
                title: "IDM Overview & Navigation",
                description: "Learn the IDM layout, provider card, and all four tabs",
                prerequisites: [],
                scenarioIds: [
                    "scenario_idm_orientation",
                    "scenario_idm_tab_exploration",
                ],
                bossIntro:
                    "Welcome to the team! Your first assignment is the IDM page. Cedar Ridge SD uses Google Workspace provisioning — you'll spend a lot of time here. Start by learning the layout: the provider card, the four tabs, and what kind of info each one shows.",
                bossCompletion:
                    "Solid work. You've got a good handle on the IDM page layout. Next up: the provisioning wizard.",
            },

            // ── Module 2 ──────────────────────────────────────────────
            {
                id: "mod_provisioning_basics",
                title: "Provisioning Wizard Basics",
                description: "Navigate the 8-step wizard and understand its structure",
                prerequisites: ["mod_overview"],
                scenarioIds: [
                    "scenario_wizard_navigation",
                    "scenario_wizard_concepts",
                ],
                bossIntro:
                    "Time to learn the provisioning wizard. Districts set up Google provisioning through an 8-step process. Your job is to know what each step does and how to move between them.",
                bossCompletion:
                    "You can now walk any admin through the wizard structure. Ready for credentials.",
            },

            // ── Module 3 ──────────────────────────────────────────────
            {
                id: "mod_credentials",
                title: "Credential Configuration",
                description: "Read and build email formats, understand SIS variables",
                prerequisites: ["mod_provisioning_basics"],
                scenarioIds: [
                    "scenario_idm_credentials",      // legacy scenario, promoted
                    "scenario_credential_building",
                ],
                bossIntro:
                    "Credentials are one of the most common support requests. You'll need to read email formats, understand SIS variables, and help districts build new patterns.",
                bossCompletion:
                    "Credentials done — that's one of the trickiest parts. OU management is next.",
            },

            // ── Module 4 ──────────────────────────────────────────────
            {
                id: "mod_ou_management",
                title: "OU Organization",
                description: "Google OU trees, sub-OU formats, archive and ignored OU policies",
                prerequisites: ["mod_credentials"],
                scenarioIds: [
                    "scenario_ou_navigation",
                    "scenario_ou_configuration",
                ],
                bossIntro:
                    "OUs — Organizational Units — control how Google organizes user accounts. You need to understand the tree structure, how Clever maps users into OUs, and the archive/ignored OU policies.",
                bossCompletion:
                    "OU management is the most complex part of IDM setup, and you've got it down. Two more modules to go.",
            },

            // ── Module 5 ──────────────────────────────────────────────
            {
                id: "mod_groups",
                title: "Group Configuration",
                description: "Google Groups selection and membership rules",
                prerequisites: ["mod_ou_management"],
                scenarioIds: [
                    "scenario_group_setup",
                ],
                bossIntro:
                    "Google Groups automate email lists and access controls. IDM can manage memberships automatically. This is a shorter module — focus on understanding group types and rules.",
                bossCompletion:
                    "Groups done. One final module: review and provisioning.",
            },

            // ── Module 6 ──────────────────────────────────────────────
            {
                id: "mod_review_provision",
                title: "Review & Provisioning",
                description: "Summary review, preview stats, provisioning, and sync management",
                prerequisites: ["mod_groups"],
                scenarioIds: [
                    "scenario_review_provision",
                    "scenario_sync_management",
                ],
                bossIntro:
                    "This is the final step before changes go live. You'll learn to review configs, read preview stats, and manage sync pause/resume. This is where careful attention matters most.",
                bossCompletion:
                    "Congratulations — you've completed IDM Fundamentals! You're now certified to handle IDM tickets independently.",
            },
        ],
    },
];

/**
 * Flat lookup: scenarioId → module object.
 * Built once at import time for O(1) lookups.
 */
export const SCENARIO_TO_MODULE = {};
for (const course of COURSES) {
    for (const mod of course.modules) {
        for (const scenarioId of mod.scenarioIds) {
            SCENARIO_TO_MODULE[scenarioId] = mod;
        }
    }
}

/**
 * Flat list of all module IDs in order, for progress tracking.
 */
export const MODULE_ORDER = COURSES.flatMap(c => c.modules.map(m => m.id));
