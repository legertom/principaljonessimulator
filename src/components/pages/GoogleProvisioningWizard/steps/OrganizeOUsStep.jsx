"use client";

import React from "react";
import styles from "../GoogleProvisioningWizard.module.css";

const CheckIcon = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M3 6l2.5 2.5L9 4" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

function OUCard({ title, ou, label, onEdit }) {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <div className={styles.cardTitle}>
                    {title}
                    {ou.completed && (
                        <span className={styles.completedBadge}>
                            <CheckIcon /> Completed
                        </span>
                    )}
                </div>
                <button className={styles.editBtn} onClick={onEdit}>Edit</button>
            </div>
            <div>
                <div className={styles.cardLabel}>{label}</div>
                <div className={styles.cardValue}>{ou.path}</div>
            </div>
        </div>
    );
}

export default function OrganizeOUsStep({ state, goNext, setToast }) {
    const ouTypes = [];
    if (state.provisionStudents) ouTypes.push({ key: "students", title: "Student OUs", label: "OUS CREATED" });
    if (state.provisionTeachers) ouTypes.push({ key: "teachers", title: "Teacher OUs", label: "OUS CREATED" });
    if (state.provisionStaff) ouTypes.push({ key: "staff", title: "Staff OUs", label: "OUS CREATED" });
    ouTypes.push({ key: "archive", title: "Archive OU", label: "ARCHIVE OU" });
    ouTypes.push({ key: "ignored", title: "Ignored OUs (optional)", label: "IGNORED OUS" });

    const completedCount = ouTypes.filter((t) => state.ous[t.key]?.completed).length;

    const handleEdit = (key) => {
        setToast(`Editing ${key} OU configuration...`);
    };

    return (
        <>
            <div className={styles.infoBanner}>
                <span className={styles.infoBannerIcon}>ℹ️</span>
                <span className={styles.infoBannerText}>
                    Clever IDM recommends an Organizational Unit (OU) setup based on SIS data.
                    For additional information please see the{" "}
                    <a href="#" className={styles.helpLink} onClick={(e) => e.preventDefault()}>
                        Organize OUs section
                    </a>{" "}
                    of our Clever IDM course in Clever Academy. For questions about setting up your OU
                    hierarchy you can{" "}
                    <a href="#" className={styles.helpLink} onClick={(e) => e.preventDefault()}>
                        contact support
                    </a>.
                </span>
            </div>

            <h1 className={styles.stepTitle}>Organize OUs</h1>

            <div className={styles.progressRow}>
                <div className={styles.progressBar}>
                    <div
                        className={styles.progressFill}
                        style={{ width: `${(completedCount / ouTypes.length) * 100}%` }}
                    />
                </div>
                <span className={styles.progressText}>
                    {completedCount} of {ouTypes.length} steps
                </span>
            </div>

            <div className={styles.cardGrid}>
                {ouTypes.map((t) => (
                    <OUCard
                        key={t.key}
                        title={t.title}
                        ou={state.ous[t.key]}
                        label={t.label}
                        onEdit={() => handleEdit(t.key)}
                    />
                ))}
            </div>

            <div className={styles.nextBtnRow}>
                <button className={styles.nextBtn} onClick={goNext}>
                    Configure groups
                </button>
            </div>
        </>
    );
}
