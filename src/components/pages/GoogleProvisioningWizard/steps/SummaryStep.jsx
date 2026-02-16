"use client";

import React from "react";
import styles from "../GoogleProvisioningWizard.module.css";

const CheckIcon = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M3 6l2.5 2.5L9 4" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

function SummaryCard({ title, badge, items, onEdit }) {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <div className={styles.cardTitle}>
                    {title}
                    {badge && (
                        <span className={styles.completedBadge}>
                            <CheckIcon /> Completed
                        </span>
                    )}
                </div>
                <button className={styles.editBtn} onClick={onEdit}>Edit</button>
            </div>
            {items.map((item, i) => (
                <div key={i} style={{ marginTop: i > 0 ? 12 : 0 }}>
                    <div className={styles.cardLabel}>{item.label}</div>
                    <div className={styles.cardValue}>{item.value}</div>
                </div>
            ))}
        </div>
    );
}

function GroupSummaryCard({ title, group, onConfigure }) {
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

export default function SummaryStep({ state, goNext, goToStep, setToast }) {
    const mgmtLabel = state.managementLevel === "full"
        ? "Full Provisioning and Password Management"
        : "Password Management Only";

    const userTypes = [];
    if (state.provisionStudents) userTypes.push("students");
    if (state.provisionTeachers) userTypes.push("teachers");
    if (state.provisionStaff) userTypes.push("staff");

    const handleEditStep = (stepId) => {
        goToStep(stepId);
    };

    return (
        <>
            <h1 className={styles.stepTitle}>Summary</h1>
            <p className={styles.stepDescription}>
                Review your settings to generate a preview of all the accounts that will be created in Google.
            </p>

            {/* Management Level & Users */}
            <div className={styles.cardGrid}>
                <SummaryCard
                    title="Select management level"
                    badge={true}
                    items={[{ label: "MANAGEMENT LEVEL", value: mgmtLabel }]}
                    onEdit={() => handleEditStep("management-level")}
                />
                <SummaryCard
                    title="Select Users"
                    badge={true}
                    items={[{ label: "USER TYPES", value: userTypes.join(", ") }]}
                    onEdit={() => handleEditStep("users")}
                />
            </div>

            {/* Credentials */}
            <div className={styles.summarySection}>
                <h2 className={styles.summarySectionTitle}>Set login credentials</h2>
                <div className={styles.cardGrid}>
                    {state.provisionStudents && (
                        <SummaryCard
                            title="Student credentials"
                            badge={state.credentials.students.completed}
                            items={[
                                { label: "EMAIL", value: state.credentials.students.email },
                                { label: "PASSWORD", value: state.credentials.students.password },
                            ]}
                            onEdit={() => handleEditStep("credentials")}
                        />
                    )}
                    {state.provisionTeachers && (
                        <SummaryCard
                            title="Teacher credentials"
                            badge={state.credentials.teachers.completed}
                            items={[
                                { label: "EMAIL", value: state.credentials.teachers.email },
                                { label: "PASSWORD", value: state.credentials.teachers.password },
                            ]}
                            onEdit={() => handleEditStep("credentials")}
                        />
                    )}
                    {state.provisionStaff && (
                        <SummaryCard
                            title="Staff credentials"
                            badge={state.credentials.staff.completed}
                            items={[
                                { label: "EMAIL", value: state.credentials.staff.email },
                                { label: "PASSWORD", value: state.credentials.staff.password },
                            ]}
                            onEdit={() => handleEditStep("credentials")}
                        />
                    )}
                </div>
            </div>

            {/* OUs */}
            <div className={styles.summarySection}>
                <h2 className={styles.summarySectionTitle}>Organize OUs</h2>
                <div className={styles.cardGrid}>
                    {state.provisionStudents && (
                        <SummaryCard
                            title="Student OUs"
                            badge={state.ous.students.completed}
                            items={[{ label: "OUS CREATED", value: state.ous.students.path }]}
                            onEdit={() => handleEditStep("ous")}
                        />
                    )}
                    {state.provisionTeachers && (
                        <SummaryCard
                            title="Teacher OUs"
                            badge={state.ous.teachers.completed}
                            items={[{ label: "OUS CREATED", value: state.ous.teachers.path }]}
                            onEdit={() => handleEditStep("ous")}
                        />
                    )}
                    {state.provisionStaff && (
                        <SummaryCard
                            title="Staff OUs"
                            badge={state.ous.staff.completed}
                            items={[{ label: "OUS CREATED", value: state.ous.staff.path }]}
                            onEdit={() => handleEditStep("ous")}
                        />
                    )}
                    <SummaryCard
                        title="Archive OU"
                        badge={state.ous.archive.completed}
                        items={[{ label: "ARCHIVE OU", value: state.ous.archive.path }]}
                        onEdit={() => handleEditStep("ous")}
                    />
                    <SummaryCard
                        title="Ignored OUs (optional)"
                        badge={state.ous.ignored.completed}
                        items={[{ label: "IGNORED OUS", value: state.ous.ignored.path }]}
                        onEdit={() => handleEditStep("ous")}
                    />
                </div>
            </div>

            {/* Groups */}
            <div className={styles.summarySection}>
                <h2 className={styles.summarySectionTitle}>Configure groups</h2>
                <div className={styles.cardGrid}>
                    {state.provisionStudents && (
                        <GroupSummaryCard
                            title="Student Groups"
                            group={state.groups.students}
                            onConfigure={() => setToast("Opening student group configuration...")}
                        />
                    )}
                    {state.provisionTeachers && (
                        <GroupSummaryCard
                            title="Teacher Groups"
                            group={state.groups.teachers}
                            onConfigure={() => setToast("Opening teacher group configuration...")}
                        />
                    )}
                    {state.provisionStaff && (
                        <GroupSummaryCard
                            title="Staff Groups"
                            group={state.groups.staff}
                            onConfigure={() => setToast("Opening staff group configuration...")}
                        />
                    )}
                </div>
            </div>

            <div className={styles.helpBanner}>
                <span className={styles.helpBannerIcon}>⚙️</span>
                <span className={styles.helpBannerText}>
                    For additional information please see the{" "}
                    <a href="#" className={styles.helpLink} onClick={(e) => e.preventDefault()}>
                        Summary section
                    </a>{" "}
                    of our Clever IDM course in Clever Academy!
                </span>
            </div>

            <div className={styles.nextBtnRow}>
                <button className={styles.nextBtn} onClick={goNext}>
                    Preview Google Accounts
                </button>
            </div>
        </>
    );
}
