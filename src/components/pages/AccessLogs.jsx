"use client";

import { useScenario } from "@/context/ScenarioContext";
import { DataTable } from "@/components/ui";
import styles from "./AccessLogs.module.css";

export default function AccessLogs() {
    const { scenario } = useScenario();
    const accessData = scenario.accessLogs.data;


    const columns = [
        {
            key: "expand",
            header: "",
        },
        {
            key: "statusTime",
            header: "Status and time",
            render: (row) => (
                <>
                    <span className={styles.successIcon}>✓</span>
                    {row.statusTime}
                </>
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
            <h1 className={styles.title}>Access logs</h1>

            <div className={styles.summaryCards}>
                <div className={styles.card}>
                    <h3>Successful logins (last 5 days)</h3>
                    <div className={styles.bigNumber}>1</div>
                </div>
                <div className={styles.card}>
                    <h3>Failed logins (last 5 days)</h3>
                    <div className={styles.bigNumber}>0</div>
                </div>
            </div>

            <div className={styles.filters}>
                <div className={styles.dateFilter}>
                    <label>From</label>
                    <input type="date" className={styles.dateInput} defaultValue="2026-01-26" />
                </div>
                <div className={styles.dateFilter}>
                    <label>To</label>
                    <input type="date" className={styles.dateInput} defaultValue="2026-01-31" />
                </div>
                <div className={styles.refSearch}>
                    <span className={styles.searchIcon}>🔍</span>
                    <input type="text" placeholder="Reference ID" />
                    <button className={styles.clearBtn}>Clear</button>
                </div>
                <button className={styles.searchBtn}>Search</button>
            </div>

            <div className={styles.tableActions}>
                <button className={styles.addFilterBtn}>+ Add filter</button>
                <button className={styles.exportBtn}>✉ Export CSV</button>
            </div>

            <div className={styles.tableContainer}>
                <DataTable columns={columns} data={accessData} />
            </div>
        </div>
    );
}
