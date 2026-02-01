"use client";

import styles from "./PlaceholderPage.module.css";

export default function PlaceholderPage({ title, icon }) {
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.icon}>{icon}</div>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.description}>
                    This page will be built as you provide screenshots of the Clever Dashboard.
                </p>
                <div className={styles.placeholder}>
                    <div className={styles.placeholderBox}></div>
                    <div className={styles.placeholderBox}></div>
                    <div className={styles.placeholderBox}></div>
                </div>
            </div>
        </div>
    );
}
