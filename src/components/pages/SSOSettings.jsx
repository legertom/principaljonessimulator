"use client";

/**
 * SSO Settings page.
 *
 * Live URL: https://schools.clever.com/instant-login/accesscontrol
 * Live title: "Clever | SSO settings"
 * Sidebar location: Authentication > SSO settings
 * Live tabs: Access control | Login method | Password Settings | Customize
 * Note: "SSO Policy" tab does NOT exist on live — removed for parity.
 */

import { useState } from "react";
import { useScenario } from "@/context/ScenarioContext";
import { Tabs, PageHeader, InfoBanner } from "@/components/ui";
import styles from "./SSOSettings.module.css";

export default function SSOSettings() {
    const { scenario } = useScenario();
    const { techSupportContact, accessControlData } = scenario.ssoSettings;

    const [activeTab, setActiveTab] = useState("Access control");

    return (
        <div className={styles.page}>

            <PageHeader
                title="SSO settings"
                actions={
                    <button className={styles.addLoginBtn}>Add Login Method</button>
                }
            />

            <div className={styles.contactInfo}>
                <div className={styles.contactLabel}>TECH SUPPORT CONTACT ⓘ</div>
                <div className={styles.contactEmail}>
                    {techSupportContact} ✎
                </div>
            </div>

            <Tabs
                tabs={["Access control", "Login method", "Password Settings", "Customize"]}
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />

            <div className={styles.content}>
                <h2>Access Control</h2>
                <p className={styles.description}>
                    Configure access dates below to prevent users from logging into the Clever Portal and logging into any learning applications through Clever.
                </p>

                <InfoBanner variant="info">
                    Learn more about <a href="#">access control</a>
                </InfoBanner>

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
