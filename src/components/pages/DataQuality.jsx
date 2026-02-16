"use client";

import { PageHeader, InfoBanner } from "@/components/ui";
import styles from "./DataQuality.module.css";

export default function DataQuality() {
    return (
        <div className={styles.page}>
            <PageHeader title="Data quality" />

            <div className={styles.content}>
                <InfoBanner variant="info">
                    This page reports any data quality issues that may affect application performance. Learn more in our{" "}
                    <a href="#" className={styles.link}>Help Center</a>.
                </InfoBanner>

                <p className={styles.description}>
                    These are the issues that are impacting the most users in your district
                </p>

                <div className={styles.successCard}>
                    <div className={styles.successIcon}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                    </div>
                    <div>
                        <strong>No data issues</strong>
                        <p className={styles.successText}>You have no data issues currently. Nice work!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
