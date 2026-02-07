"use client";

import { useState } from "react";
import { useInstructional } from "@/context/InstructionalContext";
import styles from "./IDM.module.css";

const ChevronDown = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
    </svg>
);

const LockIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
);

const ClockIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);

const ShieldIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
);

const CheckCircle = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1464ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
);

const GoogleLogo = () => (
    <div className={styles.googleLogo} aria-hidden>
        <span className={styles.googleBlue}>G</span>
    </div>
);

const DownloadIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
);

const SearchIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);

const RefreshIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.12-3.36L23 10" />
        <path d="M20.49 15a9 9 0 0 1-14.12 3.36L1 14" />
    </svg>
);

const CalendarIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
);

const PlusCircle = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
);

const TrashIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 6 5 6 21 6" />
        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
        <line x1="10" y1="11" x2="10" y2="17" />
        <line x1="14" y1="11" x2="14" y2="17" />
    </svg>
);

const PencilIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="m16.5 3.5 4 4L7 21l-4 1 1-4 12.5-14.5z" />
    </svg>
);

const SortIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 3 18 9" />
        <polyline points="6 15 12 21 18 15" />
    </svg>
);

const CheckIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const features = [
    "Provision, manage, and archive students, teachers, and staff",
    "Password management",
    "Group membership management",
    "Audit reporting and daily email alerts for sync issues",
    "Setup guidance",
];

const syncHistoryRows = [
    "February 6th 2026 4:45am",
    "February 5th 2026 4:45am",
    "February 4th 2026 4:45am",
    "February 3rd 2026 4:45am",
    "February 2nd 2026 4:45am",
    "February 1st 2026 4:45am",
    "January 31st 2026 4:45am",
    "January 30th 2026 4:45am",
    "January 29th 2026 4:45am",
    "January 28th 2026 4:45am",
    "January 27th 2026 4:45am",
    "January 26th 2026 4:45am",
    "January 25th 2026 4:45am",
    "January 24th 2026 4:45am",
    "January 23rd 2026 4:45am",
    "January 22nd 2026 4:45am",
];

const eventRows = [
    {
        date: "Dec 19, 2025; 04:45:53 a.m. EST",
        event: "Created",
        destination: "Google Workspace",
        user: "Marcus Hettinger",
        sisId: "accf5d2b-ba4d-420b-b7d6-2d83b897ddb1",
    },
    {
        date: "Dec 19, 2025; 04:45:53 a.m. EST",
        event: "Created",
        destination: "Google Workspace",
        user: "Vergie Herman-Baumbach",
        sisId: "d2d08cee-de34-4466-982b-248cba281660",
    },
    {
        date: "Dec 19, 2025; 04:45:53 a.m. EST",
        event: "Created",
        destination: "Google Workspace",
        user: "Ashley Leannon",
        sisId: "9f271a86-8e30-4d9e-89c6-be9243348969",
    },
    {
        date: "Dec 19, 2025; 04:45:53 a.m. EST",
        event: "Created",
        destination: "Google Workspace",
        user: "Otis Nicolas",
        sisId: "d1b5063d-5d04-4331-8284-66ee751f0445",
    },
    {
        date: "Dec 19, 2025; 04:45:53 a.m. EST",
        event: "Created",
        destination: "Google Workspace",
        user: "Marjolaine Kutch",
        sisId: "6ab3643c-e5ce-4d2f-b650-7135ce4ddc2b",
    },
    {
        date: "Dec 19, 2025; 04:45:53 a.m. EST",
        event: "Created",
        destination: "Google Workspace",
        user: "Quentin Beier",
        sisId: "9b56312c-a87e-4145-bcf3-dd366f2c5b69",
    },
    {
        date: "Dec 19, 2025; 04:45:52 a.m. EST",
        event: "Created",
        destination: "Google Workspace",
        user: "Claudie Cummings",
        sisId: "6e58c69d-f2e7-447f-875a-312222a25e7a",
    },
    {
        date: "Dec 19, 2025; 04:45:52 a.m. EST",
        event: "Created",
        destination: "Google Workspace",
        user: "Drake Kohler",
        sisId: "ab9f54d3-f0f0-4e8f-a18f-8ab7a9e04fe7",
    },
];

const EVENT_FILTER_PROPERTIES = [
    { key: "eventType", label: "Event Type" },
    { key: "destination", label: "Destination" },
    { key: "sisId", label: "SIS ID" },
    { key: "user", label: "User" },
];

const EVENT_TYPE_OPTIONS = ["Created", "Updated", "Archived", "Matched"];
const DESTINATION_OPTIONS = ["Google Workspace"];
const USER_OPTIONS = [...new Set(eventRows.map((row) => row.user))];
const SIS_ID_OPTIONS = [...new Set(eventRows.map((row) => row.sisId))];
const CREDENTIAL_ROLE_META = {
    students: {
        singularTitle: "Student",
        pluralLabel: "students",
        previewUserName: "Rogelio Waelchi",
        preview: [
            ["SIS Email", "rogelio_waelchi63@maytonlyceum.com"],
            ["District Username", "rogelio_waelchi63"],
            ["District Password", "********"],
            ["Graduation Year", "2031"],
            ["SIS ID", "b452e96-7f29-4890-bde9-beb2996bee71"],
            ["State ID", "XVLLJSDS8AUP"],
            ["Student Number", "00001"],
            ["Birthday", "05/12/2013"],
        ],
    },
    teachers: {
        singularTitle: "Teacher",
        pluralLabel: "teachers",
        previewUserName: "Janelle Rivera",
        preview: [
            ["SIS Email", "janelle.rivera@maytonlyceum.com"],
            ["District Username", "jrivera"],
            ["District Password", "********"],
            ["SIS ID", "t-23492d-8d21"],
            ["State ID", "TCA881109"],
            ["Teacher Number", "0420"],
            ["Staff ID", "91284"],
            ["Birthday", "08/19/1986"],
        ],
    },
    staff: {
        singularTitle: "Staff",
        pluralLabel: "staff",
        previewUserName: "Morgan Hayes",
        preview: [
            ["SIS Email", "morgan.hayes@maytonlyceum.com"],
            ["District Username", "mhayes"],
            ["District Password", "********"],
            ["SIS ID", "s-9282-3421"],
            ["State ID", "STA272992"],
            ["Title", "Registrar"],
            ["Staff ID", "44590"],
            ["Birthday", "02/03/1982"],
        ],
    },
};

const GROUP_ROLE_META = {
    students: {
        title: "Student Groups",
        singular: "Student",
        managedUserLabel: "students",
    },
    teachers: {
        title: "Teacher Groups",
        singular: "Teacher",
        managedUserLabel: "teachers",
    },
    staff: {
        title: "Staff Groups",
        singular: "Staff",
        managedUserLabel: "staff users",
    },
};

const CHECK_USER_ROLE_LABELS = {
    students: "Student",
    teachers: "Teacher",
    staff: "Staff",
};

const CHECK_USER_DIRECTORY = [
    {
        id: "student-rogelio-waelchi",
        role: "students",
        name: "Rogelio Waelchi",
        email: "rogelio_waelchi63@maytonlyceum.com",
        previewAction: "Create",
        summary: "A Google account will be created for this user when you click Provision Google.",
    },
    {
        id: "teacher-janelle-rivera",
        role: "teachers",
        name: "Janelle Rivera",
        email: "janelle.rivera@maytonlyceum.com",
        previewAction: "No changes",
        summary: "This user is already matched and does not have updates in the current preview.",
    },
    {
        id: "teacher-drake-kohler",
        role: "teachers",
        name: "Drake Kohler",
        email: "drake.kohler@maytonlyceum.com",
        previewAction: "No changes",
        summary: "This user is shared with IDM and is already up to date.",
    },
    {
        id: "staff-morgan-hayes",
        role: "staff",
        name: "Morgan Hayes",
        email: "morgan.hayes@maytonlyceum.com",
        previewAction: "No changes",
        summary: "This user is shared with IDM and does not have pending create, update, or archive actions.",
    },
];

const ARCHIVE_ACTION_OPTIONS = [
    {
        key: "move_suspend_archive",
        label: "Move to archive OU, suspend, and archive.",
        showGoogleHelp: true,
    },
    {
        key: "move_suspend",
        label: "Move to archive OU and suspend",
    },
    {
        key: "move_only",
        label: "Move to archive OU",
    },
];

const IGNORED_OU_HANDLING_OPTIONS = [
    {
        key: "auto_suspend",
        label: "Automatically suspend user accounts in ignored OUs when they're removed from Clever.",
    },
    {
        key: "manual_suspend",
        label: "Don't automatically suspend user accounts in ignored OUs when they're removed from Clever. I will suspend these user accounts myself.",
    },
    {
        key: "manual_all",
        label: "Don't match, update, or suspend users in ignored OUs. I will handle these user accounts myself.",
    },
];

const IGNORED_OU_TREE_ROWS = [
    { key: "district-root", label: "Fort Virgilfield Elementary School", value: "/", level: 0, expandable: null },
    { key: "devices", label: "Devices", value: "/Devices", level: 1, expandable: null },
    { key: "students", label: "Students", value: "/Students", level: 1, expandable: "students" },
    { key: "users", label: "Users", value: "/Users", level: 1, expandable: "users" },
];

const IGNORED_OU_STUDENT_CHILD_PATHS = ["/Students/1", "/Students/2", "/Students/3", "/Students/4", "/Students/5"];
const IGNORED_OU_STAFF_CHILD_LABELS = ["Counseling", "District Office", "Operations", "Student Services", "Teachers"];

const GOOGLE_MAPPING_FIELDS = [
    "Type of Employee",
    "Employee ID",
    "Job Title",
    "Department",
    "Cost Center",
    "Address (Home)",
    "Phone (Home)",
    "Manager's Email",
    "Building ID",
];

const CLEVER_MAPPING_FIELDS = [
    "staff.title",
    "staff.department",
    "staff.employee_id",
    "staff.location",
    "staff.manager_email",
    "staff.phone",
];

function splitEmailFormula(formula) {
    const atIndex = formula.indexOf("@");
    if (atIndex === -1) {
        return { localPart: formula, domain: "maytonlyceum.com" };
    }

    return {
        localPart: formula.slice(0, atIndex),
        domain: formula.slice(atIndex + 1),
    };
}

function extractFormulaTokens(localPart) {
    const tokens = localPart.match(/\{\{[^}]+\}\}/g);
    return tokens ?? [localPart];
}

function getPreviewPasswordFromBlocks(blocks, meta) {
    return blocks
        .map((block) => {
            if (block === "{{student.student_number}}") return "00001";
            if (block === "{{student.grade}}") return "7";
            if (block === "{{school.sis_id}}") return "d15209a0-83a2-4b6e-9251-ee4ad8831eea";
            if (block === "{{teacher.teacher_number}}") return "0420";
            if (block === "{{staff.title}}") return "registrar";
            if (block === "{{name.first}}") return "rogelio";
            if (block === "{{name.last}}") return "waelchi";
            return block;
        })
        .join("");
}

function getPreviewMappingValue(blocks) {
    return blocks
        .map((block) => {
            if (block === "{{name.first}}") return "Rogelio";
            if (block === "{{name.last}}") return "Waelchi";
            if (block === "{{staff.title}}") return "Registrar";
            if (block === "{{staff.department}}") return "Student Services";
            if (block === "{{staff.employee_id}}") return "EMP-2291";
            if (block === "{{staff.location}}") return "Mayton Lyceum";
            return block.replace(/[{}]/g, "");
        })
        .join("");
}

function mappingTokenToLabel(token) {
    const mapping = {
        "{{name.first}}": "First Name",
        "{{name.last}}": "Last Name",
        "{{student.student_number}}": "Student Number",
        "{{student.grade}}": "Grade",
        "{{school.sis_id}}": "School ID",
        "{{teacher.teacher_number}}": "Teacher Number",
        "{{staff.title}}": "Staff Title",
        "{{staff.department}}": "Department",
        "{{staff.employee_id}}": "Employee ID",
        "{{staff.location}}": "Location",
    };

    return mapping[token] ?? token.replace(/[{}]/g, "");
}

function mappingBehaviorToLabel(behavior) {
    if (behavior === "Update each sync") return "Always";
    if (behavior === "Update on create or blank") return "On create or blank";
    return behavior;
}

function getOuFormulaFromBlocks(blocks) {
    return blocks
        .map((block) => {
            if (block.type === "text") return block.value;
            if (block.value === "school_name") return "{{school_name}}";
            if (block.value === "student.grade") return "{{student.grade}}";
            if (block.value === "staff.department") return "{{staff.department}}";
            if (block.value === "staff.title") return "{{staff.title}}";
            if (block.value === "staff.location") return "{{staff.location}}";
            return block.value;
        })
        .join("");
}

function getOuPreviewFromFormula(formula) {
    return formula
        .replaceAll("{{school_name}}", "Truetelside Middle School")
        .replaceAll("{{student.grade}}", "7")
        .replaceAll("{{staff.department}}", "Operations")
        .replaceAll("{{staff.title}}", "Librarian")
        .replaceAll("{{staff.location}}", "Fort Virgilfield Elementary School");
}

function getOuDisplayParts(formula) {
    const parts = formula.match(/(\{\{[^}]+\}\}|\/|[^/{}]+)/g);
    return parts ?? [formula];
}

function getFilterValueOptions(propertyKey) {
    if (propertyKey === "eventType") return EVENT_TYPE_OPTIONS;
    if (propertyKey === "destination") return DESTINATION_OPTIONS;
    if (propertyKey === "sisId") return SIS_ID_OPTIONS;
    if (propertyKey === "user") return USER_OPTIONS;
    return [];
}

function getFilterValuePlaceholder(propertyKey) {
    if (propertyKey === "user") return "Search by user name";
    return "Select...";
}

function getPropertyLabel(propertyKey) {
    return EVENT_FILTER_PROPERTIES.find((option) => option.key === propertyKey)?.label ?? "Property";
}

function MarketingIDM() {
    return (
        <div className={styles.page}>
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>Clever IDM</h1>
                    <p className={styles.subtitle}>
                        Automated identity management for enhanced security with Clever
                    </p>
                    <div className={styles.buttons}>
                        <button className={styles.primaryButton}>
                            Get started <ChevronDown />
                        </button>
                        <button className={styles.secondaryButton}>Purchase</button>
                    </div>
                </div>
                <div className={styles.priceTag}>
                    <div className={styles.priceAmount}>$1.50</div>
                    <div className={styles.priceDetails}>per user per year</div>
                    <div className={styles.priceMinimum}>$1,500 minimum</div>
                </div>
            </div>

            <div className={styles.valueProps}>
                <h2 className={styles.sectionTitle}>Your home for identity management</h2>
                <div className={styles.propsGrid}>
                    <div className={styles.propCard}>
                        <div className={styles.propIcon}>
                            <LockIcon />
                        </div>
                        <h3 className={styles.propTitle}>Secure up-to-date accounts</h3>
                        <p className={styles.propDescription}>
                            Reduce security gaps with strong passwords and removal of unused accounts.
                        </p>
                    </div>
                    <div className={styles.propCard}>
                        <div className={styles.propIcon}>
                            <ClockIcon />
                        </div>
                        <h3 className={styles.propTitle}>Get time back with automation</h3>
                        <p className={styles.propDescription}>
                            Automated data syncs from SIS or HRIS streamline account management.
                        </p>
                    </div>
                    <div className={styles.propCard}>
                        <div className={styles.propIcon}>
                            <ShieldIcon />
                        </div>
                        <h3 className={styles.propTitle}>Reduce disruptions in learning</h3>
                        <p className={styles.propDescription}>
                            Ensure ready access to key user accounts.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.videoSection}>
                <div className={styles.videoContainer}>
                    <div className={styles.videoPlaceholder}>
                        <div className={styles.videoBrand}>
                            <span className={styles.cleverLogo}>C</span>
                            <span className={styles.cleverText}>Cl<span className={styles.playIcon}>▶</span>ver</span>
                        </div>
                        <div className={styles.videoCaption}>Clever IDM Product Walkthrough</div>
                        <div className={styles.videoProgress}>
                            <span>6:32</span>
                            <div className={styles.progressBar}>
                                <div className={styles.progressFill}></div>
                            </div>
                        </div>
                    </div>
                    <p className={styles.videoLabel}>Learn how to setup Clever IDM in a few short minutes.</p>
                </div>
                <div className={styles.featuresList}>
                    <h3 className={styles.featuresTitle}>Hands-off identity management</h3>
                    <ul className={styles.features}>
                        {features.map((feature, index) => (
                            <li key={index} className={styles.featureItem}>
                                <CheckCircle />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

function PaidIDM() {
    const [activeTab, setActiveTab] = useState("Tasks");
    const [showStartPicker, setShowStartPicker] = useState(false);
    const [showEndPicker, setShowEndPicker] = useState(false);
    const [filters, setFilters] = useState([]);
    const [propertyMenuOpen, setPropertyMenuOpen] = useState(false);
    const [valueMenuOpen, setValueMenuOpen] = useState(false);
    const [showProvisioning, setShowProvisioning] = useState(false);
    const [provisionStep, setProvisionStep] = useState(1);
    const [managementLevel, setManagementLevel] = useState("full");
    const [transitionFull, setTransitionFull] = useState(false);
    const [showStep3RoleOptions, setShowStep3RoleOptions] = useState(false);
    const [primaryRole, setPrimaryRole] = useState("teachers");
    const [rolloverDate, setRolloverDate] = useState("08/13/2026");
    const [credentialsByRole, setCredentialsByRole] = useState({
        students: {
            email: "{{name.first}}{{name.last}}@maytonlyceum.com",
            password: "{{student.student_number}}{{student.grade}}{{school.sis_id}}",
        },
        teachers: {
            email: "{{name.first}}{{name.last}}@maytonlyceum.com",
            password: "{{teacher.teacher_number}}0420",
        },
        staff: {
            email: "{{name.first}}{{name.last}}@maytonlyceum.com",
            password: "{{staff.title}}{{school.sis_id}}",
        },
    });
    const [credentialDetailRole, setCredentialDetailRole] = useState(null);
    const [formatBuilderRole, setFormatBuilderRole] = useState(null);
    const [formatSelectionRole, setFormatSelectionRole] = useState(null);
    const [formatBuilderType, setFormatBuilderType] = useState("email");
    const [fallbackTooltipRole, setFallbackTooltipRole] = useState(null);
    const [showFieldMappingStepByRole, setShowFieldMappingStepByRole] = useState({
        students: false,
        teachers: false,
        staff: false,
    });
    const [mappingRulesByRole, setMappingRulesByRole] = useState({
        students: [],
        teachers: [],
        staff: [],
    });
    const [mappingModalRole, setMappingModalRole] = useState(null);
    const [mappingModalMode, setMappingModalMode] = useState("rule");
    const [mappingFieldMenuOpen, setMappingFieldMenuOpen] = useState(false);
    const [pendingMappingGoogleField, setPendingMappingGoogleField] = useState("");
    const [pendingMappingBehavior, setPendingMappingBehavior] = useState("Update each sync");
    const [pendingMappingBlocks, setPendingMappingBlocks] = useState([]);
    const [pendingMappingFormatType, setPendingMappingFormatType] = useState("");
    const [editingMappingIndex, setEditingMappingIndex] = useState(null);
    const [formatChoiceByRole, setFormatChoiceByRole] = useState({
        students: "",
        teachers: "",
        staff: "",
    });
    const [formatBlocksByRole, setFormatBlocksByRole] = useState({
        students: ["{{name.first}}", "{{name.last}}"],
        teachers: ["{{name.first}}", "{{name.last}}"],
        staff: ["{{name.first}}", "{{name.last}}"],
    });
    const [fallbackBlocksByRole, setFallbackBlocksByRole] = useState({
        students: [],
        teachers: [],
        staff: [],
    });
    const [passwordBlocksByRole, setPasswordBlocksByRole] = useState({
        students: ["{{student.student_number}}", "{{student.grade}}", "{{school.sis_id}}"],
        teachers: ["{{teacher.teacher_number}}", "0420"],
        staff: ["{{staff.title}}", "{{school.sis_id}}"],
    });
    const [showPasswordStepByRole, setShowPasswordStepByRole] = useState({
        students: false,
        teachers: false,
        staff: false,
    });
    const [allowPasswordExportByRole, setAllowPasswordExportByRole] = useState({
        students: true,
        teachers: true,
        staff: true,
    });
    const [isEditingFallback, setIsEditingFallback] = useState(false);
    const [selectedUsers, setSelectedUsers] = useState({
        students: true,
        teachers: true,
        staff: true,
    });
    const [ouDetailType, setOuDetailType] = useState(null);
    const [groupDetailType, setGroupDetailType] = useState(null);
    const [groupSearchTerm, setGroupSearchTerm] = useState("");
    const [checkUserModalOpen, setCheckUserModalOpen] = useState(false);
    const [checkUserSearchTerm, setCheckUserSearchTerm] = useState("");
    const [checkUserDropdownOpen, setCheckUserDropdownOpen] = useState(false);
    const [selectedCheckUserId, setSelectedCheckUserId] = useState("");
    const [showStudentOuSubStep, setShowStudentOuSubStep] = useState(false);
    const [studentParentOu, setStudentParentOu] = useState("/Students");
    const [studentOuModalOpen, setStudentOuModalOpen] = useState(false);
    const [studentOuFormatMode, setStudentOuFormatMode] = useState("builder");
    const [studentOuBlocks, setStudentOuBlocks] = useState([
        { type: "text", value: "/" },
        { type: "variable", value: "school_name" },
        { type: "text", value: "/" },
        { type: "variable", value: "student.grade" },
    ]);
    const [studentOuAdvancedString, setStudentOuAdvancedString] = useState("/{{school_name}}/{{student.grade}}");
    const [studentOuCurrentOUsOpen, setStudentOuCurrentOUsOpen] = useState(false);
    const [studentOuPreviewUserOpen, setStudentOuPreviewUserOpen] = useState(false);
    const [showTeacherOuSubStep, setShowTeacherOuSubStep] = useState(false);
    const [teacherParentOu, setTeacherParentOu] = useState("/Users");
    const [teacherOuModalOpen, setTeacherOuModalOpen] = useState(false);
    const [teacherOuCurrentOUsOpen, setTeacherOuCurrentOUsOpen] = useState(false);
    const [teacherOuFormatChoice, setTeacherOuFormatChoice] = useState("");
    const [showStaffOuSubStep, setShowStaffOuSubStep] = useState(false);
    const [staffParentOu, setStaffParentOu] = useState("/Users/Staff");
    const [staffOuModalOpen, setStaffOuModalOpen] = useState(false);
    const [staffOuFormatMode, setStaffOuFormatMode] = useState("builder");
    const [staffOuBlocks, setStaffOuBlocks] = useState([
        { type: "text", value: "/" },
        { type: "variable", value: "staff.department" },
    ]);
    const [staffOuAdvancedString, setStaffOuAdvancedString] = useState("/{{staff.department}}");
    const [staffOuCurrentOUsOpen, setStaffOuCurrentOUsOpen] = useState(false);
    const [staffOuPreviewUserOpen, setStaffOuPreviewUserOpen] = useState(false);
    const [ouTreeExpanded, setOuTreeExpanded] = useState({
        students: true,
        treutelside: false,
        users: false,
        staff: false,
    });
    const [studentOuConfig, setStudentOuConfig] = useState({
        parentOu: "/Students",
        subOuFormula: "/{{school_name}}/{{student.grade}}",
    });
    const [teacherOuConfig, setTeacherOuConfig] = useState({
        parentOu: "/Users",
        subOuFormula: "/Staff/Teachers",
    });
    const [staffOuConfig, setStaffOuConfig] = useState({
        parentOu: "/Users/Staff",
        subOuFormula: "/{{staff.department}}",
    });
    const [archiveParentOu, setArchiveParentOu] = useState("/");
    const [archiveAction, setArchiveAction] = useState("move_suspend");
    const [archiveOuTreeExpanded, setArchiveOuTreeExpanded] = useState({
        students: false,
        users: false,
        staff: false,
    });
    const [showIgnoredOuHandlingStep, setShowIgnoredOuHandlingStep] = useState(false);
    const [ignoredOuTreeExpanded, setIgnoredOuTreeExpanded] = useState({
        students: false,
        users: false,
        staff: false,
    });
    const [ignoredOuCustomSelections, setIgnoredOuCustomSelections] = useState([]);
    const [ignoredOuHandlingByRole, setIgnoredOuHandlingByRole] = useState({
        students: "auto_suspend",
        teachers: "auto_suspend",
        staff: "auto_suspend",
    });
    const filterProperties = ["Event Type", "SIS ID", "User", "Destination"];
    const canAddFilter = filters.length < filterProperties.length;

    const stepsFull = [
        "Connect to Google",
        "Select your IDM Management Level",
        "Select users",
        "Set login credentials",
        "Organize OUs",
        "Configure groups",
        "Summary",
        "Preview and provision",
    ];

    const stepsMatchOnly = [
        "Connect to Google",
        "Select your IDM Management Level",
        "Select users",
        "Set login credentials",
        "Summary",
        "Preview and match",
    ];

    const stepsTransition = [
        "Connect to Google",
        "Select your IDM Management Level",
        "Select users",
        "Set login credentials",
        "Organize OUs",
        "Configure groups",
        "Summary",
        "Preview and match",
    ];

    const provisioningSteps = managementLevel === "full"
        ? stepsFull
        : transitionFull
            ? stepsTransition
            : stepsMatchOnly;
    const currentProvisioningTitle = provisioningSteps[provisionStep - 1] ?? "Google Provisioning Setup";
    const selectedCredentialRoles = [
        { key: "students", title: "Student credentials" },
        { key: "teachers", title: "Teacher credentials" },
        { key: "staff", title: "Staff credentials" },
    ].filter((role) => selectedUsers[role.key]);
    const completedCredentialCount = selectedCredentialRoles.filter((role) => {
        const credentials = credentialsByRole[role.key];
        return Boolean(credentials?.email?.trim() && credentials?.password?.trim());
    }).length;
    const detailRoleMeta = credentialDetailRole ? CREDENTIAL_ROLE_META[credentialDetailRole] : null;
    const detailRoleCredentials = credentialDetailRole ? credentialsByRole[credentialDetailRole] : null;
    const detailRoleBlocks = credentialDetailRole ? formatBlocksByRole[credentialDetailRole] ?? [] : [];
    const detailRoleFallbackBlocks = credentialDetailRole ? fallbackBlocksByRole[credentialDetailRole] ?? [] : [];
    const detailRoleEmailParts = detailRoleCredentials ? splitEmailFormula(detailRoleCredentials.email) : { localPart: "", domain: "maytonlyceum.com" };
    const detailRoleDomain = detailRoleEmailParts.domain || "maytonlyceum.com";
    const activeBuilderRole = formatBuilderRole || formatSelectionRole;
    const activeBuilderMeta = activeBuilderRole ? CREDENTIAL_ROLE_META[activeBuilderRole] : null;
    const activeBuilderCredentials = activeBuilderRole ? credentialsByRole[activeBuilderRole] : null;
    const activeBuilderDomain = activeBuilderCredentials ? splitEmailFormula(activeBuilderCredentials.email).domain : "maytonlyceum.com";
    const activeBuilderBlocks = activeBuilderRole
        ? (formatBuilderType === "password"
            ? passwordBlocksByRole[activeBuilderRole]
            : isEditingFallback
                ? fallbackBlocksByRole[activeBuilderRole]
                : formatBlocksByRole[activeBuilderRole]) ?? []
        : [];
    const showPasswordStep = credentialDetailRole ? showPasswordStepByRole[credentialDetailRole] : false;
    const showFieldMappingStep = credentialDetailRole ? showFieldMappingStepByRole[credentialDetailRole] : false;
    const detailRolePasswordBlocks = credentialDetailRole ? passwordBlocksByRole[credentialDetailRole] ?? [] : [];
    const detailRolePreviewPassword = credentialDetailRole
        ? getPreviewPasswordFromBlocks(detailRolePasswordBlocks, detailRoleMeta)
        : "";
    const detailRoleMappings = credentialDetailRole ? mappingRulesByRole[credentialDetailRole] ?? [] : [];
    const pendingMappingFormula = pendingMappingBlocks.join("");
    const hasPendingMappingFormat = pendingMappingBlocks.length > 0;
    const pendingMappingFieldLabel = pendingMappingGoogleField || "Field";
    const pendingMappingFieldLower = pendingMappingFieldLabel.toLowerCase();
    const pendingMappingFieldPlural = pendingMappingFieldLower.endsWith("s")
        ? pendingMappingFieldLower
        : `${pendingMappingFieldLower}s`;
    const selectedUserTypeList = [
        selectedUsers.students ? "students" : null,
        selectedUsers.teachers ? "teachers" : null,
        selectedUsers.staff ? "staff" : null,
    ].filter(Boolean);
    const selectedUserTypeSummary = selectedUserTypeList.length > 0 ? selectedUserTypeList.join(", ") : "none";
    const sharedCheckUsers = CHECK_USER_DIRECTORY.filter((user) => selectedUsers[user.role]);
    const normalizedCheckUserSearch = checkUserSearchTerm.trim().toLowerCase();
    const filteredCheckUsers = sharedCheckUsers.filter((user) => {
        if (!normalizedCheckUserSearch) {
            return true;
        }

        return user.name.toLowerCase().includes(normalizedCheckUserSearch)
            || user.email.toLowerCase().includes(normalizedCheckUserSearch);
    });
    const selectedCheckUser = sharedCheckUsers.find((user) => user.id === selectedCheckUserId) ?? null;
    const managementLevelSummary = managementLevel === "full"
        ? "Full Provisioning and Password Management"
        : transitionFull
            ? "Password Management Only (Transition enabled)"
            : "Password Management Only";
    const studentOuFormula = studentOuFormatMode === "advanced"
        ? studentOuAdvancedString
        : getOuFormulaFromBlocks(studentOuBlocks);
    const studentOuPreviewPath = getOuPreviewFromFormula(studentOuFormula);
    const studentOuCombinedTemplate = `${studentOuConfig.parentOu}${studentOuConfig.subOuFormula.startsWith("/") ? studentOuConfig.subOuFormula : `/${studentOuConfig.subOuFormula}`}`;
    const studentOuExamplePath = `${studentParentOu}${studentOuPreviewPath.startsWith("/") ? studentOuPreviewPath : `/${studentOuPreviewPath}`}`;
    const studentOuDisplayParts = getOuDisplayParts(studentOuFormula);
    const teacherOuCombinedTemplate = `${teacherOuConfig.parentOu}${teacherOuConfig.subOuFormula.startsWith("/") ? teacherOuConfig.subOuFormula : `/${teacherOuConfig.subOuFormula}`}`;
    const teacherOuTargetTemplate = `${teacherParentOu}${teacherOuConfig.subOuFormula.startsWith("/") ? teacherOuConfig.subOuFormula : `/${teacherOuConfig.subOuFormula}`}`;
    const staffOuFormula = staffOuFormatMode === "advanced"
        ? staffOuAdvancedString
        : getOuFormulaFromBlocks(staffOuBlocks);
    const staffOuPreviewPath = getOuPreviewFromFormula(staffOuFormula);
    const staffOuCombinedTemplate = `${staffOuConfig.parentOu}${staffOuConfig.subOuFormula.startsWith("/") ? staffOuConfig.subOuFormula : `/${staffOuConfig.subOuFormula}`}`;
    const staffOuExamplePath = `${staffParentOu}${staffOuPreviewPath.startsWith("/") ? staffOuPreviewPath : `/${staffOuPreviewPath}`}`;
    const staffOuDisplayParts = getOuDisplayParts(staffOuFormula);
    const archiveActionSummary = archiveAction === "move_suspend_archive"
        ? "Move, suspend, and archive"
        : archiveAction === "move_suspend"
            ? "Move and suspend"
            : "Move only";
    const archivePreviewActionText = archiveAction === "move_suspend_archive"
        ? "suspended, moved to an archive OU, and archived"
        : archiveAction === "move_suspend"
            ? "suspended and moved to an archive OU"
            : "moved to an archive OU";
    const archivePreviewPaths = ["/Students", "/Teachers", "/Staff"].map((suffix) => `${archiveParentOu}${suffix}`);
    const ignoredOuLockedPaths = [...new Set([archiveParentOu])];
    const ignoredOuSelectedPaths = [...new Set([...ignoredOuLockedPaths, ...ignoredOuCustomSelections])];
    const ignoredOuPreviewPaths = ignoredOuSelectedPaths.length > 0 ? ignoredOuSelectedPaths : ["/"];
    const ignoredOuSummaryValue = ignoredOuPreviewPaths.join(", ");
    const ignoredOuManagedRoles = [
        selectedUsers.students ? "students" : null,
        selectedUsers.teachers ? "teachers" : null,
        selectedUsers.staff ? "staff" : null,
    ].filter(Boolean);
    const ouCards = [
        { key: "students", title: "Student OUs", fieldLabel: "OUS CREATED", value: studentOuCombinedTemplate },
        { key: "teachers", title: "Teacher OUs", fieldLabel: "OUS CREATED", value: teacherOuCombinedTemplate },
        { key: "staff", title: "Staff OUs", fieldLabel: "OUS CREATED", value: staffOuCombinedTemplate },
        { key: "archive", title: "Archive OU", fieldLabel: "ARCHIVE OU", value: `${archiveParentOu} (${archiveActionSummary})` },
        { key: "ignored", title: "Ignored OUs (optional)", fieldLabel: "IGNORED OUS", value: ignoredOuSummaryValue },
    ];
    const groupCards = [
        { key: "students", title: "Student Groups", count: "None" },
        { key: "teachers", title: "Teacher Groups", count: "None" },
        { key: "staff", title: "Staff Groups", count: "None" },
    ];
    const groupDetailMeta = groupDetailType ? GROUP_ROLE_META[groupDetailType] : null;
    const ouDetailTitle = {
        students: "Student OUs",
        teachers: "Teacher OUs",
        staff: "Staff OUs",
        archive: "Archive OU",
        ignored: "Ignored OU",
    }[ouDetailType ?? ""] ?? "";

    const closeCredentialBuilder = () => {
        setFormatBuilderRole(null);
        setFormatSelectionRole(null);
        setIsEditingFallback(false);
        setFormatBuilderType("email");
    };

    const openCheckUserModal = () => {
        setCheckUserModalOpen(true);
        setCheckUserSearchTerm("");
        setCheckUserDropdownOpen(false);
        setSelectedCheckUserId("");
    };

    const closeCheckUserModal = () => {
        setCheckUserModalOpen(false);
        setCheckUserDropdownOpen(false);
    };

    const openCredentialBuilder = (roleKey, editFallback = false, builderType = "email") => {
        setFormatBuilderRole(roleKey);
        setFormatSelectionRole(null);
        setIsEditingFallback(editFallback);
        setFormatBuilderType(builderType);
    };

    const toggleIgnoredOuSelection = (path) => {
        if (ignoredOuLockedPaths.includes(path)) {
            return;
        }

        setIgnoredOuCustomSelections((prev) => (
            prev.includes(path)
                ? prev.filter((item) => item !== path)
                : [...prev, path]
        ));
    };

    const getPreviewEmailFromBlocks = (roleKey, blocks, domain) => {
        const localPart = blocks
            .map((block) => {
                if (block === "{{name.first}}") return "rogelio";
                if (block === "{{name.last}}") return "waelchi";
                if (block === "{{teacher.teacher_number}}") return "0420";
                if (block === "{{staff.title}}") return "registrar";
                return block.replace(/[{}]/g, "").replace(/\s+/g, "").toLowerCase();
            })
            .join("");

        return `${localPart}@${domain}`;
    };

    const closeProvisioningAndReturnToMain = () => {
        setShowProvisioning(false);
        setCredentialDetailRole(null);
        setOuDetailType(null);
        setGroupDetailType(null);
        setGroupSearchTerm("");
        setCheckUserModalOpen(false);
        setCheckUserDropdownOpen(false);
        setStudentOuModalOpen(false);
        setTeacherOuModalOpen(false);
        setTeacherOuCurrentOUsOpen(false);
        setStaffOuModalOpen(false);
        setShowIgnoredOuHandlingStep(false);
        setMappingModalRole(null);
        setMappingModalMode("rule");
        setFallbackTooltipRole(null);
        closeCredentialBuilder();
    };

    const jumpToProvisionStepByLabel = (label) => {
        const targetIndex = provisioningSteps.findIndex((stepLabel) => stepLabel === label);
        if (targetIndex !== -1) {
            setProvisionStep(targetIndex + 1);
            setOuDetailType(null);
            setGroupDetailType(null);
            setGroupSearchTerm("");
            setCheckUserModalOpen(false);
            setCheckUserDropdownOpen(false);
            setShowIgnoredOuHandlingStep(false);
        }
    };

    const tabContent = (() => {
        if (activeTab === "Sync History") {
            return (
                <div className={styles.tabPanel}>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Destination</th>
                                    <th>Date and Time</th>
                                    <th>Creates</th>
                                    <th>Matches</th>
                                    <th>Updates</th>
                                    <th>Archives</th>
                                    <th>Issues</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {syncHistoryRows.map((date) => (
                                    <tr key={date}>
                                        <td className={styles.destinationCell}>
                                            <GoogleLogo />
                                            Google
                                        </td>
                                        <td>{date}</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>1</td>
                                        <td>
                                            <button className={styles.linkButton}>
                                                <DownloadIcon /> Log
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }

        if (activeTab === "Exports") {
            return (
                <div className={styles.tabPanel}>
                    <div className={styles.exportSection}>
                        <h3>All Clever IDM Google Users</h3>
                        <div className={styles.exportCard}>
                            <button className={styles.linkButton}>
                                <DownloadIcon /> Download user emails
                            </button>
                            <span>Clever IDM is managing 40 Google users</span>
                        </div>
                    </div>
                    <div className={styles.exportSection}>
                        <h3>Recent Clever IDM Google Credentials (disabled in impersonation mode)</h3>
                        <div className={styles.exportCardMuted}>
                            <button className={styles.disabledButton}>
                                <DownloadIcon /> Download recent accounts
                            </button>
                            <span>This export contains credentials created or updated within the last 10 days.</span>
                        </div>
                    </div>
                    <div className={styles.exportSection}>
                        <h3>Enable SFTP access for IDM exports (disabled in impersonation mode)</h3>
                        <p className={styles.helpText}>
                            Allow use of SFTP to access IDM exports. This can be used to build automated processes.
                            Learn more in our <span className={styles.linkText}>Help Center</span>.
                        </p>
                        <div className={styles.toggleRow}>
                            <div className={styles.toggleDisabled}>
                                <div className={styles.toggleKnob}></div>
                            </div>
                            <button className={styles.iconButton} aria-label="Disabled">
                                ✕
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        if (activeTab === "Events") {
            return (
                <div className={styles.tabPanel}>
                    <div className={styles.filtersRow}>
                        <div className={styles.filterField}>
                            <label>Start Date</label>
                            <div
                                className={styles.inputWithIcon}
                                onClick={() => {
                                    setShowStartPicker((prev) => !prev);
                                    setShowEndPicker(false);
                                }}
                            >
                                <CalendarIcon />
                                <input placeholder="Start Date" readOnly />
                            </div>
                            {showStartPicker && (
                                <div className={styles.datePopover}>
                                    <div className={styles.dateHeader}>
                                        <button className={styles.iconButtonSmall}>‹</button>
                                        <span>February 2026</span>
                                        <button className={styles.iconButtonSmall}>›</button>
                                    </div>
                                    <div className={styles.dateGrid}>
                                        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                                            <span key={day} className={styles.dayLabel}>{day}</span>
                                        ))}
                                        {Array.from({ length: 28 }).map((_, index) => (
                                            <button
                                                key={index}
                                                className={`${styles.dayCell} ${index + 1 === 6 ? styles.daySelected : ""}`}
                                            >
                                                {index + 1}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className={styles.filterField}>
                            <label>End Date</label>
                            <div
                                className={styles.inputWithIcon}
                                onClick={() => {
                                    setShowEndPicker((prev) => !prev);
                                    setShowStartPicker(false);
                                }}
                            >
                                <CalendarIcon />
                                <input placeholder="End Date" readOnly />
                            </div>
                            {showEndPicker && (
                                <div className={styles.datePopover}>
                                    <div className={styles.dateHeader}>
                                        <button className={styles.iconButtonSmall}>‹</button>
                                        <span>February 2026</span>
                                        <button className={styles.iconButtonSmall}>›</button>
                                    </div>
                                    <div className={styles.dateGrid}>
                                        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                                            <span key={day} className={styles.dayLabel}>{day}</span>
                                        ))}
                                        {Array.from({ length: 28 }).map((_, index) => (
                                            <button key={index} className={styles.dayCell}>
                                                {index + 1}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={styles.filterStack}>
                        {filters.map((property, index) => (
                            <div key={`${property}-${index}`} className={styles.filterRow}>
                                <div className={styles.filterColumn}>
                                    <label>Property</label>
                                    <button
                                        className={styles.dropdownButton}
                                        onClick={() => setPropertyMenuOpen((prev) => !prev)}
                                    >
                                        {property} <ChevronDown />
                                    </button>
                                    {propertyMenuOpen && index === 0 && (
                                        <div className={styles.dropdownMenu}>
                                            {filterProperties.map((item) => (
                                                <button key={item} className={styles.dropdownItem}>{item}</button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className={styles.filterColumn}>
                                    <label>Operator</label>
                                    <button className={styles.dropdownButtonSecondary}>
                                        Equals <ChevronDown />
                                    </button>
                                </div>
                                <div className={styles.filterColumnWide}>
                                    <label>Value</label>
                                    <button
                                        className={styles.dropdownButton}
                                        onClick={() => setValueMenuOpen((prev) => !prev)}
                                    >
                                        {property === "User" ? "Search by user name" : "Select..."} <ChevronDown />
                                    </button>
                                    {valueMenuOpen && index === 0 && (
                                        <div className={styles.dropdownMenu}>
                                            {["Created", "Updated", "Archived", "Matched"].map((item) => (
                                                <button key={item} className={styles.dropdownItem}>{item}</button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <button
                                    className={styles.trashButton}
                                    aria-label="Remove filter"
                                    onClick={() => {
                                        setFilters((prev) => prev.filter((_, i) => i !== index));
                                        setPropertyMenuOpen(false);
                                        setValueMenuOpen(false);
                                    }}
                                >
                                    🗑
                                </button>
                            </div>
                        ))}
                    </div>
                    <button
                        className={`${styles.linkButton} ${!canAddFilter ? styles.linkButtonDisabled : ""}`}
                        onClick={() => {
                            if (!canAddFilter) return;
                            setFilters((prev) => [...prev, filterProperties[prev.length]]);
                        }}
                        disabled={!canAddFilter}
                    >
                        <PlusCircle /> Add filter
                    </button>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Date<span className={styles.sortIcon}><SortIcon /></span></th>
                                    <th>Event<span className={styles.sortIcon}><SortIcon /></span></th>
                                    <th>Destination</th>
                                    <th>User</th>
                                    <th>SIS ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {eventRows.map((row) => (
                                    <tr key={`${row.user}-${row.sisId}`}>
                                        <td className={styles.expandCell}>▾</td>
                                        <td>{row.date}</td>
                                        <td className={styles.eventCell}>
                                            <span className={styles.eventIcon}>👤</span>
                                            {row.event}
                                        </td>
                                        <td className={styles.destinationCell}>
                                            <GoogleLogo />
                                            {row.destination}
                                        </td>
                                        <td>{row.user}</td>
                                        <td className={styles.monoText}>{row.sisId}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }

        return (
            <div className={styles.tabPanel}>
                <div className={styles.sectionHeader}>
                    <h3>Notifications</h3>
                    <button className={styles.linkButton}>
                        <DownloadIcon /> Download user emails
                    </button>
                </div>
                <div className={styles.notificationCard}>
                    <span className={styles.successBadge}>Success</span>
                    <div>
                        <div className={styles.notificationTitle}>Clever IDM is managing 40 Google users</div>
                        <div className={styles.notificationText}>
                            View students.csv and teachers_and_staff.csv for a list of emails to upload them to your SIS.
                        </div>
                    </div>
                </div>
                <div className={styles.sectionHeader}>
                    <h3>Issues</h3>
                </div>
                <div className={styles.emptyState}>You are all caught up!</div>
            </div>
        );
    })();

    if (showProvisioning) {
        return (
            <div className={styles.provisioningPage}>
                <div className={styles.provisioningHeader}>
                    <button
                        className={styles.backButton}
                        onClick={closeProvisioningAndReturnToMain}
                    >
                        ← Back
                    </button>
                    {ouDetailTitle ? (
                        <span className={styles.headerBreadcrumbs}>
                            <button
                                className={styles.headerLinkButton}
                                onClick={() => {
                                    setOuDetailType(null);
                                    setShowIgnoredOuHandlingStep(false);
                                }}
                            >
                                Organize OUs
                            </button>
                            <span>|</span>
                            <span className={styles.headerTitle}>{ouDetailTitle}</span>
                        </span>
                    ) : groupDetailType ? (
                        <span className={styles.headerBreadcrumbs}>
                            <button
                                className={styles.headerLinkButton}
                                onClick={() => {
                                    setGroupDetailType(null);
                                    setGroupSearchTerm("");
                                }}
                            >
                                Configure groups
                            </button>
                            <span>|</span>
                            <span className={styles.headerTitle}>{groupDetailMeta?.title ?? "Groups"}</span>
                        </span>
                    ) : (
                        <span className={styles.headerTitle}>
                            {currentProvisioningTitle}
                        </span>
                    )}
                </div>

                <div className={styles.provisioningBody}>
                    <aside className={styles.provisioningNav}>
                        <h2>Google Provisioning Setup</h2>
                        <ol className={styles.stepList}>
                            {provisioningSteps.map((label, index) => {
                                const stepNumber = index + 1;
                                const isActive = stepNumber === provisionStep;
                                const isComplete = stepNumber < provisionStep;
                                return (
                                    <li key={label} className={styles.stepItem}>
                                        <button
                                            className={styles.stepNavButton}
                                            onClick={() => {
                                                setProvisionStep(stepNumber);
                                                setCredentialDetailRole(null);
                                                setOuDetailType(null);
                                                setGroupDetailType(null);
                                                setGroupSearchTerm("");
                                                setStudentOuModalOpen(false);
                                                setTeacherOuModalOpen(false);
                                                setTeacherOuCurrentOUsOpen(false);
                                                setStaffOuModalOpen(false);
                                                setShowIgnoredOuHandlingStep(false);
                                                setMappingModalRole(null);
                                                setFallbackTooltipRole(null);
                                                closeCredentialBuilder();
                                            }}
                                        >
                                            <span
                                                className={`${styles.stepBadge} ${isActive ? styles.stepActive : ""} ${isComplete ? styles.stepComplete : ""}`}
                                            >
                                                {isComplete ? <CheckIcon /> : stepNumber}
                                            </span>
                                            <span className={`${styles.stepLabel} ${isActive ? styles.stepLabelActive : ""}`}>
                                                {label}
                                            </span>
                                        </button>
                                    </li>
                                );
                            })}
                        </ol>
                        <div className={styles.helpCard}>
                            <span className={styles.helpIcon}>🎯</span>
                            <div>
                                <div className={styles.helpTitle}>Need help?</div>
                                <button className={styles.helpLink}>Talk to a specialist</button>
                            </div>
                        </div>
                    </aside>

                    <main className={`${styles.provisioningContent} ${(groupDetailType || ouDetailType === "archive" || ouDetailType === "ignored") ? styles.provisioningContentWide : ""}`}>
                        {provisionStep === 1 ? (
                            <>
                                <h1>Connect to Google</h1>
                                <p className={styles.provisioningIntro}>
                                    To provision accounts, Clever needs permission to connect to your Google Workspace.
                                    Don&apos;t worry, no changes will be made to your Google Workspace until you have
                                    completed all the steps in this setup preview and given Clever explicit permission
                                    to begin provisioning accounts. For step-by-step assistance, visit
                                    <span className={styles.linkText}> Clever Academy</span>.
                                </p>
                                <div className={styles.successPanel}>
                                    <div className={styles.successTitle}>Your Google account is successfully connected.</div>
                                    <div className={styles.successText}>
                                        If you would like to connect a different Google account to Clever IDM, please
                                        clear your current Google account by clicking the button below and re-authorize
                                        your new account.
                                    </div>
                                    <button className={styles.disconnectButton}>
                                        <span className={styles.googleLogoSmall}>G</span> Disconnect
                                    </button>
                                </div>
                                <div className={styles.provisioningFooter}>
                                    <button
                                        className={styles.primaryButton}
                                        onClick={() => setProvisionStep(2)}
                                    >
                                        Next: Select Management Level
                                    </button>
                                </div>
                            </>
                        ) : provisionStep === 2 ? (
                            <>
                                <h1>Select your IDM Management Level</h1>
                                <p className={styles.provisioningIntro}>
                                    We recommend selecting &quot;Password Management Only&quot; if you are currently in
                                    the middle of the school year or looking to pilot Clever IDM. If you are ready to
                                    let Clever IDM provision and manage the full end user lifecycle automatically for
                                    you, select &quot;Full Provisioning and Password Management.&quot;
                                </p>

                                <div className={styles.choiceSection}>
                                    <h3>Full IDM</h3>
                                    <label className={`${styles.optionCard} ${managementLevel === "full" ? styles.optionSelected : ""}`}>
                                        <input
                                            type="radio"
                                            name="idm-level"
                                            checked={managementLevel === "full"}
                                            onChange={() => {
                                                setManagementLevel("full");
                                                setTransitionFull(false);
                                            }}
                                        />
                                        <div>
                                            <div className={styles.optionTitle}>
                                                Full Provisioning and Password Management
                                                <span className={styles.recommendBadge}>Clever recommendation</span>
                                            </div>
                                            <div className={styles.optionSubtitle}>Clever IDM automated account security and password management</div>
                                            <div className={styles.optionListTitle}>Best for:</div>
                                            <ul className={styles.optionList}>
                                                <li>Automatically provisioning, updating and archiving user accounts</li>
                                                <li>Configuring password reset, account recovery and account claiming settings</li>
                                                <li>Building out and maintaining OUs and groups from your SIS data</li>
                                            </ul>
                                        </div>
                                    </label>
                                </div>

                                <div className={styles.choiceSection}>
                                    <h3>Secure Password Management Suite</h3>
                                    <label className={`${styles.optionCard} ${managementLevel === "password" ? styles.optionSelected : ""}`}>
                                        <input
                                            type="radio"
                                            name="idm-level"
                                            checked={managementLevel === "password"}
                                            onChange={() => setManagementLevel("password")}
                                        />
                                        <div>
                                            <div className={styles.optionTitle}>
                                                Password Management Only
                                                <span className={styles.limitedBadge}>Limited</span>
                                            </div>
                                            <div className={styles.optionSubtitle}>Access to our secure password management functionality for matched users</div>
                                            <div className={styles.optionListTitle}>Best for:</div>
                                            <ul className={styles.optionList}>
                                                <li>Piloting Clever IDM or beginning setup in the middle of the school year</li>
                                                <li>Accessing Clever&apos;s password management tools</li>
                                                <li>Managing matched users between systems</li>
                                            </ul>

                                            <div className={styles.transitionBox}>
                                                <label className={styles.transitionLabel}>
                                                    <input
                                                        type="checkbox"
                                                        checked={transitionFull}
                                                        onChange={(event) => setTransitionFull(event.target.checked)}
                                                    />
                                                    <span>Transition to Full Provisioning and Password Management</span>
                                                </label>
                                                <div className={styles.optionSubtitle}>
                                                    Explore or setup Full IDM while continuing to sync your matches
                                                </div>
                                                <div className={styles.optionListTitle}>Best for:</div>
                                                <ul className={styles.optionList}>
                                                    <li>Continuing your nightly match-only syncs</li>
                                                    <li>Exploring Full Provisioning and Password Management capabilities without commitment</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </label>
                                </div>

                                <div className={styles.provisioningFooter}>
                                    <button
                                        className={styles.primaryButton}
                                        onClick={() => {
                                            setShowStep3RoleOptions(false);
                                            setCredentialDetailRole(null);
                                            closeCredentialBuilder();
                                            setProvisionStep(3);
                                        }}
                                    >
                                        Next: Select Users
                                    </button>
                                </div>
                            </>
                        ) : provisionStep === 3 ? (
                            <>
                                <div className={styles.infoBanner}>
                                    <span className={styles.infoDot}>i</span>
                                    <span>
                                        To provision and manage users who are not currently in Clever, add them using
                                        <span className={styles.linkText}> custom data</span>.
                                    </span>
                                </div>
                                <h1>Select users</h1>
                                <p className={styles.provisioningIntro}>
                                    Select the Clever users you want to create Google accounts for. To provision and
                                    manage users who are not currently in Clever, you can add them using
                                    <span className={styles.linkText}> custom data</span>. You have additional options
                                    for uploading staff users - such as an
                                    <span className={styles.linkText}> SFTP upload</span>, which can be useful for
                                    exporting staff from an HRIS system. For additional information, please see the
                                    <span className={styles.linkText}> Select users section</span> of our Clever IDM
                                    course in Clever Academy!
                                </p>
                                <div className={styles.selectionCard}>
                                    <h3>Which Clever users do you want to provision Google accounts for?</h3>
                                    {[
                                        { key: "students", label: "Students", count: "20 students will be provisioned" },
                                        { key: "teachers", label: "Teachers", count: "10 teachers will be provisioned" },
                                        { key: "staff", label: "Staff", count: "10 staff will be provisioned" },
                                    ].map((item) => (
                                        <label key={item.key} className={styles.selectionRow}>
                                            <input
                                                type="checkbox"
                                                checked={selectedUsers[item.key]}
                                                onChange={() =>
                                                    setSelectedUsers((prev) => ({
                                                        ...prev,
                                                        [item.key]: !prev[item.key],
                                                    }))
                                                }
                                            />
                                            <span>{item.label}</span>
                                            {selectedUsers[item.key] && (
                                                <div className={styles.selectionMeta}>{item.count}</div>
                                            )}
                                        </label>
                                    ))}
                                </div>
                                {showStep3RoleOptions && (
                                    <>
                                        <div className={styles.rolloverCard}>
                                            <h3>Enter an IDM rollover date to mark the start of a new school year.</h3>
                                            <p className={styles.rolloverDescription}>
                                                If you do not sync graduation year from your SIS, Clever IDM calculates graduation
                                                year based on students&apos; grade level. During the rollover period, IDM needs to
                                                know if your data is for the past or upcoming school year.
                                            </p>
                                            <div className={styles.rolloverField}>
                                                <label>Graduation Rollover Date</label>
                                                <div className={styles.dateInput}>
                                                    <CalendarIcon />
                                                    <input
                                                        value={rolloverDate}
                                                        onChange={(event) => setRolloverDate(event.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.roleCard}>
                                            <h3>Select the primary role to be used when a user has both a staff and a teacher record.</h3>
                                            <div className={styles.roleOptions}>
                                                <label className={styles.roleOption}>
                                                    <input
                                                        type="radio"
                                                        name="primary-role"
                                                        checked={primaryRole === "teachers"}
                                                        onChange={() => setPrimaryRole("teachers")}
                                                    />
                                                    <span>Teachers</span>
                                                </label>
                                                <label className={styles.roleOption}>
                                                    <input
                                                        type="radio"
                                                        name="primary-role"
                                                        checked={primaryRole === "staff"}
                                                        onChange={() => setPrimaryRole("staff")}
                                                    />
                                                    <span>Staff</span>
                                                </label>
                                            </div>
                                        </div>
                                    </>
                                )}
                                <div className={styles.warningBanner}>
                                    <span className={styles.warningIcon}>!</span>
                                    <span>
                                        Note: saving edits to your configuration will pause nightly syncs until you
                                        review, preview, and provision the changes
                                    </span>
                                </div>
                                <div className={styles.provisioningFooter}>
                                    {showStep3RoleOptions ? (
                                        <button
                                            className={`${styles.primaryButton} ${styles.saveButton}`}
                                            onClick={() => {
                                                setCredentialDetailRole(null);
                                                closeCredentialBuilder();
                                                setProvisionStep(4);
                                            }}
                                        >
                                            Save
                                        </button>
                                    ) : (
                                        <button
                                            className={styles.primaryButton}
                                            onClick={() => setShowStep3RoleOptions(true)}
                                        >
                                            Next
                                        </button>
                                    )}
                                </div>
                            </>
                        ) : provisionStep === 4 ? (
                            <>
                                {(formatSelectionRole && !credentialDetailRole) ? (
                                    <div className={styles.formatSelectionScreen}>
                                        <div className={styles.formatSelectionHeader}>
                                            <h1>Build a format for {activeBuilderMeta?.pluralLabel ?? "user"} emails</h1>
                                            <button className={styles.closeSelectionButton} onClick={closeCredentialBuilder}>x</button>
                                        </div>
                                        <div className={styles.formatChoiceList}>
                                            {[
                                                {
                                                    key: "premade",
                                                    title: "Start with a premade email format",
                                                    bullets: ["Pick a premade format to begin", "Edit the format as needed"],
                                                },
                                                {
                                                    key: "blocks",
                                                    title: "Build a email format",
                                                    bullets: ["Build your email format using blocks", "Blocks include variable, custom text, and functions"],
                                                },
                                                {
                                                    key: "advanced",
                                                    title: "Enter a format string (Advanced)",
                                                    bullets: ["Use the legacy syntax to write out a format string"],
                                                },
                                            ].map((choice) => (
                                                <label key={choice.key} className={styles.formatChoiceCard}>
                                                    <input
                                                        type="radio"
                                                        name="format-choice"
                                                        checked={formatChoiceByRole[formatSelectionRole] === choice.key}
                                                        onChange={() =>
                                                            setFormatChoiceByRole((prev) => ({ ...prev, [formatSelectionRole]: choice.key }))
                                                        }
                                                    />
                                                    <div>
                                                        <h3>{choice.title}</h3>
                                                        <ul>
                                                            {choice.bullets.map((bullet) => (
                                                                <li key={bullet}>{bullet}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                        <div className={styles.formatSelectionActions}>
                                            <button
                                                className={`${styles.primaryButton} ${!formatChoiceByRole[formatSelectionRole] ? styles.disabledButtonFake : ""}`}
                                                disabled={!formatChoiceByRole[formatSelectionRole]}
                                                onClick={() => openCredentialBuilder(formatSelectionRole, true)}
                                            >
                                                Save format
                                            </button>
                                            <button className={styles.outlineButton} onClick={closeCredentialBuilder}>Cancel</button>
                                        </div>
                                    </div>
                                ) : (formatBuilderRole && !credentialDetailRole) ? (
                                    <div className={styles.formatBuilderScreen}>
                                        <div className={styles.formatBuilderTop}>
                                            <h1>
                                                Build a format for {activeBuilderMeta?.pluralLabel ?? "user"}{" "}
                                                {formatBuilderType === "password" ? "passwords" : "emails"}
                                            </h1>
                                            <button className={styles.closeSelectionButton} onClick={closeCredentialBuilder}>x</button>
                                        </div>
                                        <p className={styles.provisioningIntro}>
                                            This is your current {formatBuilderType === "password" ? "password" : "email"} format.
                                            {" "}Learn more about <span className={styles.linkText}>formats</span>.
                                            {" "}Start over or use the advanced format editor.
                                        </p>
                                        <div className={styles.formatBuilderLayout}>
                                            <div>
                                                {activeBuilderBlocks.map((block, index) => (
                                                    <div key={`${block}-${index}`} className={styles.formatBlockRow}>
                                                        <span className={styles.blockTypeLabel}>Variable</span>
                                                        <select
                                                            value={block}
                                                            onChange={(event) => {
                                                                const nextBlocks = [...activeBuilderBlocks];
                                                                nextBlocks[index] = event.target.value;
                                                                if (formatBuilderType === "password") {
                                                                    setPasswordBlocksByRole((prev) => ({ ...prev, [formatBuilderRole]: nextBlocks }));
                                                                } else if (isEditingFallback) {
                                                                    setFallbackBlocksByRole((prev) => ({ ...prev, [formatBuilderRole]: nextBlocks }));
                                                                } else {
                                                                    setFormatBlocksByRole((prev) => ({ ...prev, [formatBuilderRole]: nextBlocks }));
                                                                }
                                                            }}
                                                        >
                                                            {formatBuilderType === "password" ? (
                                                                <>
                                                                    <option value="{{student.student_number}}">Student Number</option>
                                                                    <option value="{{student.grade}}">Grade</option>
                                                                    <option value="{{school.sis_id}}">School ID</option>
                                                                    <option value="{{teacher.teacher_number}}">Teacher Number</option>
                                                                    <option value="{{staff.title}}">Staff Title</option>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <option value="{{name.first}}">First Name</option>
                                                                    <option value="{{name.last}}">Last Name</option>
                                                                    <option value="{{teacher.teacher_number}}">Teacher Number</option>
                                                                    <option value="{{student.student_number}}">Student Number</option>
                                                                    <option value="{{staff.title}}">Staff Title</option>
                                                                </>
                                                            )}
                                                        </select>
                                                        <button
                                                            className={styles.deleteRowButton}
                                                            onClick={() => {
                                                                const nextBlocks = activeBuilderBlocks.filter((_, rowIndex) => rowIndex !== index);
                                                                if (formatBuilderType === "password") {
                                                                    setPasswordBlocksByRole((prev) => ({ ...prev, [formatBuilderRole]: nextBlocks }));
                                                                } else if (isEditingFallback) {
                                                                    setFallbackBlocksByRole((prev) => ({ ...prev, [formatBuilderRole]: nextBlocks }));
                                                                } else {
                                                                    setFormatBlocksByRole((prev) => ({ ...prev, [formatBuilderRole]: nextBlocks }));
                                                                }
                                                            }}
                                                        >
                                                            x
                                                        </button>
                                                        {(block === "{{student.student_number}}" || block === "{{student.grade}}") && (
                                                            <div className={styles.optionalVarWarning}>
                                                                You have selected an optional variable. Some users can have missing data for this field.
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                                <div className={styles.builderActionsRow}>
                                                    <button
                                                        className={styles.outlineButton}
                                                        onClick={() => {
                                                            const nextBlocks = [...activeBuilderBlocks, formatBuilderType === "password" ? "{{student.student_number}}" : "{{name.first}}"];
                                                            if (formatBuilderType === "password") {
                                                                setPasswordBlocksByRole((prev) => ({ ...prev, [formatBuilderRole]: nextBlocks }));
                                                            } else if (isEditingFallback) {
                                                                setFallbackBlocksByRole((prev) => ({ ...prev, [formatBuilderRole]: nextBlocks }));
                                                            } else {
                                                                setFormatBlocksByRole((prev) => ({ ...prev, [formatBuilderRole]: nextBlocks }));
                                                            }
                                                        }}
                                                    >
                                                        + Add an SIS Variable
                                                    </button>
                                                    <button className={styles.outlineButton}>+ Add Custom Text</button>
                                                    <button className={styles.outlineButton}>+ Add a Function</button>
                                                </div>
                                            </div>
                                            <div className={styles.builderPreviewPanel}>
                                                <h3>Preview</h3>
                                                <p>Select any {activeBuilderMeta?.singularTitle.toLowerCase() ?? "user"} with an existing Clever account to preview their data using this format</p>
                                                <div className={styles.previewCard}>
                                                    <label>USER NAME</label>
                                                    <div>{activeBuilderMeta?.previewUserName ?? "Rogelio Waelchi"}</div>
                                                </div>
                                                <div className={styles.previewCard}>
                                                    <h4>{activeBuilderMeta?.previewUserName ?? "Rogelio Waelchi"}&apos;s Preview</h4>
                                                    {formatBuilderType === "password" ? (
                                                        <div className={styles.previewFields}>
                                                            <div>Student Number = 00001</div>
                                                            <div>Grade = 7</div>
                                                            <div>School ID = d15209a0-83a2-4b6e-9251-ee4ad8831eea</div>
                                                        </div>
                                                    ) : (
                                                        <div className={styles.previewFields}>
                                                            <div>First Name = Rogelio</div>
                                                            <div>Last Name = Waelchi</div>
                                                        </div>
                                                    )}
                                                    <div className={styles.previewResultTitle}>
                                                        This {activeBuilderMeta?.singularTitle.toLowerCase() ?? "user"}&apos;s{" "}
                                                        {formatBuilderType === "password" ? "password" : "email"} will be:
                                                    </div>
                                                    <div className={styles.previewResultValue}>
                                                        {formatBuilderType === "password"
                                                            ? getPreviewPasswordFromBlocks(activeBuilderBlocks, activeBuilderMeta)
                                                            : getPreviewEmailFromBlocks(formatBuilderRole, activeBuilderBlocks, activeBuilderDomain)}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.formatSelectionActions}>
                                            <button
                                                className={styles.primaryButton}
                                                onClick={() => {
                                                    if (formatBuilderType === "password") {
                                                        const newPassword = activeBuilderBlocks.join("");
                                                        setPasswordBlocksByRole((prev) => ({ ...prev, [formatBuilderRole]: activeBuilderBlocks }));
                                                        setCredentialsByRole((prev) => ({
                                                            ...prev,
                                                            [formatBuilderRole]: {
                                                                ...prev[formatBuilderRole],
                                                                password: newPassword,
                                                            },
                                                        }));
                                                    } else {
                                                        const localPart = activeBuilderBlocks.join("");
                                                        const newEmail = `${localPart}@${activeBuilderDomain}`;
                                                        if (isEditingFallback) {
                                                            setFallbackBlocksByRole((prev) => ({ ...prev, [formatBuilderRole]: activeBuilderBlocks }));
                                                        } else {
                                                            setFormatBlocksByRole((prev) => ({ ...prev, [formatBuilderRole]: activeBuilderBlocks }));
                                                            setCredentialsByRole((prev) => ({
                                                                ...prev,
                                                                [formatBuilderRole]: {
                                                                    ...prev[formatBuilderRole],
                                                                    email: newEmail,
                                                                },
                                                            }));
                                                        }
                                                    }
                                                    closeCredentialBuilder();
                                                }}
                                            >
                                                Save format
                                            </button>
                                            <button className={styles.outlineButton} onClick={closeCredentialBuilder}>Cancel</button>
                                        </div>
                                    </div>
                                ) : credentialDetailRole ? (
                                    <div className={styles.credentialDetailScreen}>
                                        <h1>{detailRoleMeta?.singularTitle} login credentials and email</h1>
                                        <p className={styles.provisioningIntro}>
                                            Set email and password formats for all {detailRoleMeta?.pluralLabel}. Preview your format with an existing Clever user.
                                            Learn more in the <span className={styles.linkText}>Set login credentials section</span> of our Clever IDM course in Clever Academy!
                                        </p>
                                        <section className={styles.detailSection}>
                                            <h2>1. Select any {detailRoleMeta?.singularTitle.toLowerCase()} with an existing Clever account to preview their data</h2>
                                            <div className={styles.previewCard}>
                                                <label>USER NAME</label>
                                                <div>{detailRoleMeta?.previewUserName}</div>
                                            </div>
                                            <div className={styles.previewCard}>
                                                <h4>{detailRoleMeta?.previewUserName}&apos;s Clever Data</h4>
                                                <div className={styles.dataGrid}>
                                                    {(detailRoleMeta?.preview ?? []).map(([label, value]) => (
                                                        <div key={label} className={styles.dataGridItem}>
                                                            <span>{label}</span>
                                                            <strong>{value}</strong>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </section>
                                        <section className={styles.detailSection}>
                                            <h2>2. Select email credentials</h2>
                                            <div className={styles.detailCard}>
                                                <div className={styles.detailCardHeading}>
                                                    <h3>Matching emails</h3>
                                                    <span className={styles.completedBadge}>Match credentials</span>
                                                </div>
                                                <p>
                                                    Clever IDM uses the SIS email associated with the user in Clever to automatically link to matching
                                                    accounts in Google. Only those users whose SIS email matches the domain will be matched.
                                                </p>
                                                <label className={styles.detailFieldLabel}>
                                                    Select the associated email domain for {detailRoleMeta?.pluralLabel}
                                                    <span>Required</span>
                                                </label>
                                                <select
                                                    value={detailRoleDomain}
                                                    onChange={(event) =>
                                                        setCredentialsByRole((prev) => ({
                                                            ...prev,
                                                            [credentialDetailRole]: {
                                                                ...prev[credentialDetailRole],
                                                                email: `${splitEmailFormula(prev[credentialDetailRole].email).localPart}@${event.target.value}`,
                                                            },
                                                        }))
                                                    }
                                                >
                                                    <option value="maytonlyceum.com">maytonlyceum.com</option>
                                                    <option value="students.maytonlyceum.com">students.maytonlyceum.com</option>
                                                </select>
                                            </div>
                                            <div className={styles.detailCard}>
                                                <div className={styles.detailCardHeading}>
                                                    <h3>Create an email format for all unmatched users</h3>
                                                    <span className={styles.pendingBadge}>Create credentials</span>
                                                </div>
                                                <p>
                                                    To create an email format for {detailRoleMeta?.pluralLabel}, combine a username and a domain.
                                                    Clever IDM will only use this format if the user&apos;s email address isn&apos;t populated in Clever already.
                                                </p>
                                                <div className={styles.tokenRow}>
                                                    {extractFormulaTokens(detailRoleEmailParts.localPart).map((token) => (
                                                        <span key={token} className={styles.tokenPill}>{token}</span>
                                                    ))}
                                                </div>
                                                <button
                                                    className={styles.linkButton}
                                                    onClick={() => openCredentialBuilder(credentialDetailRole, false, "email")}
                                                >
                                                    Edit your format
                                                </button>
                                                <div className={styles.previewCard}>
                                                    <h4>{detailRoleMeta?.previewUserName}&apos;s email format</h4>
                                                    <div>
                                                        Example email{" "}
                                                        <strong>{getPreviewEmailFromBlocks(credentialDetailRole, detailRoleBlocks, detailRoleDomain)}</strong>
                                                    </div>
                                                </div>
                                                <div className={styles.fallbackRow}>
                                                    <button
                                                        className={styles.linkButton}
                                                        onClick={() => {
                                                            setFormatSelectionRole(credentialDetailRole);
                                                            setFormatBuilderRole(null);
                                                            setFormatBuilderType("email");
                                                            setIsEditingFallback(true);
                                                        }}
                                                    >
                                                        Add fallback create format
                                                    </button>
                                                    <button
                                                        className={styles.infoTipButton}
                                                        onClick={() =>
                                                            setFallbackTooltipRole((prev) =>
                                                                prev === credentialDetailRole ? null : credentialDetailRole
                                                            )
                                                        }
                                                    >
                                                        i
                                                    </button>
                                                    {fallbackTooltipRole === credentialDetailRole && (
                                                        <div className={styles.fallbackTooltip}>
                                                            This is used if the default create format above cannot be
                                                            applied due to conflicting or missing user data.
                                                        </div>
                                                    )}
                                                </div>
                                                {detailRoleFallbackBlocks.length > 0 && (
                                                    <div className={styles.previewCard}>
                                                        <h4>Fallback format</h4>
                                                        <div>
                                                            {getPreviewEmailFromBlocks(credentialDetailRole, detailRoleFallbackBlocks, detailRoleDomain)}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </section>
                                        {showPasswordStep && (
                                            <section className={styles.detailSection}>
                                                <h2>3. Select the password format you want to use for {detailRoleMeta?.pluralLabel}</h2>
                                                <div className={styles.detailCard}>
                                                    <div className={styles.tokenRow}>
                                                        {detailRolePasswordBlocks.map((token, index) => (
                                                            <span key={`${token}-${index}`} className={styles.tokenPill}>{token}</span>
                                                        ))}
                                                    </div>
                                                    <button
                                                        className={styles.linkButton}
                                                        onClick={() => openCredentialBuilder(credentialDetailRole, false, "password")}
                                                    >
                                                        Edit your format
                                                    </button>
                                                    <p className={styles.passwordHintText}>
                                                        Google requires Clever IDM-generated passwords to be at least 8 characters.
                                                    </p>
                                                    <label className={styles.passwordExportToggle}>
                                                        <input
                                                            type="checkbox"
                                                            checked={allowPasswordExportByRole[credentialDetailRole]}
                                                            onChange={() =>
                                                                setAllowPasswordExportByRole((prev) => ({
                                                                    ...prev,
                                                                    [credentialDetailRole]: !prev[credentialDetailRole],
                                                                }))
                                                            }
                                                        />
                                                        <span>Allow password export</span>
                                                    </label>
                                                    <p className={styles.passwordHintText}>
                                                        If checked, newly created passwords will be saved in Clever and viewable by you.
                                                        Passwords are available for 10 days after they&apos;re created.
                                                        <span className={styles.linkText}> Learn more here</span>
                                                    </p>
                                                    <div className={styles.previewCard}>
                                                        <h4>{detailRoleMeta?.previewUserName}&apos;s password format</h4>
                                                        <div>
                                                            Example password{" "}
                                                            <strong>{detailRolePreviewPassword}</strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        )}
                                        {showFieldMappingStep && (
                                            <section className={styles.mappingSection}>
                                                <div className={styles.mappingMain}>
                                                    <h2>4. Do you want to map any additional fields from Clever to Google? (Optional)</h2>
                                                    <div className={styles.mappingTable}>
                                                        <div className={styles.mappingHeaderRow}>
                                                            <span>Google field</span>
                                                            <span>Clever field</span>
                                                            <span>Update behavior</span>
                                                            <span>Actions</span>
                                                        </div>
                                                        {detailRoleMappings.length === 0 ? (
                                                            <div className={styles.mappingEmpty}>No mapping rules added yet</div>
                                                        ) : (
                                                            detailRoleMappings.map((rule, ruleIndex) => (
                                                                <div key={`${rule.googleField}-${ruleIndex}`} className={styles.mappingDataRow}>
                                                                    <span>{rule.googleField}</span>
                                                                    <span>
                                                                        <span className={styles.tokenPill}>
                                                                            {rule.cleverFieldDisplay || mappingTokenToLabel((rule.blocks ?? [])[0] ?? rule.cleverField)}
                                                                        </span>
                                                                    </span>
                                                                    <span>{mappingBehaviorToLabel(rule.behavior)}</span>
                                                                    <div className={styles.mappingActions}>
                                                                        <button
                                                                            className={styles.mappingActionButton}
                                                                            onClick={() => {
                                                                                const existingBlocks = rule.blocks?.length
                                                                                    ? [...rule.blocks]
                                                                                    : extractFormulaTokens(rule.cleverFieldFormula ?? rule.cleverField);
                                                                                setPendingMappingGoogleField(rule.googleField);
                                                                                setPendingMappingBehavior(rule.behavior ?? "Update each sync");
                                                                                setPendingMappingBlocks(existingBlocks);
                                                                                setPendingMappingFormatType("premade");
                                                                                setMappingModalRole(credentialDetailRole);
                                                                                setMappingModalMode("rule");
                                                                                setMappingFieldMenuOpen(false);
                                                                                setEditingMappingIndex(ruleIndex);
                                                                            }}
                                                                            aria-label="Edit mapping rule"
                                                                        >
                                                                            <PencilIcon />
                                                                        </button>
                                                                        <button
                                                                            className={styles.mappingActionButton}
                                                                            onClick={() =>
                                                                                setMappingRulesByRole((prev) => ({
                                                                                    ...prev,
                                                                                    [credentialDetailRole]: prev[credentialDetailRole].filter(
                                                                                        (_, itemIndex) => itemIndex !== ruleIndex
                                                                                    ),
                                                                                }))
                                                                            }
                                                                            aria-label="Delete mapping rule"
                                                                        >
                                                                            ×
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        )}
                                                    </div>
                                                    <button
                                                        className={styles.addMappingButton}
                                                        onClick={() => {
                                                            setMappingModalRole(credentialDetailRole);
                                                            setMappingModalMode("rule");
                                                            setMappingFieldMenuOpen(false);
                                                            setPendingMappingGoogleField("");
                                                            setPendingMappingBlocks([]);
                                                            setPendingMappingFormatType("");
                                                            setPendingMappingBehavior("Update each sync");
                                                            setEditingMappingIndex(null);
                                                        }}
                                                    >
                                                        + Add mapping rule
                                                    </button>
                                                    {detailRoleMappings.length > 0 && (
                                                        <div className={styles.previewCard}>
                                                            <h4>{detailRoleMeta?.previewUserName}&apos;s additional Google fields format</h4>
                                                            {detailRoleMappings.map((rule, previewIndex) => (
                                                                <div key={`${rule.googleField}-${previewIndex}`}>
                                                                    Example {rule.googleField.toLowerCase()}{" "}
                                                                    <strong>{getPreviewMappingValue(rule.blocks ?? extractFormulaTokens(rule.cleverFieldFormula ?? rule.cleverField))}</strong>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                                <aside className={styles.mappingTip}>
                                                    <h3>Clever Tip</h3>
                                                    <p>
                                                        If you choose to sync sensitive data to Google, such as Clever IDs,
                                                        make sure the relevant Google field is only accessible by users who need it.
                                                    </p>
                                                </aside>
                                            </section>
                                        )}
                                        <div className={styles.provisioningFooter}>
                                            {!showPasswordStep ? (
                                                <button
                                                    className={styles.primaryButton}
                                                    onClick={() =>
                                                        setShowPasswordStepByRole((prev) => ({
                                                            ...prev,
                                                            [credentialDetailRole]: true,
                                                        }))
                                                    }
                                                >
                                                    Next Step
                                                </button>
                                            ) : !showFieldMappingStep ? (
                                                <button
                                                    className={styles.primaryButton}
                                                    onClick={() =>
                                                        setShowFieldMappingStepByRole((prev) => ({
                                                            ...prev,
                                                            [credentialDetailRole]: true,
                                                        }))
                                                    }
                                                >
                                                    Next Step
                                                </button>
                                            ) : (
                                                <button
                                                    className={`${styles.primaryButton} ${styles.saveButton}`}
                                                    onClick={() => setCredentialDetailRole(null)}
                                                >
                                                    Save
                                                </button>
                                            )}
                                        </div>
                                        {formatSelectionRole && (
                                            <div className={styles.modalBackdrop}>
                                                <div className={styles.modalPanel}>
                                                    <div className={styles.formatSelectionHeader}>
                                                        <h1>Build a format for {activeBuilderMeta?.pluralLabel ?? "user"} emails</h1>
                                                        <button className={styles.closeSelectionButton} onClick={closeCredentialBuilder}>x</button>
                                                    </div>
                                                    <div className={styles.formatChoiceList}>
                                                        {[
                                                            {
                                                                key: "premade",
                                                                title: "Start with a premade email format",
                                                                bullets: ["Pick a premade format to begin", "Edit the format as needed"],
                                                            },
                                                            {
                                                                key: "blocks",
                                                                title: "Build a email format",
                                                                bullets: ["Build your email format using blocks", "Blocks include variable, custom text, and functions"],
                                                            },
                                                            {
                                                                key: "advanced",
                                                                title: "Enter a format string (Advanced)",
                                                                bullets: ["Use the legacy syntax to write out a format string"],
                                                            },
                                                        ].map((choice) => (
                                                            <label key={choice.key} className={styles.formatChoiceCard}>
                                                                <input
                                                                    type="radio"
                                                                    name="format-choice"
                                                                    checked={formatChoiceByRole[formatSelectionRole] === choice.key}
                                                                    onChange={() =>
                                                                        setFormatChoiceByRole((prev) => ({ ...prev, [formatSelectionRole]: choice.key }))
                                                                    }
                                                                />
                                                                <div>
                                                                    <h3>{choice.title}</h3>
                                                                    <ul>
                                                                        {choice.bullets.map((bullet) => (
                                                                            <li key={bullet}>{bullet}</li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            </label>
                                                        ))}
                                                    </div>
                                                    <div className={styles.formatSelectionActions}>
                                                        <button
                                                            className={`${styles.primaryButton} ${!formatChoiceByRole[formatSelectionRole] ? styles.disabledButtonFake : ""}`}
                                                            disabled={!formatChoiceByRole[formatSelectionRole]}
                                                            onClick={() => openCredentialBuilder(formatSelectionRole, true, "email")}
                                                        >
                                                            Save format
                                                        </button>
                                                        <button className={styles.outlineButton} onClick={closeCredentialBuilder}>Cancel</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {formatBuilderRole && (
                                            <div className={styles.modalBackdrop}>
                                                <div className={styles.modalPanelWide}>
                                                    <div className={styles.formatBuilderTop}>
                                                        <h1>
                                                            Build a format for {activeBuilderMeta?.pluralLabel ?? "user"}{" "}
                                                            {formatBuilderType === "password" ? "passwords" : "emails"}
                                                        </h1>
                                                        <button className={styles.closeSelectionButton} onClick={closeCredentialBuilder}>x</button>
                                                    </div>
                                                    <p className={styles.provisioningIntro}>
                                                        This is your current {formatBuilderType === "password" ? "password" : "email"} format.
                                                        {" "}Learn more about <span className={styles.linkText}>formats</span>.
                                                        {" "}Start over or use the advanced format editor.
                                                    </p>
                                                    <div className={styles.formatBuilderLayout}>
                                                        <div>
                                                            {activeBuilderBlocks.map((block, index) => (
                                                                <div key={`${block}-${index}`} className={styles.formatBlockRow}>
                                                                    <span className={styles.blockTypeLabel}>Variable</span>
                                                                    <select
                                                                        value={block}
                                                                        onChange={(event) => {
                                                                            const nextBlocks = [...activeBuilderBlocks];
                                                                            nextBlocks[index] = event.target.value;
                                                                            if (formatBuilderType === "password") {
                                                                                setPasswordBlocksByRole((prev) => ({ ...prev, [formatBuilderRole]: nextBlocks }));
                                                                            } else if (isEditingFallback) {
                                                                                setFallbackBlocksByRole((prev) => ({ ...prev, [formatBuilderRole]: nextBlocks }));
                                                                            } else {
                                                                                setFormatBlocksByRole((prev) => ({ ...prev, [formatBuilderRole]: nextBlocks }));
                                                                            }
                                                                        }}
                                                                    >
                                                                        {formatBuilderType === "password" ? (
                                                                            <>
                                                                                <option value="{{student.student_number}}">Student Number</option>
                                                                                <option value="{{student.grade}}">Grade</option>
                                                                                <option value="{{school.sis_id}}">School ID</option>
                                                                                <option value="{{teacher.teacher_number}}">Teacher Number</option>
                                                                                <option value="{{staff.title}}">Staff Title</option>
                                                                            </>
                                                                        ) : (
                                                                            <>
                                                                                <option value="{{name.first}}">First Name</option>
                                                                                <option value="{{name.last}}">Last Name</option>
                                                                                <option value="{{teacher.teacher_number}}">Teacher Number</option>
                                                                                <option value="{{student.student_number}}">Student Number</option>
                                                                                <option value="{{staff.title}}">Staff Title</option>
                                                                            </>
                                                                        )}
                                                                    </select>
                                                                    <button
                                                                        className={styles.deleteRowButton}
                                                                        onClick={() => {
                                                                            const nextBlocks = activeBuilderBlocks.filter((_, rowIndex) => rowIndex !== index);
                                                                            if (formatBuilderType === "password") {
                                                                                setPasswordBlocksByRole((prev) => ({ ...prev, [formatBuilderRole]: nextBlocks }));
                                                                            } else if (isEditingFallback) {
                                                                                setFallbackBlocksByRole((prev) => ({ ...prev, [formatBuilderRole]: nextBlocks }));
                                                                            } else {
                                                                                setFormatBlocksByRole((prev) => ({ ...prev, [formatBuilderRole]: nextBlocks }));
                                                                            }
                                                                        }}
                                                                    >
                                                                        x
                                                                    </button>
                                                                </div>
                                                            ))}
                                                            <div className={styles.builderActionsRow}>
                                                                <button
                                                                    className={styles.outlineButton}
                                                                    onClick={() => {
                                                                        const nextBlocks = [...activeBuilderBlocks, formatBuilderType === "password" ? "{{student.student_number}}" : "{{name.first}}"];
                                                                        if (formatBuilderType === "password") {
                                                                            setPasswordBlocksByRole((prev) => ({ ...prev, [formatBuilderRole]: nextBlocks }));
                                                                        } else if (isEditingFallback) {
                                                                            setFallbackBlocksByRole((prev) => ({ ...prev, [formatBuilderRole]: nextBlocks }));
                                                                        } else {
                                                                            setFormatBlocksByRole((prev) => ({ ...prev, [formatBuilderRole]: nextBlocks }));
                                                                        }
                                                                    }}
                                                                >
                                                                    + Add an SIS Variable
                                                                </button>
                                                                <button className={styles.outlineButton}>+ Add Custom Text</button>
                                                                <button className={styles.outlineButton}>+ Add a Function</button>
                                                            </div>
                                                        </div>
                                                        <div className={styles.builderPreviewPanel}>
                                                            <h3>Preview</h3>
                                                            <p>Select any {activeBuilderMeta?.singularTitle.toLowerCase() ?? "user"} with an existing Clever account to preview their data using this format</p>
                                                            <div className={styles.previewCard}>
                                                                <label>USER NAME</label>
                                                                <div>{activeBuilderMeta?.previewUserName ?? "Rogelio Waelchi"}</div>
                                                            </div>
                                                            <div className={styles.previewCard}>
                                                                <h4>{activeBuilderMeta?.previewUserName ?? "Rogelio Waelchi"}&apos;s Preview</h4>
                                                                {formatBuilderType === "password" ? (
                                                                    <div className={styles.previewFields}>
                                                                        <div>Student Number = 00001</div>
                                                                        <div>Grade = 7</div>
                                                                        <div>School ID = d15209a0-83a2-4b6e-9251-ee4ad8831eea</div>
                                                                    </div>
                                                                ) : (
                                                                    <div className={styles.previewFields}>
                                                                        <div>First Name = Rogelio</div>
                                                                        <div>Last Name = Waelchi</div>
                                                                    </div>
                                                                )}
                                                                <div className={styles.previewResultTitle}>
                                                                    This {activeBuilderMeta?.singularTitle.toLowerCase() ?? "user"}&apos;s{" "}
                                                                    {formatBuilderType === "password" ? "password" : "email"} will be:
                                                                </div>
                                                                <div className={styles.previewResultValue}>
                                                                    {formatBuilderType === "password"
                                                                        ? getPreviewPasswordFromBlocks(activeBuilderBlocks, activeBuilderMeta)
                                                                        : getPreviewEmailFromBlocks(formatBuilderRole, activeBuilderBlocks, activeBuilderDomain)}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={styles.formatSelectionActions}>
                                                        <button
                                                            className={styles.primaryButton}
                                                            onClick={() => {
                                                                if (formatBuilderType === "password") {
                                                                    const newPassword = activeBuilderBlocks.join("");
                                                                    setPasswordBlocksByRole((prev) => ({ ...prev, [formatBuilderRole]: activeBuilderBlocks }));
                                                                    setCredentialsByRole((prev) => ({
                                                                        ...prev,
                                                                        [formatBuilderRole]: {
                                                                            ...prev[formatBuilderRole],
                                                                            password: newPassword,
                                                                        },
                                                                    }));
                                                                } else {
                                                                    const localPart = activeBuilderBlocks.join("");
                                                                    const newEmail = `${localPart}@${activeBuilderDomain}`;
                                                                    if (isEditingFallback) {
                                                                        setFallbackBlocksByRole((prev) => ({ ...prev, [formatBuilderRole]: activeBuilderBlocks }));
                                                                    } else {
                                                                        setFormatBlocksByRole((prev) => ({ ...prev, [formatBuilderRole]: activeBuilderBlocks }));
                                                                        setCredentialsByRole((prev) => ({
                                                                            ...prev,
                                                                            [formatBuilderRole]: {
                                                                                ...prev[formatBuilderRole],
                                                                                email: newEmail,
                                                                            },
                                                                        }));
                                                                    }
                                                                }
                                                                closeCredentialBuilder();
                                                            }}
                                                        >
                                                            Save format
                                                        </button>
                                                        <button className={styles.outlineButton} onClick={closeCredentialBuilder}>Cancel</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {mappingModalRole && (
                                            <div className={styles.modalBackdrop}>
                                                {mappingModalMode === "format-select" ? (
                                                    <div className={styles.modalPanelWide}>
                                                        <div className={styles.formatSelectionHeader}>
                                                            <h1>Build a format for {detailRoleMeta?.singularTitle.toLowerCase()} {pendingMappingFieldPlural}</h1>
                                                            <button
                                                                className={styles.closeSelectionButton}
                                                                onClick={() => {
                                                                    setMappingModalRole(null);
                                                                    setEditingMappingIndex(null);
                                                                }}
                                                            >
                                                                x
                                                            </button>
                                                        </div>
                                                        <div className={styles.formatChoiceList}>
                                                            {[
                                                                {
                                                                    key: "premade",
                                                                    title: `Start with a premade ${pendingMappingFieldLower} format`,
                                                                    bullets: ["Pick a premade format to begin", "Edit the format as needed"],
                                                                },
                                                                {
                                                                    key: "build",
                                                                    title: `Build a ${pendingMappingFieldLower} format`,
                                                                    bullets: ["Build your department format using blocks", "Blocks include variable, custom text, and functions"],
                                                                },
                                                                {
                                                                    key: "advanced",
                                                                    title: "Enter a format string (Advanced)",
                                                                    bullets: ["Use the legacy syntax to write out a format string"],
                                                                },
                                                            ].map((choice) => (
                                                                <label key={choice.key} className={styles.formatChoiceCard}>
                                                                    <input
                                                                        type="radio"
                                                                        name="mapping-format-choice"
                                                                        checked={pendingMappingFormatType === choice.key}
                                                                        onChange={() => setPendingMappingFormatType(choice.key)}
                                                                    />
                                                                    <div>
                                                                        <h3>{choice.title}</h3>
                                                                        <ul>
                                                                            {choice.bullets.map((bullet) => (
                                                                                <li key={bullet}>{bullet}</li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                </label>
                                                            ))}
                                                        </div>
                                                        <div className={styles.formatSelectionActions}>
                                                            <button
                                                                className={`${styles.primaryButton} ${!pendingMappingFormatType ? styles.disabledButtonFake : ""}`}
                                                                disabled={!pendingMappingFormatType}
                                                                onClick={() => {
                                                                    if (pendingMappingBlocks.length === 0) {
                                                                        setPendingMappingBlocks(["{{name.first}}"]);
                                                                    }
                                                                    setMappingModalMode("format-builder");
                                                                }}
                                                            >
                                                                Save format
                                                            </button>
                                                            <button className={styles.outlineButton} onClick={() => setMappingModalMode("rule")}>Cancel</button>
                                                        </div>
                                                    </div>
                                                ) : mappingModalMode === "format-builder" ? (
                                                    <div className={styles.modalPanelWide}>
                                                        <div className={styles.formatBuilderTop}>
                                                            <h1>Build a format for {detailRoleMeta?.singularTitle.toLowerCase()} {pendingMappingFieldPlural}</h1>
                                                            <button
                                                                className={styles.closeSelectionButton}
                                                                onClick={() => {
                                                                    setMappingModalRole(null);
                                                                    setEditingMappingIndex(null);
                                                                }}
                                                            >
                                                                x
                                                            </button>
                                                        </div>
                                                        <p className={styles.provisioningIntro}>
                                                            {pendingMappingFormatType === "premade"
                                                                ? `You are editing a premade ${pendingMappingFieldLower} format.`
                                                                : `This is your current ${pendingMappingFieldLower} format.`}{" "}
                                                            Learn more about <span className={styles.linkText}>formats</span>.
                                                            {" "}Choose a different premade format or use the advanced format editor.
                                                        </p>
                                                        <div className={styles.formatBuilderLayout}>
                                                            <div>
                                                                {pendingMappingBlocks.map((block, index) => (
                                                                    <div key={`${block}-${index}`} className={styles.formatBlockRow}>
                                                                        <span className={styles.blockTypeLabel}>Variable</span>
                                                                        <select
                                                                            value={block}
                                                                            onChange={(event) => {
                                                                                const nextBlocks = [...pendingMappingBlocks];
                                                                                nextBlocks[index] = event.target.value;
                                                                                setPendingMappingBlocks(nextBlocks);
                                                                            }}
                                                                        >
                                                                            <option value="{{name.first}}">First Name</option>
                                                                            <option value="{{name.last}}">Last Name</option>
                                                                            <option value="{{staff.title}}">Staff Title</option>
                                                                            <option value="{{staff.department}}">Department</option>
                                                                            <option value="{{staff.employee_id}}">Employee ID</option>
                                                                            <option value="{{staff.location}}">Location</option>
                                                                        </select>
                                                                        <button
                                                                            className={styles.deleteRowButton}
                                                                            onClick={() =>
                                                                                setPendingMappingBlocks((prev) => prev.filter((_, rowIndex) => rowIndex !== index))
                                                                            }
                                                                        >
                                                                            x
                                                                        </button>
                                                                    </div>
                                                                ))}
                                                                <div className={styles.builderActionsRow}>
                                                                    <button
                                                                        className={styles.outlineButton}
                                                                        onClick={() => setPendingMappingBlocks((prev) => [...prev, "{{name.first}}"])}
                                                                    >
                                                                        + Add an SIS Variable
                                                                    </button>
                                                                    <button className={styles.outlineButton}>+ Add Custom Text</button>
                                                                    <button className={styles.outlineButton}>+ Add a Function</button>
                                                                </div>
                                                            </div>
                                                            <div className={styles.builderPreviewPanel}>
                                                                <h3>Preview</h3>
                                                                <p>Select any {detailRoleMeta?.singularTitle.toLowerCase()} with an existing Clever account to preview their data using this format</p>
                                                                <div className={styles.previewCard}>
                                                                    <label>USER NAME</label>
                                                                    <div>{detailRoleMeta?.previewUserName}</div>
                                                                </div>
                                                                <div className={styles.previewCard}>
                                                                    <h4>{detailRoleMeta?.previewUserName}&apos;s Preview</h4>
                                                                    <div className={styles.previewFields}>
                                                                        <div>First Name = Rogelio</div>
                                                                    </div>
                                                                    <div className={styles.previewResultTitle}>
                                                                        This student&apos;s {pendingMappingFieldLower} will be
                                                                    </div>
                                                                    <div className={styles.previewResultValue}>
                                                                        {getPreviewMappingValue(pendingMappingBlocks)}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={styles.formatSelectionActions}>
                                                            <button
                                                                className={styles.primaryButton}
                                                                onClick={() => setMappingModalMode("rule")}
                                                            >
                                                                Save format
                                                            </button>
                                                            <button className={styles.outlineButton} onClick={() => setMappingModalMode("rule")}>Cancel</button>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className={styles.modalPanel}>
                                                        <div className={styles.formatSelectionHeader}>
                                                            <h1>Add mapping rule</h1>
                                                            <button
                                                                className={styles.modalCloseSquare}
                                                                onClick={() => {
                                                                    setMappingModalRole(null);
                                                                    setMappingFieldMenuOpen(false);
                                                                    setEditingMappingIndex(null);
                                                                }}
                                                            >
                                                                x
                                                            </button>
                                                        </div>
                                                        <h3 className={styles.mappingModalLabel}>Select the Google field you want to map to</h3>
                                                        <div className={styles.mappingSelectWrap}>
                                                            <button
                                                                className={styles.mappingSelectButton}
                                                                onClick={() => setMappingFieldMenuOpen((prev) => !prev)}
                                                            >
                                                                <span>{pendingMappingGoogleField || " "}</span>
                                                                <ChevronDown />
                                                            </button>
                                                            {mappingFieldMenuOpen && (
                                                                <div className={styles.mappingFieldMenu}>
                                                                    {GOOGLE_MAPPING_FIELDS.map((field) => (
                                                                        <button
                                                                            key={field}
                                                                            className={styles.mappingFieldItem}
                                                                            onClick={() => {
                                                                                setPendingMappingGoogleField(field);
                                                                                setMappingFieldMenuOpen(false);
                                                                            }}
                                                                        >
                                                                            {field}
                                                                        </button>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                        <p className={styles.mappingBodyText}>
                                                            Use the button below to select a Clever field or build a custom format to populate{" "}
                                                            <strong>{pendingMappingFieldLower}.</strong>
                                                        </p>
                                                        {!hasPendingMappingFormat ? (
                                                            <button
                                                                className={`${styles.primaryButton} ${!pendingMappingGoogleField ? styles.disabledButtonFake : ""}`}
                                                                disabled={!pendingMappingGoogleField}
                                                                onClick={() => setMappingModalMode("format-select")}
                                                            >
                                                                Build your format
                                                            </button>
                                                        ) : (
                                                            <>
                                                                <div className={styles.tokenRow}>
                                                                    {pendingMappingBlocks.map((token, index) => (
                                                                        <span key={`${token}-${index}`} className={styles.tokenPill}>{token}</span>
                                                                    ))}
                                                                </div>
                                                                <button
                                                                    className={styles.linkButton}
                                                                    onClick={() => setMappingModalMode("format-builder")}
                                                                >
                                                                    Edit your format
                                                                </button>
                                                                <div className={styles.previewCard}>
                                                                    <h4>{detailRoleMeta?.previewUserName}&apos;s {pendingMappingFieldLower} format</h4>
                                                                    <div>
                                                                        Example {pendingMappingFieldLower}{" "}
                                                                        <strong>{getPreviewMappingValue(pendingMappingBlocks)}</strong>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )}
                                                        <p className={styles.mappingBodyText}>
                                                            Not sure which custom formula to use? Check out the <span className={styles.linkText}>Help Center</span>.
                                                            Don&apos;t see the Google or Clever field you want? <span className={styles.linkText}>Let us know.</span>
                                                        </p>
                                                        {hasPendingMappingFormat && (
                                                            <div className={styles.mappingBehaviorGroup}>
                                                                <h3>Select when Clever IDM updates Active Directory field</h3>
                                                                <label>
                                                                    <input
                                                                        type="radio"
                                                                        name="mapping-behavior"
                                                                        checked={pendingMappingBehavior === "Update each sync"}
                                                                        onChange={() => setPendingMappingBehavior("Update each sync")}
                                                                    />
                                                                    <span>Update {pendingMappingFieldLabel} on each sync</span>
                                                                </label>
                                                                <label>
                                                                    <input
                                                                        type="radio"
                                                                        name="mapping-behavior"
                                                                        checked={pendingMappingBehavior === "Update on create or blank"}
                                                                        onChange={() => setPendingMappingBehavior("Update on create or blank")}
                                                                    />
                                                                    <span>Update {pendingMappingFieldLabel} when user is created or {pendingMappingFieldLabel} is blank</span>
                                                                </label>
                                                            </div>
                                                        )}
                                                        <div className={styles.mappingRuleActions}>
                                                            <button
                                                                className={styles.mappingCancelLink}
                                                                onClick={() => {
                                                                    setMappingModalRole(null);
                                                                    setMappingModalMode("rule");
                                                                    setMappingFieldMenuOpen(false);
                                                                    setEditingMappingIndex(null);
                                                                }}
                                                            >
                                                                Cancel
                                                            </button>
                                                            <button
                                                                className={`${styles.primaryButton} ${(!pendingMappingGoogleField || !hasPendingMappingFormat) ? styles.disabledButtonFake : ""}`}
                                                                disabled={!pendingMappingGoogleField || !hasPendingMappingFormat}
                                                                onClick={() => {
                                                                    const nextRule = {
                                                                        googleField: pendingMappingGoogleField,
                                                                        cleverField: pendingMappingFormula,
                                                                        cleverFieldFormula: pendingMappingFormula,
                                                                        cleverFieldDisplay: mappingTokenToLabel(pendingMappingBlocks[0] ?? pendingMappingFormula),
                                                                        blocks: [...pendingMappingBlocks],
                                                                        behavior: pendingMappingBehavior,
                                                                    };
                                                                    setMappingRulesByRole((prev) => ({
                                                                        ...prev,
                                                                        [mappingModalRole]: editingMappingIndex === null
                                                                            ? [...prev[mappingModalRole], nextRule]
                                                                            : prev[mappingModalRole].map((item, index) =>
                                                                                index === editingMappingIndex ? nextRule : item
                                                                            ),
                                                                    }));
                                                                    setMappingModalRole(null);
                                                                    setMappingModalMode("rule");
                                                                    setMappingFieldMenuOpen(false);
                                                                    setEditingMappingIndex(null);
                                                                }}
                                                            >
                                                                Add
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <>
                                        <div className={styles.credentialsHeader}>
                                            <h1>Set login credentials</h1>
                                            <div className={styles.credentialsProgress}>
                                                <div className={styles.credentialsProgressBar}>
                                                    <span
                                                        className={styles.credentialsProgressFill}
                                                        style={{
                                                            width: `${selectedCredentialRoles.length === 0
                                                                ? 0
                                                                : (completedCredentialCount / selectedCredentialRoles.length) * 100}%`,
                                                        }}
                                                    />
                                                </div>
                                                <span>{completedCredentialCount} of {selectedCredentialRoles.length} steps</span>
                                            </div>
                                        </div>
                                        <div className={styles.credentialsGrid}>
                                            {selectedCredentialRoles.map((role) => {
                                                const credentials = credentialsByRole[role.key];
                                                const isComplete = Boolean(credentials.email.trim() && credentials.password.trim());

                                                return (
                                                    <div key={role.key} className={styles.credentialsCard}>
                                                        <div className={styles.credentialsCardTop}>
                                                            <div className={styles.credentialsTitleRow}>
                                                                <h3>{role.title}</h3>
                                                                <span className={`${styles.completedBadge} ${!isComplete ? styles.pendingBadge : ""}`}>
                                                                    {isComplete ? "Completed" : "Needs setup"}
                                                                </span>
                                                            </div>
                                                            <button
                                                                className={styles.editCredentialButton}
                                                                onClick={() => {
                                                                    setCredentialDetailRole(role.key);
                                                                    setShowPasswordStepByRole((prev) => ({ ...prev, [role.key]: false }));
                                                                    setShowFieldMappingStepByRole((prev) => ({ ...prev, [role.key]: false }));
                                                                    setFallbackTooltipRole(null);
                                                                }}
                                                            >
                                                                Edit
                                                            </button>
                                                        </div>
                                                        <div className={styles.credentialsValues}>
                                                            <div>
                                                                <label>EMAIL</label>
                                                                <div>{credentials.email}</div>
                                                            </div>
                                                            <div>
                                                                <label>PASSWORD</label>
                                                                <div>{credentials.password}</div>
                                                            </div>
                                                        </div>
                                                        {!isComplete && (
                                                            <div className={styles.credentialsIncomplete}>Missing email or password formula</div>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div className={styles.infoBanner}>
                                            <span className={styles.infoDot}>?</span>
                                            <span>
                                                Need help setting up your login credentials? Check out the
                                                <span className={styles.linkText}> Set login credentials section</span> of our Clever IDM course in Clever Academy!
                                            </span>
                                        </div>
                                        <div className={styles.provisioningFooter}>
                                            <button
                                                className={styles.primaryButton}
                                                onClick={() =>
                                                    setProvisionStep((prev) => Math.min(prev + 1, provisioningSteps.length))
                                                }
                                            >
                                                {provisioningSteps[provisionStep] ?? "Continue"}
                                            </button>
                                        </div>
                                    </>
                                )}
                            </>
                        ) : currentProvisioningTitle === "Organize OUs" ? (
                            <>
                                {ouDetailType === "students" ? (
                                    <div className={styles.ouDetailPage}>
                                        <h1>Student OUs</h1>
                                        <p className={styles.provisioningIntro}>
                                            Organize students into your existing Google OU structure and create optional sub-OUs based on Clever
                                            student data. <span className={styles.linkText}>Learn more about sub-OUs.</span>
                                        </p>
                                        <div className={styles.ouDetailLayout}>
                                            <div className={styles.ouDetailMain}>
                                                <section className={styles.detailSection}>
                                                    <h2>1. Preview any student with an existing Clever account.</h2>
                                                    <div className={styles.previewCard}>
                                                        <label>USER NAME</label>
                                                        <div>Rogelio Waelchi</div>
                                                    </div>
                                                    <div className={styles.previewCard}>
                                                        <h4>Rogelio Waelchi&apos;s Clever Data</h4>
                                                        <div className={styles.dataGrid}>
                                                            <div className={styles.dataGridItem}>
                                                                <span>School</span>
                                                                <strong>Truetelside Middle School</strong>
                                                            </div>
                                                            <div className={styles.dataGridItem}>
                                                                <span>Grade</span>
                                                                <strong>7th Grade</strong>
                                                            </div>
                                                            <div className={styles.dataGridItem}>
                                                                <span>Graduation Year</span>
                                                                <strong>Class of 2031</strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>

                                                <section className={styles.detailSection}>
                                                    <h2>2. Select a parent OU to place all students</h2>
                                                    <div className={styles.ouTreeTable}>
                                                        <div className={styles.ouTreeHeader}>
                                                            <span>Your Google Org Units</span>
                                                            <button className={styles.linkButton}>Refresh</button>
                                                        </div>
                                                        {[
                                                            { key: "fort", label: "Fort Virgilfield Elementary School", value: "/Fort Virgilfield Elementary School", level: 0, expandable: false },
                                                            { key: "devices", label: "Devices", value: "/Devices", level: 1, expandable: false },
                                                            { key: "students", label: "Students", value: "/Students", level: 1, expandable: true },
                                                        ].map((row) => (
                                                            <div key={row.key} className={styles.ouTreeRow}>
                                                                <label className={styles.ouRadioCol}>
                                                                    <input
                                                                        type="radio"
                                                                        name="student-parent-ou"
                                                                        checked={studentParentOu === row.value}
                                                                        onChange={() => setStudentParentOu(row.value)}
                                                                    />
                                                                </label>
                                                                <button
                                                                    className={styles.ouTreeLabelButton}
                                                                    onClick={() => {
                                                                        if (row.expandable) {
                                                                            setOuTreeExpanded((prev) => ({ ...prev, students: !prev.students }));
                                                                        } else {
                                                                            setStudentParentOu(row.value);
                                                                        }
                                                                    }}
                                                                    style={{ paddingLeft: `${row.level * 24 + 14}px` }}
                                                                >
                                                                    {row.expandable && <span>{ouTreeExpanded.students ? "▾" : "▸"}</span>}
                                                                    <span>{row.label}</span>
                                                                </button>
                                                            </div>
                                                        ))}
                                                        {ouTreeExpanded.students && (
                                                            <>
                                                                {["/Students/1", "/Students/2", "/Students/3", "/Students/4", "/Students/5"].map((path) => (
                                                                    <div key={path} className={styles.ouTreeRow}>
                                                                        <label className={styles.ouRadioCol}>
                                                                            <input
                                                                                type="radio"
                                                                                name="student-parent-ou"
                                                                                checked={studentParentOu === path}
                                                                                onChange={() => setStudentParentOu(path)}
                                                                            />
                                                                        </label>
                                                                        <button
                                                                            className={styles.ouTreeLabelButton}
                                                                            onClick={() => setStudentParentOu(path)}
                                                                            style={{ paddingLeft: "62px" }}
                                                                        >
                                                                            <span>{path.replace("/Students/", "")}</span>
                                                                        </button>
                                                                    </div>
                                                                ))}
                                                                <div className={styles.ouTreeRow}>
                                                                    <label className={styles.ouRadioCol}>
                                                                        <input
                                                                            type="radio"
                                                                            name="student-parent-ou"
                                                                            checked={studentParentOu === "/Truetelside Middle School"}
                                                                            onChange={() => setStudentParentOu("/Truetelside Middle School")}
                                                                        />
                                                                    </label>
                                                                    <button
                                                                        className={styles.ouTreeLabelButton}
                                                                        onClick={() =>
                                                                            setOuTreeExpanded((prev) => ({ ...prev, treutelside: !prev.treutelside }))
                                                                        }
                                                                        style={{ paddingLeft: "38px" }}
                                                                    >
                                                                        <span>{ouTreeExpanded.treutelside ? "▾" : "▸"}</span>
                                                                        <span>Truetelside Middle School</span>
                                                                    </button>
                                                                </div>
                                                                {ouTreeExpanded.treutelside && ["/Truetelside Middle School/6", "/Truetelside Middle School/7", "/Truetelside Middle School/8"].map((path) => (
                                                                    <div key={path} className={styles.ouTreeRow}>
                                                                        <label className={styles.ouRadioCol}>
                                                                            <input
                                                                                type="radio"
                                                                                name="student-parent-ou"
                                                                                checked={studentParentOu === path}
                                                                                onChange={() => setStudentParentOu(path)}
                                                                            />
                                                                        </label>
                                                                        <button
                                                                            className={styles.ouTreeLabelButton}
                                                                            onClick={() => setStudentParentOu(path)}
                                                                            style={{ paddingLeft: "62px" }}
                                                                        >
                                                                            <span>{path.split("/").pop()}</span>
                                                                        </button>
                                                                    </div>
                                                                ))}
                                                            </>
                                                        )}
                                                        <div className={styles.ouTreeRow}>
                                                            <label className={styles.ouRadioCol}>
                                                                <input
                                                                    type="radio"
                                                                    name="student-parent-ou"
                                                                    checked={studentParentOu === "/Users"}
                                                                    onChange={() => setStudentParentOu("/Users")}
                                                                />
                                                            </label>
                                                            <button
                                                                className={styles.ouTreeLabelButton}
                                                                onClick={() => setOuTreeExpanded((prev) => ({ ...prev, users: !prev.users }))}
                                                                style={{ paddingLeft: "14px" }}
                                                            >
                                                                <span>{ouTreeExpanded.users ? "▾" : "▸"}</span>
                                                                <span>Users</span>
                                                            </button>
                                                        </div>
                                                        {ouTreeExpanded.users && (
                                                            <div className={styles.ouTreeRow}>
                                                                <label className={styles.ouRadioCol}>
                                                                    <input
                                                                        type="radio"
                                                                        name="student-parent-ou"
                                                                        checked={studentParentOu === "/Users/Staff"}
                                                                        onChange={() => setStudentParentOu("/Users/Staff")}
                                                                    />
                                                                </label>
                                                                <button
                                                                    className={styles.ouTreeLabelButton}
                                                                    onClick={() => setOuTreeExpanded((prev) => ({ ...prev, staff: !prev.staff }))}
                                                                    style={{ paddingLeft: "38px" }}
                                                                >
                                                                    <span>{ouTreeExpanded.staff ? "▾" : "▸"}</span>
                                                                    <span>Staff</span>
                                                                </button>
                                                            </div>
                                                        )}
                                                        {ouTreeExpanded.users && ouTreeExpanded.staff && (
                                                            <>
                                                                {["Counseling", "District Office", "Operations", "Student Services", "Teachers"].map((label) => (
                                                                    <div key={label} className={styles.ouTreeRow}>
                                                                        <label className={styles.ouRadioCol}>
                                                                            <input
                                                                                type="radio"
                                                                                name="student-parent-ou"
                                                                                checked={studentParentOu === `/Users/Staff/${label}`}
                                                                                onChange={() => setStudentParentOu(`/Users/Staff/${label}`)}
                                                                            />
                                                                        </label>
                                                                        <button
                                                                            className={styles.ouTreeLabelButton}
                                                                            onClick={() => setStudentParentOu(`/Users/Staff/${label}`)}
                                                                            style={{ paddingLeft: "62px" }}
                                                                        >
                                                                            <span>{label}</span>
                                                                        </button>
                                                                    </div>
                                                                ))}
                                                            </>
                                                        )}
                                                    </div>
                                                </section>

                                                {showStudentOuSubStep && (
                                                    <section className={styles.detailSection}>
                                                        <h2>3. Which sub-OUs do you want to create inside of {studentParentOu} OU? (Optional)</h2>
                                                        <div className={styles.ouFormatTokenRow}>
                                                            {studentOuDisplayParts.map((part, index) => (
                                                                part === "/" ? (
                                                                    <span key={`${part}-${index}`} className={styles.ouSlashToken}>/</span>
                                                                ) : part.startsWith("{{") ? (
                                                                    <span key={`${part}-${index}`} className={styles.tokenPill}>{part}</span>
                                                                ) : (
                                                                    <span key={`${part}-${index}`} className={styles.ouTextToken}>{part}</span>
                                                                )
                                                            ))}
                                                        </div>
                                                        <button
                                                            className={styles.linkButton}
                                                            onClick={() => setStudentOuModalOpen(true)}
                                                        >
                                                            Edit your format
                                                        </button>
                                                        <div className={styles.previewCard}>
                                                            <h4>Rogelio Waelchi&apos;s OU placement</h4>
                                                            <div>
                                                                Example OU <strong>{studentOuExamplePath}</strong>
                                                            </div>
                                                        </div>
                                                    </section>
                                                )}

                                                <div className={styles.infoBanner}>
                                                    <span className={styles.infoDot}>?</span>
                                                    <span>
                                                        For additional information please see the <span className={styles.linkText}>Organize OUs section</span> of
                                                        our Clever IDM course in Clever Academy.
                                                    </span>
                                                </div>
                                                <div className={styles.provisioningFooter}>
                                                    {!showStudentOuSubStep ? (
                                                        <button
                                                            className={styles.primaryButton}
                                                            onClick={() => setShowStudentOuSubStep(true)}
                                                        >
                                                            Next step
                                                        </button>
                                                    ) : (
                                                        <button
                                                            className={`${styles.primaryButton} ${styles.saveButton}`}
                                                            onClick={() => {
                                                                const normalizedFormula = studentOuFormula.startsWith("/") ? studentOuFormula : `/${studentOuFormula}`;
                                                                setStudentOuConfig({
                                                                    parentOu: studentParentOu,
                                                                    subOuFormula: normalizedFormula,
                                                                });
                                                                setOuDetailType(null);
                                                            }}
                                                        >
                                                            Save
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                            <aside className={styles.ouDetailSide}>
                                                <div className={styles.previewCard}>
                                                    <h4>Preview</h4>
                                                    <div className={styles.ouPreviewTree}>
                                                        <div>▸ Fort Virgilfield Elementary School</div>
                                                        <div>▸ Students</div>
                                                        <div>▾ Truetelside Middle School</div>
                                                        <div className={styles.ouTreeIndented}>▸ 7</div>
                                                        <div className={styles.ouTreeIndented}>👤 Rogelio Waelchi</div>
                                                    </div>
                                                </div>
                                                <aside className={styles.mappingTip}>
                                                    <h3>Clever Tip</h3>
                                                    <p>
                                                        Don&apos;t see a parent OU to place students? Create a new OU in your
                                                        <span className={styles.linkText}> Google Admin Console</span> and it will appear in the table.
                                                    </p>
                                                </aside>
                                            </aside>
                                        </div>

                                        {studentOuModalOpen && (
                                            <div className={styles.modalBackdrop}>
                                                <div className={styles.modalPanelWide}>
                                                    <div className={styles.formatBuilderTop}>
                                                        <h1>Build a format for student sub-OUs</h1>
                                                        <button className={styles.closeSelectionButton} onClick={() => setStudentOuModalOpen(false)}>x</button>
                                                    </div>
                                                    {studentOuFormatMode === "builder" ? (
                                                        <p className={styles.provisioningIntro}>
                                                            This is your current sub-OU format. Learn more about <span className={styles.linkText}>formats</span>.
                                                            {" "}Start over or <button className={styles.inlineLinkButton} onClick={() => {
                                                                setStudentOuAdvancedString(studentOuFormula);
                                                                setStudentOuFormatMode("advanced");
                                                            }}>use the advanced format editor.</button>
                                                        </p>
                                                    ) : (
                                                        <p className={styles.provisioningIntro}>
                                                            You have entered a custom format string. Learn more about <span className={styles.linkText}>formats</span>.
                                                            {" "} <button className={styles.inlineLinkButton} onClick={() => {
                                                                setStudentOuFormatMode("builder");
                                                                setStudentOuBlocks([
                                                                    { type: "text", value: "/" },
                                                                    { type: "variable", value: "school_name" },
                                                                    { type: "text", value: "/" },
                                                                    { type: "variable", value: "student.grade" },
                                                                ]);
                                                            }}>Want to start over instead?</button>
                                                        </p>
                                                    )}

                                                    <div className={styles.formatBuilderLayout}>
                                                        <div>
                                                            {studentOuFormatMode === "builder" ? (
                                                                <>
                                                                    {studentOuBlocks.map((block, index) => (
                                                                        <div key={`${block.type}-${index}`} className={styles.formatBlockRow}>
                                                                            <span className={styles.blockTypeLabel}>{block.type === "text" ? "Text" : "Variable"}</span>
                                                                            {block.type === "text" ? (
                                                                                <input
                                                                                    className={styles.ouTextInput}
                                                                                    value={block.value}
                                                                                    onChange={(event) => {
                                                                                        const nextBlocks = [...studentOuBlocks];
                                                                                        nextBlocks[index] = { ...block, value: event.target.value };
                                                                                        setStudentOuBlocks(nextBlocks);
                                                                                    }}
                                                                                />
                                                                            ) : (
                                                                                <select
                                                                                    value={block.value}
                                                                                    onChange={(event) => {
                                                                                        const nextBlocks = [...studentOuBlocks];
                                                                                        nextBlocks[index] = { ...block, value: event.target.value };
                                                                                        setStudentOuBlocks(nextBlocks);
                                                                                    }}
                                                                                >
                                                                                    <option value="school_name">School Name</option>
                                                                                    <option value="student.grade">Grade</option>
                                                                                </select>
                                                                            )}
                                                                            <button
                                                                                className={styles.deleteRowButton}
                                                                                onClick={() => {
                                                                                    setStudentOuBlocks((prev) => prev.filter((_, rowIndex) => rowIndex !== index));
                                                                                }}
                                                                            >
                                                                                x
                                                                            </button>
                                                                            {block.type === "variable" && block.value === "student.grade" && (
                                                                                <div className={styles.optionalVarWarning}>
                                                                                    You have selected an optional variable. Some users can have missing data for this field.
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    ))}
                                                                    <div className={styles.builderActionsRow}>
                                                                        <button
                                                                            className={styles.outlineButton}
                                                                            onClick={() => setStudentOuBlocks((prev) => [...prev, { type: "text", value: "/" }])}
                                                                        >
                                                                            + Add &quot;/&quot;
                                                                        </button>
                                                                        <button
                                                                            className={styles.outlineButton}
                                                                            onClick={() => setStudentOuBlocks((prev) => [...prev, { type: "variable", value: "school_name" }])}
                                                                        >
                                                                            + Add an SIS Variable
                                                                        </button>
                                                                        <button
                                                                            className={styles.outlineButton}
                                                                            onClick={() => setStudentOuBlocks((prev) => [...prev, { type: "text", value: "" }])}
                                                                        >
                                                                            + Add Custom Text
                                                                        </button>
                                                                        <button
                                                                            className={styles.outlineButton}
                                                                            onClick={() => setStudentOuBlocks((prev) => [...prev, { type: "variable", value: "student.grade" }])}
                                                                        >
                                                                            + Add a Function
                                                                        </button>
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <div className={styles.advancedOuEditor}>
                                                                    <label>Custom sub-OU format string</label>
                                                                    <textarea
                                                                        value={studentOuAdvancedString}
                                                                        onChange={(event) => setStudentOuAdvancedString(event.target.value)}
                                                                    />
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className={styles.ouBuilderSide}>
                                                            <div className={styles.previewCard}>
                                                                <button
                                                                    className={styles.ouCurrentToggle}
                                                                    onClick={() => setStudentOuCurrentOUsOpen((prev) => !prev)}
                                                                >
                                                                    <span>Current OUs</span>
                                                                    <span>{studentOuCurrentOUsOpen ? "▾" : "▸"}</span>
                                                                </button>
                                                                {studentOuCurrentOUsOpen && (
                                                                    <div className={styles.ouCurrentList}>
                                                                        {["/", "/Devices", "/Students", "/Students/1", "/Students/2", "/Users/Staff/Teachers"].map((path) => (
                                                                            <div key={path}>{path}</div>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div className={styles.previewCard}>
                                                                <h4>Preview</h4>
                                                                <p>Select any student with an existing Clever account to preview their data using this format</p>
                                                                <button
                                                                    className={styles.previewUserSelect}
                                                                    onClick={() => setStudentOuPreviewUserOpen((prev) => !prev)}
                                                                >
                                                                    <div>
                                                                        <label>USER NAME</label>
                                                                        <div>Rogelio Waelchi</div>
                                                                    </div>
                                                                    <span>▾</span>
                                                                </button>
                                                                {studentOuPreviewUserOpen && (
                                                                    <input className={styles.previewSearchInput} placeholder="Type to search" />
                                                                )}
                                                                <div className={styles.previewCard}>
                                                                    <h4>Rogelio Waelchi&apos;s Preview</h4>
                                                                    {studentOuFormula.includes("{{school_name}}") && <div>School Name = Truetelside Middle School</div>}
                                                                    {studentOuFormula.includes("{{student.grade}}") && <div>Grade = 7</div>}
                                                                    <div className={styles.previewResultTitle}>
                                                                        This student&apos;s sub-OU will be <strong>{studentOuPreviewPath}</strong>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={styles.formatSelectionActions}>
                                                        <button
                                                            className={styles.primaryButton}
                                                            onClick={() => {
                                                                if (studentOuFormatMode === "builder") {
                                                                    setStudentOuAdvancedString(studentOuFormula);
                                                                }
                                                                setStudentOuModalOpen(false);
                                                            }}
                                                        >
                                                            Save format
                                                        </button>
                                                        <button className={styles.outlineButton} onClick={() => setStudentOuModalOpen(false)}>Cancel</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : ouDetailType === "teachers" ? (
                                    <div className={styles.ouDetailPage}>
                                        <h1>Teacher OUs</h1>
                                        <p className={styles.provisioningIntro}>
                                            Organize teachers into your existing Google OU structure and create optional sub-OUs based on Clever
                                            teacher data. <span className={styles.linkText}>Learn more about sub-OUs.</span>
                                        </p>
                                        <div className={styles.ouDetailLayout}>
                                            <div className={styles.ouDetailMain}>
                                                <section className={styles.detailSection}>
                                                    <h2>1. Preview any teacher with an existing Clever account.</h2>
                                                    <div className={styles.previewCard}>
                                                        <label>USER NAME</label>
                                                        <div>Betty Bauch</div>
                                                    </div>
                                                    <div className={styles.previewCard}>
                                                        <h4>Betty Bauch&apos;s Clever Data</h4>
                                                        <div className={styles.dataGrid}>
                                                            <div className={styles.dataGridItem}>
                                                                <span>School</span>
                                                                <strong>Truetelside Middle School</strong>
                                                            </div>
                                                            <div className={styles.dataGridItem}>
                                                                <span>Title</span>
                                                                <strong>Ms.</strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>

                                                <section className={styles.detailSection}>
                                                    <h2>2. Select a parent OU to place all teachers</h2>
                                                    <div className={styles.ouTreeTable}>
                                                        <div className={styles.ouTreeHeader}>
                                                            <span>Your Google Org Units</span>
                                                            <button className={styles.linkButton}><RefreshIcon /> Refresh</button>
                                                        </div>
                                                        {[
                                                            { key: "fort", label: "Fort Virgilfield Elementary School", value: "/Fort Virgilfield Elementary School", level: 0 },
                                                            { key: "devices", label: "Devices", value: "/Devices", level: 1, expandable: false },
                                                            { key: "students", label: "Students", value: "/Students", level: 1, expandable: true },
                                                            { key: "users", label: "Users", value: "/Users", level: 1, expandable: true },
                                                        ].map((row) => (
                                                            <div key={row.key} className={styles.ouTreeRow}>
                                                                <label className={styles.ouRadioCol}>
                                                                    <input
                                                                        type="radio"
                                                                        name="teacher-parent-ou"
                                                                        checked={teacherParentOu === row.value}
                                                                        onChange={() => setTeacherParentOu(row.value)}
                                                                    />
                                                                </label>
                                                                <button
                                                                    className={styles.ouTreeLabelButton}
                                                                    onClick={() => setTeacherParentOu(row.value)}
                                                                    style={{ paddingLeft: `${row.level * 24 + 14}px` }}
                                                                >
                                                                    {row.expandable && <span>▸</span>}
                                                                    <span>{row.label}</span>
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </section>

                                                {showTeacherOuSubStep && (
                                                    <section className={styles.detailSection}>
                                                        <h2>3. Which sub-OUs do you want to create inside of {teacherOuTargetTemplate} OU? (Optional)</h2>
                                                        <button
                                                            className={styles.primaryButton}
                                                            onClick={() => {
                                                                setTeacherOuCurrentOUsOpen(false);
                                                                setTeacherOuModalOpen(true);
                                                            }}
                                                        >
                                                            {teacherOuFormatChoice ? "Edit your format" : "Build your format"}
                                                        </button>
                                                        <div className={styles.previewCard}>
                                                            <h4>Betty Bauch&apos;s OU placement</h4>
                                                            <div>
                                                                Example OU <strong>{teacherOuTargetTemplate}</strong>
                                                            </div>
                                                        </div>
                                                    </section>
                                                )}

                                                <div className={styles.infoBanner}>
                                                    <span className={styles.infoDot}>?</span>
                                                    <span>
                                                        For additional information please see the <span className={styles.linkText}>Organize OUs section</span> of
                                                        our Clever IDM course in Clever Academy.
                                                    </span>
                                                </div>
                                                <div className={styles.provisioningFooter}>
                                                    {!showTeacherOuSubStep ? (
                                                        <button
                                                            className={styles.primaryButton}
                                                            onClick={() => setShowTeacherOuSubStep(true)}
                                                        >
                                                            Next step
                                                        </button>
                                                    ) : (
                                                        <button
                                                            className={`${styles.primaryButton} ${styles.saveButton}`}
                                                            onClick={() => {
                                                                setTeacherOuConfig({
                                                                    parentOu: teacherParentOu,
                                                                    subOuFormula: "/Staff/Teachers",
                                                                });
                                                                setOuDetailType(null);
                                                            }}
                                                        >
                                                            Save
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                            <aside className={styles.ouDetailSide}>
                                                <div className={styles.previewCard}>
                                                    <h4>Preview</h4>
                                                    <div className={styles.ouPreviewTree}>
                                                        <div>▸ Fort Virgilfield Elementary School</div>
                                                        <div>▾ Users</div>
                                                        <div className={styles.ouTreeIndented}>▸ Staff</div>
                                                        <div className={styles.ouTreeIndented}>▾ Teachers</div>
                                                        <div style={{ marginLeft: "34px" }}>👤 Betty Bauch</div>
                                                    </div>
                                                </div>
                                                {!showTeacherOuSubStep ? (
                                                    <aside className={styles.mappingTip}>
                                                        <h3>Clever Tip</h3>
                                                        <p>
                                                            Don&apos;t see a parent OU to place teachers? Create a new OU in your
                                                            <span className={styles.linkText}> Google Admin Console</span> and it will appear in the table.
                                                        </p>
                                                    </aside>
                                                ) : (
                                                    <aside className={styles.mappingTip}>
                                                        <h3>Clever Tip</h3>
                                                        <p>
                                                            Clever will dynamically create sub-OUs based on teacher profile data or match existing sub-OUs
                                                            (case insensitive) within Teacher Users.
                                                            <span className={styles.linkText}> Learn more about sub-OUs.</span>
                                                        </p>
                                                    </aside>
                                                )}
                                            </aside>
                                        </div>

                                        {teacherOuModalOpen && (
                                            <div className={styles.modalBackdrop}>
                                                <div className={styles.modalPanelWide}>
                                                    <div className={styles.formatBuilderTop}>
                                                        <h1>Build a format for teacher sub-OUs</h1>
                                                        <button
                                                            className={styles.closeSelectionButton}
                                                            onClick={() => {
                                                                setTeacherOuCurrentOUsOpen(false);
                                                                setTeacherOuModalOpen(false);
                                                            }}
                                                        >
                                                            x
                                                        </button>
                                                    </div>
                                                    <div className={styles.teacherOuModalBody}>
                                                        <div className={styles.teacherOuModalChoices}>
                                                            {[
                                                                {
                                                                    key: "premade",
                                                                    title: "Start with a premade sub-OU format",
                                                                    bullets: ["Pick a premade format to begin", "Edit the format as needed"],
                                                                },
                                                                {
                                                                    key: "blocks",
                                                                    title: "Build a sub-OU format",
                                                                    bullets: ["Build your sub-OU format using blocks", "Blocks include variable, custom text, and functions"],
                                                                },
                                                                {
                                                                    key: "advanced",
                                                                    title: "Enter a format string (Advanced)",
                                                                    bullets: ["Use the legacy syntax to write out a format string"],
                                                                },
                                                            ].map((choice) => (
                                                                <label key={choice.key} className={styles.teacherOuChoiceCard}>
                                                                    <input
                                                                        type="radio"
                                                                        name="teacher-ou-format-choice"
                                                                        checked={teacherOuFormatChoice === choice.key}
                                                                        onChange={() => setTeacherOuFormatChoice(choice.key)}
                                                                    />
                                                                    <div className={styles.teacherOuChoiceContent}>
                                                                        <h3>{choice.title}</h3>
                                                                        <ul>
                                                                            {choice.bullets.map((bullet) => (
                                                                                <li key={bullet}>{bullet}</li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                    <span className={styles.teacherOuChoiceChevron}>▾</span>
                                                                </label>
                                                            ))}
                                                        </div>
                                                        <div className={styles.teacherOuModalAside}>
                                                            <button
                                                                className={styles.teacherOuCurrentButton}
                                                                onClick={() => setTeacherOuCurrentOUsOpen((prev) => !prev)}
                                                            >
                                                                <span>Current OUs</span>
                                                                <span>{teacherOuCurrentOUsOpen ? "▾" : "▸"}</span>
                                                            </button>
                                                            {teacherOuCurrentOUsOpen && (
                                                                <div className={styles.ouCurrentList}>
                                                                    {["/", "/Devices", "/Students", "/Users", "/Users/Staff", "/Users/Staff/Teachers"].map((path) => (
                                                                        <div key={path}>{path}</div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className={styles.formatSelectionActions}>
                                                        <button
                                                            className={`${styles.primaryButton} ${!teacherOuFormatChoice ? styles.disabledButtonFake : ""}`}
                                                            disabled={!teacherOuFormatChoice}
                                                            onClick={() => {
                                                                setTeacherOuCurrentOUsOpen(false);
                                                                setTeacherOuModalOpen(false);
                                                            }}
                                                        >
                                                            Save format
                                                        </button>
                                                        <button
                                                            className={styles.outlineButton}
                                                            onClick={() => {
                                                                setTeacherOuCurrentOUsOpen(false);
                                                                setTeacherOuModalOpen(false);
                                                            }}
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : ouDetailType === "staff" ? (
                                    <div className={styles.ouDetailPage}>
                                        <h1>Staff OUs</h1>
                                        <p className={styles.provisioningIntro}>
                                            Organize staff into your existing Google OU structure and create optional sub-OUs based on Clever staff
                                            data. <span className={styles.linkText}>Learn more about sub-OUs.</span>
                                        </p>
                                        <div className={styles.ouDetailLayout}>
                                            <div className={styles.ouDetailMain}>
                                                <section className={styles.detailSection}>
                                                    <h2>1. Preview any staff with an existing Clever account.</h2>
                                                    <div className={styles.previewCard}>
                                                        <label>USER NAME</label>
                                                        <div>Oswaldo Pouros</div>
                                                    </div>
                                                    <div className={styles.previewCard}>
                                                        <h4>Oswaldo Pouros&apos;s Clever Data</h4>
                                                        <div className={styles.dataGrid}>
                                                            <div className={styles.dataGridItem}>
                                                                <span>Title</span>
                                                                <strong>Librarian</strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>

                                                <section className={styles.detailSection}>
                                                    <h2>2. Select a parent OU to place all staff</h2>
                                                    <div className={styles.ouTreeTable}>
                                                        <div className={styles.ouTreeHeader}>
                                                            <span>Your Google Org Units</span>
                                                            <button className={styles.linkButton}><RefreshIcon /> Refresh</button>
                                                        </div>
                                                        {[
                                                            { key: "fort", label: "Fort Virgilfield Elementary School", value: "/Fort Virgilfield Elementary School", level: 0 },
                                                            { key: "devices", label: "Devices", value: "/Devices", level: 1 },
                                                            { key: "students", label: "Students", value: "/Students", level: 1, expandable: true },
                                                            { key: "users", label: "Users", value: "/Users/Staff", level: 1, expandable: true },
                                                        ].map((row) => (
                                                            <div key={row.key} className={styles.ouTreeRow}>
                                                                <label className={styles.ouRadioCol}>
                                                                    <input
                                                                        type="radio"
                                                                        name="staff-parent-ou"
                                                                        checked={staffParentOu === row.value}
                                                                        onChange={() => setStaffParentOu(row.value)}
                                                                    />
                                                                </label>
                                                                <button
                                                                    className={styles.ouTreeLabelButton}
                                                                    onClick={() => setStaffParentOu(row.value)}
                                                                    style={{ paddingLeft: `${row.level * 24 + 14}px` }}
                                                                >
                                                                    {row.expandable && <span>▸</span>}
                                                                    <span>{row.label}</span>
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </section>

                                                {showStaffOuSubStep && (
                                                    <section className={styles.detailSection}>
                                                        <h2>3. Which sub-OUs do you want to create inside of {staffParentOu} OU? (Optional)</h2>
                                                        <div className={styles.ouFormatTokenRow}>
                                                            {staffOuDisplayParts.map((part, index) => (
                                                                part === "/" ? (
                                                                    <span key={`${part}-${index}`} className={styles.ouSlashToken}>/</span>
                                                                ) : part.startsWith("{{") ? (
                                                                    <span key={`${part}-${index}`} className={styles.tokenPill}>{part}</span>
                                                                ) : (
                                                                    <span key={`${part}-${index}`} className={styles.ouTextToken}>{part}</span>
                                                                )
                                                            ))}
                                                        </div>
                                                        <button
                                                            className={styles.linkButton}
                                                            onClick={() => setStaffOuModalOpen(true)}
                                                        >
                                                            Edit your format
                                                        </button>
                                                        <div className={styles.previewCard}>
                                                            <h4>Oswaldo Pouros&apos;s OU placement</h4>
                                                            <div>
                                                                Example OU <strong>{staffOuExamplePath}</strong>
                                                            </div>
                                                        </div>
                                                    </section>
                                                )}

                                                <div className={styles.infoBanner}>
                                                    <span className={styles.infoDot}>?</span>
                                                    <span>
                                                        For additional information please see the <span className={styles.linkText}>Organize OUs section</span> of
                                                        our Clever IDM course in Clever Academy.
                                                    </span>
                                                </div>
                                                <div className={styles.provisioningFooter}>
                                                    {!showStaffOuSubStep ? (
                                                        <button
                                                            className={styles.primaryButton}
                                                            onClick={() => setShowStaffOuSubStep(true)}
                                                        >
                                                            Next step
                                                        </button>
                                                    ) : (
                                                        <button
                                                            className={`${styles.primaryButton} ${styles.saveButton}`}
                                                            onClick={() => {
                                                                const normalizedFormula = staffOuFormula.startsWith("/") ? staffOuFormula : `/${staffOuFormula}`;
                                                                setStaffOuConfig({
                                                                    parentOu: staffParentOu,
                                                                    subOuFormula: normalizedFormula,
                                                                });
                                                                setOuDetailType(null);
                                                            }}
                                                        >
                                                            Save
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                            <aside className={styles.ouDetailSide}>
                                                <div className={styles.previewCard}>
                                                    <h4>Preview</h4>
                                                    <div className={styles.ouPreviewTree}>
                                                        <div>▸ Fort Virgilfield Elementary School</div>
                                                        <div>▾ Users</div>
                                                        <div className={styles.ouTreeIndented}>▸ Staff</div>
                                                        {showStaffOuSubStep && (
                                                            <>
                                                                <div style={{ marginLeft: "34px" }}>▸ Operations</div>
                                                                <div style={{ marginLeft: "34px" }}>👤 Oswaldo Pouros</div>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                                {!showStaffOuSubStep ? (
                                                    <aside className={styles.mappingTip}>
                                                        <h3>Clever Tip</h3>
                                                        <p>
                                                            Don&apos;t see a parent OU to place staff? Create a new OU in your
                                                            <span className={styles.linkText}> Google Admin Console</span> and it will appear in the table.
                                                        </p>
                                                    </aside>
                                                ) : (
                                                    <aside className={styles.mappingTip}>
                                                        <h3>Clever Tip</h3>
                                                        <p>
                                                            Tip: Want to use another staff attribute for organizing OUs? Learn more about the extension fields
                                                            supported for creating sub-OUs in this <span className={styles.linkText}>help center article.</span>
                                                        </p>
                                                    </aside>
                                                )}
                                            </aside>
                                        </div>

                                        {staffOuModalOpen && (
                                            <div className={styles.modalBackdrop}>
                                                <div className={styles.modalPanelWide}>
                                                    <div className={styles.formatBuilderTop}>
                                                        <h1>Build a format for staff sub-OUs</h1>
                                                        <button className={styles.closeSelectionButton} onClick={() => setStaffOuModalOpen(false)}>x</button>
                                                    </div>
                                                    {staffOuFormatMode === "builder" ? (
                                                        <p className={styles.provisioningIntro}>
                                                            This is your current sub-OU format. Learn more about <span className={styles.linkText}>formats</span>.
                                                            {" "}Start over or <button className={styles.inlineLinkButton} onClick={() => {
                                                                setStaffOuAdvancedString(staffOuFormula);
                                                                setStaffOuFormatMode("advanced");
                                                            }}>use the advanced format editor.</button>
                                                        </p>
                                                    ) : (
                                                        <p className={styles.provisioningIntro}>
                                                            You have entered a custom format string. Learn more about <span className={styles.linkText}>formats</span>.
                                                            {" "} <button className={styles.inlineLinkButton} onClick={() => {
                                                                setStaffOuFormatMode("builder");
                                                                setStaffOuBlocks([
                                                                    { type: "text", value: "/" },
                                                                    { type: "variable", value: "staff.department" },
                                                                ]);
                                                            }}>Want to start over instead?</button>
                                                        </p>
                                                    )}

                                                    <div className={styles.formatBuilderLayout}>
                                                        <div>
                                                            {staffOuFormatMode === "builder" ? (
                                                                <>
                                                                    {staffOuBlocks.map((block, index) => (
                                                                        <div key={`${block.type}-${index}`} className={styles.formatBlockRow}>
                                                                            <span className={styles.blockTypeLabel}>{block.type === "text" ? "Text" : "Variable"}</span>
                                                                            {block.type === "text" ? (
                                                                                <input
                                                                                    className={styles.ouTextInput}
                                                                                    value={block.value}
                                                                                    onChange={(event) => {
                                                                                        const nextBlocks = [...staffOuBlocks];
                                                                                        nextBlocks[index] = { ...block, value: event.target.value };
                                                                                        setStaffOuBlocks(nextBlocks);
                                                                                    }}
                                                                                />
                                                                            ) : (
                                                                                <select
                                                                                    value={block.value}
                                                                                    onChange={(event) => {
                                                                                        const nextBlocks = [...staffOuBlocks];
                                                                                        nextBlocks[index] = { ...block, value: event.target.value };
                                                                                        setStaffOuBlocks(nextBlocks);
                                                                                    }}
                                                                                >
                                                                                    <option value="staff.department">Department</option>
                                                                                    <option value="staff.title">Title</option>
                                                                                    <option value="staff.location">School</option>
                                                                                </select>
                                                                            )}
                                                                            <button
                                                                                className={styles.deleteRowButton}
                                                                                onClick={() => {
                                                                                    setStaffOuBlocks((prev) => prev.filter((_, rowIndex) => rowIndex !== index));
                                                                                }}
                                                                            >
                                                                                x
                                                                            </button>
                                                                            {block.type === "variable" && block.value === "staff.department" && (
                                                                                <div className={styles.optionalVarWarning}>
                                                                                    ⚠ You have selected an optional variable. Some users can have missing data for this field.
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    ))}
                                                                    <div className={styles.builderActionsRow}>
                                                                        <button
                                                                            className={styles.outlineButton}
                                                                            onClick={() => setStaffOuBlocks((prev) => [...prev, { type: "text", value: "/" }])}
                                                                        >
                                                                            + Add &quot;/&quot;
                                                                        </button>
                                                                        <button
                                                                            className={styles.outlineButton}
                                                                            onClick={() => setStaffOuBlocks((prev) => [...prev, { type: "variable", value: "staff.department" }])}
                                                                        >
                                                                            + Add an SIS Variable
                                                                        </button>
                                                                        <button
                                                                            className={styles.outlineButton}
                                                                            onClick={() => setStaffOuBlocks((prev) => [...prev, { type: "text", value: "" }])}
                                                                        >
                                                                            + Add Custom Text
                                                                        </button>
                                                                        <button
                                                                            className={styles.outlineButton}
                                                                            onClick={() => setStaffOuBlocks((prev) => [...prev, { type: "variable", value: "staff.title" }])}
                                                                        >
                                                                            + Add a Function ▾
                                                                        </button>
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <div className={styles.advancedOuEditor}>
                                                                    <label>Custom sub-OU format string</label>
                                                                    <textarea
                                                                        value={staffOuAdvancedString}
                                                                        onChange={(event) => setStaffOuAdvancedString(event.target.value)}
                                                                    />
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className={styles.ouBuilderSide}>
                                                            <div className={styles.previewCard}>
                                                                <button
                                                                    className={styles.ouCurrentToggle}
                                                                    onClick={() => setStaffOuCurrentOUsOpen((prev) => !prev)}
                                                                >
                                                                    <span>Current OUs</span>
                                                                    <span>{staffOuCurrentOUsOpen ? "▾" : "▸"}</span>
                                                                </button>
                                                                {staffOuCurrentOUsOpen && (
                                                                    <div className={styles.ouCurrentList}>
                                                                        {["/Users", "/Users/Staff", "/Users/Staff/Counseling", "/Users/Staff/Operations"].map((path) => (
                                                                            <div key={path}>{path}</div>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div className={styles.previewCard}>
                                                                <h4>Preview</h4>
                                                                <p>Select any staff with an existing Clever account to preview their data using this format</p>
                                                                <button
                                                                    className={styles.previewUserSelect}
                                                                    onClick={() => setStaffOuPreviewUserOpen((prev) => !prev)}
                                                                >
                                                                    <div>
                                                                        <label>USER NAME</label>
                                                                        <div>Oswaldo Pouros</div>
                                                                    </div>
                                                                    <span>▾</span>
                                                                </button>
                                                                {staffOuPreviewUserOpen && (
                                                                    <input className={styles.previewSearchInput} placeholder="Type to search" />
                                                                )}
                                                                <div className={styles.previewCard}>
                                                                    <h4>Oswaldo Pouros&apos;s Preview</h4>
                                                                    {staffOuFormula.includes("{{staff.department}}") && <div>Department = Operations</div>}
                                                                    {staffOuFormula.includes("{{staff.title}}") && <div>Title = Librarian</div>}
                                                                    {staffOuFormula.includes("{{staff.location}}") && <div>School = Fort Virgilfield Elementary School</div>}
                                                                    <div className={styles.previewResultTitle}>
                                                                        This staff&apos;s sub-OU will be <strong>{staffOuPreviewPath}</strong>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={styles.formatSelectionActions}>
                                                        <button
                                                            className={styles.primaryButton}
                                                            onClick={() => {
                                                                if (staffOuFormatMode === "builder") {
                                                                    setStaffOuAdvancedString(staffOuFormula);
                                                                }
                                                                setStaffOuModalOpen(false);
                                                            }}
                                                        >
                                                            Save format
                                                        </button>
                                                        <button className={styles.outlineButton} onClick={() => setStaffOuModalOpen(false)}>Cancel</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : ouDetailType === "ignored" ? (
                                    <div className={styles.ignoredOuPage}>
                                        <h1>Ignored OUs (optional)</h1>
                                        <div className={styles.ignoredOuLayout}>
                                            <div className={styles.ignoredOuMain}>
                                                <section className={styles.detailSection}>
                                                    <h2>1. Select OUs you want Clever to ignore. Users will not be moved out of these OUs when Clever runs an IDM sync.</h2>
                                                    <p className={styles.archiveStepIntro}>
                                                        <strong>You don&apos;t need to select OUs as ignored</strong> if they aren&apos;t related to users managed by Clever.
                                                    </p>
                                                    <p className={styles.archiveStepIntro}>
                                                        <strong>You may consider selecting an OU as ignored</strong> if you have a particular group of users you would
                                                        like to manage manually, but they are in a parent OU that would otherwise be managed by Clever (e.g. a group
                                                        of students who you want to have YouTube access restricted).
                                                    </p>
                                                    <div className={styles.ouTreeTable}>
                                                        <div className={styles.ouTreeHeader}>
                                                            <span>Your Google Org Units</span>
                                                            <button className={styles.linkButton}><RefreshIcon /> Refresh</button>
                                                        </div>
                                                        {IGNORED_OU_TREE_ROWS.map((row) => {
                                                            const isLocked = ignoredOuLockedPaths.includes(row.value);
                                                            const isChecked = ignoredOuSelectedPaths.includes(row.value);

                                                            return (
                                                                <div key={row.key} className={styles.ouTreeRow}>
                                                                    <label className={`${styles.ouRadioCol} ${isLocked ? styles.ouRadioColLocked : ""}`}>
                                                                        <input
                                                                            type="checkbox"
                                                                            checked={isChecked}
                                                                            disabled={isLocked}
                                                                            onChange={() => toggleIgnoredOuSelection(row.value)}
                                                                        />
                                                                    </label>
                                                                    <button
                                                                        className={`${styles.ouTreeLabelButton} ${isLocked ? styles.ouTreeLabelLocked : ""}`}
                                                                        onClick={() => {
                                                                            if (row.expandable) {
                                                                                setIgnoredOuTreeExpanded((prev) => ({
                                                                                    ...prev,
                                                                                    [row.expandable]: !prev[row.expandable],
                                                                                }));
                                                                                return;
                                                                            }

                                                                            toggleIgnoredOuSelection(row.value);
                                                                        }}
                                                                        style={{ paddingLeft: `${row.level * 24 + 14}px` }}
                                                                    >
                                                                        {row.expandable && <span>{ignoredOuTreeExpanded[row.expandable] ? "▾" : "▸"}</span>}
                                                                        <span>{row.label}</span>
                                                                    </button>
                                                                </div>
                                                            );
                                                        })}
                                                        {ignoredOuTreeExpanded.students && IGNORED_OU_STUDENT_CHILD_PATHS.map((path) => {
                                                            const isLocked = ignoredOuLockedPaths.includes(path);
                                                            const isChecked = ignoredOuSelectedPaths.includes(path);

                                                            return (
                                                                <div key={path} className={styles.ouTreeRow}>
                                                                    <label className={`${styles.ouRadioCol} ${isLocked ? styles.ouRadioColLocked : ""}`}>
                                                                        <input
                                                                            type="checkbox"
                                                                            checked={isChecked}
                                                                            disabled={isLocked}
                                                                            onChange={() => toggleIgnoredOuSelection(path)}
                                                                        />
                                                                    </label>
                                                                    <button
                                                                        className={`${styles.ouTreeLabelButton} ${isLocked ? styles.ouTreeLabelLocked : ""}`}
                                                                        onClick={() => toggleIgnoredOuSelection(path)}
                                                                        style={{ paddingLeft: "62px" }}
                                                                    >
                                                                        <span>{path.replace("/Students/", "")}</span>
                                                                    </button>
                                                                </div>
                                                            );
                                                        })}
                                                        {ignoredOuTreeExpanded.users && (
                                                            <div className={styles.ouTreeRow}>
                                                                <label
                                                                    className={`${styles.ouRadioCol} ${ignoredOuLockedPaths.includes("/Users/Staff") ? styles.ouRadioColLocked : ""}`}
                                                                >
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={ignoredOuSelectedPaths.includes("/Users/Staff")}
                                                                        disabled={ignoredOuLockedPaths.includes("/Users/Staff")}
                                                                        onChange={() => toggleIgnoredOuSelection("/Users/Staff")}
                                                                    />
                                                                </label>
                                                                <button
                                                                    className={`${styles.ouTreeLabelButton} ${ignoredOuLockedPaths.includes("/Users/Staff") ? styles.ouTreeLabelLocked : ""}`}
                                                                    onClick={() => {
                                                                        setIgnoredOuTreeExpanded((prev) => ({
                                                                            ...prev,
                                                                            staff: !prev.staff,
                                                                        }));
                                                                    }}
                                                                    style={{ paddingLeft: "38px" }}
                                                                >
                                                                    <span>{ignoredOuTreeExpanded.staff ? "▾" : "▸"}</span>
                                                                    <span>Staff</span>
                                                                </button>
                                                            </div>
                                                        )}
                                                        {ignoredOuTreeExpanded.users && ignoredOuTreeExpanded.staff && (
                                                            <>
                                                                {IGNORED_OU_STAFF_CHILD_LABELS.map((label) => {
                                                                    const path = `/Users/Staff/${label}`;
                                                                    const isLocked = ignoredOuLockedPaths.includes(path);
                                                                    const isChecked = ignoredOuSelectedPaths.includes(path);

                                                                    return (
                                                                        <div key={label} className={styles.ouTreeRow}>
                                                                            <label className={`${styles.ouRadioCol} ${isLocked ? styles.ouRadioColLocked : ""}`}>
                                                                                <input
                                                                                    type="checkbox"
                                                                                    checked={isChecked}
                                                                                    disabled={isLocked}
                                                                                    onChange={() => toggleIgnoredOuSelection(path)}
                                                                                />
                                                                            </label>
                                                                            <button
                                                                                className={`${styles.ouTreeLabelButton} ${isLocked ? styles.ouTreeLabelLocked : ""}`}
                                                                                onClick={() => toggleIgnoredOuSelection(path)}
                                                                                style={{ paddingLeft: "62px" }}
                                                                            >
                                                                                <span>{label}</span>
                                                                            </button>
                                                                        </div>
                                                                    );
                                                                })}
                                                            </>
                                                        )}
                                                    </div>
                                                    <div className={styles.archiveOuPreview}>
                                                        <div className={styles.archiveOuPreviewTitle}>
                                                            <span aria-hidden>◉</span>
                                                            <span>Ignored OU Preview</span>
                                                        </div>
                                                        <div className={styles.archiveOuPreviewPaths}>
                                                            {ignoredOuPreviewPaths.map((path) => (
                                                                <div key={path}>{path}</div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </section>

                                                {showIgnoredOuHandlingStep && ignoredOuManagedRoles.map((roleKey, index) => (
                                                    <section key={roleKey} className={styles.detailSection}>
                                                        <h2>{index + 2}. For {roleKey.toUpperCase()}, How do you want Clever IDM to handle these accounts in ignored OUs?</h2>
                                                        <div className={styles.archiveActionList}>
                                                            {IGNORED_OU_HANDLING_OPTIONS.map((option) => (
                                                                <label key={option.key} className={styles.archiveActionOption}>
                                                                    <input
                                                                        type="radio"
                                                                        name={`ignored-ou-handling-${roleKey}`}
                                                                        checked={ignoredOuHandlingByRole[roleKey] === option.key}
                                                                        onChange={() => setIgnoredOuHandlingByRole((prev) => ({
                                                                            ...prev,
                                                                            [roleKey]: option.key,
                                                                        }))}
                                                                    />
                                                                    <span>{option.label}</span>
                                                                </label>
                                                            ))}
                                                        </div>
                                                    </section>
                                                ))}

                                                <div className={styles.infoBanner}>
                                                    <span className={styles.infoDot}>x</span>
                                                    <span>
                                                        For additional information please see the <span className={styles.linkText}>Organize OUs section</span> of our Clever IDM course in Clever Academy.
                                                    </span>
                                                </div>
                                                <div className={styles.provisioningFooter}>
                                                    {!showIgnoredOuHandlingStep ? (
                                                        <div className={styles.ignoredOuStepActions}>
                                                            <button
                                                                className={styles.linkButton}
                                                                onClick={() => {
                                                                    setShowIgnoredOuHandlingStep(false);
                                                                    setOuDetailType(null);
                                                                }}
                                                            >
                                                                Skip
                                                            </button>
                                                            <button
                                                                className={styles.primaryButton}
                                                                onClick={() => setShowIgnoredOuHandlingStep(true)}
                                                            >
                                                                Next step
                                                            </button>
                                                        </div>
                                                    ) : (
                                                        <button
                                                            className={`${styles.primaryButton} ${styles.saveButton}`}
                                                            onClick={() => {
                                                                setShowIgnoredOuHandlingStep(false);
                                                                setOuDetailType(null);
                                                            }}
                                                        >
                                                            Save
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                            <aside className={styles.archiveTipCard}>
                                                <div className={styles.archiveTipTitle}>
                                                    <span className={styles.archiveTipIcon}>i</span>
                                                    <strong>Clever Tip</strong>
                                                </div>
                                                <p>
                                                    OUs you selected in previous steps to place Clever users cannot be ignored.
                                                </p>
                                            </aside>
                                        </div>
                                    </div>
                                ) : ouDetailType === "archive" ? (
                                    <div className={styles.archiveOuPage}>
                                        <h1>Archive OU</h1>
                                        <div className={styles.archiveOuLayout}>
                                            <div className={styles.archiveOuMain}>
                                                <section className={styles.detailSection}>
                                                    <h2>1. Select a parent OU to place users that are removed from Clever.</h2>
                                                    <p className={styles.archiveStepIntro}>
                                                        Users will be placed in the corresponding sub-OU for their type: /Students, /Teachers, or /Staff.
                                                    </p>
                                                    <div className={styles.ouTreeTable}>
                                                        <div className={styles.ouTreeHeader}>
                                                            <span>Your Google Org Units</span>
                                                            <button className={styles.linkButton}><RefreshIcon /> Refresh</button>
                                                        </div>
                                                        {[
                                                            { key: "district-root", label: "Fort Virgilfield Elementary School", value: "/", level: 0, expandable: null },
                                                            { key: "devices", label: "Devices", value: "/Devices", level: 1, expandable: null },
                                                            { key: "students", label: "Students", value: "/Students", level: 1, expandable: "students" },
                                                            { key: "users", label: "Users", value: "/Users", level: 1, expandable: "users" },
                                                        ].map((row) => (
                                                            <div key={row.key} className={styles.ouTreeRow}>
                                                                <label className={styles.ouRadioCol}>
                                                                    <input
                                                                        type="radio"
                                                                        name="archive-parent-ou"
                                                                        checked={archiveParentOu === row.value}
                                                                        onChange={() => setArchiveParentOu(row.value)}
                                                                    />
                                                                </label>
                                                                <button
                                                                    className={styles.ouTreeLabelButton}
                                                                    onClick={() => {
                                                                        setArchiveParentOu(row.value);
                                                                        if (row.expandable) {
                                                                            setArchiveOuTreeExpanded((prev) => ({
                                                                                ...prev,
                                                                                [row.expandable]: !prev[row.expandable],
                                                                            }));
                                                                        }
                                                                    }}
                                                                    style={{ paddingLeft: `${row.level * 24 + 14}px` }}
                                                                >
                                                                    {row.expandable && <span>{archiveOuTreeExpanded[row.expandable] ? "▾" : "▸"}</span>}
                                                                    <span>{row.label}</span>
                                                                </button>
                                                            </div>
                                                        ))}
                                                        {archiveOuTreeExpanded.students && ["/Students/1", "/Students/2", "/Students/3", "/Students/4", "/Students/5"].map((path) => (
                                                            <div key={path} className={styles.ouTreeRow}>
                                                                <label className={styles.ouRadioCol}>
                                                                    <input
                                                                        type="radio"
                                                                        name="archive-parent-ou"
                                                                        checked={archiveParentOu === path}
                                                                        onChange={() => setArchiveParentOu(path)}
                                                                    />
                                                                </label>
                                                                <button
                                                                    className={styles.ouTreeLabelButton}
                                                                    onClick={() => setArchiveParentOu(path)}
                                                                    style={{ paddingLeft: "62px" }}
                                                                >
                                                                    <span>{path.replace("/Students/", "")}</span>
                                                                </button>
                                                            </div>
                                                        ))}
                                                        {archiveOuTreeExpanded.users && (
                                                            <div className={styles.ouTreeRow}>
                                                                <label className={styles.ouRadioCol}>
                                                                    <input
                                                                        type="radio"
                                                                        name="archive-parent-ou"
                                                                        checked={archiveParentOu === "/Users/Staff"}
                                                                        onChange={() => setArchiveParentOu("/Users/Staff")}
                                                                    />
                                                                </label>
                                                                <button
                                                                    className={styles.ouTreeLabelButton}
                                                                    onClick={() => {
                                                                        setArchiveParentOu("/Users/Staff");
                                                                        setArchiveOuTreeExpanded((prev) => ({
                                                                            ...prev,
                                                                            staff: !prev.staff,
                                                                        }));
                                                                    }}
                                                                    style={{ paddingLeft: "38px" }}
                                                                >
                                                                    <span>{archiveOuTreeExpanded.staff ? "▾" : "▸"}</span>
                                                                    <span>Staff</span>
                                                                </button>
                                                            </div>
                                                        )}
                                                        {archiveOuTreeExpanded.users && archiveOuTreeExpanded.staff && (
                                                            <>
                                                                {["Counseling", "District Office", "Operations", "Student Services", "Teachers"].map((label) => (
                                                                    <div key={label} className={styles.ouTreeRow}>
                                                                        <label className={styles.ouRadioCol}>
                                                                            <input
                                                                                type="radio"
                                                                                name="archive-parent-ou"
                                                                                checked={archiveParentOu === `/Users/Staff/${label}`}
                                                                                onChange={() => setArchiveParentOu(`/Users/Staff/${label}`)}
                                                                            />
                                                                        </label>
                                                                        <button
                                                                            className={styles.ouTreeLabelButton}
                                                                            onClick={() => setArchiveParentOu(`/Users/Staff/${label}`)}
                                                                            style={{ paddingLeft: "62px" }}
                                                                        >
                                                                            <span>{label}</span>
                                                                        </button>
                                                                    </div>
                                                                ))}
                                                            </>
                                                        )}
                                                    </div>
                                                    <div className={styles.archiveOuPreview}>
                                                        <div className={styles.archiveOuPreviewTitle}>
                                                            <span aria-hidden>◉</span>
                                                            <span>Archive OU Preview</span>
                                                        </div>
                                                        <div className={styles.archiveOuPreviewPaths}>
                                                            {archivePreviewPaths.map((path) => (
                                                                <div key={path}>{path}</div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </section>
                                                <div className={styles.infoBanner}>
                                                    <span className={styles.infoDot}>x</span>
                                                    <span>
                                                        For additional information please see the
                                                        <span className={styles.linkText}> Organize OUs section</span> of our Clever IDM course in Clever Academy.
                                                    </span>
                                                </div>
                                                <section className={styles.detailSection}>
                                                    <h2>2. Select an action to take for users removed from Clever.</h2>
                                                    <div className={styles.archiveActionList}>
                                                        {ARCHIVE_ACTION_OPTIONS.map((option) => (
                                                            <label key={option.key} className={styles.archiveActionOption}>
                                                                <input
                                                                    type="radio"
                                                                    name="archive-action"
                                                                    checked={archiveAction === option.key}
                                                                    onChange={() => setArchiveAction(option.key)}
                                                                />
                                                                <span>
                                                                    {option.label}
                                                                    {option.showGoogleHelp && (
                                                                        <> (<span className={styles.linkText}>Learn more about archives in Google</span>)</>
                                                                    )}
                                                                </span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                </section>
                                                <div className={styles.provisioningFooter}>
                                                    <button className={styles.primaryButton} onClick={() => setOuDetailType(null)}>
                                                        Save
                                                    </button>
                                                </div>
                                            </div>
                                            <aside className={styles.archiveTipCard}>
                                                <div className={styles.archiveTipTitle}>
                                                    <span className={styles.archiveTipIcon}>i</span>
                                                    <strong>Clever Tip</strong>
                                                </div>
                                                <p>
                                                    Clever uses SIS ID to reactivate user accounts if they return to the district in less than a year.
                                                </p>
                                            </aside>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className={styles.infoBanner}>
                                            <span className={styles.infoDot}>i</span>
                                            <span>
                                                Clever IDM recommends an Organizational Unit (OU) setup based on SIS data. For additional
                                                information please see the <span className={styles.linkText}>Organize OUs section</span> of
                                                our Clever IDM course in Clever Academy. For questions about setting up your OU hierarchy you
                                                can <span className={styles.linkText}>contact support</span>.
                                            </span>
                                        </div>
                                        <div className={styles.sectionHeaderRow}>
                                            <h1>Organize OUs</h1>
                                            <div className={styles.sectionStepsMeta}>
                                                <div className={styles.sectionStepsBar}>
                                                    <span style={{ width: "100%" }} />
                                                </div>
                                                <span>5 of 5 steps</span>
                                            </div>
                                        </div>
                                        <div className={styles.setupCardGrid}>
                                            {ouCards.map((card) => (
                                                <div key={card.key} className={styles.setupCard}>
                                                    <div className={styles.setupCardTop}>
                                                        <div className={styles.credentialsTitleRow}>
                                                            <h3>{card.title}</h3>
                                                            <span className={styles.completedBadge}>Completed</span>
                                                        </div>
                                                        <button
                                                            className={styles.editCredentialButton}
                                                            onClick={() => {
                                                                if (card.key === "students") {
                                                                    setOuDetailType("students");
                                                                    setShowStudentOuSubStep(false);
                                                                    setStudentParentOu(studentOuConfig.parentOu);
                                                                } else if (card.key === "teachers") {
                                                                    setOuDetailType("teachers");
                                                                    setShowTeacherOuSubStep(false);
                                                                    setTeacherParentOu(teacherOuConfig.parentOu);
                                                                } else if (card.key === "staff") {
                                                                    setOuDetailType("staff");
                                                                    setShowStaffOuSubStep(false);
                                                                    setStaffParentOu(staffOuConfig.parentOu);
                                                                } else if (card.key === "archive") {
                                                                    setOuDetailType("archive");
                                                                } else if (card.key === "ignored") {
                                                                    setOuDetailType("ignored");
                                                                    setShowIgnoredOuHandlingStep(false);
                                                                }
                                                            }}
                                                        >
                                                            Edit
                                                        </button>
                                                    </div>
                                                    <div className={styles.setupFieldLabel}>{card.fieldLabel}</div>
                                                    <div className={styles.setupFieldValue}>{card.value}</div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className={styles.provisioningFooter}>
                                            <button
                                                className={styles.primaryButton}
                                                onClick={() => setProvisionStep((prev) => Math.min(prev + 1, provisioningSteps.length))}
                                            >
                                                {provisioningSteps[provisionStep] ?? "Continue"}
                                            </button>
                                        </div>
                                    </>
                                )}
                            </>
                        ) : currentProvisioningTitle === "Configure groups" ? (
                            <>
                                <h1>
                                    Set up group assignment <span className={styles.optionalPill}>Optional</span>
                                </h1>
                                <p className={styles.provisioningIntro}>
                                    Configure which Google Groups you want Clever IDM to manage. Clever IDM will automate adding and
                                    removing users in Clever managed groups. For more information please see the
                                    <span className={styles.linkText}> Configure groups section</span> of our Clever IDM course in Clever Academy.
                                </p>
                                <div className={styles.sectionDivider} />
                                {groupDetailType ? (
                                    <div className={styles.groupDetailPanel}>
                                        <button
                                            className={styles.groupBackLink}
                                            onClick={() => {
                                                setGroupDetailType(null);
                                                setGroupSearchTerm("");
                                            }}
                                        >
                                            ← Back to all user types
                                        </button>
                                        <h2 className={styles.subsectionTitle}>Select {groupDetailMeta?.singular ?? "Student"} groups</h2>
                                        <p className={styles.provisioningIntro}>
                                            Select the groups you want Clever IDM to manage. In the next step, you will create membership rules for
                                            these groups, which Clever IDM will use to add or remove {groupDetailMeta?.managedUserLabel ?? "students"}
                                            {" "}from your managed groups. Up to 6,000 groups will be visible below for you to select. If you have more
                                            than 6,000 groups, reach out to implementation@clever.com for support.
                                        </p>
                                        <div className={styles.groupControlsRow}>
                                            <div className={styles.groupRefreshRow}>
                                                <h3>Your Google Groups</h3>
                                                <button className={styles.linkButton}>↻ Refresh</button>
                                            </div>
                                            <input
                                                className={styles.groupSearchInput}
                                                placeholder="Search for a Google Group"
                                                value={groupSearchTerm}
                                                onChange={(event) => setGroupSearchTerm(event.target.value)}
                                            />
                                        </div>
                                        <div className={styles.groupTableWrapper}>
                                            <table className={styles.groupTable}>
                                                <thead>
                                                    <tr>
                                                        <th className={styles.groupCheckColumn}>
                                                            <input type="checkbox" aria-label="Select all groups" />
                                                        </th>
                                                        <th>Group name</th>
                                                        <th>Group email address</th>
                                                        <th>Number of members</th>
                                                        <th>Group type</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className={styles.groupEmptyCell} colSpan={5}>
                                                            <div className={styles.groupEmptyState}>
                                                                <p>
                                                                    No Google Groups were found in your Google Workspace. Ensure you have connected the
                                                                    correct Google account. Groups are required to exist before configuration, Clever
                                                                    will not create groups.
                                                                </p>
                                                                <button className={styles.primaryButton}>Connect to Google</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className={styles.groupDetailActions}>
                                            <button
                                                className={styles.mappingCancelLink}
                                                onClick={() => {
                                                    setGroupDetailType(null);
                                                    setGroupSearchTerm("");
                                                }}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                className={styles.primaryButton}
                                                onClick={() => {
                                                    setGroupDetailType(null);
                                                    setGroupSearchTerm("");
                                                }}
                                            >
                                                Save and disable group management
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <h2 className={styles.subsectionTitle}>Select a user type to configure groups</h2>
                                        <div className={styles.setupCardGrid}>
                                            {groupCards.map((card) => (
                                                <div key={card.key} className={styles.setupCard}>
                                                    <div className={styles.setupCardTop}>
                                                        <h3>{card.title}</h3>
                                                        <button
                                                            className={styles.editCredentialButton}
                                                            onClick={() => {
                                                                setGroupDetailType(card.key);
                                                                setGroupSearchTerm("");
                                                            }}
                                                        >
                                                            Configure
                                                        </button>
                                                    </div>
                                                    <div className={styles.setupFieldLabel}>NUMBER OF RULES CONFIGURED</div>
                                                    <div className={styles.setupFieldValue}>{card.count}</div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className={styles.provisioningFooter}>
                                            <button
                                                className={styles.primaryButton}
                                                onClick={() => {
                                                    setGroupDetailType(null);
                                                    setGroupSearchTerm("");
                                                    setProvisionStep((prev) => Math.min(prev + 1, provisioningSteps.length));
                                                }}
                                            >
                                                Review Summary
                                            </button>
                                        </div>
                                    </>
                                )}
                            </>
                        ) : currentProvisioningTitle === "Summary" ? (
                            <>
                                <h1>Summary</h1>
                                <p className={styles.provisioningIntro}>
                                    Review your settings to generate a preview of all the accounts that will be created in Google.
                                </p>
                                <div className={styles.setupCardGrid}>
                                    <div className={styles.setupCard}>
                                        <div className={styles.setupCardTop}>
                                            <div className={styles.credentialsTitleRow}>
                                                <h3>Select management level</h3>
                                                <span className={styles.completedBadge}>Completed</span>
                                            </div>
                                            <button
                                                className={styles.editCredentialButton}
                                                onClick={() => jumpToProvisionStepByLabel("Select your IDM Management Level")}
                                            >
                                                Edit
                                            </button>
                                        </div>
                                        <div className={styles.setupFieldLabel}>MANAGEMENT LEVEL</div>
                                        <div className={styles.setupFieldValue}>{managementLevelSummary}</div>
                                    </div>
                                    <div className={styles.setupCard}>
                                        <div className={styles.setupCardTop}>
                                            <div className={styles.credentialsTitleRow}>
                                                <h3>Select Users</h3>
                                                <span className={styles.completedBadge}>Completed</span>
                                            </div>
                                            <button
                                                className={styles.editCredentialButton}
                                                onClick={() => jumpToProvisionStepByLabel("Select users")}
                                            >
                                                Edit
                                            </button>
                                        </div>
                                        <div className={styles.setupFieldLabel}>USER TYPES</div>
                                        <div className={styles.setupFieldValue}>{selectedUserTypeSummary}</div>
                                    </div>
                                </div>

                                <h2 className={styles.summarySectionTitle}>Set login credentials</h2>
                                <div className={styles.setupCardGrid}>
                                    {selectedCredentialRoles.map((role) => {
                                        const credentials = credentialsByRole[role.key];
                                        return (
                                            <div key={`summary-${role.key}`} className={styles.setupCard}>
                                                <div className={styles.setupCardTop}>
                                                    <div className={styles.credentialsTitleRow}>
                                                        <h3>{role.title}</h3>
                                                        <span className={styles.completedBadge}>Completed</span>
                                                    </div>
                                                    <button
                                                        className={styles.editCredentialButton}
                                                        onClick={() => jumpToProvisionStepByLabel("Set login credentials")}
                                                    >
                                                        Edit
                                                    </button>
                                                </div>
                                                <div className={styles.setupFieldLabel}>EMAIL</div>
                                                <div className={styles.setupFieldValue}>{credentials.email}</div>
                                                <div className={styles.setupFieldLabel}>PASSWORD</div>
                                                <div className={styles.setupFieldValue}>{credentials.password}</div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {provisioningSteps.includes("Organize OUs") && (
                                    <>
                                        <h2 className={styles.summarySectionTitle}>Organize OUs</h2>
                                        <div className={styles.setupCardGrid}>
                                            {ouCards.map((card) => (
                                                <div key={`summary-${card.key}`} className={styles.setupCard}>
                                                    <div className={styles.setupCardTop}>
                                                        <div className={styles.credentialsTitleRow}>
                                                            <h3>{card.title}</h3>
                                                            <span className={styles.completedBadge}>Completed</span>
                                                        </div>
                                                        <button
                                                            className={styles.editCredentialButton}
                                                            onClick={() => jumpToProvisionStepByLabel("Organize OUs")}
                                                        >
                                                            Edit
                                                        </button>
                                                    </div>
                                                    <div className={styles.setupFieldLabel}>{card.fieldLabel}</div>
                                                    <div className={styles.setupFieldValue}>{card.value}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}

                                {provisioningSteps.includes("Configure groups") && (
                                    <>
                                        <h2 className={styles.summarySectionTitle}>Configure groups</h2>
                                        <div className={styles.setupCardGrid}>
                                            {groupCards.map((card) => (
                                                <div key={`summary-group-${card.key}`} className={styles.setupCard}>
                                                    <div className={styles.setupCardTop}>
                                                        <h3>{card.title}</h3>
                                                        <button
                                                            className={styles.editCredentialButton}
                                                            onClick={() => jumpToProvisionStepByLabel("Configure groups")}
                                                        >
                                                            Configure
                                                        </button>
                                                    </div>
                                                    <div className={styles.setupFieldLabel}>NUMBER OF RULES CONFIGURED</div>
                                                    <div className={styles.setupFieldValue}>{card.count}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}

                                <div className={styles.provisioningFooter}>
                                    <button
                                        className={styles.primaryButton}
                                        onClick={() => setProvisionStep((prev) => Math.min(prev + 1, provisioningSteps.length))}
                                    >
                                        Preview Google Accounts
                                    </button>
                                </div>
                            </>
                        ) : currentProvisioningTitle === "Preview and provision" || currentProvisioningTitle === "Preview and match" ? (
                            <>
                                <h1>{currentProvisioningTitle}</h1>
                                <p className={styles.provisioningIntro}>
                                    Download your full Google preview before provisioning your selected users to review all created,
                                    updated, and archived accounts as well as all outstanding issues.
                                </p>
                                <div className={styles.previewActionsRow}>
                                    <button className={styles.outlineButton}>
                                        <DownloadIcon /> Download full preview
                                    </button>
                                    <button className={styles.linkButton} onClick={openCheckUserModal}>
                                        <SearchIcon /> Check a user
                                    </button>
                                    <button className={styles.linkButton}>
                                        <RefreshIcon /> Refresh
                                    </button>
                                </div>
                                <div className={styles.previewStatusCard}>
                                    <div className={styles.previewStatusTop}>
                                        <h2>Google Accounts Status</h2>
                                        <span>Last preview was run 3 months ago</span>
                                    </div>
                                    <div className={styles.previewStatusGrid}>
                                        <div className={styles.previewStatusItem}>
                                            <label>Accounts to Create</label>
                                            <strong>1</strong>
                                        </div>
                                        <div className={styles.previewStatusItem}>
                                            <label>Accounts to Update</label>
                                            <strong>0</strong>
                                        </div>
                                        <div className={styles.previewStatusItem}>
                                            <label>Accounts to Archive</label>
                                            <strong>0</strong>
                                        </div>
                                        <div className={styles.previewStatusItem}>
                                            <label>Sync Issues</label>
                                            <strong>0</strong>
                                        </div>
                                    </div>
                                </div>

                                <h2 className={styles.summarySectionTitle}>Details</h2>
                                <div className={styles.tableWrapper}>
                                    <table className={styles.table}>
                                        <thead>
                                            <tr>
                                                <th>Accounts Action</th>
                                                <th>Details</th>
                                                <th>Next Steps</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Matched</td>
                                                <td>0 Clever accounts will be matched with Google accounts.</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <td>Creates</td>
                                                <td>1 Google account will be created based on Clever data.</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <td>Total Updates</td>
                                                <td>0 Google accounts will be updated based on Clever data.</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <td>Archives</td>
                                                <td>
                                                    {`0 Google accounts will be ${archivePreviewActionText} since the users are no longer present in Clever data.`}
                                                </td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <td>Total Issues</td>
                                                <td>There will be 0 issues.</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <td>Conflicts</td>
                                                <td>0 accounts will not be created or matched because of conflicts.</td>
                                                <td>-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className={styles.infoBanner}>
                                    <span className={styles.infoDot}>?</span>
                                    <span>
                                        For additional information please see the
                                        <span className={styles.linkText}> preview and provision section</span> of our Clever IDM course in Clever Academy.
                                        Please also bookmark our article <span className={styles.linkText}>Sync reports &amp; issues troubleshooting</span> for future reference.
                                    </span>
                                </div>
                                <div className={styles.provisioningFooter}>
                                    <button className={styles.primaryButton}>
                                        {currentProvisioningTitle === "Preview and match" ? "Match Users" : "Provision Google"}
                                    </button>
                                </div>
                                {checkUserModalOpen && (
                                    <div
                                        className={styles.modalBackdrop}
                                        onClick={(event) => {
                                            if (event.target === event.currentTarget) {
                                                closeCheckUserModal();
                                            }
                                        }}
                                    >
                                        <div
                                            className={styles.checkUserModalPanel}
                                            role="dialog"
                                            aria-modal="true"
                                            aria-labelledby="check-user-modal-title"
                                        >
                                            <div className={styles.checkUserModalHeader}>
                                                <h2 id="check-user-modal-title">Check a user</h2>
                                                <button
                                                    className={`${styles.modalCloseSquare} ${styles.checkUserCloseSquare}`}
                                                    onClick={closeCheckUserModal}
                                                    aria-label="Close check user modal"
                                                >
                                                    x
                                                </button>
                                            </div>
                                            <p className={styles.checkUserModalIntro}>
                                                Select a user that you have shared with IDM from the current sync
                                            </p>
                                            <div className={styles.checkUserSelectWrap}>
                                                <div className={styles.checkUserSelectField}>
                                                    <input
                                                        className={styles.checkUserInput}
                                                        placeholder="Search for a user by name or email"
                                                        value={checkUserSearchTerm}
                                                        onFocus={() => setCheckUserDropdownOpen(true)}
                                                        onChange={(event) => {
                                                            setCheckUserSearchTerm(event.target.value);
                                                            setSelectedCheckUserId("");
                                                            setCheckUserDropdownOpen(true);
                                                        }}
                                                    />
                                                    <div className={styles.checkUserSelectMeta}>
                                                        <span>REQUIRED</span>
                                                        <button
                                                            type="button"
                                                            className={styles.checkUserDropdownToggle}
                                                            onClick={() => setCheckUserDropdownOpen((prev) => !prev)}
                                                            aria-label="Toggle user options"
                                                        >
                                                            <ChevronDown />
                                                        </button>
                                                    </div>
                                                </div>
                                                {checkUserDropdownOpen && (
                                                    <div className={styles.checkUserDropdown}>
                                                        {filteredCheckUsers.length > 0 ? (
                                                            filteredCheckUsers.map((user) => (
                                                                <button
                                                                    key={user.id}
                                                                    className={styles.checkUserOption}
                                                                    onClick={() => {
                                                                        setSelectedCheckUserId(user.id);
                                                                        setCheckUserSearchTerm(`${user.name} (${user.email})`);
                                                                        setCheckUserDropdownOpen(false);
                                                                    }}
                                                                >
                                                                    <strong>{user.name}</strong>
                                                                    <span>{user.email}</span>
                                                                </button>
                                                            ))
                                                        ) : (
                                                            <div className={styles.checkUserDropdownEmpty}>
                                                                {sharedCheckUsers.length === 0
                                                                    ? "No users are currently selected for IDM. Go back to Select users to include at least one role."
                                                                    : "No users shared with IDM match this search."}
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>

                                            {selectedCheckUser && (
                                                <div className={styles.checkUserResult}>
                                                    <div className={styles.checkUserResultHeader}>
                                                        <strong>{selectedCheckUser.name} is shared with IDM.</strong>
                                                        <span className={styles.checkUserActionPill}>{selectedCheckUser.previewAction}</span>
                                                    </div>
                                                    <div className={styles.checkUserResultMeta}>
                                                        <span>{selectedCheckUser.email}</span>
                                                        <span>{CHECK_USER_ROLE_LABELS[selectedCheckUser.role]}</span>
                                                    </div>
                                                    <p>{selectedCheckUser.summary}</p>
                                                </div>
                                            )}

                                            <div className={styles.checkUserModalFooter}>
                                                <button
                                                    className={`${styles.primaryButton} ${styles.checkUserCloseButton}`}
                                                    onClick={closeCheckUserModal}
                                                >
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </>
                        ) : (
                            <>
                                <h1>{currentProvisioningTitle}</h1>
                                <p className={styles.provisioningIntro}>
                                    This step is queued for the next pass of the simulator build.
                                </p>
                            </>
                        )}
                    </main>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.paidPage}>
            <div className={styles.header}>
                <h1 className={styles.paidTitle}>Clever IDM</h1>
                <p className={styles.paidSubtitle}>Destinations are services to which Clever can provision user accounts.</p>
                <button className={styles.addDestinationButton}>
                    Add new destination <ChevronDown />
                </button>
            </div>

            <div className={styles.destinationCard}>
                <div className={styles.destinationHeader}>
                    <div className={styles.destinationTitle}>
                        <GoogleLogo />
                        <span>Google Workspace</span>
                    </div>
                    <div className={styles.badges}>
                        <span className={`${styles.badge} ${styles.badgeActive}`}>Active</span>
                        <span className={`${styles.badge} ${styles.badgeIssue}`}>Issue</span>
                    </div>
                </div>
                <div className={styles.statsGrid}>
                    <div className={styles.statCard}>
                        <span>Create</span>
                        <strong>0</strong>
                    </div>
                    <div className={styles.statCard}>
                        <span>Update</span>
                        <strong>0</strong>
                    </div>
                    <div className={styles.statCard}>
                        <span>Archive</span>
                        <strong>0</strong>
                    </div>
                    <div className={styles.statCard}>
                        <span>Issue</span>
                        <strong>1</strong>
                    </div>
                </div>
            </div>

            <div className={styles.syncMeta}>Your last Google accounts sync was processed on 02/06/2026 at 4:45AM</div>
            <div className={styles.actionRow}>
                <button
                    className={styles.outlineButton}
                    onClick={() => {
                        setShowProvisioning(true);
                        setProvisionStep(1);
                    }}
                >
                    Edit Google provisioning
                </button>
                <button className={styles.linkButton}>Pause Google sync</button>
            </div>

            <div className={styles.tabs}>
                {["Tasks", "Sync History", "Exports", "Events"].map((tab) => (
                    <button
                        key={tab}
                        className={`${styles.tabButton} ${activeTab === tab ? styles.activeTab : ""}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {tabContent}
        </div>
    );
}

export default function IDM() {
    const { scenarioSettings } = useInstructional();
    const idmPaidView = scenarioSettings?.idmPaidView ?? true;

    if (idmPaidView) {
        return <PaidIDM />;
    }

    return <MarketingIDM />;
}
