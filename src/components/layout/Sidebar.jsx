"use client";

import { useState } from "react";
import { useScenario } from "@/context/ScenarioContext";
import styles from "./Sidebar.module.css";
import { Icons } from "@/components/ui/Icons";

export default function Sidebar({ activeNav, onNavChange }) {
    const { scenario } = useScenario();
    const { navItems, districtInfo } = scenario.sidebar;

    const [expandedItems, setExpandedItems] = useState(["applications"]);
    const [activeSubItem, setActiveSubItem] = useState("my-applications");

    const toggleExpand = (itemId) => {
        setExpandedItems(prev =>
            prev.includes(itemId)
                ? [] // Close if already open
                : [itemId] // Open this one and close others
        );
    };

    const handleNavClick = (item) => {
        if (item.children) {
            toggleExpand(item.id);
        } else {
            onNavChange(item.id);
        }
    };

    const handleSubItemClick = (parentId, subItem) => {
        setActiveSubItem(subItem.id);
        onNavChange(subItem.id);
        // Ensure only parent is expanded
        setExpandedItems([parentId]);
    };

    return (
        <aside className={styles.sidebar}>
            {/* Clever Logo */}
            <div className={styles.logo}>
                <span className={styles.logoText}>Clever</span>
            </div>

            {/* District Info */}
            <div className={styles.districtInfo}>
                <span className={styles.districtName}>{districtInfo.name}</span>
            </div>

            {/* Navigation */}
            <nav className={styles.nav}>
                {navItems.map((item) => {
                    const isExpanded = expandedItems.includes(item.id);
                    const hasChildren = item.children && item.children.length > 0;
                    const isActive = activeNav === item.id ||
                        (hasChildren && item.children.some(child => child.id === activeSubItem));

                    return (
                        <div key={item.id} className={styles.navGroup}>
                            <button
                                className={`${styles.navItem} ${isExpanded ? styles.expanded : ""}`}
                                onClick={() => handleNavClick(item)}
                                data-nav-id={item.id}
                            >
                                <span className={styles.navIcon}>
                                    {Icons[item.icon]}
                                </span>
                                <span className={styles.navLabel}>{item.label}</span>
                                {hasChildren && (
                                    <span className={styles.chevron}>
                                        {isExpanded ? Icons.chevronUp : Icons.chevronDown}
                                    </span>
                                )}
                            </button>

                            {/* Submenu */}
                            {hasChildren && isExpanded && (
                                <div className={styles.submenu}>
                                    {item.children.map((child) => (
                                        <button
                                            key={child.id}
                                            className={`${styles.submenuItem} ${activeSubItem === child.id ? styles.active : ""}`}
                                            onClick={() => handleSubItemClick(item.id, child)}
                                            data-nav-id={child.id}
                                        >
                                            {child.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                            {/* Divider after certain items */}
                            {item.hasDividerAfter && <div className={styles.divider} />}
                        </div>
                    );
                })}
            </nav>

            {/* Training & Support */}
            <div className={styles.bottomSection}>
                <button className={styles.navItem}>
                    <span className={styles.navIcon}>
                        {Icons.trainingSupport}
                    </span>
                    <span className={styles.navLabel}>Training & Support</span>
                </button>
            </div>
        </aside>
    );
}
