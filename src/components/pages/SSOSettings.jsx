"use client";

import styles from "./SSOSettings.module.css";
import { useState } from "react";
import { demoDistrict } from "@/data/demoIdentity";

export default function SSOSettings() {
    const [activeTab, setActiveTab] = useState("Access control");

    return (
        <div className={styles.page}>


            <h1 className={styles.title}>SSO settings</h1>

            <div className={styles.contactInfo}>
                <div className={styles.contactLabel}>TECH SUPPORT CONTACT ⓘ</div>
                <div className={styles.contactEmail}>
                    {demoDistrict.techSupportEmail} ✎
                </div>
            </div>

            <div className={styles.tabs}>
                {["Access control", "Login method", "Password Settings", "SSO Policy", "Customize"].map(tab => (
                    <button
                        key={tab}
                        className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ""}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className={styles.content}>
                <h2>Access Control</h2>
                <p className={styles.description}>
                    Configure access dates below to prevent users from logging into the Clever Portal and logging into any learning applications through Clever.
                </p>

                <div className={styles.infoBox}>
                    ⓘ Learn more about <a href="#">access control</a>
                </div>

                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>User Type</th>
                            <th>Access</th>
                            <th>Disable Start</th>
                            <th>Disable End</th>
                        </tr>
                    </thead>
                    <tbody>
                        {["Students", "Teachers", "Staff"].map(type => (
                            <tr key={type}>
                                <td>{type}</td>
                                <td>
                                    <span className={styles.enabledBadge}>Enabled</span>
                                </td>
                                <td>None</td>
                                <td>None</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <button className={styles.editBtn}>Edit</button>
            </div>
        </div>
    );
}
