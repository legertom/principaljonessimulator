"use client";

import styles from "./Badges.module.css";
import { useState } from "react";
import { Tabs, InfoBanner, Icons } from "@/components/ui";

export default function Badges() {
    const [activeTab, setActiveTab] = useState("Overview");

    const badgeData = [
        { id: 1, name: "City High School", downloaded: 0, new: 1 },
        { id: 2, name: "Pineapple Elementary School", downloaded: 0, new: 6 },
        { id: 3, name: "Rockaway Beach Middle School", downloaded: 0, new: 7 },
    ];

    return (
        <div className={styles.page}>


            <div className={styles.titleRow}>
                <h1 className={styles.title}>Clever Badges</h1>
                <button className={styles.downloadAllBtn}>Download all Badges ▼</button>
            </div>

            <div className={styles.metaInfo}>
                <strong>GRADES WITH BADGES</strong>
                <p>Infant/Toddler, Preschool, PreKindergarten, Transitional Kindergarten, Kindergarten, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, Post Graduate</p>
            </div>

            <Tabs
                tabs={["Overview", "Chromebook", "Windows", "Settings", "Badges+"]}
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />

            <InfoBanner variant="info" icon={Icons.info}>
                Learn about setting up Badges in our <a href="#">Help Center</a>.
            </InfoBanner>

            <h2 className={styles.sectionTitle}>Downloaded Badges</h2>

            <div className={styles.tableActions}>
                <button className={styles.actionBtn}>📥 14 New Badges</button>
                <button className={styles.actionBtn}>📥 All Badges</button>
                <button className={`${styles.actionBtn} ${styles.voidBtn}`}>🗑 Void all Badges</button>
                <span className={styles.selectionCount}>3 of 3 schools selected</span>
            </div>

            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th><input type="checkbox" checked readOnly /></th>
                            <th>School name ↕</th>
                            <th>Downloaded Badges ↕</th>
                            <th>New Badges ❓ ↕</th>
                            <th>Download</th>
                            <th>Void Badges</th>
                        </tr>
                    </thead>
                    <tbody>
                        {badgeData.map(school => (
                            <tr key={school.id}>
                                <td><input type="checkbox" checked readOnly /></td>
                                <td>{school.name}</td>
                                <td>{school.downloaded}</td>
                                <td><strong>{school.new}</strong></td>
                                <td>
                                    <span className={styles.downloadLink}>📥 New</span> <span className={styles.separator}>|</span> <span className={styles.downloadLink}>📥 All</span>
                                </td>
                                <td>
                                    <span className={styles.voidLink}>🗑 Void</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className={styles.pagination}>
                <button className={styles.pageArrow}>←</button>
                <button className={styles.pageNum}>1</button>
                <button className={styles.pageArrow}>→</button>
            </div>
        </div>
    );
}
