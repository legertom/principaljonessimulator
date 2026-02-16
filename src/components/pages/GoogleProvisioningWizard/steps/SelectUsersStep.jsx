"use client";

import React from "react";
import styles from "../GoogleProvisioningWizard.module.css";

export default function SelectUsersStep({ state, updateState, goNext }) {
    const anySelected = state.provisionStudents || state.provisionTeachers || state.provisionStaff;

    return (
        <>
            <div className={styles.infoBanner}>
                <span className={styles.infoBannerIcon}>ℹ️</span>
                <span className={styles.infoBannerText}>
                    To provision and manage users who are not currently in Clever, add them using{" "}
                    <a href="#" className={styles.helpLink} onClick={(e) => e.preventDefault()}>custom data</a>.
                </span>
            </div>

            <h1 className={styles.stepTitle}>Select users</h1>
            <p className={styles.stepDescription}>
                Select the Clever users you want to create Google accounts for. To provision and manage
                users who are not currently in Clever, you can add them using{" "}
                <a href="#" className={styles.helpLink} onClick={(e) => e.preventDefault()}>custom data</a>.
                You have additional options for uploading staff users - such as an{" "}
                <a href="#" className={styles.helpLink} onClick={(e) => e.preventDefault()}>SFTP upload</a>,
                which can be useful for exporting staff from an HRIS system. For additional information,
                please see the{" "}
                <a href="#" className={styles.helpLink} onClick={(e) => e.preventDefault()}>Select users section</a>{" "}
                of our Clever IDM course in Clever Academy!
            </p>

            <div className={styles.userTypeCard}>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--gray-900)", margin: "0 0 16px 0" }}>
                    Which Clever users do you want to provision Google accounts for?
                </h3>

                {/* Students */}
                <div className={styles.userTypeGroup}>
                    <label className={styles.userTypeLabel}>
                        <input
                            type="checkbox"
                            className={styles.userTypeCheckbox}
                            checked={state.provisionStudents}
                            onChange={(e) => updateState({ provisionStudents: e.target.checked })}
                        />
                        Students
                    </label>
                    {state.provisionStudents && (
                        <div className={styles.userCount}>
                            {state.studentCount} students will be provisioned
                        </div>
                    )}
                </div>

                {/* Teachers */}
                <div className={styles.userTypeGroup}>
                    <label className={styles.userTypeLabel}>
                        <input
                            type="checkbox"
                            className={styles.userTypeCheckbox}
                            checked={state.provisionTeachers}
                            onChange={(e) => updateState({ provisionTeachers: e.target.checked })}
                        />
                        Teachers
                    </label>
                    {state.provisionTeachers && (
                        <div className={styles.userCount}>
                            {state.teacherCount} teachers will be provisioned
                        </div>
                    )}
                </div>

                {/* Staff */}
                <div className={styles.userTypeGroup}>
                    <label className={styles.userTypeLabel}>
                        <input
                            type="checkbox"
                            className={styles.userTypeCheckbox}
                            checked={state.provisionStaff}
                            onChange={(e) => updateState({ provisionStaff: e.target.checked })}
                        />
                        Staff
                    </label>
                    {state.provisionStaff && (
                        <div className={styles.userCount}>
                            {state.staffCount} staff will be provisioned
                        </div>
                    )}
                </div>
            </div>

            <div className={styles.warningBanner}>
                <span className={styles.warningBannerIcon}>⚠️</span>
                <span className={styles.warningBannerText}>
                    Note: saving edits to your configuration will pause nightly syncs until you review,
                    preview, and provision the changes
                </span>
            </div>

            <div className={styles.nextBtnRow}>
                <button className={styles.nextBtn} onClick={goNext} disabled={!anySelected}>
                    Next
                </button>
            </div>
        </>
    );
}
