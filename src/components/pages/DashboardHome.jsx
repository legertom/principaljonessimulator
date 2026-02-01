"use client";

import styles from "./DashboardHome.module.css";

export default function DashboardHome() {
    return (
        <div className={styles.page}>
            {/* Page Header */}
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>Dashboard Home</h1>
                    <p className={styles.subtitle}>
                        Take control of identity, access, and security for 14 students, 7 teachers, and 6 staff
                    </p>
                </div>
            </div>

            {/* Status Cards Row */}
            <div className={styles.statusRow}>
                {/* SIS Sync Card */}
                <div className={`${styles.statusCard} ${styles.sisCard}`}>
                    <div className={styles.statusHeader}>
                        <span className={styles.statusLabel}>SIS Sync</span>
                        <span className={styles.statusTime}>⏱️ 7 months ago</span>
                        <span className={`${styles.statusBadge} ${styles.warning}`}>● Sync out of date</span>
                    </div>
                    <p className={styles.statusMessage}>
                        Your authorized applications may have outdated student rosters.
                        Please start another sync to refresh your data.
                    </p>
                    <button className={styles.configureButton}>Configure data sync</button>
                </div>

                {/* SSO Card */}
                <div className={styles.statusCard}>
                    <div className={styles.statusHeader}>
                        <span className={styles.statusLabel}>SSO</span>
                        <span className={styles.statusTime}>last 5d</span>
                        <span className={`${styles.statusBadge} ${styles.success}`}>● Operational</span>
                    </div>
                    <div className={styles.ssoStats}>
                        <div className={styles.ssoStat}>
                            <span className={styles.ssoIcon}>👁️</span>
                            <span>— successful student logins</span>
                        </div>
                        <div className={styles.ssoStat}>
                            <span className={styles.ssoIcon}>👤</span>
                            <span>— successful teacher + staff logins</span>
                        </div>
                    </div>
                    <div className={styles.cardArrow}>→</div>
                </div>

                {/* Awaiting Your Action Card */}
                <div className={styles.actionCard}>
                    <div className={styles.actionHeader}>
                        <span className={styles.actionLabel}>Awaiting your action</span>
                        <span className={styles.actionCount}>0</span>
                    </div>
                    <div className={styles.actionContent}>
                        <div className={styles.celebrationIcon}>🎉</div>
                        <p className={styles.actionMessage}>All action items have been addressed.</p>
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
                        <span className={styles.appStatNumber}>2</span>
                        <span className={styles.appStatLabel}>Apps with data shared</span>
                    </div>
                    <div className={styles.appStat}>
                        <span className={styles.appStatNumber}>0</span>
                        <span className={styles.appStatLabel}>Pending app invites</span>
                    </div>
                    <div className={styles.appStat}>
                        <span className={styles.appStatNumber}>0</span>
                        <span className={styles.appStatLabel}>Apps with no data shared</span>
                    </div>
                </div>

                {/* Application Cards */}
                <div className={styles.appCards}>
                    <div className={styles.appCard}>
                        <div className={styles.appCardIcon}>
                            <div className={styles.printIcon}>Print</div>
                        </div>
                        <span className={styles.appName}>Print Center (Dev)</span>
                        <span className={styles.appArrow}>→</span>
                        <div className={styles.appCardStats}>
                            <div className={styles.appCardStat}>
                                <span className={styles.statValue}>—</span>
                                <span className={styles.statLabel}>Students</span>
                            </div>
                            <div className={styles.appCardStat}>
                                <span className={styles.statValue}>0</span>
                                <span className={styles.statLabel}>Teachers</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.appCard}>
                        <div className={styles.appCardIcon}>
                            <div className={styles.ssoIcon2}>SSO</div>
                        </div>
                        <span className={styles.appName}>SSO Explorer</span>
                        <span className={styles.appArrow}>→</span>
                        <div className={styles.appCardStats}>
                            <div className={styles.appCardStat}>
                                <span className={styles.statValue}>0</span>
                                <span className={styles.statLabel}>Students</span>
                            </div>
                            <div className={styles.appCardStat}>
                                <span className={styles.statValue}>0</span>
                                <span className={styles.statLabel}>Teachers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
