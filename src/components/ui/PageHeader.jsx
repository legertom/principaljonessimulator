"use client";

/**
 * Reusable page header component for top-level page titles and actions.
 *
 * Usage:
 *   import { PageHeader } from "@/components/ui";
 *
 *   <PageHeader
 *     title="My applications"
 *     actions={<button>Add applications</button>}
 *   />
 *
 *   <PageHeader
 *     title="Dashboard"
 *     subtitle="Overview of your district"
 *   />
 */

import styles from "./PageHeader.module.css";

export function PageHeader({
    title,
    subtitle,
    actions,
    className = ""
}) {
    return (
        <div className={`${styles.header} ${className}`}>
            <div className={styles.headerLeft}>
                <h1 className={styles.title}>{title}</h1>
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            </div>
            {actions && <div className={styles.actions}>{actions}</div>}
        </div>
    );
}

export default PageHeader;
