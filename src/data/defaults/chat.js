/**
 * Chat domain data
 * Extracted from: ChatPanel.jsx
 */

export const initialMessages = [
    {
        id: 1,
        sender: "customer",
        text: "Hi, I just started as the new Principal at Cedar Ridge Elementary and I've been assigned to manage Clever for our district.",
        timestamp: "2:30 PM",
    },
    {
        id: 2,
        sender: "customer",
        text: "I'm completely lost 😅 I need to add a new teacher to the system but I have no idea where to start. Can you help me?",
        timestamp: "2:31 PM",
    },
];

export const customerInfo = {
    name: "District Admin",
    avatar: "👩🏽‍💼",
    school: "Cedar Ridge Elementary",
    badge: "Clever Admin"
};

export const scenarioContext = {
    icon: "📋",
    text: "Help District Admin add a new teacher to the district."
};
