"use client";

import { PageHeader, InfoBanner } from "@/components/ui";
import styles from "./PortalAnalytics.module.css";

export default function PortalAnalytics() {
    return (
        <div className={styles.page}>
            <PageHeader
                title="Portal Analytics"
                actions={<button className={styles.exportButton}>Export all data</button>}
            />

            <div className={styles.content}>
                <InfoBanner variant="info">
                    Check out a <a href="#" className={styles.link}>clickable tutorial</a> of this tool or learn more in our{" "}
                    <a href="#" className={styles.link}>Help Center</a>.
                </InfoBanner>

                {/* Filters */}
                <div className={styles.filtersGrid}>
                    <div className={styles.filterGroup}>
                        <label className={styles.filterLabel}>Time Range</label>
                        <select className={styles.filterSelect}><option>Last 28 days</option></select>
                    </div>
                    <div className={styles.filterGroup}>
                        <label className={styles.filterLabel}>Start date</label>
                        <input className={styles.filterInput} type="text" defaultValue="01/18/2026" readOnly />
                    </div>
                    <div className={styles.filterGroup}>
                        <label className={styles.filterLabel}>End date</label>
                        <input className={styles.filterInput} type="text" defaultValue="02/14/2026" readOnly />
                    </div>
                    <div className={styles.filterGroup}>
                        <label className={styles.filterLabel}>App Type</label>
                        <select className={styles.filterSelect}><option>District-add...</option></select>
                    </div>
                    <div className={styles.filterGroup}>
                        <label className={styles.filterLabel}>App</label>
                        <select className={styles.filterSelect}><option>All Apps</option></select>
                    </div>
                </div>
                <div className={styles.filtersGrid} style={{ marginTop: 12 }}>
                    <div className={styles.filterGroup}>
                        <label className={styles.filterLabel}>Schools</label>
                        <select className={styles.filterSelect}><option>All Schools</option></select>
                    </div>
                    <div className={styles.filterGroup}>
                        <label className={styles.filterLabel}>Grades</label>
                        <select className={styles.filterSelect}><option>All Grades</option></select>
                    </div>
                    <div className={styles.filterGroup}>
                        <label className={styles.filterLabel}>Users</label>
                        <div className={styles.tagInput}>
                            <span className={styles.tag}>Students <span className={styles.tagX}>×</span></span>
                            <span className={styles.tag}>Teachers <span className={styles.tagX}>×</span></span>
                        </div>
                    </div>
                    <div className={styles.filterGroup}>
                        <label className={styles.filterLabel}>Units</label>
                        <select className={styles.filterSelect}><option>Absolute</option></select>
                    </div>
                </div>

                {/* Key Metrics */}
                <h2 className={styles.metricsTitle}>Key Metrics</h2>
                <div className={styles.metricsRow}>
                    <div className={styles.metricGroup}>
                        <span className={styles.metricLabel}>Usage by scoped users</span>
                        <div className={styles.metricValues}>
                            <div className={styles.metricItem}>
                                <span className={styles.metricNumber}>0.0%</span>
                                <span className={styles.metricSub}>Students</span>
                            </div>
                            <div className={styles.metricItem}>
                                <span className={styles.metricNumber}>0.0%</span>
                                <span className={styles.metricSub}>Teachers</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.metricGroup}>
                        <span className={styles.metricLabel}>Unique users</span>
                        <div className={styles.metricValues}>
                            <div className={styles.metricItem}>
                                <span className={styles.metricNumber}>0</span>
                                <span className={styles.metricSub}>Students</span>
                            </div>
                            <div className={styles.metricItem}>
                                <span className={styles.metricNumber}>0</span>
                                <span className={styles.metricSub}>Teachers</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.metricGroup}>
                        <span className={styles.metricLabel}>Total logins</span>
                        <div className={styles.metricValues}>
                            <div className={styles.metricItem}>
                                <span className={styles.metricNumber}>0</span>
                                <span className={styles.metricSub}>Students</span>
                            </div>
                            <div className={styles.metricItem}>
                                <span className={styles.metricNumber}>0</span>
                                <span className={styles.metricSub}>Teachers</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Chart placeholder */}
                <h2 className={styles.chartTitle}>Daily Unique Users</h2>
                <div className={styles.chartPlaceholder}>
                    <div className={styles.chartLegend}>
                        <span className={styles.legendDot} style={{ background: "#059669" }} />
                        <span>Students</span>
                        <span className={styles.legendDot} style={{ background: "#3b82f6", marginLeft: 16 }} />
                        <span>Teachers</span>
                    </div>
                    <div className={styles.chartArea}>
                        <div className={styles.chartLine} />
                    </div>
                </div>

                {/* Logins sections */}
                <div className={styles.loginsRow}>
                    <div className={styles.loginsSection}>
                        <div className={styles.loginsSectionHeader}>
                            <h3 className={styles.loginsTitle}>Logins by App</h3>
                            <a href="#" className={styles.link}>View more</a>
                        </div>
                    </div>
                    <div className={styles.loginsSection}>
                        <div className={styles.loginsSectionHeader}>
                            <h3 className={styles.loginsTitle}>Logins by School</h3>
                            <a href="#" className={styles.link}>View more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
