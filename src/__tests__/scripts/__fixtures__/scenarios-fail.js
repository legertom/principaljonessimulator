export const scenarios = [
    {
        id: "scenario_fail_1",
        title: "Invalid References and missing corrects",
        steps: [
            { id: "s1", type: "message" }, // Missing ID would stop execution entirely, so omitting to test others
            { id: "s2", type: "message", nextStep: "missing_step" },
            {
                id: "s3", type: "checkpoint",
                choices: [
                    { label: "Missing correct bool", nextStep: "s1" }, // missing `correct: true/false`
                    { label: "Missing unguided branch", nextStep: "s1", correct: false }, // should require unguidedNextStep
                    { label: "Missing ref", correct: false } // missing nextStep
                ]
            }
        ]
    },
    {
        title: "Missing Scenario ID",
        steps: []
    }
];
