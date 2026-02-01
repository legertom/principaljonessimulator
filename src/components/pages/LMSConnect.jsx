"use client";

import styles from "./LMSConnect.module.css";

export default function LMSConnect() {
    return (
        <div className={styles.page}>
            {/* Page Header */}
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <h1 className={styles.title}>LMS Connect</h1>
                    <div className={styles.buttonGroup}>
                        <button className={styles.primaryButton}>Join waitlist</button>
                        <button className={styles.secondaryButton}>Submit app interest form</button>
                    </div>
                </div>
                <div className={styles.lmsLogos}>
                    <span className={styles.supportedLabel}>Supported LMSs</span>
                    <div className={styles.logoRow}>
                        <div className={styles.lmsLogo}>
                            <span className={styles.logoIcon}>🎨</span>
                            <span>Canvas</span>
                        </div>
                        <div className={styles.lmsLogo}>
                            <span className={styles.logoIcon}>S</span>
                            <span>Schoology</span>
                        </div>
                        <div className={styles.lmsLogo}>
                            <span className={styles.logoIcon}>📚</span>
                            <span>Google Classroom</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Alert Banner */}
            <div className={styles.alertBanner}>
                <span className={styles.alertIcon}>⭐</span>
                <div>
                    <p>Your applications are not available on LMS Connect at this time. Join the waitlist to be notified when you can connect an application.</p>
                    <a href="#" className={styles.link}>Learn more about LMS Connect.</a>
                </div>
            </div>

            {/* Benefits Section */}
            <div className={styles.benefitsSection}>
                <h2 className={styles.benefitsTitle}>LMS and application connections made easy</h2>
                <p className={styles.benefitsSubtitle}>Easily connect your LMS once, then sync grades and assignments seamlessly with your Clever apps</p>

                <div className={styles.benefitsCards}>
                    <div className={styles.benefitCard}>
                        <div className={styles.benefitIcon}>📱</div>
                        <p>Manage all your apps with one connection</p>
                    </div>
                    <div className={styles.benefitCard}>
                        <div className={styles.benefitIcon}>📊</div>
                        <p>Save teachers time with automatic gradebook syncs</p>
                    </div>
                    <div className={styles.benefitCard}>
                        <div className={styles.benefitIcon}>✅</div>
                        <p>Students dive into learning with seamless assignment syncs</p>
                    </div>
                </div>
            </div>

            {/* Partnership Section */}
            <div className={styles.partnershipSection}>
                <h3 className={styles.partnershipTitle}>In partnership with Edlink</h3>
                <p className={styles.partnershipText}>
                    Clever has partnered with <a href="#" className={styles.link}>Edlink</a> to securely match classes and users between your LMS and applications.
                </p>
                <a href="#" className={styles.link}>Learn more about our partnership with Edlink.</a>
            </div>
        </div>
    );
}
