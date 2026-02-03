"use client";

import { useState } from "react";
import styles from "./Profile.module.css";
import { Icon } from "@/components/ui/Icons";
import { demoDistrict, demoUsers } from "@/data/demoIdentity";

export default function Profile() {
    const [activeTab, setActiveTab] = useState("Overview");
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [profileData, setProfileData] = useState({
        firstName: demoUsers.primaryAdmin.firstName,
        lastName: demoUsers.primaryAdmin.lastName,
        jobTitle: demoUsers.primaryAdmin.jobTitle,
        phoneNumber: "",
        email: demoUsers.primaryAdmin.email,
    });
    const [emailPrefs, setEmailPrefs] = useState({
        sync: true,
        syncIssues: false,
        syncPause: true,
        connectedApps: true,
        inviteChanges: true,
        inviteInitiations: false
    });

    const togglePref = (key) => {
        setEmailPrefs(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const renderOverview = () => (
        <div className={styles.overviewContainer}>
            <div className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2>Account Information</h2>
                </div>
                <div className={styles.infoGrid}>
                    <div className={styles.infoGroup}>
                        <label>User name</label>
                        <div className={styles.infoValue}>{profileData.firstName} {profileData.lastName}</div>
                    </div>
                    <div className={styles.infoGroup}>
                        <label>Phone number</label>
                        <div className={styles.infoValue}>{profileData.phoneNumber || "Not set"}</div>
                    </div>
                    <div className={styles.infoGroup}>
                        <label>Job title</label>
                        <div className={styles.infoValue}>{profileData.jobTitle}</div>
                    </div>
                    <div className={styles.infoGroup}>
                        <label>Password</label>
                        <div className={styles.infoValue}>••••••••••••••••</div>
                    </div>
                    <div className={styles.infoGroup}>
                        <label>Email</label>
                        <div className={styles.infoValue}>{profileData.email}</div>
                    </div>
                    <div className={styles.infoGroup}>
                        <label>User roles</label>
                        <div className={styles.infoValue}>
                            Clever Admin (Owner)
                            <p className={styles.hintText}>
                                Learn about your user permissions by reading this <a href="#" target="_blank" rel="noopener noreferrer">help center article</a>
                            </p>
                        </div>
                    </div>
                    <div className={styles.infoGroup}>
                        <label>District ID:</label>
                        <div className={styles.infoValue}>{demoDistrict.id}</div>
                    </div>
                </div>
                <button className={styles.editButton} onClick={() => setIsEditModalOpen(true)}>Edit</button>
            </div>

            <div className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2>Multi-factor authentication</h2>
                    <span className={styles.statusBadge}>Unactivated</span>
                </div>
                <p className={styles.sectionDescription}>
                    Protect your account with simple MFA methods for free. For more details check <a href="#">Help Center</a>.
                </p>
                <button className={styles.primaryButton}>Activate MFA</button>
            </div>
        </div>
    );

    const renderEmails = () => (
        <div className={styles.emailsContainer}>
            <div className={styles.emailsHeader}>
                <h2>Email Preferences</h2>
                <p>Change what kinds of emails you will receive from Clever.</p>
            </div>

            <div className={styles.prefsList}>
                <div className={styles.prefItem}>
                    <div className={styles.prefInfo}>
                        <h3>Sync</h3>
                        <p>Informational updates on the status of your sync</p>
                    </div>
                    <button
                        className={`${styles.toggle} ${emailPrefs.sync ? styles.toggleOn : ""}`}
                        onClick={() => togglePref("sync")}
                    >
                        <div className={styles.toggleKnob} />
                        {emailPrefs.sync && <Icon name="check" size={10} className={styles.toggleCheck} />}
                    </button>
                </div>

                <div className={styles.prefItem}>
                    <div className={styles.prefInfo}>
                        <h3>Sync issues</h3>
                        <p>Errors and hold notices from your sync</p>
                    </div>
                    <button
                        className={`${styles.toggle} ${emailPrefs.syncIssues ? styles.toggleOn : ""}`}
                        onClick={() => togglePref("syncIssues")}
                    >
                        <div className={styles.toggleKnob} />
                        {emailPrefs.syncIssues && <Icon name="check" size={10} className={styles.toggleCheck} />}
                    </button>
                </div>

                <div className={styles.prefItem}>
                    <div className={styles.prefInfo}>
                        <h3>Sync pause</h3>
                        <p>Reminders about your district pause settings</p>
                    </div>
                    <button
                        className={`${styles.toggle} ${emailPrefs.syncPause ? styles.toggleOn : ""}`}
                        onClick={() => togglePref("syncPause")}
                    >
                        <div className={styles.toggleKnob} />
                        {emailPrefs.syncPause && <Icon name="check" size={10} className={styles.toggleCheck} />}
                    </button>
                </div>

                <div className={styles.prefItem}>
                    <div className={styles.prefInfo}>
                        <h3>Connected apps</h3>
                        <p>Notifications about changes to your connected apps</p>
                    </div>
                    <button
                        className={`${styles.toggle} ${emailPrefs.connectedApps ? styles.toggleOn : ""}`}
                        onClick={() => togglePref("connectedApps")}
                    >
                        <div className={styles.toggleKnob} />
                        {emailPrefs.connectedApps && <Icon name="check" size={10} className={styles.toggleCheck} />}
                    </button>
                </div>

                <div className={styles.prefItem}>
                    <div className={styles.prefInfo}>
                        <h3>Requests and invite changes</h3>
                        <p>Notifications about status updates on your application requests and invitations</p>
                    </div>
                    <button
                        className={`${styles.toggle} ${emailPrefs.inviteChanges ? styles.toggleOn : ""}`}
                        onClick={() => togglePref("inviteChanges")}
                    >
                        <div className={styles.toggleKnob} />
                        {emailPrefs.inviteChanges && <Icon name="check" size={10} className={styles.toggleCheck} />}
                    </button>
                </div>

                <div className={styles.prefItem}>
                    <div className={styles.prefInfo}>
                        <h3>Requests and invite initiations</h3>
                        <p>Notifications about new invitations from applications</p>
                    </div>
                    <button
                        className={`${styles.toggle} ${emailPrefs.inviteInitiations ? styles.toggleOn : ""}`}
                        onClick={() => togglePref("inviteInitiations")}
                    >
                        <div className={styles.toggleKnob} />
                        {emailPrefs.inviteInitiations && <Icon name="check" size={10} className={styles.toggleCheck} />}
                    </button>
                </div>
            </div>

            <button className={styles.primaryButton} style={{ marginTop: "24px" }}>Save</button>
        </div>
    );

    const renderEditModal = () => {
        if (!isEditModalOpen) return null;

        return (
            <div className={styles.modalOverlay} onClick={() => setIsEditModalOpen(false)}>
                <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                    <div className={styles.modalHeader}>
                        <h2>Edit Profile</h2>
                        <button className={styles.closeModal} onClick={() => setIsEditModalOpen(false)}>
                            <Icon name="xCircle" size={24} />
                        </button>
                    </div>

                    <div className={styles.modalForm}>
                        <div className={styles.inputRow}>
                            <div className={styles.inputGroup}>
                                <label>First name</label>
                                <input
                                    type="text"
                                    defaultValue={profileData.firstName}
                                    id="firstNameInput"
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Last name</label>
                                <input
                                    type="text"
                                    defaultValue={profileData.lastName}
                                    id="lastNameInput"
                                />
                            </div>
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Job title</label>
                            <input
                                type="text"
                                defaultValue={profileData.jobTitle}
                                id="jobTitleInput"
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Phone number</label>
                            <input
                                type="text"
                                defaultValue={profileData.phoneNumber}
                                id="phoneInput"
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Email</label>
                            <input
                                type="email"
                                defaultValue={profileData.email}
                                id="emailInput"
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Password</label>
                            <div className={styles.passwordInput}>
                                <input type="password" value="••••••••••••" disabled />
                            </div>
                            <button className={styles.changePasswordLink}>Change Password</button>
                        </div>

                        <div className={styles.modalActions}>
                            <button className={styles.updateButton} onClick={() => {
                                const newData = {
                                    firstName: document.getElementById("firstNameInput").value,
                                    lastName: document.getElementById("lastNameInput").value,
                                    jobTitle: document.getElementById("jobTitleInput").value,
                                    phoneNumber: document.getElementById("phoneInput").value,
                                    email: document.getElementById("emailInput").value
                                };
                                setProfileData(newData);
                                setIsEditModalOpen(false);
                            }}>Update</button>
                            <button className={styles.cancelButton} onClick={() => setIsEditModalOpen(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className={styles.container}>
            {renderEditModal()}
            <div className={styles.header}>
                <div className={styles.titleSection}>
                    <h1>Profile</h1>
                </div>
                <button className={styles.deleteButton}>Delete district account</button>
            </div>

            <nav className={styles.tabs}>
                <button
                    className={`${styles.tab} ${activeTab === "Overview" ? styles.activeTab : ""}`}
                    onClick={() => setActiveTab("Overview")}
                >
                    Overview
                </button>
                <button
                    className={`${styles.tab} ${activeTab === "Emails" ? styles.activeTab : ""}`}
                    onClick={() => setActiveTab("Emails")}
                >
                    Emails
                </button>
            </nav>

            <div className={styles.content}>
                {activeTab === "Overview" ? renderOverview() : renderEmails()}
            </div>
        </div>
    );
}
