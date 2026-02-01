"use client";

/**
 * Reusable dropdown menu for actions.
 * 
 * Usage:
 *   import { DropdownMenu } from "@/components/ui";
 *   
 *   <DropdownMenu
 *     label="Actions"
 *     items={[
 *       { label: "Add team member", onClick: () => {}, highlighted: true },
 *       { label: "Create custom role", onClick: () => {} },
 *     ]}
 *   />
 */

import { useState, useRef, useEffect } from "react";
import { Icons } from "./Icons";
import styles from "./DropdownMenu.module.css";

export function DropdownMenu({
    label = "Actions",
    items = [],
    variant = "primary", // "primary" | "secondary"
    className = ""
}) {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleItemClick = (item) => {
        item.onClick?.();
        setIsOpen(false);
    };

    return (
        <div className={`${styles.container} ${className}`} ref={menuRef}>
            <button
                className={`${styles.trigger} ${styles[variant]}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {label} {isOpen ? Icons.chevronUp : Icons.chevronDown}
            </button>

            {isOpen && (
                <div className={styles.menu}>
                    {items.map((item, index) => (
                        <button
                            key={index}
                            className={`${styles.item} ${item.highlighted ? styles.highlighted : ""}`}
                            onClick={() => handleItemClick(item)}
                            disabled={item.disabled}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default DropdownMenu;
