"use client";

import styles from "./AddApplications.module.css";

const applications = [
    {
        id: 1,
        name: "123 Wellness",
        icon: "🏃",
        type: "SSO, Rostering",
        subjects: "",
        description: "1-2-3 Wellness, a cutting edge program described as the \"Uber for emotions\", is on a mission to empower students and educators to process emotions in healthy ways.",
    },
    {
        id: 2,
        name: "220 Youth Leadership",
        icon: "220",
        type: "SSO",
        subjects: "",
        description: "Online learning management system hosted inside of LearnWorlds. We have our own unique school (app.220leadership.com) inside of their platform.",
    },
    {
        id: 3,
        name: "3asafeer",
        icon: "🐦",
        type: "SSO (Saved Passwords)",
        subjects: "",
        description: "Saved Passwords connection that provides single sign-on into 3asafeer",
    },
    {
        id: 4,
        name: "3asafeer School: Learn Arabic",
        icon: "🐦",
        type: "SSO",
        subjects: "",
        description: "Learn Arabic with new & fresh books, stories, novellas, games, cartoons, lessons and features every week.",
    },
    {
        id: 5,
        name: "3CX",
        icon: "3CX",
        type: "SSO (Saved Passwords)",
        subjects: "",
        description: "Saved Passwords connection that provides single sign-on into 3CX",
    },
    {
        id: 6,
        name: "3D Slash",
        icon: "3D",
        type: "SSO (Saved Passwords)",
        subjects: "",
        description: "The easiest way to create in 3D and the most fun!",
    },
];

export default function AddApplications() {
    return (
        <div className={styles.page}>
            {/* Page Header */}
            <div className={styles.header}>
                <h1 className={styles.title}>Add applications</h1>
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

            {/* Filters */}
            <div className={styles.filters}>
                <div className={styles.filterGroup}>
                    <label className={styles.filterLabel}>APP TYPE</label>
                    <select className={styles.filterSelect}>
                        <option>All Types</option>
                    </select>
                </div>
                <div className={styles.filterGroup}>
                    <label className={styles.filterLabel}>APP SUBJECT</label>
                    <select className={styles.filterSelect}>
                        <option>All Subjects</option>
                    </select>
                </div>
                <div className={styles.searchFilter}>
                    <input type="text" placeholder="SEARCH" className={styles.searchInput} />
                </div>
            </div>

            {/* Applications Table */}
            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Application</th>
                            <th>Subjects</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((app) => (
                            <tr key={app.id}>
                                <td className={styles.appCell}>
                                    <div className={styles.appIcon}>{app.icon}</div>
                                    <div className={styles.appInfo}>
                                        <a href="#" className={styles.appName}>{app.name}</a>
                                        <span className={styles.appType}>{app.type}</span>
                                    </div>
                                </td>
                                <td>{app.subjects}</td>
                                <td className={styles.descriptionCell}>{app.description}</td>
                                <td>
                                    <a href="#" className={styles.requestLink}>Request App</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
