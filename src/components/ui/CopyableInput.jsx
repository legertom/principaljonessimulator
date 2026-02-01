"use client";

/**
 * Reusable input field with copy button.
 * 
 * Usage:
 *   import { CopyableInput } from "@/components/ui";
 *   
 *   <CopyableInput 
 *     label="SFTP URL"
 *     value="sftp.clever.com"
 *   />
 *   
 *   <CopyableInput 
 *     label="Password"
 *     value="secret123"
 *     type="password"
 *     showReveal
 *   />
 */

import { useState } from "react";
import { Icons } from "./Icons";
import styles from "./CopyableInput.module.css";

export function CopyableInput({
    label,
    value,
    type = "text",
    showReveal = false,
    className = ""
}) {
    const [isRevealed, setIsRevealed] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const inputType = type === "password" && !isRevealed ? "password" : "text";

    return (
        <div className={`${styles.container} ${className}`}>
            {label && <label className={styles.label}>{label}</label>}
            <div className={styles.inputWrapper}>
                <input
                    type={inputType}
                    value={value}
                    readOnly
                    className={styles.input}
                />
                <div className={styles.actions}>
                    <button
                        className={styles.copyBtn}
                        onClick={handleCopy}
                    >
                        {copied ? "Copied!" : "Copy"}
                    </button>
                    {showReveal && type === "password" && (
                        <>
                            <span className={styles.separator}>|</span>
                            <button
                                className={styles.revealBtn}
                                onClick={() => setIsRevealed(!isRevealed)}
                            >
                                {isRevealed ? Icons.eye : Icons.eyeOff}
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CopyableInput;
