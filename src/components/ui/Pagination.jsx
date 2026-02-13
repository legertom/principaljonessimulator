"use client";

/**
 * Reusable pagination component for navigating through data.
 *
 * Usage:
 *   import { Pagination } from "@/components/ui";
 *
 *   <Pagination
 *     currentPage={1}
 *     totalPages={10}
 *     onPageChange={(page) => setCurrentPage(page)}
 *   />
 */

import styles from "./Pagination.module.css";

export function Pagination({
    currentPage,
    totalPages,
    onPageChange,
    className = ""
}) {
    const handlePrev = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const renderPageNumbers = () => {
        const pages = [];
        const maxVisible = 5;

        if (totalPages <= maxVisible + 2) {
            // Show all pages if total is small
            for (let i = 1; i <= totalPages; i++) {
                pages.push(
                    <button
                        key={i}
                        className={`${styles.pageBtn} ${i === currentPage ? styles.active : ""}`}
                        onClick={() => onPageChange(i)}
                    >
                        {i}
                    </button>
                );
            }
        } else {
            // Show pages with ellipsis
            pages.push(
                <button
                    key={1}
                    className={`${styles.pageBtn} ${1 === currentPage ? styles.active : ""}`}
                    onClick={() => onPageChange(1)}
                >
                    1
                </button>
            );

            if (currentPage > 3) {
                pages.push(<span key="ellipsis-start">...</span>);
            }

            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);

            for (let i = start; i <= end; i++) {
                pages.push(
                    <button
                        key={i}
                        className={`${styles.pageBtn} ${i === currentPage ? styles.active : ""}`}
                        onClick={() => onPageChange(i)}
                    >
                        {i}
                    </button>
                );
            }

            if (currentPage < totalPages - 2) {
                pages.push(<span key="ellipsis-end">...</span>);
            }

            pages.push(
                <button
                    key={totalPages}
                    className={`${styles.pageBtn} ${totalPages === currentPage ? styles.active : ""}`}
                    onClick={() => onPageChange(totalPages)}
                >
                    {totalPages}
                </button>
            );
        }

        return pages;
    };

    return (
        <div className={`${styles.pagination} ${className}`}>
            <button
                className={styles.pageBtn}
                onClick={handlePrev}
                disabled={currentPage === 1}
            >
                ←
            </button>
            {renderPageNumbers()}
            <button
                className={styles.pageBtn}
                onClick={handleNext}
                disabled={currentPage === totalPages}
            >
                →
            </button>
        </div>
    );
}

export default Pagination;
