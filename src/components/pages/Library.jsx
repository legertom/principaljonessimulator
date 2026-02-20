"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useScenario } from "@/context/ScenarioContext";
import { buildApplicationDetailsRoute, buildDashboardRoute } from "@/lib/routing";
import { Tabs, DataTable, Pagination, Icons } from "@/components/ui";
import styles from "./Library.module.css";

// Tab components
function OverviewTab() {
    const { scenario } = useScenario();
    const appIdByName = useMemo(() => {
        const entries = scenario.applications?.myApplications ?? [];
        return new Map(entries.map((app) => [app.name, app.id]));
    }, [scenario.applications]);
    const getAppHref = (name) => (
        appIdByName.has(name)
            ? buildApplicationDetailsRoute(appIdByName.get(name))
            : buildDashboardRoute("my-applications")
    );

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
                        <span className={styles.searchIconWrap}>{Icons.search}</span>
                    </div>
                </div>
                <div className={styles.previewApps}>
                    <div className={styles.previewApp}>
                        <div className={`${styles.appIcon} ${styles.edmodo}`}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="12" r="6" fill="white"/><circle cx="12" cy="11" r="2" fill="#4a90d9"/><circle cx="20" cy="11" r="2" fill="#4a90d9"/><path d="M12 16c0 2 2 4 4 4s4-2 4-4" stroke="white" strokeWidth="1.5" fill="none"/></svg>
                        </div>
                        <Link href={getAppHref("Waffle Wizard Academy")} className={styles.appName}>
                            Waffle Wizard Academy
                        </Link>
                        <button className={styles.addBtn}>ADD TO PORTAL</button>
                    </div>
                    <div className={styles.previewApp}>
                        <div className={`${styles.appIcon} ${styles.codeorg}`}>GG</div>
                        <Link href={getAppHref("GiggleGlyphs")} className={styles.appName}>
                            GiggleGlyphs
                        </Link>
                        <button className={styles.addBtn}>ADD TO PORTAL</button>
                    </div>
                    <div className={styles.previewApp}>
                        <div className={`${styles.appIcon} ${styles.newsela}`}>N</div>
                        <Link href={getAppHref("NoodleNook Notes")} className={styles.appName}>
                            NoodleNook Notes
                        </Link>
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
    const [libraryEnabled, setLibraryEnabled] = useState(true);

    return (
        <div className={styles.tabContent}>
            <div className={styles.settingsCard}>
                <div className={styles.settingsCardHeader}>
                    Clever Library Access
                </div>
                <div className={styles.settingsCardContent}>
                    <div className={styles.settingsDescription}>
                        <p>To prevent your teachers from accessing the Clever Library, you may toggle the feature off.</p>
                        <a href="#" className={styles.link}>Learn more about the Clever Library</a>
                    </div>
                    <label className={styles.toggleLabel}>
                        <input
                            type="checkbox"
                            className={styles.toggleInput}
                            checked={libraryEnabled}
                            onChange={(e) => setLibraryEnabled(e.target.checked)}
                        />
                        <span className={styles.toggleSlider} />
                    </label>
                </div>
            </div>
        </div>
    );
}

function ApplicationsTab() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 47;
    const { scenario } = useScenario();
    const appIdByName = useMemo(() => {
        const entries = scenario.applications?.myApplications ?? [];
        return new Map(entries.map((app) => [app.name, app.id]));
    }, [scenario.applications]);
    const getAppHref = (name) => (
        appIdByName.has(name)
            ? buildApplicationDetailsRoute(appIdByName.get(name))
            : buildDashboardRoute("my-applications")
    );

    const apps = [
        { name: "Waffle Wizard Academy", grades: "Elementary, Middle", subjects: "Math, SEL", status: "Allowed" },
        { name: "SnuggleMath", grades: "Elementary", subjects: "Math", status: "Allowed" },
        { name: "Captain Crayon Quest", grades: "Elementary, Middle", subjects: "ELA, Creativity", status: "Allowed" },
        { name: "Bumblebook Buddy", grades: "Elementary", subjects: "Reading, ELA", status: "Allowed" },
        { name: "ZapCat Science Lab", grades: "Elementary, Middle", subjects: "Science, STEM", status: "Allowed" },
        { name: "NoodleNook Notes", grades: "Middle, High School", subjects: "Study Skills", status: "Allowed" },
        { name: "GiggleGlyphs", grades: "Elementary, Middle", subjects: "Language", status: "Allowed" },
        { name: "Marshmallow Metrics", grades: "Elementary, Middle, High School", subjects: "Math, Data", status: "Allowed" },
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

                <DataTable
                    columns={[
                        {
                            key: "name",
                            header: "Application Name",
                            sortable: true,
                            render: (row) => (
                                <div className={styles.appCellContent}>
                                    <div className={styles.appIconSmall}>{Icons.applications}</div>
                                    <Link href={getAppHref(row.name)} className={styles.link}>
                                        {row.name}
                                    </Link>
                                </div>
                            )
                        },
                        {
                            key: "grades",
                            header: "Grades",
                        },
                        {
                            key: "subjects",
                            header: "Subjects",
                            render: (row) => <span className={styles.subjectsCell}>{row.subjects}</span>
                        },
                        {
                            key: "status",
                            header: "Status",
                            sortable: true,
                            render: (row) => <span className={styles.allowedBadge}>{row.status}</span>
                        },
                        {
                            key: "actions",
                            header: "Actions",
                            render: () => <a href="#" className={styles.blockLink}>Block</a>
                        },
                        {
                            key: "installs",
                            header: "Teacher Installs",
                            render: () => "—"
                        }
                    ]}
                    data={apps}
                    selectable
                />

                <div className={styles.tableFooter}>
                    <select className={styles.rowsSelect}>
                        <option>Show 8 rows</option>
                    </select>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
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
                <Tabs
                    tabs={tabs}
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                />
            </div>

            {/* Tab Content */}
            {activeTab === "overview" && <OverviewTab />}
            {activeTab === "settings" && <SettingsTab />}
            {activeTab === "applications" && <ApplicationsTab />}
            {activeTab === "recommended" && <RecommendedTab />}
        </div>
    );
}
