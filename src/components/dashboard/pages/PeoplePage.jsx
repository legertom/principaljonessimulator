"use client";

import { useState } from "react";
import { useScenario } from "@/context/ScenarioContext";
import { PageHeader, DataTable, Pagination } from "@/components/ui";
import styles from "./PeoplePage.module.css";

export default function PeoplePage() {
    const { scenario } = useScenario();
    const mockPeople = scenario.people.data;

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 50;


    return (
        <div className={styles.page}>
            <PageHeader
                title="People"
                subtitle="Manage teachers, staff, and students across your district"
                actions={
                    <>
                        <button className={styles.secondaryButton}>
                            📥 Import
                        </button>
                        <button className={styles.primaryButton} data-action="add-person">
                            ➕ Add Person
                        </button>
                    </>
                }
            />

            {/* Filters */}
            <div className={styles.filters}>
                <div className={styles.tabs}>
                    <button className={`${styles.tab} ${styles.active}`}>All People</button>
                    <button className={styles.tab}>Teachers</button>
                    <button className={styles.tab}>Staff</button>
                    <button className={styles.tab}>Students</button>
                </div>
                <div className={styles.filterActions}>
                    <input
                        type="text"
                        placeholder="Search people..."
                        className={styles.searchInput}
                    />
                    <button className={styles.filterButton}>
                        🔽 Filter
                    </button>
                </div>
            </div>

            <DataTable
                columns={[
                    {
                        key: "name",
                        header: "Name",
                        sortable: true,
                        render: (row) => (
                            <div className={styles.personCell}>
                                <div className={styles.personAvatar}>
                                    {row.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <span className={styles.personName}>{row.name}</span>
                            </div>
                        )
                    },
                    {
                        key: "email",
                        header: "Email",
                        sortable: true,
                        render: (row) => <span className={styles.emailCell}>{row.email}</span>
                    },
                    {
                        key: "role",
                        header: "Role",
                        sortable: true,
                        render: (row) => (
                            <span className={`${styles.roleBadge} ${styles[row.role.toLowerCase()]}`}>
                                {row.role}
                            </span>
                        )
                    },
                    {
                        key: "school",
                        header: "School",
                        sortable: true
                    },
                    {
                        key: "status",
                        header: "Status",
                        sortable: true,
                        render: (row) => (
                            <span className={`${styles.statusBadge} ${styles[row.status]}`}>
                                {row.status === 'active' ? '✓ Active' : '⏳ Pending'}
                            </span>
                        )
                    },
                    {
                        key: "actions",
                        header: "Actions",
                        render: () => <button className={styles.actionButton}>⋮</button>
                    }
                ]}
                data={mockPeople}
                selectable
            />

            <div className={styles.paginationWrapper}>
                <span className={styles.paginationInfo}>Showing 1-5 of 247 people</span>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
}
