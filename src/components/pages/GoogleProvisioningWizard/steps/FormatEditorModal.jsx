"use client";

import React, { useState, useRef, useEffect } from "react";
import { Modal } from "@/components/ui";
import {
    GOOGLE_ORG_UNITS,
    SIS_VARIABLES,
    FORMAT_FUNCTIONS,
} from "@/data/defaults/idm-provisioning";
import styles from "../GoogleProvisioningWizard.module.css";

/* ── Helpers ──────────────────────────────────── */

/** Resolve a format segment array to a preview string using sample user data */
function resolvePreview(rows, sampleUser) {
    if (!rows?.length) return "";
    return rows
        .map((seg) => {
            if (seg.type === "text") return seg.value;
            if (seg.type === "variable") {
                const map = {
                    school_name: sampleUser.school,
                    "student.grade": sampleUser.grade?.replace(/[^0-9]/g, "") || "",
                    "student.student_number": sampleUser.studentNumber || "",
                    "student.graduation_year": sampleUser.graduationYear || "",
                    "student.state_id": sampleUser.stateId || "",
                    "staff.department": sampleUser.department || "",
                    "staff.title": sampleUser.title || "",
                    "teacher.title": sampleUser.title || "",
                    "teacher.teacher_number": sampleUser.teacherNumber || "",
                };
                return map[seg.variable] ?? seg.variable;
            }
            if (seg.type === "function") return `[${seg.fn}]`;
            return "";
        })
        .join("");
}

/** Flatten the OU tree for the "Current OUs" collapsible */
function flattenTree(nodes, depth = 0) {
    const out = [];
    for (const n of nodes) {
        out.push({ ...n, depth });
        if (n.children?.length) out.push(...flattenTree(n.children, depth + 1));
    }
    return out;
}

/* ── Format Row Component ─────────────────────── */

function FormatRow({ row, index, total, onMoveUp, onMoveDown, onChange, onRemove, userType }) {
    const typeBadgeClass =
        row.type === "variable"
            ? `${styles.formatRowType} ${styles.formatRowTypeVariable}`
            : row.type === "function"
            ? `${styles.formatRowType} ${styles.formatRowTypeFunction}`
            : `${styles.formatRowType} ${styles.formatRowTypeText}`;

    const typeLabel =
        row.type === "variable" ? "Variable" : row.type === "function" ? "Function" : "Text";

    return (
        <div className={styles.formatRow}>
            {/* Up/Down arrows */}
            <div className={styles.formatRowArrows}>
                <button
                    className={styles.formatRowArrowBtn}
                    disabled={index === 0}
                    onClick={() => onMoveUp(index)}
                    title="Move up"
                >
                    ▲
                </button>
                <button
                    className={styles.formatRowArrowBtn}
                    disabled={index === total - 1}
                    onClick={() => onMoveDown(index)}
                    title="Move down"
                >
                    ▼
                </button>
            </div>

            {/* Type badge */}
            <span className={typeBadgeClass}>{typeLabel}</span>

            {/* Value editor */}
            <div className={styles.formatRowValue}>
                {row.type === "text" && (
                    <input
                        className={styles.formatRowInput}
                        value={row.value}
                        onChange={(e) => onChange(index, { ...row, value: e.target.value })}
                    />
                )}
                {row.type === "variable" && (
                    <select
                        className={styles.formatRowSelect}
                        value={row.variable}
                        onChange={(e) => {
                            const v = SIS_VARIABLES[userType]?.find(
                                (sv) => sv.variable === e.target.value
                            );
                            onChange(index, {
                                ...row,
                                variable: e.target.value,
                                label: v?.label || e.target.value,
                            });
                        }}
                    >
                        {(SIS_VARIABLES[userType] || []).map((v) => (
                            <option key={v.variable} value={v.variable}>
                                {v.label}
                            </option>
                        ))}
                    </select>
                )}
                {row.type === "function" && (
                    <span style={{ fontSize: 14, color: "var(--gray-700)" }}>{row.fn}</span>
                )}
            </div>

            {/* Remove */}
            <button
                className={styles.formatRowRemoveBtn}
                onClick={() => onRemove(index)}
                title="Remove"
            >
                &times;
            </button>
        </div>
    );
}

/* ── Main Modal Component ─────────────────────── */

export default function FormatEditorModal({
    userType,
    format,
    sampleUser,
    selectedOUPath,
    onSave,
    onCancel,
}) {
    // Local draft rows — edits here don't touch parent state until "Save"
    const [rows, setRows] = useState(() => (format?.length ? [...format.map((r) => ({ ...r }))] : []));
    const [functionsOpen, setFunctionsOpen] = useState(false);
    const [currentOUsCollapsed, setCurrentOUsCollapsed] = useState(true);
    const funcRef = useRef(null);

    // Close functions dropdown on outside click
    useEffect(() => {
        if (!functionsOpen) return;
        const handler = (e) => {
            if (funcRef.current && !funcRef.current.contains(e.target)) {
                setFunctionsOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [functionsOpen]);

    /* ── Row operations ─────── */

    const moveUp = (i) => {
        if (i === 0) return;
        setRows((prev) => {
            const next = [...prev];
            [next[i - 1], next[i]] = [next[i], next[i - 1]];
            return next;
        });
    };

    const moveDown = (i) => {
        setRows((prev) => {
            if (i >= prev.length - 1) return prev;
            const next = [...prev];
            [next[i], next[i + 1]] = [next[i + 1], next[i]];
            return next;
        });
    };

    const updateRow = (i, updated) => {
        setRows((prev) => prev.map((r, idx) => (idx === i ? updated : r)));
    };

    const removeRow = (i) => {
        setRows((prev) => prev.filter((_, idx) => idx !== i));
    };

    /* ── Add actions ─────── */

    const addSlash = () => {
        setRows((prev) => [...prev, { type: "text", value: "/" }]);
    };

    const addVariable = () => {
        const vars = SIS_VARIABLES[userType] || [];
        const first = vars[0];
        setRows((prev) => [
            ...prev,
            { type: "variable", variable: first?.variable || "school_name", label: first?.label || "School Name" },
        ]);
    };

    const addCustomText = () => {
        setRows((prev) => [...prev, { type: "text", value: "" }]);
    };

    const addFunction = (fn) => {
        setRows((prev) => [...prev, { type: "function", fn }]);
        setFunctionsOpen(false);
    };

    const startOver = () => {
        setRows([]);
    };

    /* ── Derived ─────── */

    const userTypeLabel = userType === "students" ? "student" : userType === "teachers" ? "teacher" : "staff";
    const flatOUs = flattenTree(GOOGLE_ORG_UNITS);
    const previewPath = selectedOUPath + resolvePreview(rows, sampleUser);

    // Variable label for the preview result
    const firstVarRow = rows.find((r) => r.type === "variable");
    const previewVarLabel = firstVarRow?.label || "";
    const previewVarValue = firstVarRow ? resolvePreview([firstVarRow], sampleUser) : "";

    return (
        <Modal
            isOpen={true}
            onClose={onCancel}
            title={`Build a format for ${userTypeLabel} sub-OUs`}
            maxWidth="900px"
        >
            <div className={styles.formatEditorBody}>
                {/* Left column: builder */}
                <div className={styles.formatEditorLeft}>
                    <p className={styles.formatEditorSubtitle}>
                        Configure how {userTypeLabel} sub-OUs are structured within the{" "}
                        <strong>{selectedOUPath}</strong> OU.
                    </p>
                    <p className={styles.formatEditorLinks}>
                        <a href="#" className={styles.helpLink} onClick={(e) => e.preventDefault()}>
                            Learn more about formats
                        </a>
                        {" | "}
                        <a
                            href="#"
                            className={styles.helpLink}
                            onClick={(e) => {
                                e.preventDefault();
                                startOver();
                            }}
                        >
                            Start over
                        </a>
                        {" | "}
                        <a href="#" className={styles.helpLink} onClick={(e) => e.preventDefault()}>
                            use the advanced format editor
                        </a>
                    </p>

                    {/* Rows */}
                    {rows.map((row, i) => (
                        <FormatRow
                            key={i}
                            row={row}
                            index={i}
                            total={rows.length}
                            onMoveUp={moveUp}
                            onMoveDown={moveDown}
                            onChange={updateRow}
                            onRemove={removeRow}
                            userType={userType}
                        />
                    ))}

                    {rows.length === 0 && (
                        <div
                            style={{
                                padding: 24,
                                textAlign: "center",
                                color: "var(--gray-500)",
                                fontSize: 14,
                                border: "2px dashed var(--gray-200)",
                                borderRadius: 8,
                                marginBottom: 8,
                            }}
                        >
                            No format segments yet. Use the buttons below to build your format.
                        </div>
                    )}

                    {/* Add buttons */}
                    <div className={styles.addButtonsRow}>
                        <button className={styles.addBtn} onClick={addSlash}>
                            + Add &quot;/&quot;
                        </button>
                        <button className={styles.addBtn} onClick={addVariable}>
                            + Add an SIS Variable
                        </button>
                        <button className={styles.addBtn} onClick={addCustomText}>
                            + Add Custom Text
                        </button>
                        <div className={styles.addBtnWrapper} ref={funcRef}>
                            <button
                                className={styles.addBtn}
                                onClick={() => setFunctionsOpen((v) => !v)}
                            >
                                + Add a Function ▼
                            </button>
                            {functionsOpen && (
                                <div className={styles.functionsMenu}>
                                    {FORMAT_FUNCTIONS.map((fn) => (
                                        <button
                                            key={fn}
                                            className={styles.functionsMenuItem}
                                            onClick={() => addFunction(fn)}
                                        >
                                            {fn}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className={styles.modalFooter}>
                        <button className={styles.nextBtn} onClick={() => onSave(rows)}>
                            Save format
                        </button>
                        <button className={styles.cancelBtn} onClick={onCancel}>
                            Cancel
                        </button>
                    </div>
                </div>

                {/* Right column: Current OUs + preview */}
                <div className={styles.formatEditorRight}>
                    <div className={styles.modalPreviewPanel}>
                        {/* Current OUs collapsible */}
                        <div
                            className={styles.modalCurrentOUsHeader}
                            onClick={() => setCurrentOUsCollapsed((v) => !v)}
                        >
                            <span>Current OUs</span>
                            <span>{currentOUsCollapsed ? "▸" : "▾"}</span>
                        </div>
                        {!currentOUsCollapsed && (
                            <div style={{ padding: "8px 16px", fontSize: 13 }}>
                                {flatOUs.map((ou) => (
                                    <div
                                        key={ou.id}
                                        style={{
                                            paddingLeft: ou.depth * 16,
                                            padding: "3px 0 3px " + ou.depth * 16 + "px",
                                            color: "var(--gray-700)",
                                        }}
                                    >
                                        {ou.name}
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Preview */}
                        <div className={styles.modalPreviewSection}>
                            <div style={{ fontSize: 13, fontWeight: 600, color: "var(--gray-600)", marginBottom: 8 }}>
                                PREVIEW
                            </div>
                            <div style={{ marginBottom: 8 }}>
                                <div style={{ fontSize: 12, fontWeight: 600, color: "var(--gray-500)", marginBottom: 2 }}>
                                    USER NAME
                                </div>
                                <select
                                    style={{
                                        width: "100%",
                                        padding: "6px 8px",
                                        border: "1px solid var(--gray-300)",
                                        borderRadius: 4,
                                        fontSize: 13,
                                        background: "white",
                                    }}
                                    defaultValue={sampleUser.name}
                                >
                                    <option>{sampleUser.name}</option>
                                </select>
                            </div>

                            {rows.length > 0 && (
                                <div className={styles.modalPreviewResult}>
                                    {previewVarLabel && (
                                        <div style={{ fontSize: 13, color: "var(--gray-700)", marginBottom: 4 }}>
                                            {previewVarLabel} = {previewVarValue}
                                        </div>
                                    )}
                                    <div style={{ fontSize: 13, fontWeight: 600, color: "var(--gray-900)" }}>
                                        This {userTypeLabel}&apos;s sub-OU will be{" "}
                                        <strong>{resolvePreview(rows, sampleUser)}</strong>
                                    </div>
                                </div>
                            )}

                            {rows.length === 0 && (
                                <div style={{ fontSize: 13, color: "var(--gray-500)", fontStyle: "italic" }}>
                                    Add format segments to see a preview.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
