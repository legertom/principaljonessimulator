"use client";

import React, { useState } from "react";
import { SAMPLE_STUDENT, SAMPLE_TEACHER, SAMPLE_STAFF } from "@/data/defaults/idm-provisioning";
import styles from "../GoogleProvisioningWizard.module.css";

const CheckIcon = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M3 6l2.5 2.5L9 4" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

function CredentialCard({ title, credential, onEdit }) {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <div className={styles.cardTitle}>
                    {title}
                    {credential.completed && (
                        <span className={styles.completedBadge}>
                            <CheckIcon /> Completed
                        </span>
                    )}
                </div>
                <button className={styles.editBtn} onClick={onEdit}>Edit</button>
            </div>
            <div>
                <div className={styles.cardLabel}>EMAIL</div>
                <div className={styles.cardValue}>{credential.email}</div>
            </div>
            <div style={{ marginTop: 12 }}>
                <div className={styles.cardLabel}>PASSWORD</div>
                <div className={styles.cardValue}>{credential.password}</div>
            </div>
        </div>
    );
}

function CredentialEditView({ title, userType, credential, sample, onBack, updateState, state }) {
    const [domain] = useState(credential.domain);

    return (
        <>
            <h1 className={styles.stepTitle}>{title} login credentials and email</h1>
            <p className={styles.stepDescription}>
                Set email and password formats for all {userType}. Preview your format with an
                existing Clever user. Learn more in the{" "}
                <a href="#" className={styles.helpLink} onClick={(e) => e.preventDefault()}>
                    Set login credentials section
                </a>{" "}
                of our Clever IDM course in Clever Academy!
            </p>

            {/* Section 1: Preview user */}
            <div className={styles.card}>
                <h3 style={{ fontSize: 15, fontWeight: 600, margin: "0 0 12px 0" }}>
                    1. Select any {userType.slice(0, -1)} with an existing Clever account to preview their data
                </h3>
                <div style={{ marginBottom: 12 }}>
                    <div className={styles.cardLabel}>USER NAME</div>
                    <select
                        style={{
                            width: "100%", padding: "8px 12px", border: "1px solid var(--gray-300)",
                            borderRadius: 6, fontSize: 14, color: "var(--gray-900)", background: "white",
                        }}
                        defaultValue={sample.name}
                    >
                        <option>{sample.name}</option>
                    </select>
                </div>
                <div className={styles.card} style={{ background: "var(--gray-50)" }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "var(--gray-900)", marginBottom: 12 }}>
                        🔵 {sample.name}&apos;s Clever Data
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 24px", fontSize: 13 }}>
                        <div><strong>SIS Email</strong> {sample.sisEmail}</div>
                        <div><strong>SIS ID</strong> {sample.sisId}</div>
                        <div><strong>District Username</strong> {sample.districtUsername || "—"}</div>
                        <div><strong>State ID</strong> {sample.stateId || "—"}</div>
                        <div><strong>District Password</strong> {sample.districtPassword || "—"}</div>
                        <div><strong>Student Number</strong> {sample.studentNumber || "—"}</div>
                        <div><strong>Graduation Year</strong> {sample.graduationYear || "—"}</div>
                        <div><strong>Birthday</strong> {sample.birthday || "—"}</div>
                    </div>
                </div>
            </div>

            {/* Section 2: Email credentials */}
            <div className={styles.card}>
                <h3 style={{ fontSize: 15, fontWeight: 600, margin: "0 0 12px 0" }}>
                    2. Select email credentials
                </h3>

                <div style={{ marginBottom: 16 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                        <h4 style={{ fontSize: 15, fontWeight: 600, margin: 0 }}>Matching emails</h4>
                        <span className={styles.recommendBadge}>Match credentials</span>
                    </div>
                    <p style={{ fontSize: 14, color: "var(--gray-600)", lineHeight: 1.5, margin: "0 0 12px 0" }}>
                        Clever IDM uses the SIS email associated with the user in Clever to automatically
                        link to matching accounts in Google. Only those users whose SIS email matches the
                        domain will be matched.
                    </p>
                    <div style={{ marginBottom: 8 }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <span style={{ fontSize: 13, color: "var(--gray-600)" }}>
                                Select the associated email domain for {userType}
                            </span>
                            <span style={{ fontSize: 13, color: "var(--gray-600)", fontStyle: "italic" }}>Required</span>
                        </div>
                        <select
                            style={{
                                width: "100%", maxWidth: 400, padding: "8px 12px",
                                border: "1px solid var(--gray-300)", borderRadius: 6,
                                fontSize: 14, color: "var(--gray-900)", background: "white", marginTop: 4,
                            }}
                            defaultValue={domain}
                        >
                            <option>{domain}</option>
                        </select>
                    </div>
                </div>

                <div style={{ borderTop: "1px solid var(--gray-200)", paddingTop: 16 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                        <h4 style={{ fontSize: 15, fontWeight: 600, margin: 0 }}>
                            Create an email format for all unmatched users
                        </h4>
                        <span className={styles.limitedBadge}>Create credentials</span>
                    </div>
                    <p style={{ fontSize: 14, color: "var(--gray-600)", lineHeight: 1.5, margin: "0 0 12px 0" }}>
                        To create an email format for {userType}, combine a username and a domain.
                        Clever IDM will only use this format if the user&apos;s email address isn&apos;t
                        populated in Clever already.
                    </p>
                    <div style={{
                        background: "var(--gray-50)", border: "1px solid var(--gray-200)",
                        borderRadius: 6, padding: "10px 16px", display: "flex", gap: 8, flexWrap: "wrap",
                        marginBottom: 8,
                    }}>
                        {credential.emailTokens.map((token, i) => (
                            <span key={i} style={{
                                background: "#c084fc", color: "white", padding: "4px 10px",
                                borderRadius: 14, fontSize: 13, fontWeight: 500,
                            }}>
                                {token}
                            </span>
                        ))}
                    </div>
                    <a href="#" className={styles.helpLink} onClick={(e) => e.preventDefault()}
                        style={{ fontSize: 14 }}>
                        Edit your format
                    </a>

                    <div className={styles.card} style={{ background: "var(--gray-50)", marginTop: 12 }}>
                        <div style={{ fontSize: 14, color: "var(--gray-700)" }}>
                            👁 {sample.name}&apos;s email format
                        </div>
                        <div style={{ fontSize: 14, marginTop: 4 }}>
                            <strong>Example email</strong> {sample.exampleEmail}
                        </div>
                    </div>
                    <a href="#" className={styles.helpLink} onClick={(e) => e.preventDefault()}
                        style={{ fontSize: 14 }}>
                        Add fallback create format ℹ️
                    </a>
                </div>
            </div>

            <div className={styles.nextBtnRow}>
                <button className={styles.nextBtn} onClick={onBack}>
                    Next Step
                </button>
            </div>

            <div className={styles.helpBanner}>
                <span className={styles.helpBannerIcon}>⚙️</span>
                <span className={styles.helpBannerText}>
                    Need help setting up your login credentials? Check out the{" "}
                    <a href="#" className={styles.helpLink} onClick={(e) => e.preventDefault()}>
                        Set login credentials section
                    </a>{" "}
                    of our Clever IDM course in Clever Academy!
                </span>
            </div>
        </>
    );
}

export default function SetCredentialsStep({ state, updateState, goNext }) {
    const [editingType, setEditingType] = useState(null);

    // Count completed credential steps
    const types = [];
    if (state.provisionStudents) types.push("students");
    if (state.provisionTeachers) types.push("teachers");
    if (state.provisionStaff) types.push("staff");
    const completedCount = types.filter((t) => state.credentials[t].completed).length;

    const samples = { students: SAMPLE_STUDENT, teachers: SAMPLE_TEACHER, staff: SAMPLE_STAFF };
    const labels = { students: "Student", teachers: "Teacher", staff: "Staff" };

    if (editingType) {
        return (
            <CredentialEditView
                title={`${labels[editingType]}`}
                userType={editingType}
                credential={state.credentials[editingType]}
                sample={samples[editingType]}
                state={state}
                updateState={updateState}
                onBack={() => setEditingType(null)}
            />
        );
    }

    return (
        <>
            <div className={styles.infoBanner}>
                <span className={styles.infoBannerIcon}>ℹ️</span>
                <span className={styles.infoBannerText}>
                    Clever IDM identifies and matches existing Google accounts automatically.
                    Users with the same email address in Clever and Google will be matched and updated.
                    Make sure existing Google email addresses are updated in your SIS so Clever can match them.
                </span>
            </div>

            <h1 className={styles.stepTitle}>Set login credentials</h1>

            <div className={styles.progressRow}>
                <div className={styles.progressBar}>
                    <div
                        className={styles.progressFill}
                        style={{ width: `${(completedCount / types.length) * 100}%` }}
                    />
                </div>
                <span className={styles.progressText}>
                    {completedCount} of {types.length} steps
                </span>
            </div>

            <div className={styles.cardGrid}>
                {state.provisionStudents && (
                    <CredentialCard
                        title="Student credentials"
                        credential={state.credentials.students}
                        onEdit={() => setEditingType("students")}
                    />
                )}
                {state.provisionTeachers && (
                    <CredentialCard
                        title="Teacher credentials"
                        credential={state.credentials.teachers}
                        onEdit={() => setEditingType("teachers")}
                    />
                )}
                {state.provisionStaff && (
                    <CredentialCard
                        title="Staff credentials"
                        credential={state.credentials.staff}
                        onEdit={() => setEditingType("staff")}
                    />
                )}
            </div>

            <div className={styles.helpBanner}>
                <span className={styles.helpBannerIcon}>⚙️</span>
                <span className={styles.helpBannerText}>
                    Need help setting up your login credentials? Check out the{" "}
                    <a href="#" className={styles.helpLink} onClick={(e) => e.preventDefault()}>
                        Set login credentials section
                    </a>{" "}
                    of our Clever IDM course in Clever Academy!
                </span>
            </div>

            <div className={styles.nextBtnRow}>
                <button className={styles.nextBtn} onClick={goNext}>
                    Organize OUs
                </button>
            </div>
        </>
    );
}
