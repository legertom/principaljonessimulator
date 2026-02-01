"use client";

/**
 * Reusable status badge component for displaying status indicators.
 * 
 * Usage:
 *   import { StatusBadge } from "@/components/ui/StatusBadge";
 *   
 *   <StatusBadge variant="warning">Out of date</StatusBadge>
 *   <StatusBadge variant="success">Active</StatusBadge>
 *   <StatusBadge variant="error">Failed</StatusBadge>
 *   <StatusBadge variant="mfa">⚠️ Unactivated MFA</StatusBadge>
 * 
 * Variants: "default", "success", "warning", "error", "mfa"
 */

import styles from "./StatusBadge.module.css";

export function StatusBadge({
    children,
    variant = "default",
    className = "",
    onClick
}) {
    const variantClass = styles[variant] || styles.default;

    return (
        <span
            className={`${styles.badge} ${variantClass} ${className}`}
            onClick={onClick}
        >
            {children}
        </span>
    );
}

export default StatusBadge;
