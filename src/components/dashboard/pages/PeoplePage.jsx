"use client";

import styles from "./PeoplePage.module.css";

const mockPeople = [
    { id: 1, name: "Sarah Johnson", email: "sjohnson@lhusd.edu", role: "Teacher", school: "Lincoln Heights Elementary", status: "active" },
    { id: 2, name: "Michael Chen", email: "mchen@lhusd.edu", role: "Teacher", school: "Lincoln Heights Elementary", status: "active" },
    { id: 3, name: "Emily Rodriguez", email: "erodriguez@lhusd.edu", role: "Teacher", school: "Lincoln Heights Middle", status: "active" },
    { id: 4, name: "James Wilson", email: "jwilson@lhusd.edu", role: "Staff", school: "Lincoln Heights High", status: "pending" },
    { id: 5, name: "Lisa Martinez", email: "lmartinez@lhusd.edu", role: "Teacher", school: "Lincoln Heights Elementary", status: "active" },
];

export default function PeoplePage() {
    return (
        <div className={styles.page}>
            {/* Page Header */}
            <div className={styles.pageHeader}>
                <div>
                    <h1 className={styles.pageTitle}>People</h1>
                    <p className={styles.pageDescription}>
                        Manage teachers, staff, and students across your district
                    </p>
                </div>
                <div className={styles.headerActions}>
                    <button className={styles.secondaryButton}>
                        📥 Import
                    </button>
                    <button className={styles.primaryButton} data-action="add-person">
                        ➕ Add Person
                    </button>
                </div>
            </div>

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

            {/* People Table */}
            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>
                                <input type="checkbox" className={styles.checkbox} />
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>School</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockPeople.map((person) => (
                            <tr key={person.id}>
                                <td>
                                    <input type="checkbox" className={styles.checkbox} />
                                </td>
                                <td>
                                    <div className={styles.personCell}>
                                        <div className={styles.personAvatar}>
                                            {person.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <span className={styles.personName}>{person.name}</span>
                                    </div>
                                </td>
                                <td className={styles.emailCell}>{person.email}</td>
                                <td>
                                    <span className={`${styles.roleBadge} ${styles[person.role.toLowerCase()]}`}>
                                        {person.role}
                                    </span>
                                </td>
                                <td>{person.school}</td>
                                <td>
                                    <span className={`${styles.statusBadge} ${styles[person.status]}`}>
                                        {person.status === 'active' ? '✓ Active' : '⏳ Pending'}
                                    </span>
                                </td>
                                <td>
                                    <button className={styles.actionButton}>⋮</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className={styles.pagination}>
                <span className={styles.paginationInfo}>Showing 1-5 of 247 people</span>
                <div className={styles.paginationButtons}>
                    <button className={styles.paginationButton} disabled>← Previous</button>
                    <button className={`${styles.paginationButton} ${styles.active}`}>1</button>
                    <button className={styles.paginationButton}>2</button>
                    <button className={styles.paginationButton}>3</button>
                    <button className={styles.paginationButton}>...</button>
                    <button className={styles.paginationButton}>50</button>
                    <button className={styles.paginationButton}>Next →</button>
                </div>
            </div>
        </div>
    );
}
