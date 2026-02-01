"use client";

import styles from "./MyApplications.module.css";

const applications = [
    {
        id: 1,
        name: "Print Center (Dev)",
        icon: "Print",
        iconColor: "#10b981",
        status: "Launched",
        statusColor: "#d1fae5",
        nextStep: "",
        appType: "SSO",
        students: "—",
        teachers: 0,
        sharing: "Sharing district",
    },
    {
        id: 2,
        name: "SSO Explorer",
        icon: "SSO",
        iconColor: "#6366f1",
        status: "Launched",
        statusColor: "#d1fae5",
        nextStep: "",
        appType: "SSO",
        students: 0,
        teachers: 0,
        sharing: "Sharing district",
    },
];

export default function MyApplications() {
    return (
        <div className={styles.page}>
            {/* Page Header */}
            <div className={styles.header}>
                <h1 className={styles.title}>My applications</h1>
                <button className={styles.addButton}>Add applications</button>
            </div>

            {/* Info Banner */}
            <div className={styles.infoBanner}>
                <span className={styles.infoIcon}>ℹ️</span>
                <p>
                    Learn more about{" "}
                    <a href="#" className={styles.link}>types of applications</a> and{" "}
                    <a href="#" className={styles.link}>adding applications</a> in our Help Center.
                </p>
            </div>

            {/* Applications Table */}
            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Name ↑</th>
                            <th>App Status ↕</th>
                            <th>Next step</th>
                            <th>App Type ↕</th>
                            <th colSpan="2">Total logins last 7 days ↕</th>
                            <th>Sharing ↕</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((app) => (
                            <tr key={app.id}>
                                <td className={styles.nameCell}>
                                    <div
                                        className={styles.appIcon}
                                        style={{ backgroundColor: app.iconColor }}
                                    >
                                        {app.icon}
                                    </div>
                                    <a href="#" className={styles.appName}>{app.name}</a>
                                </td>
                                <td>
                                    <span
                                        className={styles.statusBadge}
                                        style={{ backgroundColor: app.statusColor }}
                                    >
                                        {app.status}
                                    </span>
                                </td>
                                <td>{app.nextStep}</td>
                                <td>{app.appType}</td>
                                <td className={styles.loginStat}>
                                    <div className={styles.statGroup}>
                                        <span className={styles.statValue}>{app.students}</span>
                                        <span className={styles.statLabel}>Students</span>
                                    </div>
                                </td>
                                <td className={styles.loginStat}>
                                    <div className={styles.statGroup}>
                                        <span className={styles.statValue}>{app.teachers}</span>
                                        <span className={styles.statLabel}>Teachers</span>
                                    </div>
                                </td>
                                <td>
                                    <a href="#" className={styles.link}>{app.sharing}</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
