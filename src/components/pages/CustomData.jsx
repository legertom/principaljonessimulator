"use client";

import styles from "./CustomData.module.css";

export default function CustomData() {
    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <h1 className={styles.title}>Custom data</h1>
                <button className={styles.uploadBtn}>Add custom data</button>
            </div>

            <p className={styles.description}>
                Manually upload CSV files to add fields to your district data that aren&apos;t in your SIS.
            </p>

            <div className={styles.emptyState}>
                <div className={styles.icon}>📁</div>
                <h3>No custom data yet</h3>
                <p>Upload a CSV file to get started adding custom fields to your students, teachers, or sections.</p>
                <div className={styles.actions}>
                    <button className={styles.primaryBtn}>Upload CSV</button>
                    <button className={styles.secondaryBtn}>Download template</button>
                </div>
            </div>
        </div>
    );
}
