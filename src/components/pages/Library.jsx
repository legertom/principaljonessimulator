"use client";

import { useState } from "react";
import styles from "./Library.module.css";

// Tab components
function OverviewTab() {
    return (
        <div className={styles.tabContent}>
            <p className={styles.description}>
                The Clever Library is a place for teachers to find and add new resources to their Clever Portal
            </p>

            {/* Library Preview Card */}
            <div className={styles.previewCard}>
                <div className={styles.previewHeader}>
                    <span className={styles.previewLogo}>Clever</span>
                    <span className={styles.previewTitle}>Library</span>
                    <div className={styles.previewSearch}>
                        <span className={styles.toggles}>○ ○</span>
                        <span className={styles.searchIcon}>🔍</span>
                    </div>
                </div>
                <div className={styles.previewApps}>
                    <div className={styles.previewApp}>
                        <div className={`${styles.appIcon} ${styles.edmodo}`}>👓</div>
                        <span className={styles.appName}>Edmodo</span>
                        <button className={styles.addBtn}>ADD TO PORTAL</button>
                    </div>
                    <div className={styles.previewApp}>
                        <div className={`${styles.appIcon} ${styles.codeorg}`}>CODE</div>
                        <span className={styles.appName}>Code.org</span>
                        <button className={styles.addBtn}>ADD TO PORTAL</button>
                    </div>
                    <div className={styles.previewApp}>
                        <div className={`${styles.appIcon} ${styles.newsela}`}>N</div>
                        <span className={styles.appName}>Newsela</span>
                        <button className={styles.addBtn}>ADD TO PORTAL</button>
                    </div>
                </div>
                <div className={styles.browseSubjects}>
                    <span className={styles.browseLabel}>Browse subjects</span>
                    <div className={styles.subjectTags}>
                        <span className={`${styles.tag} ${styles.english}`}>English</span>
                        <span className={`${styles.tag} ${styles.tech}`}>Tech</span>
                        <span className={`${styles.tag} ${styles.math}`}>Math</span>
                        <span className={`${styles.tag} ${styles.science}`}>Science</span>
                        <span className={`${styles.tag} ${styles.other}`}>Other</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SettingsTab() {
    return (
        <div className={styles.tabContent}>
            <h3 className={styles.settingsTitle}>Library Settings</h3>
            <p className={styles.description}>Configure library settings for your district.</p>
            <div className={styles.settingRow}>
                <label className={styles.settingLabel}>
                    <input type="checkbox" defaultChecked />
                    <span>Allow teachers to add apps from the Library</span>
                </label>
            </div>
            <div className={styles.settingRow}>
                <label className={styles.settingLabel}>
                    <input type="checkbox" defaultChecked />
                    <span>Show recommended apps in teacher portal</span>
                </label>
            </div>
        </div>
    );
}

function ApplicationsTab() {
    const apps = [
        { name: "ABCmouse for Teachers", grades: "Elementary", subjects: "ELA & ELL, Math, Science, Social Studies", status: "Allowed" },
        { name: "CodeMonkey", grades: "Elementary, Middle", subjects: "Technology & 21st Century Skills", status: "Allowed" },
        { name: "GradeCam", grades: "Elementary, Staff, Middle, High School", subjects: "Technology & 21st Century Skills, Assessment & Grading", status: "Allowed" },
        { name: "Formative", grades: "Elementary, Middle, High School", subjects: "ELA & ELL, Math, Science, Social Studies, Assessment & Gradi...", status: "Allowed" },
        { name: "CodeHS", grades: "Middle, High School", subjects: "Technology & 21st Century Skills", status: "Allowed" },
        { name: "Book Creator", grades: "Elementary, Middle, High School", subjects: "ELA & ELL, Content Creation & Portfolios", status: "Allowed" },
        { name: "Code.org", grades: "Elementary, Middle, High School", subjects: "Technology & 21st Century Skills", status: "Allowed" },
        { name: "Geogebra", grades: "Elementary, Middle, High School", subjects: "Math, Science", status: "Allowed" },
    ];

    return (
        <div className={styles.tabContent}>
            <div className={styles.blockHeader}>
                <h3 className={styles.blockTitle}>Block specific Library applications</h3>
                <p className={styles.blockDescription}>
                    Search for a specific Library application to block. By blocking an app, it will be inaccessible to teachers and students through Clever, though this does not prevent them from visiting those websites directly.
                </p>
            </div>

            <div className={styles.tableCard}>
                <div className={styles.tableHeader}>
                    <input type="text" placeholder="Search" className={styles.tableSearch} />
                </div>

                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th><input type="checkbox" /></th>
                            <th>Application Name ↕</th>
                            <th>Grades</th>
                            <th>Subjects</th>
                            <th>Status ↕</th>
                            <th>Actions</th>
                            <th>Teacher Installs</th>
                        </tr>
                    </thead>
                    <tbody>
                        {apps.map((app, i) => (
                            <tr key={i}>
                                <td><input type="checkbox" /></td>
                                <td>
                                    <div className={styles.appCellContent}>
                                        <div className={styles.appIconSmall}>📱</div>
                                        <a href="#" className={styles.link}>{app.name}</a>
                                    </div>
                                </td>
                                <td>{app.grades}</td>
                                <td className={styles.subjectsCell}>{app.subjects}</td>
                                <td><span className={styles.allowedBadge}>{app.status}</span></td>
                                <td><a href="#" className={styles.blockLink}>Block</a></td>
                                <td>—</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className={styles.tableFooter}>
                    <select className={styles.rowsSelect}>
                        <option>Show 8 rows</option>
                    </select>
                    <div className={styles.pagination}>
                        <button className={styles.pageBtn}>←</button>
                        <button className={`${styles.pageBtn} ${styles.active}`}>1</button>
                        <button className={styles.pageBtn}>2</button>
                        <button className={styles.pageBtn}>3</button>
                        <button className={styles.pageBtn}>4</button>
                        <button className={styles.pageBtn}>5</button>
                        <span>...</span>
                        <button className={styles.pageBtn}>47</button>
                        <button className={styles.pageBtn}>→</button>
                    </div>
                </div>
            </div>

            <button className={styles.exportBtn}>Export teacher install data</button>
        </div>
    );
}

function RecommendedTab() {
    return (
        <div className={styles.tabContent}>
            <h3 className={styles.recommendTitle}>Recommend a resource</h3>
            <p className={styles.description}>
                Give teachers visibility into district approved apps by adding them to your recommended list.
            </p>

            <div className={styles.searchSection}>
                <label className={styles.searchLabel}>Search resources by name</label>
                <input type="text" placeholder="Search resources by name" className={styles.recommendSearch} />
            </div>

            <div className={styles.emptyState}>
                <h4>No recommendations yet</h4>
                <p>Search for a resource name to make your first recommendation.</p>
            </div>
        </div>
    );
}

export default function Library() {
    const [activeTab, setActiveTab] = useState("overview");

    const tabs = [
        { id: "overview", label: "Overview" },
        { id: "settings", label: "Settings" },
        { id: "applications", label: "Applications" },
        { id: "recommended", label: "Recommended" },
    ];

    return (
        <div className={styles.page}>
            {/* Page Header */}
            <div className={styles.header}>
                <h1 className={styles.title}>Library</h1>
                <div className={styles.tabs}>
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`${styles.tab} ${activeTab === tab.id ? styles.activeTab : ""}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content */}
            {activeTab === "overview" && <OverviewTab />}
            {activeTab === "settings" && <SettingsTab />}
            {activeTab === "applications" && <ApplicationsTab />}
            {activeTab === "recommended" && <RecommendedTab />}
        </div>
    );
}
