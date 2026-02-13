"use client";

import { useState } from "react";
import { useScenario } from "@/context/ScenarioContext";
import { Tabs } from "@/components/ui";
import styles from "./SSOSettings.module.css";

export default function SSOSettings() {
    const { scenario } = useScenario();
    const { techSupportContact, accessControlData } = scenario.ssoSettings;

    const [activeTab, setActiveTab] = useState("Access control");

    return (
        <div className={styles.page}>


            <h1 className={styles.title}>SSO settings</h1>

            <div className={styles.contactInfo}>
                <div className={styles.contactLabel}>TECH SUPPORT CONTACT ⓘ</div>
                <div className={styles.contactEmail}>
                    {techSupportContact} ✎
                </div>
            </div>

            <Tabs
                tabs={["Access control", "Login method", "Password Settings", "SSO Policy", "Customize"]}
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />

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
                        {accessControlData.map(item => (
                            <tr key={item.userType}>
                                <td>{item.userType}</td>
                                <td>
                                    <span className={styles.enabledBadge}>{item.access}</span>
                                </td>
                                <td>{item.disableStart}</td>
                                <td>{item.disableEnd}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <button className={styles.editBtn}>Edit</button>
            </div>
        </div>
    );
}
