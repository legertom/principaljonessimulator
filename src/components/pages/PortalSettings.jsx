"use client";

import { useState } from "react";
import { useScenario } from "@/context/ScenarioContext";
import { Tabs, InfoBanner, Icons, PageHeader } from "@/components/ui";
import styles from "./PortalSettings.module.css";

export default function PortalSettings() {
    const { scenario } = useScenario();
    const { tabs } = scenario.portalSettings;

    const [activeTab, setActiveTab] = useState("URL");
    const [shortname, setShortname] = useState(scenario.portalSettings.shortname);

    return (
        <div className={styles.page}>
            <PageHeader title="Portal settings" />

            <Tabs
                tabs={tabs}
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />

            <div className={styles.content}>
                <InfoBanner variant="info">
                    Learn about setting up a stellar, well-organized portal in this <a href="#" className={styles.link}>Quick Start Guide</a> or learn more in our <a href="#" className={styles.link}>Help Center</a>.
                </InfoBanner>

                {/* URL Content */}
                {activeTab === "URL" && (
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Your Clever Portal URL</h2>

                        <p className={styles.text}>
                            The Clever Portal gives students and teachers SSO into all of their applications, all in one place. You can visit the <a href="#" className={styles.link}>Portal</a> or download login instructions for your teachers and students.
                        </p>
                        <p className={styles.text}>
                            Students and teachers will log in at this URL. Customize it by entering something short and easy to remember, like your district&apos;s abbreviation.
                        </p>

                        <div className={styles.urlPreview}>
                            <span>https://clever.com/in/<strong>{shortname}</strong></span>
                            <span className={styles.copyLink}>{Icons.download} Copy Link</span>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>District Shortname</label>
                            <input
                                type="text"
                                value={shortname}
                                onChange={(e) => setShortname(e.target.value)}
                                className={styles.input}
                            />
                            <p className={styles.helperText}>Your district shortname will be added to the end of your Clever portal URL</p>
                        </div>

                        <button className={styles.updateBtn}>Update</button>

                        <div className={styles.downloadRow}>
                            Download <a href="#" className={styles.link}>login instructions</a> for your teachers and students
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
