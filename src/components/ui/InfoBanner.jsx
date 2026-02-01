"use client";

/**
 * Reusable info banner component for displaying alerts/notices.
 * 
 * Usage:
 *   import { InfoBanner } from "@/components/ui/InfoBanner";
 *   
 *   <InfoBanner variant="info">
 *     Learn more about <a href="#">uploading data</a> in our Help Center.
 *   </InfoBanner>
 *   
 *   <InfoBanner variant="info" accent>
 *     <strong>You can upload roster data securely via SFTP.</strong>
 *   </InfoBanner>
 *   
 *   <InfoBanner variant="warning">
 *     If data is missing, consider troubleshooting.
 *   </InfoBanner>
 * 
 * Variants: "info" (blue), "warning" (gray), "support" (light blue)
 */

import { Icons } from "./Icons";
import styles from "./InfoBanner.module.css";

export function InfoBanner({
    children,
    variant = "info",
    accent = false,
    icon = null,
    className = ""
}) {
    const variantClass = {
        info: accent ? styles.infoAccent : styles.info,
        warning: styles.warning,
        support: styles.support,
    }[variant] || styles.info;

    const defaultIcon = {
        info: Icons.info,
        warning: Icons.xCircle,
        support: Icons.support,
    }[variant];

    return (
        <div className={`${styles.banner} ${variantClass} ${className}`}>
            <span className={styles.icon}>{icon || defaultIcon}</span>
            <div className={styles.content}>{children}</div>
        </div>
    );
}

export default InfoBanner;
