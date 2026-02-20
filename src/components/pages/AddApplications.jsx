"use client";

import Link from "next/link";
import { useScenario } from "@/context/ScenarioContext";
import { PageHeader, InfoBanner, FilterBar, DataTable } from "@/components/ui";
import { buildApplicationDetailsRoute } from "@/lib/routing";
import styles from "./AddApplications.module.css";

export default function AddApplications() {
    const { scenario } = useScenario();
    const applications = scenario.applications.availableApplications;

    const columns = [
        {
            key: "application",
            header: "Application",
            render: (row) => (
                <div className={styles.appCell}>
                    <div
                        className={styles.appIcon}
                        style={{
                            background: row.iconBackground ?? "var(--gray-100)",
                            color: row.iconTextColor ?? "var(--gray-800)",
                        }}
                    >
                        {row.icon}
                    </div>
                    <div className={styles.appInfo}>
                        <Link href={buildApplicationDetailsRoute(row.id)} className={styles.appName}>
                            {row.name}
                        </Link>
                        <span className={styles.appType}>{row.type}</span>
                    </div>
                </div>
            ),
        },
        {
            key: "subjects",
            header: "Subjects",
        },
        {
            key: "description",
            header: "Description",
            render: (row) => (
                <div className={styles.descriptionCell}>{row.description}</div>
            ),
        },
        {
            key: "actions",
            header: "Actions",
            render: () => (
                <a href="#" className={styles.requestLink}>Request App</a>
            ),
        },
    ];

    const filters = [
        {
            label: "APP TYPE",
            options: [{ value: "", label: "All Types" }],
        },
        {
            label: "APP SUBJECT",
            options: [{ value: "", label: "All Subjects" }],
        },
    ];

    return (
        <div className={styles.page}>
            <PageHeader title="Add applications" />

            <InfoBanner variant="info">
                Learn more about{" "}
                <a href="#" className={styles.link}>types of applications</a> and{" "}
                <a href="#" className={styles.link}>adding applications</a> in our Help Center.
            </InfoBanner>

            <FilterBar
                filters={filters}
                searchPlaceholder="SEARCH"
                searchId="app-search-input"
            />

            <div className={styles.tableContainer}>
                <DataTable columns={columns} data={applications} />
            </div>
        </div>
    );
}
