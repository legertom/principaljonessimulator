"use client";

/**
 * Reusable modal component for dialogs and overlays.
 *
 * Usage:
 *   import { Modal } from "@/components/ui";
 *
 *   <Modal
 *     isOpen={isOpen}
 *     onClose={() => setIsOpen(false)}
 *     title="Add team member"
 *   >
 *     <form>
 *       ...modal content...
 *     </form>
 *   </Modal>
 *
 *   <Modal
 *     isOpen={isOpen}
 *     onClose={() => setIsOpen(false)}
 *     title="Confirm action"
 *     maxWidth="400px"
 *   >
 *     <p>Are you sure?</p>
 *   </Modal>
 */

import { Icon } from "./Icons";
import styles from "./Modal.module.css";

export function Modal({
    isOpen,
    onClose,
    title,
    children,
    maxWidth = "600px",
    className = ""
}) {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div
                className={`${styles.content} ${className}`}
                style={{ maxWidth }}
                onClick={e => e.stopPropagation()}
            >
                <div className={styles.header}>
                    <h2 className={styles.title}>{title}</h2>
                    <button className={styles.closeButton} onClick={onClose}>
                        <Icon name="xCircle" size={24} />
                    </button>
                </div>
                <div className={styles.body}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;
