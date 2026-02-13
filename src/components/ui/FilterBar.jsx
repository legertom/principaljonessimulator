"use client";

/**
 * Reusable filter bar component for filtering and searching data.
 *
 * Usage:
 *   import { FilterBar } from "@/components/ui";
 *
 *   <FilterBar
 *     filters={[
 *       {
 *         label: "User Type",
 *         options: [
 *           { value: "", label: "All" },
 *           { value: "admin", label: "Admin" }
 *         ]
 *       },
 *       {
 *         label: "Role",
 *         options: [
 *           { value: "", label: "All" }
 *         ]
 *       }
 *     ]}
 *     searchPlaceholder="Search"
 *     onSearchChange={(value) => console.log(value)}
 *   />
 */

import { Icons } from "./Icons";
import styles from "./FilterBar.module.css";

export function FilterBar({
    filters = [],
    searchPlaceholder,
    onSearchChange,
    className = ""
}) {
    return (
        <div className={`${styles.filters} ${className}`}>
            {filters.length > 0 && (
                <div className={styles.filterGroup}>
                    {filters.map((filter, index) => (
                        <div key={index} className={styles.filterItem}>
                            <label className={styles.filterLabel}>{filter.label}</label>
                            <select
                                className={styles.select}
                                value={filter.value}
                                onChange={filter.onChange}
                            >
                                {filter.options.map((option, optIndex) => (
                                    <option key={optIndex} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    ))}
                </div>
            )}
            {searchPlaceholder && (
                <div className={styles.searchWrapper}>
                    {Icons.search}
                    <input
                        type="text"
                        placeholder={searchPlaceholder}
                        className={styles.searchInput}
                        onChange={(e) => onSearchChange?.(e.target.value)}
                    />
                </div>
            )}
        </div>
    );
}

export default FilterBar;
