"use client";

import { useScenario } from "@/context/ScenarioContext";
import { PageHeader, InfoBanner, FilterBar, DataTable } from "@/components/ui";
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
                    <div className={styles.appIcon}>{row.icon}</div>
                    <div className={styles.appInfo}>
                        <a href="#" className={styles.appName}>{row.name}</a>
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
            />

            <div className={styles.tableContainer}>
                <DataTable columns={columns} data={applications} />
            </div>
        </div>
    );
}
