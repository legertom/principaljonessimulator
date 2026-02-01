"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./ChatPanel.module.css";

const initialMessages = [
    {
        id: 1,
        sender: "customer",
        text: "Hi, I just started as the new Principal at Lincoln Heights Elementary and I've been assigned to manage Clever for our district.",
        timestamp: "2:30 PM",
    },
    {
        id: 2,
        sender: "customer",
        text: "I'm completely lost 😅 I need to add a new teacher to the system but I have no idea where to start. Can you help me?",
        timestamp: "2:31 PM",
    },
];

export default function ChatPanel() {
    const [messages, setMessages] = useState(initialMessages);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const newMessage = {
            id: messages.length + 1,
            sender: "agent",
            text: inputValue,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setMessages([...messages, newMessage]);
        setInputValue("");
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className={styles.chatPanel}>
            {/* Header */}
            <div className={styles.header}>
                <div className={styles.customerInfo}>
                    <div className={styles.avatar}>
                        <span>👩🏽‍💼</span>
                    </div>
                    <div className={styles.customerDetails}>
                        <div className={styles.customerName}>Principal Jones</div>
                        <div className={styles.customerStatus}>
                            <span className={styles.statusDot}></span>
                            Lincoln Heights Elementary
                        </div>
                    </div>
                </div>
                <div className={styles.headerActions}>
                    <span className={styles.badge}>Clever Admin</span>
                </div>
            </div>

            {/* Context Banner */}
            <div className={styles.contextBanner}>
                <div className={styles.contextIcon}>📋</div>
                <div className={styles.contextText}>
                    <strong>Scenario:</strong> Help Principal Jones add a new teacher to the district.
                </div>
            </div>

            {/* Messages */}
            <div className={styles.messages}>
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`${styles.message} ${styles[msg.sender]}`}
                    >
                        {msg.sender === "customer" && (
                            <div className={styles.messageAvatar}>👩🏽‍💼</div>
                        )}
                        <div className={styles.messageBubble}>
                            <div className={styles.messageText}>{msg.text}</div>
                            <div className={styles.messageTime}>{msg.timestamp}</div>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className={styles.inputArea}>
                <div className={styles.inputWrapper}>
                    <textarea
                        className={styles.input}
                        placeholder="Type your response to Principal Jones..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        rows={1}
                    />
                    <button
                        className={styles.sendButton}
                        onClick={handleSend}
                        disabled={!inputValue.trim()}
                    >
                        Send
                    </button>
                </div>
                <div className={styles.inputHint}>
                    Press Enter to send • Shift+Enter for new line
                </div>
            </div>
        </div>
    );
}
