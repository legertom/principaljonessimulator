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
            header: "Name ↑",
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
            header: "App Status ↕",
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
            header: "App Type ↕",
        },
        {
            key: "students",
            header: "Students",
            render: (row) => (
                <div className={styles.statGroup}>
                    <span className={styles.statValue}>{row.students}</span>
                    <span className={styles.statLabel}>Students</span>
                </div>
            ),
        },
        {
            key: "teachers",
            header: "Teachers",
            render: (row) => (
                <div className={styles.statGroup}>
                    <span className={styles.statValue}>{row.teachers}</span>
                    <span className={styles.statLabel}>Teachers</span>
                </div>
            ),
        },
        {
            key: "sharing",
            header: "Sharing ↕",
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
