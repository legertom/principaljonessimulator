"use client";

import { useEffect } from "react";
import { getCustomerInfo } from "@/data/characters";
import styles from "./TicketToast.module.css";

const AUTO_DISMISS_MS = 8000;

export default function TicketToast({ notifications, onDismiss, onClickNotification }) {
    useEffect(() => {
        if (notifications.length === 0) return;
        const timers = notifications.map((n) =>
            setTimeout(() => onDismiss(n.id), AUTO_DISMISS_MS)
        );
        return () => timers.forEach(clearTimeout);
    }, [notifications, onDismiss]);

    if (notifications.length === 0) return null;

    return (
        <div className={styles.container}>
            {notifications.map((notification) => {
                const customer = getCustomerInfo(notification.customerId);
                return (
                    <div
                        key={notification.id}
                        className={styles.toast}
                        onClick={() => onClickNotification?.(notification)}
                        role="button"
                        tabIndex={0}
                    >
                        <div
                            className={styles.avatar}
                            style={{ backgroundColor: customer.avatarColor }}
                        >
                            {customer.avatar}
                        </div>
                        <div className={styles.content}>
                            <div className={styles.toastHeader}>
                                <span className={styles.name}>{customer.name}</span>
                                <span className={styles.badge}>New ticket</span>
                            </div>
                            <p className={styles.subject}>{notification.subject}</p>
                        </div>
                        <button
                            className={styles.closeBtn}
                            onClick={(e) => {
                                e.stopPropagation();
                                onDismiss(notification.id);
                            }}
                            aria-label="Dismiss notification"
                        >
                            &times;
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
