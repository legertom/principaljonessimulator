"use client";

/**
 * SIS Sync page - main component.
 * Split into separate tab components for better maintainability.
 */

import styles from "./SISSync.module.css";
import { useState } from "react";
import { Icons, Tabs, InfoBanner, StatusBadge } from "@/components/ui";
import { demoUsers } from "@/data/demoIdentity";
import {
    LastAttemptedSyncTab,
    SettingsTab,
    UploadTab,
    StaffDataTab
} from "./SISSync/index.js";

const SYNC_STATES = {
    OUT_OF_DATE: {
        id: "OUT_OF_DATE",
        badgeText: "Out of date",
        badgeVariant: "warning",
        statusText: "Your authorized applications may have outdated student rosters. Please start another sync to refresh your data.",
        lastSync: "7 months ago",
        bannerVariant: "warning",
        bannerText: "If data is missing or incorrect in Clever, consider downloading the SIS data below and ensuring it's being sent from your SIS to Clever. Learn more about ",
        data: [
            { type: "Schools", existing: 4, created: 0, updated: 0, deleted: 0, errors: 0, hasDownload: true },
            { type: "Students", existing: 14, created: 0, updated: 0, deleted: 0, errors: 0, hasDownload: true },
            { type: "Teachers", existing: 7, created: 0, updated: 0, deleted: 0, errors: 0, hasDownload: true },
            { type: "Sections", existing: 33, created: 0, updated: 0, deleted: 0, errors: 703, hasDownload: true, hasChanges: true },
            { type: "Contacts", existing: 14, created: 0, updated: 0, deleted: 0, errors: 0, hasDownload: false },
            { type: "Courses", existing: 6, created: 0, updated: 0, deleted: 0, errors: 0, hasDownload: false },
            { type: "Terms", existing: 1, created: 0, updated: 0, deleted: 0, errors: 0, hasDownload: false },
            { type: "Staff", existing: 6, created: 0, updated: 0, deleted: 0, errors: 0, hasDownload: true },
            { type: "District Admins", existing: 0, created: 0, updated: 0, deleted: 0, errors: 0, hasDownload: false },
        ]
    },
    SUCCESSFUL: {
        id: "SUCCESSFUL",
        badgeText: "Successful",
        badgeVariant: "success",
        statusText: "Your authorized applications are receiving updated student rosters.",
        lastSync: "4 minutes ago",
        bannerVariant: "info",
        bannerText: "If data is missing or incorrect in Clever, consider downloading the SIS data below and ensuring it's being sent from your SIS to Clever. Learn more about ",
        data: [
            { type: "Schools", existing: 4, created: 3, updated: 0, deleted: 3, errors: 0, hasDownload: true },
            { type: "Students", existing: 14, created: 500, updated: 0, deleted: 14, errors: 0, hasDownload: true },
            { type: "Teachers", existing: 7, created: 25, updated: 0, deleted: 7, errors: 0, hasDownload: true },
            { type: "Sections", existing: 33, created: 50, updated: 0, deleted: 33, errors: 0, hasDownload: true },
            { type: "Contacts", existing: 14, created: 0, updated: 0, deleted: 14, errors: 0, hasDownload: false, hasChanges: true },
            { type: "Courses", existing: 6, created: 50, updated: 0, deleted: 6, errors: 0, hasDownload: false, hasChanges: true },
            { type: "Terms", existing: 1, created: 1, updated: 0, deleted: 1, errors: 0, hasDownload: false, hasChanges: true },
            { type: "Staff", existing: 6, created: 15, updated: 0, deleted: 6, errors: 0, hasDownload: true, hasChanges: true },
            { type: "District Admins", existing: 1, created: 0, updated: 0, deleted: 0, errors: 0, hasDownload: false },
        ]
    }
};

export default function SISSync() {
    const [activeTab, setActiveTab] = useState("Last Attempted Sync");
    const [syncMode, setSyncMode] = useState("SUCCESSFUL");

    const currentSync = SYNC_STATES[syncMode];

    return (
        <div className={styles.page}>

            <div className={styles.header}>
                <div className={styles.searchContainer}>
                    <span className={styles.searchIcon}>{Icons.search}</span>
                    <input
                        type="text"
                        placeholder="Search for users or applications"
                        className={styles.searchInput}
                    />
                </div>
                <div className={styles.headerRight}>
                    <div className={styles.headerLink}>
                        <span className={styles.portalIcon}>{Icons.grid}</span>
                        Portal
                    </div>
                    <div className={styles.userMenu}>
                        {demoUsers.primaryAdmin.firstName} {demoUsers.primaryAdmin.lastName} <span className={styles.chevronDown}>{Icons.chevronDown}</span>
                    </div>
                </div>
            </div>

            <div className={styles.titleRow}>
                <h1 className={styles.title}>Sync</h1>
                <StatusBadge
                    variant={currentSync.badgeVariant}
                    className={styles.clickableBadge}
                    onClick={() => setSyncMode(syncMode === "SUCCESSFUL" ? "OUT_OF_DATE" : "SUCCESSFUL")}
                >
                    {currentSync.badgeText}
                </StatusBadge>
            </div>

            <div className={styles.statusRow}>
                <div className={styles.statusItem}>
                    <div className={styles.statusLabel}>STATUS</div>
                    <div className={styles.statusValue}>
                        {currentSync.statusText}
                    </div>
                </div>
                <div className={styles.statusItem}>
                    <div className={styles.statusLabel}>LAST SYNC</div>
                    <div className={styles.statusValue}>{currentSync.lastSync}</div>
                </div>
                <div className={styles.statusItem}>
                    <div className={styles.statusLabel}>SYNC TYPE</div>
                    <div className={styles.statusValue}>SFTP</div>
                </div>
                <div className={styles.statusItem}>
                    <div className={styles.statusLabel}>SYNC MANAGER</div>
                    <div className={styles.statusValue}>District Administrator</div>
                </div>
            </div>

            <InfoBanner variant="info" icon={Icons.xCircle}>
                Learn more about <a href="#">uploading data to Clever</a> in our Help Center.
            </InfoBanner>

            <Tabs
                tabs={["Last Attempted Sync", "Settings", "Upload", "Staff Data"]}
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />

            {activeTab === "Last Attempted Sync" && (
                <LastAttemptedSyncTab
                    data={currentSync.data}
                    bannerVariant={currentSync.bannerVariant}
                    bannerText={currentSync.bannerText}
                />
            )}
            {activeTab === "Settings" && <SettingsTab />}
            {activeTab === "Upload" && <UploadTab />}
            {activeTab === "Staff Data" && <StaffDataTab />}
        </div>
    );
}
