"use client";

import styles from "./LicenseManager.module.css";

const EyeIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);

const UsersIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

const XCircleIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
);

const ExternalLinkIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
);

export default function LicenseManager() {
    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>Google License Manager</h1>
                    <p className={styles.subtitle}>
                        Automatically assign and remove Google Workspace for Education licenses
                    </p>
                    <div className={styles.buttons}>
                        <button className={styles.primaryButton}>Get started</button>
                        <button className={styles.secondaryButton}>Learn more</button>
                    </div>
                </div>
                <div className={styles.priceTag}>
                    <div className={styles.priceText}>No additional</div>
                    <div className={styles.priceText}>cost</div>
                </div>
            </div>

            {/* Value Props Section */}
            <div className={styles.valueProps}>
                <h2 className={styles.sectionTitle}>Automated Google licensing, in one place</h2>
                <div className={styles.propsGrid}>
                    <div className={styles.propCard}>
                        <div className={styles.propIcon}>
                            <EyeIcon />
                        </div>
                        <h3 className={styles.propTitle}>Preview</h3>
                        <p className={styles.propDescription}>
                            Easily preview user licenses and your nightly sync status in one place
                        </p>
                    </div>
                    <div className={styles.propCard}>
                        <div className={styles.propIcon}>
                            <UsersIcon />
                        </div>
                        <h3 className={styles.propTitle}>Assign</h3>
                        <p className={styles.propDescription}>
                            Automatically assign licenses to all users in specified OUs
                        </p>
                    </div>
                    <div className={styles.propCard}>
                        <div className={styles.propIcon}>
                            <XCircleIcon />
                        </div>
                        <h3 className={styles.propTitle}>Remove</h3>
                        <p className={styles.propDescription}>
                            Automatically remove licenses from users that are suspended or removed from an OU
                        </p>
                    </div>
                </div>
            </div>

            {/* Feature Section */}
            <div className={styles.featureSection}>
                <div className={styles.featureImage}>
                    <div className={styles.imagePlaceholder}>
                        <div className={styles.mockupHeader}>
                            <span className={styles.cleverBrand}>Clever</span>
                            <span className={styles.mockupTitle}>Clever IDM</span>
                        </div>
                        <div className={styles.mockupContent}>
                            <div className={styles.mockupLabel}>Select Student Organizational Units</div>
                            <div className={styles.mockupTree}>
                                <div className={styles.treeItem}>○  Your Google Org Units  <span className={styles.refreshLink}>⟳ Refresh</span></div>
                                <div className={styles.treeItem}>  ○  + Students</div>
                                <div className={styles.treeItem}>    ○  - Clever Academy</div>
                                <div className={`${styles.treeItem} ${styles.treeItemActive}`}>      ●  Grade 1 Students</div>
                                <div className={styles.treeItem}>      ○  Grade 2 Students</div>
                                <div className={styles.treeItem}>      ○  Grade 3 Students</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.featureContent}>
                    <h3 className={styles.featureTitle}>Hands-off identity automation</h3>
                    <p className={styles.featureDescription}>
                        Clever IDM helps manage your OUs automatically, so that license assignments are kept up to date across your internal systems and Google Workspace.
                    </p>
                    <p className={styles.featureDescription}>
                        Plus, get automated Google account creation and archival, giving you even more time back.
                    </p>
                    <a href="#" className={styles.learnMoreLink}>
                        <ExternalLinkIcon />
                        Learn more about Clever IDM
                    </a>
                </div>
            </div>

            {/* Bottom CTA */}
            <div className={styles.bottomCta}>
                <h2 className={styles.ctaTitle}>Interested in other ways Google + Clever work well together?</h2>
                <div className={styles.logoRow}>
                    <div className={styles.googleLogo}>G</div>
                    <span className={styles.plusSign}>+</span>
                    <div className={styles.cleverLogo}>C</div>
                </div>
            </div>
        </div>
    );
}
