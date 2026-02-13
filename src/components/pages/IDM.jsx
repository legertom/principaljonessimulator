"use client";

import { Icons } from "@/components/ui";
import styles from "./IDM.module.css";

const features = [
    "Provision, manage, and archive students, teachers, and staff",
    "Password management",
    "Group membership management",
    "Audit reporting and daily email alerts for sync issues",
    "Setup guidance",
];

export default function IDM() {
    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>Clever IDM</h1>
                    <p className={styles.subtitle}>
                        Automated identity management for enhanced security with Clever
                    </p>
                    <div className={styles.buttons}>
                        <button className={styles.primaryButton}>
                            Get started {Icons.chevronDown}
                        </button>
                        <button className={styles.secondaryButton}>Purchase</button>
                    </div>
                </div>
                <div className={styles.priceTag}>
                    <div className={styles.priceAmount}>$1.50</div>
                    <div className={styles.priceDetails}>per user per year</div>
                    <div className={styles.priceMinimum}>$1,500 minimum</div>
                </div>
            </div>

            {/* Value Props Section */}
            <div className={styles.valueProps}>
                <h2 className={styles.sectionTitle}>Your home for identity management</h2>
                <div className={styles.propsGrid}>
                    <div className={styles.propCard}>
                        <div className={styles.propIcon}>
                            {Icons.authentication}
                        </div>
                        <h3 className={styles.propTitle}>Secure up-to-date accounts</h3>
                        <p className={styles.propDescription}>
                            Reduce security gaps with strong passwords and removal of unused accounts.
                        </p>
                    </div>
                    <div className={styles.propCard}>
                        <div className={styles.propIcon}>
                            {Icons.clock}
                        </div>
                        <h3 className={styles.propTitle}>Get time back with automation</h3>
                        <p className={styles.propDescription}>
                            Automated data syncs from SIS or HRIS streamline account management.
                        </p>
                    </div>
                    <div className={styles.propCard}>
                        <div className={styles.propIcon}>
                            {Icons.shield}
                        </div>
                        <h3 className={styles.propTitle}>Reduce disruptions in learning</h3>
                        <p className={styles.propDescription}>
                            Ensure ready access to key user accounts.
                        </p>
                    </div>
                </div>
            </div>

            {/* Video Section */}
            <div className={styles.videoSection}>
                <div className={styles.videoContainer}>
                    <div className={styles.videoPlaceholder}>
                        <div className={styles.videoBrand}>
                            <span className={styles.cleverLogo}>C</span>
                            <span className={styles.cleverText}>Cl<span className={styles.playIcon}>▶</span>ver</span>
                        </div>
                        <div className={styles.videoCaption}>Clever IDM Product Walkthrough</div>
                        <div className={styles.videoProgress}>
                            <span>6:32</span>
                            <div className={styles.progressBar}>
                                <div className={styles.progressFill}></div>
                            </div>
                        </div>
                    </div>
                    <p className={styles.videoLabel}>Learn how to setup Clever IDM in a few short minutes.</p>
                </div>
                <div className={styles.featuresList}>
                    <h3 className={styles.featuresTitle}>Hands-off identity management</h3>
                    <ul className={styles.features}>
                        {features.map((feature, index) => (
                            <li key={index} className={styles.featureItem}>
                                {Icons.checkCircle}
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
