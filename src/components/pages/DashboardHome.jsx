"use client";

import { useScenario } from "@/context/ScenarioContext";
import styles from "./DashboardHome.module.css";

export default function DashboardHome() {
    const { scenario } = useScenario();
    const { stats, sisSync, ssoStatus, awaitingAction, applicationStats, pinnedApplications } = scenario.dashboard;

    return (
        <div className={styles.page}>
            {/* Page Header */}
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>Dashboard Home</h1>
                    <p className={styles.subtitle}>
                        Take control of identity, access, and security for {stats.students} students, {stats.teachers} teachers, and {stats.staff} staff
                    </p>
                </div>
            </div>

            {/* Status Cards Row */}
            <div className={styles.statusRow}>
                {/* SIS Sync Card */}
                <div className={`${styles.statusCard} ${styles.sisCard}`}>
                    <div className={styles.statusHeader}>
                        <span className={styles.statusLabel}>SIS Sync</span>
                        <span className={styles.statusTime}>⏱️ {sisSync.lastSync}</span>
                        <span className={`${styles.statusBadge} ${styles[sisSync.status]}`}>● {sisSync.statusLabel}</span>
                    </div>
                    <p className={styles.statusMessage}>
                        {sisSync.message}
                    </p>
                    <button className={styles.configureButton}>Configure data sync</button>
                </div>

                {/* SSO Card */}
                <div className={styles.statusCard}>
                    <div className={styles.statusHeader}>
                        <span className={styles.statusLabel}>SSO</span>
                        <span className={styles.statusTime}>{ssoStatus.timeframe}</span>
                        <span className={`${styles.statusBadge} ${styles[ssoStatus.status]}`}>● {ssoStatus.statusLabel}</span>
                    </div>
                    <div className={styles.ssoStats}>
                        <div className={styles.ssoStat}>
                            <span className={styles.ssoIcon}>👁️</span>
                            <span>{ssoStatus.studentLogins} successful student logins</span>
                        </div>
                        <div className={styles.ssoStat}>
                            <span className={styles.ssoIcon}>👤</span>
                            <span>{ssoStatus.teacherStaffLogins} successful teacher + staff logins</span>
                        </div>
                    </div>
                    <div className={styles.cardArrow}>→</div>
                </div>

                {/* Awaiting Your Action Card */}
                <div className={styles.actionCard}>
                    <div className={styles.actionHeader}>
                        <span className={styles.actionLabel}>Awaiting your action</span>
                        <span className={styles.actionCount}>{awaitingAction.count}</span>
                    </div>
                    <div className={styles.actionContent}>
                        <div className={styles.celebrationIcon}>🎉</div>
                        <p className={styles.actionMessage}>{awaitingAction.message}</p>
                    </div>
                </div>
            </div>

            {/* Applications Section */}
            <div className={styles.applicationsSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Applications</h2>
                    <div className={styles.sectionActions}>
                        <button className={styles.viewAllBtn}>View all</button>
                        <button className={styles.pinBtn}>📌</button>
                    </div>
                </div>

                {/* Application Stats */}
                <div className={styles.appStats}>
                    <div className={styles.appStat}>
                        <span className={styles.appStatNumber}>{applicationStats.appsWithDataShared}</span>
                        <span className={styles.appStatLabel}>Apps with data shared</span>
                    </div>
                    <div className={styles.appStat}>
                        <span className={styles.appStatNumber}>{applicationStats.pendingAppInvites}</span>
                        <span className={styles.appStatLabel}>Pending app invites</span>
                    </div>
                    <div className={styles.appStat}>
                        <span className={styles.appStatNumber}>{applicationStats.appsWithNoDataShared}</span>
                        <span className={styles.appStatLabel}>Apps with no data shared</span>
                    </div>
                </div>

                {/* Application Cards */}
                <div className={styles.appCards}>
                    {pinnedApplications.map((app, index) => (
                        <div key={index} className={styles.appCard}>
                            <div className={styles.appCardIcon}>
                                <div className={app.iconType === 'print' ? styles.printIcon : styles.ssoIcon2}>{app.icon}</div>
                            </div>
                            <span className={styles.appName}>{app.name}</span>
                            <span className={styles.appArrow}>→</span>
                            <div className={styles.appCardStats}>
                                <div className={styles.appCardStat}>
                                    <span className={styles.statValue}>{app.students}</span>
                                    <span className={styles.statLabel}>Students</span>
                                </div>
                                <div className={styles.appCardStat}>
                                    <span className={styles.statValue}>{app.teachers}</span>
                                    <span className={styles.statLabel}>Teachers</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
