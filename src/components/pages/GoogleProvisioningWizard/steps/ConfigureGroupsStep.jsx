"use client";

import React from "react";
import styles from "../GoogleProvisioningWizard.module.css";

function GroupCard({ title, group, onConfigure }) {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <div className={styles.cardTitle}>{title}</div>
                <button className={styles.configureBtn} onClick={onConfigure}>Configure</button>
            </div>
            <div>
                <div className={styles.cardLabel}>NUMBER OF RULES CONFIGURED</div>
                <div className={styles.cardValue}>
                    {group.rulesConfigured === 0 ? "None" : group.rulesConfigured}
                </div>
            </div>
        </div>
    );
}

export default function ConfigureGroupsStep({ state, goNext, setToast }) {
    const handleConfigure = (type) => {
        setToast(`Opening ${type} group configuration...`);
    };

    return (
        <>
            <h1 className={styles.stepTitle}>
                Set up group assignment
                <span className={styles.optionalBadge}>Optional</span>
            </h1>
            <p className={styles.stepDescription}>
                Configure which Google Groups you want Clever IDM to manage. Clever IDM will automate
                adding and removing users in Clever managed groups. For more information please see the{" "}
                <a href="#" className={styles.helpLink} onClick={(e) => e.preventDefault()}>
                    Configure groups section
                </a>{" "}
                of our Clever IDM course in Clever Academy.
            </p>

            <hr style={{ border: "none", borderTop: "1px solid var(--gray-200)", margin: "0 0 24px 0" }} />

            <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--gray-900)", margin: "0 0 16px 0" }}>
                Select a user type to configure groups
            </h3>

            <div className={styles.cardGrid}>
                {state.provisionStudents && (
                    <GroupCard
                        title="Student Groups"
                        group={state.groups.students}
                        onConfigure={() => handleConfigure("student")}
                    />
                )}
                {state.provisionTeachers && (
                    <GroupCard
                        title="Teacher Groups"
                        group={state.groups.teachers}
                        onConfigure={() => handleConfigure("teacher")}
                    />
                )}
                {state.provisionStaff && (
                    <GroupCard
                        title="Staff Groups"
                        group={state.groups.staff}
                        onConfigure={() => handleConfigure("staff")}
                    />
                )}
            </div>

            <div className={styles.nextBtnRow}>
                <button className={styles.nextBtn} onClick={goNext}>
                    Review Summary
                </button>
            </div>
        </>
    );
}
