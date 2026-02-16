"use client";

import { PageHeader } from "@/components/ui";
import styles from "./Reports.module.css";

export default function Reports() {
    return (
        <div className={styles.page}>
            <PageHeader title="Reports to measure edtech participation" />

            <div className={styles.content}>
                <p className={styles.description}>
                    District administrators can download per-user, daily reports for resources accessed through Clever.
                    These reports help you measure participation for every student in the district and understand
                    day-to-day historical trends. You can also share them with your colleagues - like curriculum and
                    instruction, or staff at individual schools. For more information, visit our{" "}
                    <a href="#" className={styles.link}>help desk</a>.
                </p>

                <div className={styles.signupCard}>
                    <h2 className={styles.signupTitle}>Sign up to enable reports</h2>

                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>District timezone</label>
                        <select className={styles.formSelect}>
                            <option>Eastern Time</option>
                            <option>Central Time</option>
                            <option>Mountain Time</option>
                            <option>Pacific Time</option>
                        </select>
                        <p className={styles.formHint}>We automatically generate reports at midnight in your respective time zone.</p>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Additional user emails to notify when reports are ready</label>
                        <label className={styles.formSubLabel}>User email</label>
                        <input className={styles.formInput} type="email" placeholder="" />
                        <p className={styles.formHint}>Curriculum leaders and chief academic officers often find these reports useful!</p>
                        <button className={styles.addEmailButton}>Add email</button>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Tools currently used for remote attendance</label>
                        <input className={styles.formInput} type="text" placeholder="" />
                        <p className={styles.formHint}>e.g. InfiniteCampus, MS Data Studio. Sharing this information helps us evaluate potential integration opportunities.</p>
                    </div>

                    <div className={styles.formActions}>
                        <button className={styles.signupButton}>Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
