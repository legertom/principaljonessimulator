"use client";

import { useScenario } from "@/context/ScenarioContext";
import { PageHeader, InfoBanner, DataTable } from "@/components/ui";
import styles from "./MyApplications.module.css";

export default function MyApplications() {
    const { scenario } = useScenario();
    const applications = scenario.applications.myApplications;

    const columns = [
        {
            key: "name",
            header: "Name",
            sortable: true,
            render: (row) => (
                <div className={styles.nameCell}>
                    <div
                        className={styles.appIcon}
                        style={{ backgroundColor: row.iconColor }}
                    >
                        {row.icon}
                    </div>
                    <a href="#" className={styles.appName}>{row.name}</a>
                </div>
            ),
        },
        {
            key: "status",
            header: "App Status",
            sortable: true,
            render: (row) => (
                <span
                    className={styles.statusBadge}
                    style={{ backgroundColor: row.statusColor }}
                >
                    {row.status}
                </span>
            ),
        },
        {
            key: "nextStep",
            header: "Next step",
        },
        {
            key: "appType",
            header: "App Type",
            sortable: true,
        },
        {
            key: "totalLogins",
            header: "Total logins last 7 days",
            render: (row) => (
                <span>{row.totalLogins ?? "—"}</span>
            ),
        },
        {
            key: "sharing",
            header: "Sharing",
            sortable: true,
            render: (row) => (
                <a href="#" className={styles.link}>{row.sharing}</a>
            ),
        },
    ];

    return (
        <div className={styles.page}>
            <PageHeader
                title="My applications"
                actions={<button className={styles.addButton}>Add applications</button>}
            />

            <InfoBanner variant="info">
                Learn more about{" "}
                <a href="#" className={styles.link}>types of applications</a> and{" "}
                <a href="#" className={styles.link}>adding applications</a> in our Help Center.
            </InfoBanner>

            <div className={styles.tableContainer}>
                <DataTable columns={columns} data={applications} />
            </div>
        </div>
    );
}
