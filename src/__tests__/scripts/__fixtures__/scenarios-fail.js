/**
 * Invalid scenarios fixture for lint-scenarios tests.
 * Triggers: broken reference, missing correct boolean, missing navigation, missing ID.
 */
export const scenarios = [
    {
        id: "scenario_fail_1",
        title: "Invalid References and missing corrects",
        steps: [
            { id: "s1", type: "message" },
            { id: "s2", type: "message", nextStep: "missing_step" },
            { id: "s3", type: "checkpoint", choices: [
                { label: "Missing correct bool", nextStep: "s1" },
                { label: "Missing ref", correct: false }
            ]}
        ]
    },
    {
        title: "Missing Scenario ID",
        steps: []
    }
];
