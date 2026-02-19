import { demoCustomer, demoDistrict } from "@/data/demoIdentity";

export const scenarios = [
    {
        id: "scenario_find_district_id",
        title: "Finding District ID",
        description: `Help ${demoCustomer.title} ${demoCustomer.lastName} find the District ID.`,
        nextScenario: "scenario_add_app",
        settings: {
            idmPaidView: true
        },
        steps: [

            {
                id: "step_welcome",
                type: "message",
                text: "Hi! I need to find our District ID for a support ticket. Do you know where it is?",
                sender: "customer",
                actions: [
                    { label: "One moment, I'll find it.", nextStep: "step_nav_data_browser" },
                    { label: "Check the 'Support tools' tab.", nextStep: "step_wrong_support" }
                ]
            },
            {
                id: "step_wrong_support",
                type: "message",
                text: "I looked in Support tools, but I don't see a District ID listed there.",
                sender: "customer",
                actions: [
                    { label: "My apologies. It should be in the Data Browser.", nextStep: "step_nav_data_browser" },
                    { label: "Let me look again.", nextStep: "step_nav_data_browser" }
                ]
            },
            {
                id: "step_nav_data_browser",
                type: "task",
                text: "Thanks, I'll be here.",
                sender: "customer",
                goalRoute: "data-browser",
                nextStep: "step_locate_id",
                guideMessage: "Navigate to the 'Data browser' page",
                hint: {
                    target: "data-browser",
                    message: "Navigate to the 'Data browser' page."
                },
                autoShowHint: true
            },
            {
                id: "step_locate_id",
                type: "input",
                text: null,
                sender: "customer",
                guideMessage: "Enter the District ID to continue",
                correctAnswer: demoDistrict.id,
                successStep: "step_success",
                hint: {
                    target: "district-id-val",
                    message: "It's near the top of the page, labeled 'DISTRICT ID'."
                },
                autoShowHint: true
            },
            {
                id: "step_success",
                type: "message",
                text: "That's exactly right! Thank you for finding that.",
                sender: "customer",
                actions: [
                    { label: "Happy to help!", nextStep: null },
                    { label: `You're welcome, ${demoCustomer.title} ${demoCustomer.lastName}.`, nextStep: null }
                ]
            }
        ]
    },
    {
        id: "scenario_add_app",
        title: "Adding an Application",
        description: `Help ${demoCustomer.title} ${demoCustomer.lastName} add the Waffle Wizard Academy application.`,
        settings: {},
        steps: [
            {
                id: "step_add_app_request",
                type: "message",
                text: "Hi again! My teachers want to start using Waffle Wizard Academy with their students. Can you help me add it to our district?",
                sender: "customer",
                actions: [
                    { label: "Sure! I'll walk you through it.", nextStep: "step_nav_add_apps" },
                    { label: "I know where to find it.", nextStep: "step_direct_answer" }
                ]
            },
            {
                id: "step_direct_answer",
                type: "input",
                text: "Great — what's the name of the page I should go to?",
                sender: "customer",
                guideMessage: "Which page in the dashboard lets you add new applications?",
                correctAnswer: "add applications",
                successStep: "step_nav_add_apps",
                hint: {
                    target: "add-applications",
                    message: "Look under 'Applications' in the sidebar."
                },
                autoShowHint: false
            },
            {
                id: "step_nav_add_apps",
                type: "task",
                text: "OK, let me know when you're on the right page!",
                sender: "customer",
                goalRoute: "add-applications",
                nextStep: "step_find_app",
                guideMessage: "Navigate to 'Add applications' under Applications in the sidebar.",
                hint: {
                    target: "add-applications",
                    message: "Click 'Add applications' in the sidebar under Applications."
                },
                autoShowHint: true
            },
            {
                id: "step_find_app",
                type: "input",
                text: "I can see the app library. Now, what's the name of the app we're looking for?",
                sender: "customer",
                guideMessage: "Type the name of the application to find it.",
                correctAnswer: "waffle wizard academy",
                successStep: "step_add_app_success",
                hint: {
                    target: "app-search-input",
                    message: "Use the search bar to find 'Waffle Wizard Academy'."
                },
                autoShowHint: true
            },
            {
                id: "step_add_app_success",
                type: "message",
                text: "That's the one! Thank you for helping me find and add Waffle Wizard Academy. My teachers will be thrilled!",
                sender: "customer",
                actions: [
                    { label: "Happy to help!", nextStep: null },
                    { label: `You're welcome, ${demoCustomer.title} ${demoCustomer.lastName}.`, nextStep: null }
                ]
            }
        ]
    }
];
