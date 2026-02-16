"use client";

import { PageHeader, InfoBanner } from "@/components/ui";
import styles from "./Troubleshoot.module.css";

export default function TroubleshootLogin() {
    return (
        <div className={styles.page}>
            <PageHeader title="Troubleshoot login" />

            <div className={styles.content}>
                <div className={styles.mainLayout}>
                    <div className={styles.leftPanel}>
                        <h2 className={styles.sectionTitle}>How to use this tool</h2>
                        <p className={styles.sectionDesc}>
                            If a teacher, student, or staff member is having trouble logging into a specific app, use this tool to
                            check for problems that may prevent them from logging in.
                        </p>

                        <InfoBanner variant="info">
                            Check out a <a href="#" className={styles.link}>clickable tutorial</a> of this tool or learn more in our{" "}
                            <a href="#" className={styles.link}>Help Center</a>.
                        </InfoBanner>

                        <div className={styles.formCard}>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Who is having trouble logging in?</label>
                                    <select className={styles.formSelect}>
                                        <option>Clever ID, SIS ID, name, or email</option>
                                    </select>
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Which app are they having trouble logging into?</label>
                                    <select className={styles.formSelect}>
                                        <option>Application name</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.rightPanel}>
                        <div className={styles.summaryCard}>
                            <h3 className={styles.summaryTitle}>Test summary</h3>
                            <ul className={styles.summaryList}>
                                <li>— The user has not logged into Clever in the last 7 days</li>
                                <li>— The app has launched</li>
                                <li>— The user is shared with the app</li>
                                <li>— The user has data quality errors</li>
                                <li>— The user has no data quality warnings</li>
                                <li>— The app supports SSO</li>
                                <li>— The app supports SSO for students</li>
                            </ul>
                        </div>

                        <div className={styles.detailsCard}>
                            <h3 className={styles.detailsTitle}>Details</h3>
                            <div className={styles.detailRow}>
                                <span className={styles.detailLabel}>USER ID</span>
                                <div className={styles.detailValue}>
                                    <span className={styles.dashes}>————————————</span>
                                    <button className={styles.copyBtn}>Copy</button>
                                </div>
                                <a href="#" className={styles.link}>view profile</a>
                            </div>
                            <div className={styles.detailRow}>
                                <span className={styles.detailLabel}>APP ID</span>
                                <div className={styles.detailValue}>
                                    <span className={styles.dashes}>————————————</span>
                                    <button className={styles.copyBtn}>Copy</button>
                                </div>
                                <a href="#" className={styles.link}>view profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
