"use client";

import styles from "./AccessLogs.module.css";

export default function AccessLogs() {
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
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Status and time</th>
                            <th>Final action</th>
                            <th>User name</th>
                            <th>User type</th>
                            <th>IP address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>▼</td>
                            <td>
                                <span className={styles.successIcon}>✓</span>
                                Jan 31, 2026; 06:58:57 p.m. EST
                            </td>
                            <td>Clever Admin</td>
                            <td>Tom Leger</td>
                            <td>District Admin</td>
                            <td>84.17.35.67</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
