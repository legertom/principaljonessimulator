"use client";

import { useState } from "react";
import styles from "./PortalSettings.module.css";

// Icons
const Icons = {
    info: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
    ),
    copy: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
    ),
    user: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
};

export default function PortalSettings() {
    const [activeTab, setActiveTab] = useState("URL");
    const [shortname, setShortname] = useState("print-center");
    const [customizationEnabled, setCustomizationEnabled] = useState(true);

    const tabs = [
        "URL",
        "Customization",
        "Substitute Access",
        "Digital Learning Directory",
        "Teacher Page Settings"
    ];

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Portal settings</h1>

            <div className={styles.tabs}>
                {tabs.map(tab => (
                    <button
                        key={tab}
                        className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ""}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Info Banner */}
            <div className={styles.banner}>
                <span className={styles.bannerIcon}>{Icons.info}</span>
                <span>
                    Learn about setting up a stellar, well-organized portal in this <a href="#" className={styles.link}>Quick Start Guide</a> or learn more in our <a href="#" className={styles.link}>Help Center</a>.
                </span>
            </div>

            {/* URL Content */}
            {activeTab === "URL" && (
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Your Clever Portal URL</h2>

                    <p className={styles.text}>
                        The Clever Portal gives students and teachers SSO into all of their applications, all in one place. You can visit the <a href="#" className={styles.link}>Portal</a> or download login instructions for your teachers and students.
                    </p>
                    <p className={styles.text}>
                        Students and teachers will log in at this URL. Customize it by entering something short and easy to remember, like your district's abbreviation.
                    </p>

                    <div className={styles.urlPreview}>
                        <span>https://clever.com/in/<strong>{shortname}</strong></span>
                        <span className={styles.copyLink}>{Icons.user} Copy Link</span>
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

                    <div style={{ marginTop: '1.5rem', fontSize: '14px', color: '#333' }}>
                        Download <a href="#" className={styles.link}>login instructions</a> for your teachers and students
                    </div>
                </div>
            )}
        </div>
    );
}
