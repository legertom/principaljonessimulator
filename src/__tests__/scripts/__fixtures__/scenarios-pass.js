/**
 * Valid scenarios fixture for lint-scenarios tests.
 * scenario_pass_1: passes all checks including strict density.
 * scenario_pass_2: legacy format (no ticketMessage) with low density — only warns, not errors.
 */
export const scenarios = [
    {
        id: "scenario_pass_1",
        title: "Valid Scenario (Strict)",
        ticketMessage: "This is a new-format scenario",
        steps: [
            { id: "s1", type: "task", nextStep: "s2" },
            { id: "s2", type: "task", nextStep: "s3" },
            { id: "s3", type: "input", correctAnswer: "foo", nextStep: "s4" },
            { id: "s4", type: "checkpoint", choices: [
                { label: "Valid", correct: true, nextStep: "s5" },
                { label: "Invalid", correct: false, nextStep: "s5" }
            ]},
            { id: "s5", type: "observe", question: "What do you see?", correctAnswer: "bar", matchMode: "exact", successStep: null }
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
