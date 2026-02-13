"use client";

import { useState, useRef, useEffect } from "react";
import { useScenario } from "@/context/ScenarioContext";
import styles from "./ChatPanel.module.css";

export default function ChatPanel() {
    const { scenario } = useScenario();
    const { initialMessages: scenarioInitialMessages, customerInfo, scenarioContext } = scenario.chat;

    const [messages, setMessages] = useState(scenarioInitialMessages);
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
                        <span>{customerInfo.avatar}</span>
                    </div>
                    <div className={styles.customerDetails}>
                        <div className={styles.customerName}>{customerInfo.name}</div>
                        <div className={styles.customerStatus}>
                            <span className={styles.statusDot}></span>
                            {customerInfo.school}
                        </div>
                    </div>
                </div>
                <div className={styles.headerActions}>
                    <span className={styles.badge}>{customerInfo.badge}</span>
                </div>
            </div>

            {/* Context Banner */}
            <div className={styles.contextBanner}>
                <div className={styles.contextIcon}>{scenarioContext.icon}</div>
                <div className={styles.contextText}>
                    <strong>Scenario:</strong> {scenarioContext.text}
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
                            <div className={styles.messageAvatar}>{customerInfo.avatar}</div>
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
