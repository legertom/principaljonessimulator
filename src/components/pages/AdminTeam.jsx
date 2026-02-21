"use client";

import { useState, useMemo } from "react";
import { useSession } from "next-auth/react";
import { useScenario } from "@/context/ScenarioContext";
import styles from "./AdminTeam.module.css";
import { Icons, Icon } from "@/components/ui/Icons";
import { PageHeader } from "@/components/ui/PageHeader";
import { InfoBanner } from "@/components/ui/InfoBanner";
import { Tabs } from "@/components/ui/Tabs";
import { FilterBar } from "@/components/ui/FilterBar";
import { DataTable } from "@/components/ui/DataTable";
import { Pagination } from "@/components/ui/Pagination";
import { Modal } from "@/components/ui/Modal";

export default function AdminTeam() {
    const { scenario } = useScenario();
    const { data: session } = useSession();
    const { members: rawTeamMembers, pageActionsMenu, rowActionsMenu } = scenario.team;

    const teamMembers = useMemo(() => {
        if (!session?.user) return rawTeamMembers;
        return rawTeamMembers.map(member => {
            if (!member.isOwner) return member;
            return {
                ...member,
                name: session.user.name ?? member.name,
                email: session.user.email ?? member.email,
            };
        });
    }, [rawTeamMembers, session]);

    const [activeActionsMenu, setActiveActionsMenu] = useState(null);
    const [pageActionsOpen, setPageActionsOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("Members");
    const [currentPage, setCurrentPage] = useState(1);

    const toggleRowActions = (memberId) => {
        setActiveActionsMenu(activeActionsMenu === memberId ? null : memberId);
        setPageActionsOpen(false);
    };

    const togglePageActions = () => {
        setPageActionsOpen(!pageActionsOpen);
        setActiveActionsMenu(null);
    };

    const columns = [
        {
            key: "name",
            header: "Name",
            sortable: true,
            render: (row) => (
                <span className={styles.nameCell}>
                    {row.name} <span className={styles.userTypeIcon}>{row.userTypeIcon === "sync" ? "🔄" : "📋"}</span>
                </span>
            )
        },
        {
            key: "email",
            header: "Email",
            sortable: true
        },
        {
            key: "roles",
            header: "Roles",
            sortable: true
        },
        {
            key: "title",
            header: "Title",
            sortable: true
        },
        {
            key: "mfaStatus",
            header: "MFA Status",
            sortable: true,
            render: (row) => (
                <span className={styles.mfaBadge}>
                    <span className={styles.warningIcon}>{Icons.warning}</span> {row.mfaStatus}
                </span>
            )
        },
        {
            key: "actions",
            header: "Actions",
            render: (row) => (
                !row.isOwner && (
                    <div className={styles.actionsWrapper}>
                        <button
                            className={styles.rowActionsButton}
                            onClick={() => toggleRowActions(row.id)}
                        >
                            Actions {activeActionsMenu === row.id ? Icons.chevronUp : Icons.chevronDown}
                        </button>
                        {activeActionsMenu === row.id && (
                            <div className={styles.dropdown}>
                                {rowActionsMenu.map((item, index) => (
                                    <button
                                        key={index}
                                        className={styles.dropdownItem}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                )
            )
        }
    ];

    return (
        <div className={styles.page}>
            {/* Page Header */}
            <PageHeader
                title="Team"
                actions={
                    <div className={styles.actionsWrapper}>
                        <button
                            className={styles.actionsButton}
                            onClick={togglePageActions}
                        >
                            Actions {pageActionsOpen ? Icons.chevronUp : Icons.chevronDown}
                        </button>
                        {pageActionsOpen && (
                            <div className={styles.dropdown}>
                                {pageActionsMenu.map((item, index) => (
                                    <button
                                        key={index}
                                        className={`${styles.dropdownItem} ${item.isHighlighted ? styles.dropdownItemHighlighted : ""}`}
                                        onClick={() => {
                                            if (item.label === "Add team member") {
                                                setIsAddModalOpen(true);
                                                setPageActionsOpen(false);
                                            }
                                        }}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                }
            />

            {/* Info Banner */}
            <InfoBanner variant="info">
                Clever requires Multi-Factor Authentication for all Clever Admin. Learn more about this feature{" "}
                <a href="#" className={styles.link}>here</a>.
            </InfoBanner>

            {/* Tabs */}
            <Tabs
                tabs={["Members", "Roles", "Access control", "Role settings"]}
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />

            {/* Filters */}
            <FilterBar
                filters={[
                    {
                        label: "User Type",
                        options: [{ value: "", label: "All" }]
                    },
                    {
                        label: "Role",
                        options: [{ value: "", label: "All" }]
                    }
                ]}
                searchPlaceholder="Search"
            />

            {/* Data Table */}
            <DataTable
                columns={columns}
                data={teamMembers}
            />

            {/* Pagination */}
            <Pagination
                currentPage={currentPage}
                totalPages={1}
                onPageChange={setCurrentPage}
            />

            {/* Add Team Member Modal */}
            <Modal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                title="Add team member"
            >
                <div className={styles.infoBox}>
                    <Icon name="portal" size={16} />
                    <span>Learn more about user roles and permissions in our <a href="#">Help Center</a>.</span>
                </div>

                <div className={styles.modalForm}>
                    <div className={styles.inputGroup}>
                        <label>First name</label>
                        <input type="text" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Last name</label>
                        <input type="text" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Email</label>
                        <input type="email" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Title</label>
                        <input type="text" />
                    </div>

                    <div className={styles.rolesSection}>
                        <div className={styles.rolesHeader}>
                            <span>Default roles</span>
                            <Icon name="info" size={16} className={styles.roleInfoIcon} />
                        </div>
                        <div className={styles.roleOptions}>
                            <label className={styles.roleOption}>
                                <input type="checkbox" className={styles.checkbox} />
                                <span>Clever Admin</span>
                            </label>
                            <label className={styles.roleOption}>
                                <input type="checkbox" className={styles.checkbox} />
                                <span>District Curriculum Lead</span>
                            </label>
                            <label className={styles.roleOption}>
                                <input type="checkbox" className={styles.checkbox} />
                                <span>District Help Desk</span>
                            </label>
                        </div>
                        <p className={styles.roleHint}>
                            School Tech Lead roles are created and assigned on the <a href="#">custom staff page</a>.
                        </p>
                    </div>

                    <div className={styles.modalActions}>
                        <button className={styles.saveButton} onClick={() => setIsAddModalOpen(false)}>Save</button>
                        <button className={styles.cancelButton} onClick={() => setIsAddModalOpen(false)}>Cancel</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
