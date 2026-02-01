"use client";

/**
 * Upload tab content for the SIS Sync page.
 * Allows users to upload SIS CSV files via drag and drop or file selection.
 */

import styles from "../SISSync.module.css";
import { Icons } from "@/components/ui";

// Upload file configuration
const uploadFiles = [
    { name: "schools.csv", required: true },
    { name: "students.csv", required: true },
    { name: "teachers.csv", required: true },
    { name: "sections.csv", required: true },
    { name: "enrollments.csv", required: true },
    { name: "staff.csv", required: false, label: "staff.csv (optional)" }
];

export function UploadTab() {
    return (
        <div className={styles.uploadContainer}>
            <h2 className={styles.sectionTitle}>Upload your SIS Files</h2>
            <p className={styles.sectionDesc}>
                Securely upload your SIS data by attaching the six Clever-formatted CSV files you&apos;ve created below. Refer to the provided links for instructions and
                examples on how to format your files. To modify your data, download your SIS files from your <a href="#">last attempted sync</a> and re-upload with your
                changes.
            </p>

            <div className={styles.resourceLinks}>
                <a href="#" className={styles.resourceLink}><span>{Icons.externalLink}</span> View instructions</a>
                <a href="#" className={styles.resourceLink}><span>{Icons.file}</span> SFTP specification</a>
                <a href="#" className={styles.resourceLink}><span>{Icons.download}</span> Download example files</a>
            </div>

            <div className={styles.uploadGrid}>
                {uploadFiles.map((file) => (
                    <div key={file.name} className={styles.uploadCard}>
                        <div className={styles.uploadIcon}>{Icons.upload}</div>
                        <h3 className={styles.uploadTitle}>Upload {file.label || file.name}</h3>
                        <div className={styles.uploadAction}>
                            <span className={styles.chooseFile}>Choose file</span> or drag and drop to upload
                        </div>
                    </div>
                ))}
            </div>

            <button className={styles.uploadBtn} disabled>Upload</button>

            <div className={styles.downloadSection}>
                <h2 className={styles.sectionTitle}>Download existing custom data files</h2>
                <a href="#" className={styles.fileLink}>staff.csv</a>
            </div>
        </div>
    );
}

export default UploadTab;
