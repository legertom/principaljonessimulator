"use client";

/**
 * Staff Data tab content for the SIS Sync page.
 * Explains how staff data syncs work and allows configuration of sync method.
 */

import { useState } from "react";
import styles from "../SISSync.module.css";
import { Icons } from "@/components/ui";

export function StaffDataTab() {
    const [isCredentialsOpen, setIsCredentialsOpen] = useState(true);

    return (
        <div className={styles.staffDataContainer}>
            {/* How staff data syncs work */}
            <div className={styles.staffDataSection}>
                <h2 className={styles.sectionTitle}>How staff data syncs work</h2>
                <p className={styles.sectionDesc}>
                    Staff members in Clever are non-teaching staff at your district or employees who do not have a designated
                    or assigned roster in your Student Information System. Adding these users to Clever allows you to share
                    the benefits of the Clever Portal, SSO, IDM and MFA+ with all users in your district.
                </p>
                <div className={styles.infoBannerBlue}>
                    <span className={styles.bannerIcon}>{Icons.xCircle}</span>
                    <span>Learn more about <a href="#">the staff experience</a> in Clever.</span>
                </div>
            </div>

            {/* Select how you will sync staff data */}
            <div className={styles.staffDataSection}>
                <h2 className={styles.sectionTitle}>Select how you will sync staff data to Clever</h2>

                <div className={`${styles.syncOptionCard} ${styles.syncOptionCardActive}`}>
                    <div className={styles.cardHeader}>
                        <input type="radio" checked readOnly className={styles.radio} />
                        <span className={styles.cardTitle}>SFTP sync</span>
                        <span className={styles.chevronUp}>{Icons.chevronUp}</span>
                    </div>
                    <div className={styles.cardContent}>
                        <p>Upload a staff.csv to your Clever SFTP directory via one of the following:</p>
                        <ul>
                            <li>An SFTP client (credentials below)</li>
                            <li>Manually upload it on the <a href="#">Upload tab</a></li>
                        </ul>
                        <p className={styles.learnMoreLink}>Learn more about <a href="#">SFTP sync for staff</a>.</p>

                        {/* Expanded SFTP Credentials */}
                        <div className={styles.credentialsContainer}>
                            <div
                                className={styles.credentialsHeader}
                                onClick={() => setIsCredentialsOpen(!isCredentialsOpen)}
                            >
                                <span className={styles.credentialsTitle}>SFTP Credentials</span>
                                <span className={styles.chevronUp}>
                                    {isCredentialsOpen ? Icons.chevronUp : Icons.chevronDown}
                                </span>
                            </div>

                            {isCredentialsOpen && (
                                <div className={styles.credentialsBody}>
                                    <div className={styles.credentialGroup}>
                                        <label>SFTP Upload URL</label>
                                        <div className={styles.credentialInputWrapper}>
                                            <input type="text" value="sftp://sftp.clever.com" readOnly />
                                            <button className={styles.copyTextBtn}>Copy</button>
                                        </div>
                                    </div>

                                    <div className={styles.credentialGroup}>
                                        <label>SFTP Username</label>
                                        <div className={styles.credentialInputWrapper}>
                                            <input type="text" value="quiet-dictionary-3028" readOnly />
                                            <button className={styles.copyTextBtn}>Copy</button>
                                        </div>
                                    </div>

                                    <div className={styles.credentialGroup}>
                                        <label>SFTP Password</label>
                                        <div className={styles.credentialInputWrapper}>
                                            <input type="password" value="...................." readOnly />
                                            <div className={styles.inputActions}>
                                                <button className={styles.copyTextBtn}>Copy</button>
                                                <span className={styles.separator}>|</span>
                                                <button className={styles.revealBtn}>{Icons.eyeOff}</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.credentialGroup}>
                                        <label>SFTP Port</label>
                                        <div className={styles.credentialInputWrapper}>
                                            <input type="text" value="22" readOnly />
                                            <button className={styles.copyTextBtn}>Copy</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles.syncOptionCard}>
                    <div className={styles.cardHeader}>
                        <input type="radio" disabled className={styles.radio} />
                        <span className={styles.cardTitle}>Active Directory sync</span>
                    </div>
                    <div className={styles.cardContent}>
                        <p>If all staff members have accounts in Active Directory (AD), you can quickly and easily sync them using our AD sync tool.</p>
                        <p>This will <strong>disable</strong> your SFTP sync for staff - we will no longer process any staff.csv or admins.csv that are synced via SFTP or via manual upload.</p>
                        <p className={styles.learnMoreLink}>Learn more about <a href="#">Active Directory for staff</a>.</p>
                    </div>
                </div>
            </div>

            {/* Add additional staff as Custom Data */}
            <div className={styles.staffDataSection}>
                <div className={styles.sectionHeaderRow}>
                    <h2 className={styles.sectionTitleNoBg}>Add additional staff as Custom Data</h2>
                </div>
                <h3 className={styles.subTitleRegular}>Individually add custom staff</h3>
                <p className={styles.sectionDesc}>
                    Individually add custom staff or make edits to existing staff data on a per-user basis - no staff.csv required!
                    This is helpful if a staff member is missing from Active Directory or your CSV file. You can easily view all
                    manual or custom data in one place from the Custom Data page.
                </p>
                <a href="#" className={styles.viewCustomLink}>View custom data</a>

                <div className={styles.supportBanner}>
                    <span className={styles.bannerIconBlack}>{Icons.support}</span>
                    <span>Get detailed instructions about adding <a href="#">custom staff</a>.</span>
                </div>
            </div>
        </div>
    );
}

export default StaffDataTab;
