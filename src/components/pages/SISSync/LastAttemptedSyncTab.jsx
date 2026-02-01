"use client";

/**
 * LastAttemptedSync tab content for the SIS Sync page.
 * Shows sync data table with record types, counts, and download options.
 */

import styles from "../SISSync.module.css";
import { Icons, InfoBanner } from "@/components/ui";

export function LastAttemptedSyncTab({ data, bannerVariant, bannerText }) {
    // Fallback data if none provided (for safety)
    const displayData = data || [];

    return (
        <>
            <InfoBanner variant={bannerVariant || "warning"}>
                {bannerText || "If data is missing or incorrect in Clever, consider downloading the SIS data below and ensuring it's being sent from your SIS to Clever. Learn more about "}
                <a href="#">troubleshooting missing/incorrect data</a>.
            </InfoBanner>

            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Record Type</th>
                            <th>Existing</th>
                            <th>Created</th>
                            <th>Updated</th>
                            <th>Deleted</th>
                            <th>Errors</th>
                            <th>Download Changes</th>
                            <th>Download SIS File</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayData.map((row) => (
                            <tr key={row.type}>
                                <td><strong>{row.type}</strong></td>
                                <td>{row.existing}</td>
                                <td><strong>{row.created}</strong></td>
                                <td><strong>{row.updated}</strong></td>
                                <td><strong>{row.deleted}</strong></td>
                                <td>
                                    {row.errors > 0 ? (
                                        <span className={styles.errorText}>
                                            {row.errors} <span className={styles.warningIcon}>{Icons.warning}</span>
                                        </span>
                                    ) : (
                                        <strong>0</strong>
                                    )}
                                </td>
                                <td>
                                    {row.hasChanges && <span className={styles.downloadIcon}>{Icons.download}</span>}
                                </td>
                                <td>
                                    {row.hasDownload && <span className={styles.downloadIcon}>{Icons.download}</span>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default LastAttemptedSyncTab;
