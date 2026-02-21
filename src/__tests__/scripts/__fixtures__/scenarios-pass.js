export const scenarios = [
    {
        id: "scenario_pass_1",
        title: "Valid Scenario (Strict)",
        steps: [
            { id: "s1", type: "task", nextStep: "s2" }, // 50% task density
            { id: "s2", type: "message", nextStep: "s3" },
            {
                id: "s3",
                type: "input",
                correctAnswer: "foo",
                nextStep: "s4"
            },
            {
                id: "s4",
                type: "checkpoint",
                choices: [
                    { label: "Valid", correct: true, nextStep: "s5" },
                    { label: "Invalid", correct: false, nextStep: "s5", unguidedNextStep: "s5" }
                ]
            },
            { id: "s5", type: "message" }
        ]
    },
    {
        id: "scenario_pass_2",
        title: "Valid Scenario (Low Density - Legacy)",
        steps: [
            { id: "legacy_1", type: "message", nextStep: "legacy_2" },
            { id: "legacy_2", type: "message" }
        ]
    }
];
