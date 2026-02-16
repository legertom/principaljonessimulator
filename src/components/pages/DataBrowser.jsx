"use client";

import { useState } from "react";
import { useScenario } from "@/context/ScenarioContext";
import styles from "./DataBrowser.module.css";
import { Icon } from "@/components/ui/Icons";
import { DataTable } from "@/components/ui/DataTable";

export default function DataBrowser() {
    const { scenario } = useScenario();
    const {
        tabs: TABS,
        schools: SCHOOLS_DATA,
        students: STUDENTS_DATA,
        teachers: TEACHERS_DATA,
        staff: STAFF_DATA,
        sections: SECTIONS_DATA,
        terms: TERMS_DATA,
        courses: COURSES_DATA,
        contacts: CONTACTS_DATA
    } = scenario.dataBrowser;

    const [activeTab, setActiveTab] = useState("Schools");
    const [currentPage, setCurrentPage] = useState(1);

    const renderSchoolsTable = () => {
        const columns = [
            {
                key: "name",
                header: "Name",
                sortable: true,
                render: (row) => <span className={styles.schoolName}>{row.name}</span>
            },
            { key: "city", header: "City", sortable: true },
            { key: "state", header: "State", sortable: true },
            {
                key: "students",
                header: "Students",
                sortable: false,
                render: (row) => row.students.link ? (
                    <a href="#" className={styles.link}>{row.students.value}</a>
                ) : (
                    row.students.value
                )
            },
            { key: "dataSource", header: "Data Source", sortable: false },
            {
                key: "sections",
                header: "Sections",
                sortable: false,
                render: (row) => row.sections.link ? (
                    <a href="#" className={styles.link}>{row.sections.value}</a>
                ) : (
                    row.sections.value
                )
            },
            {
                key: "teachers",
                header: "Teachers",
                sortable: false,
                render: (row) => row.teachers.link ? (
                    <a href="#" className={styles.link}>{row.teachers.value}</a>
                ) : (
                    row.teachers.value
                )
            },
            {
                key: "lastModified",
                header: "Last Modified",
                sortable: true,
                render: (row) => (
                    <span className={styles.lastModified}>
                        <span className={styles.modifiedDate}>{row.lastModified.date}</span>
                        <span className={styles.modifiedTime}>{row.lastModified.time}</span>
                    </span>
                )
            }
        ];

        return (
            <div className={styles.tableWrapper}>
                <DataTable columns={columns} data={SCHOOLS_DATA} />
            </div>
        );
    };

    const renderStudentsTable = () => {
        const columns = [
            { key: "school", header: "School", sortable: true },
            { key: "first", header: "First", sortable: true },
            { key: "last", header: "Last", sortable: true },
            { key: "gender", header: "Gender", sortable: true },
            { key: "dataSource", header: "Data Source", sortable: false },
            { key: "dob", header: "Dob", sortable: true },
            { key: "grade", header: "Grade", sortable: true },
            {
                key: "lastModified",
                header: "Last Modified",
                sortable: true,
                render: (row) => (
                    <span className={styles.lastModified}>
                        <span className={styles.modifiedDate}>{row.lastModified.date}</span>
                        <span className={styles.modifiedTime}>{row.lastModified.time}</span>
                    </span>
                )
            }
        ];

        return (
            <div className={styles.tableWrapper}>
                <DataTable columns={columns} data={STUDENTS_DATA} />
                <div className={styles.pagination}>
                    <button className={`${styles.pageButton} ${styles.navButton}`}>Prev</button>
                    <button className={`${styles.pageButton} ${currentPage === 1 ? styles.activePage : ""}`} onClick={() => setCurrentPage(1)}>1</button>
                    <button className={`${styles.pageButton} ${currentPage === 2 ? styles.activePage : ""}`} onClick={() => setCurrentPage(2)}>2</button>
                    <button className={`${styles.pageButton} ${currentPage === 3 ? styles.activePage : ""}`} onClick={() => setCurrentPage(3)}>3</button>
                    <button className={`${styles.pageButton} ${currentPage === 4 ? styles.activePage : ""}`} onClick={() => setCurrentPage(4)}>4</button>
                    <button className={`${styles.pageButton} ${currentPage === 5 ? styles.activePage : ""}`} onClick={() => setCurrentPage(5)}>5</button>
                    <span className={styles.pageButton}>...</span>
                    <button className={`${styles.pageButton} ${styles.navButton}`}>Next</button>
                </div>
            </div>
        );
    };

    const renderTeachersTable = () => {
        const columns = [
            { key: "school", header: "School", sortable: true },
            { key: "first", header: "First", sortable: true },
            { key: "last", header: "Last", sortable: true },
            { key: "title", header: "Title", sortable: true },
            { key: "dataSource", header: "Data Source", sortable: false },
            {
                key: "email",
                header: "Email",
                sortable: true,
                render: (row) => <span className={styles.link}>{row.email}</span>
            },
            {
                key: "lastModified",
                header: "Last Modified",
                sortable: true,
                render: (row) => (
                    <span className={styles.lastModified}>
                        <span className={styles.modifiedDate}>{row.lastModified.date}</span>
                        <span className={styles.modifiedTime}>{row.lastModified.time}</span>
                    </span>
                )
            }
        ];

        return (
            <div className={styles.tableWrapper}>
                <DataTable columns={columns} data={TEACHERS_DATA} />
                <div className={styles.pagination}>
                    <button className={`${styles.pageButton} ${styles.navButton}`}>Prev</button>
                    <button className={`${styles.pageButton} ${currentPage === 1 ? styles.activePage : ""}`} onClick={() => setCurrentPage(1)}>1</button>
                    <button className={`${styles.pageButton} ${currentPage === 2 ? styles.activePage : ""}`} onClick={() => setCurrentPage(2)}>2</button>
                    <button className={`${styles.pageButton} ${styles.navButton}`}>Next</button>
                </div>
            </div>
        );
    };

    const renderStaffTable = () => {
        const columns = [
            { key: "first", header: "First", sortable: true },
            { key: "last", header: "Last", sortable: true },
            { key: "title", header: "Title", sortable: true },
            {
                key: "email",
                header: "Email",
                sortable: true,
                render: (row) => <span className={styles.link}>{row.email}</span>
            },
            { key: "dataSource", header: "Data Source", sortable: false },
            {
                key: "lastModified",
                header: "Last Modified",
                sortable: true,
                render: (row) => (
                    <span className={styles.lastModified}>
                        <span className={styles.modifiedDate}>{row.lastModified.date}</span>
                        <span className={styles.modifiedTime}>{row.lastModified.time}</span>
                    </span>
                )
            }
        ];

        return (
            <div className={styles.tableWrapper}>
                <DataTable columns={columns} data={STAFF_DATA} />
            </div>
        );
    };

    const renderSectionsTable = () => {
        const columns = [
            { key: "school", header: "School", sortable: true },
            {
                key: "name",
                header: "Name",
                sortable: true,
                render: (row) => <span className={styles.schoolName}>{row.name}</span>
            },
            { key: "grade", header: "Grade", sortable: true },
            { key: "subject", header: "Subject", sortable: true },
            { key: "dataSource", header: "Data Source", sortable: false },
            { key: "teacher", header: "Primary Teacher", sortable: true },
            {
                key: "course",
                header: "Course",
                sortable: true,
                render: (row) => <span className={styles.link}>{row.course}</span>
            },
            {
                key: "term",
                header: "Term",
                sortable: true,
                render: (row) => <span className={styles.link}>{row.term}</span>
            },
            { key: "students", header: "Students", sortable: true },
            {
                key: "lastModified",
                header: "Last Modified",
                sortable: true,
                render: (row) => (
                    <span className={styles.lastModified}>
                        <span className={styles.modifiedDate}>{row.lastModified.date}</span>
                        <span className={styles.modifiedTime}>{row.lastModified.time}</span>
                    </span>
                )
            }
        ];

        return (
            <>
                <div className={styles.warningBanner}>
                    <Icon name="warning" size={18} className={styles.warningIcon} />
                    <span>
                        Sections refer to the individual instance of a course, such as a 2nd period Algebra class taught by a specific teacher. Learn more about <a href="#" className={styles.infoLink}>sections</a>.
                    </span>
                </div>
                <div className={styles.tableWrapper}>
                    <DataTable columns={columns} data={SECTIONS_DATA} />
                    <div className={styles.pagination}>
                        <button className={`${styles.pageButton} ${styles.navButton}`}>Prev</button>
                        <button className={`${styles.pageButton} ${currentPage === 1 ? styles.activePage : ""}`} onClick={() => setCurrentPage(1)}>1</button>
                        <button className={`${styles.pageButton} ${currentPage === 2 ? styles.activePage : ""}`} onClick={() => setCurrentPage(2)}>2</button>
                        <button className={`${styles.pageButton} ${currentPage === 3 ? styles.activePage : ""}`} onClick={() => setCurrentPage(3)}>3</button>
                        <button className={`${styles.pageButton} ${styles.navButton}`}>Next</button>
                    </div>
                </div>
            </>
        );
    };

    const renderTermsTable = () => {
        const columns = [
            {
                key: "name",
                header: "Name",
                sortable: false,
                render: (row) => <span className={styles.schoolName}>{row.name}</span>
            },
            { key: "start", header: "Start Date", sortable: false },
            { key: "end", header: "End Date", sortable: false },
            { key: "cleverId", header: "Clever ID", sortable: false },
            {
                key: "created",
                header: "Created",
                sortable: false,
                render: (row) => (
                    <span className={styles.lastModified}>
                        <span className={styles.modifiedDate}>{row.created.date}</span>
                        <span className={styles.modifiedTime}>{row.created.time}</span>
                    </span>
                )
            },
            {
                key: "sections",
                header: "Sections",
                sortable: false,
                render: (row) => <span className={styles.link}>{row.sections}</span>
            },
            {
                key: "lastModified",
                header: "Last Modified",
                sortable: false,
                render: (row) => (
                    <span className={styles.lastModified}>
                        <span className={styles.modifiedDate}>{row.lastModified.date}</span>
                        <span className={styles.modifiedTime}>{row.lastModified.time}</span>
                    </span>
                )
            }
        ];

        return (
            <div className={styles.tableWrapper}>
                <DataTable columns={columns} data={TERMS_DATA} />
            </div>
        );
    };

    const renderCoursesTable = () => {
        const columns = [
            { key: "number", header: "Number", sortable: true },
            {
                key: "name",
                header: "Name",
                sortable: true,
                render: (row) => <span className={styles.schoolName}>{row.name}</span>
            },
            { key: "cleverId", header: "Clever ID", sortable: false },
            {
                key: "sections",
                header: "Sections",
                sortable: false,
                render: (row) => <span className={styles.link}>{row.sections}</span>
            },
            {
                key: "lastModified",
                header: "Last Modified",
                sortable: true,
                render: (row) => (
                    <span className={styles.lastModified}>
                        <span className={styles.modifiedDate}>{row.lastModified.date}</span>
                        <span className={styles.modifiedTime}>{row.lastModified.time}</span>
                    </span>
                )
            }
        ];

        return (
            <div className={styles.tableWrapper}>
                <DataTable columns={columns} data={COURSES_DATA} />
                <div className={styles.pagination}>
                    <button className={`${styles.pageButton} ${styles.navButton}`}>Prev</button>
                    <button className={`${styles.pageButton} ${currentPage === 1 ? styles.activePage : ""}`} onClick={() => setCurrentPage(1)}>1</button>
                    <button className={`${styles.pageButton} ${currentPage === 2 ? styles.activePage : ""}`} onClick={() => setCurrentPage(2)}>2</button>
                    <button className={`${styles.pageButton} ${currentPage === 3 ? styles.activePage : ""}`} onClick={() => setCurrentPage(3)}>3</button>
                    <button className={`${styles.pageButton} ${styles.navButton}`}>Next</button>
                </div>
            </div>
        );
    };

    const renderContactsTable = () => {
        const columns = [
            { key: "name", header: "Name", sortable: false },
            { key: "email", header: "Email", sortable: false },
            { key: "phone", header: "Phone", sortable: false },
            { key: "students", header: "Students", sortable: false },
            { key: "dataSource", header: "Data Source", sortable: false },
            { key: "lastModified", header: "Last Modified", sortable: false }
        ];

        return (
            <div className={styles.tableWrapper}>
                <DataTable columns={columns} data={[]} />
            </div>
        );
    };

    return (
        <div className={styles.container}>
            <div className={styles.pageTitleRow}>
                <div className={styles.titleSection}>
                    <h1>Data browser</h1>
                    <div className={styles.districtId}>
                        DISTRICT ID:
                        <span className={styles.districtIdValue}>68759062d10d9a9ab79dbe04</span>
                    </div>
                </div>
                <button className={styles.exportButton}>
                    Export {activeTab.toLowerCase()}
                </button>
            </div>

            <div className={styles.infoBanner}>
                <Icon name="portal" size={18} className={styles.infoIcon} />
                <span>
                    Learn to effectively <a href="#" className={styles.infoLink}>browse data here</a>.
                </span>
            </div>

            <nav className={styles.tabsContainer}>
                {TABS.map((tab) => (
                    <button
                        key={tab}
                        className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ""}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </nav>

            <div className={styles.tableActions}>
                <button className={styles.addFilterButton}>Add Filter</button>
                <div className={styles.countText}>
                    {activeTab === "Schools" && "4 schools found"}
                    {activeTab === "Students" && "5,000 students found"}
                    {activeTab === "Teachers" && "25 teachers found"}
                    {activeTab === "Staff" && "15 staff found"}
                    {activeTab === "Sections" && "50 sections found"}
                    {activeTab === "Terms" && "1 term found"}
                    {activeTab === "Courses" && "50 courses found"}
                    {activeTab === "Contacts" && "0 contacts found"}
                </div>
                {(activeTab === "Staff" || activeTab === "Terms" || activeTab === "Courses" || activeTab === "Contacts") && (
                    <div className={styles.learnMoreStaff}>
                        <Icon name="warning" size={16} className={styles.inlineIcon} /> Learn more about <a href="#" className={styles.infoLink}>{activeTab.toLowerCase()}</a>.
                    </div>
                )}
            </div>

            {activeTab === "Schools" ? renderSchoolsTable() :
                activeTab === "Students" ? renderStudentsTable() :
                    activeTab === "Teachers" ? renderTeachersTable() :
                        activeTab === "Staff" ? renderStaffTable() :
                            activeTab === "Sections" ? renderSectionsTable() :
                                activeTab === "Terms" ? renderTermsTable() :
                                    activeTab === "Courses" ? renderCoursesTable() :
                                        activeTab === "Contacts" ? renderContactsTable() : (
                                            <div style={{ padding: "40px", textAlign: "center", color: "#6b7280" }}>
                                                Tab content for {activeTab} will be implemented soon.
                                            </div>
                                        )}
        </div>
    );
}
