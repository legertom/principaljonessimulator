"use client";

/**
 * Badges page.
 *
 * Live URL: https://schools.clever.com/badges/overview
 * Live title: "Clever | Badges"
 * Sidebar location: Authentication > Badges
 * Live tabs: Overview | Chromebook | Windows | Settings | Badges+
 */

import styles from "./Badges.module.css";
import { useState } from "react";
import { useScenario } from "@/context/ScenarioContext";
import { Tabs, InfoBanner, Icons, DataTable, Pagination, PageHeader } from "@/components/ui";

export default function Badges() {
    const { scenario } = useScenario();
    const badgeData = scenario.badges.data;

    const [activeTab, setActiveTab] = useState("Overview");
    const [currentPage, setCurrentPage] = useState(1);

    const totalNew = badgeData.reduce((sum, row) => sum + row.new, 0);

    const columns = [
        {
            key: "checkbox",
            header: "",
            render: () => <input type="checkbox" checked readOnly />,
        },
        {
            key: "name",
            header: "School name",
            sortable: true,
        },
        {
            key: "downloaded",
            header: "Downloaded Badges",
            sortable: true,
        },
        {
            key: "new",
            header: "New Badges",
            sortable: true,
            render: (row) => <strong>{row.new}</strong>,
        },
        {
            key: "download",
            header: "Download",
            render: () => (
                <>
                    <span className={styles.downloadLink}>{Icons.download} New</span>
                    <span className={styles.separator}>|</span>
                    <span className={styles.downloadLink}>{Icons.download} All</span>
                </>
            ),
        },
        {
            key: "void",
            header: "Void Badges",
            render: () => <span className={styles.voidLink}>{Icons.trash} Void</span>,
        },
    ];

    return (
        <div className={styles.page}>
            <PageHeader
                title="Clever Badges"
                actions={
                    <button className={styles.downloadAllBtn}>Download all Badges</button>
                }
            />

            <div className={styles.metaInfo}>
                <strong>GRADES WITH BADGES</strong>
                <p>Infant/Toddler, Preschool, PreKindergarten, Transitional Kindergarten, Kindergarten, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, Post Graduate</p>
            </div>

            <Tabs
                tabs={["Overview", "Chromebook", "Windows", "Settings", "Badges+"]}
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />

            <InfoBanner variant="info">
                Learn about setting up Badges in our <a href="#">Help Center</a>.
            </InfoBanner>

            <h2 className={styles.sectionTitle}>Downloaded Badges</h2>

            <div className={styles.tableActions}>
                <button className={styles.actionBtn}>{Icons.download} {totalNew} New Badges</button>
                <button className={styles.actionBtn}>{Icons.download} All Badges</button>
                <button className={`${styles.actionBtn} ${styles.voidBtn}`}>{Icons.trash} Void all Badges</button>
                <span className={styles.selectionCount}>{badgeData.length} of {badgeData.length} schools selected</span>
            </div>

            <div className={styles.tableContainer}>
                <DataTable columns={columns} data={badgeData} />
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={1}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}
