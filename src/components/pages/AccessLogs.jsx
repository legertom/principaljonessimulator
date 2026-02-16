"use client";

import { useState } from "react";
import { useScenario } from "@/context/ScenarioContext";
import { PageHeader, InfoBanner, DataTable, Pagination } from "@/components/ui";
import styles from "./AccessLogs.module.css";

export default function AccessLogs() {
    const { scenario } = useScenario();
    const accessData = scenario.accessLogs.data;
    const [currentPage, setCurrentPage] = useState(1);

    const columns = [
        {
            key: "expand",
            header: "",
            render: () => (
                <button className={styles.expandBtn}>&#9662;</button>
            ),
        },
        {
            key: "statusTime",
            header: "Status and time",
            render: (row) => (
                <span className={styles.statusCell}>
                    <span className={styles.successIcon}>&#10004;</span>
                    {row.statusTime}
                </span>
            ),
        },
        {
            key: "finalAction",
            header: "Final action",
        },
        {
            key: "userName",
            header: "User name",
        },
        {
            key: "userType",
            header: "User type",
        },
        {
            key: "ipAddress",
            header: "IP address",
        },
    ];

    return (
        <div className={styles.page}>
            <PageHeader title="Access logs" />

            <InfoBanner variant="info">
                Discover how to make the most of your{" "}
                <a href="#">Access Logs here</a>.
            </InfoBanner>

            <div className={styles.summaryCards}>
                <div className={styles.card}>
                    <h3>Successful logins (last 5 days)</h3>
                    <div className={styles.bigNumber}>{accessData.length}</div>
                </div>
                <div className={styles.card}>
                    <h3>Failed logins (last 5 days)</h3>
                    <div className={styles.bigNumber}>0</div>
                </div>
            </div>

            <div className={styles.filters}>
                <div className={styles.dateFilter}>
                    <label>From</label>
                    <input type="date" className={styles.dateInput} defaultValue="2026-02-10" />
                </div>
                <div className={styles.dateFilter}>
                    <label>To</label>
                    <input type="date" className={styles.dateInput} defaultValue="2026-02-15" />
                </div>
                <div className={styles.refSearch}>
                    <span className={styles.searchIcon}>&#128269;</span>
                    <input type="text" placeholder="Reference ID" />
                    <button className={styles.clearBtn}>Clear</button>
                </div>
                <button className={styles.searchBtn}>Search</button>
            </div>

            <div className={styles.tableActions}>
                <button className={styles.addFilterBtn}>+ Add filter</button>
                <button className={styles.exportBtn}>&#9993; Export CSV</button>
            </div>

            <div className={styles.tableContainer}>
                <DataTable columns={columns} data={accessData} />
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={1}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}
