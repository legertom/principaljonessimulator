import { demoCustomer } from "@/data/demoIdentity";
import someOtherThing from "../../utils";

export const scenarios = [
    {
        id: "scenario_with_imports",
        title: "Scenario with imported values",
        customerId: demoCustomer.id,
        moduleId: someOtherThing.MODULE_ID,
        steps: [
            {
                id: "step_1",
                type: "task",
                nextStep: "step_2"
            },
            {
                id: "step_2",
                type: "task"
            }
        ]
    }
];
