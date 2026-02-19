"use client";

import { useEffect, useRef, useState } from "react";
import { useScenario } from "@/context/ScenarioContext";
import { signOut, useSession } from "next-auth/react";
import styles from "./PortalLobby.module.css";
import { Icon } from "@/components/ui/Icons";

const FALLBACK_TOP_NAV_ITEMS = [
    { id: "search", label: "Search", icon: "search" },
    { id: "portal", label: "Portal", icon: "portalGrid" },
    { id: "dashboard", label: "Dashboard", icon: "dashboardPanel" },
    { id: "notifications", label: "Notifications", icon: "notifications" },
    { id: "account", label: "Account", icon: "accountCircle" },
];

const FALLBACK_CATEGORIES = [
    { id: "more-apps", label: "More Apps" },
];

export default function PortalLobby({ onLaunchApp, onEnterDashboard }) {
    const { scenario } = useScenario();
    const { data: session } = useSession();
    const {
        apps = [],
        categories = FALLBACK_CATEGORIES,
        notice,
        topNavItems = FALLBACK_TOP_NAV_ITEMS
    } = scenario.portalLobby ?? {};
    const defaultUserInfo = scenario.topNav?.userInfo ?? {
        name: "Tom Leger",
        firstName: "Tom",
        role: "Admin",
        email: "tom.leger@clever.com"
    };
    const portalApps = Array.isArray(apps) ? apps : [];
    const availableCategories = Array.isArray(categories) && categories.length > 0
        ? categories
        : FALLBACK_CATEGORIES;
    const navItems = Array.isArray(topNavItems) && topNavItems.length > 0
        ? topNavItems
        : FALLBACK_TOP_NAV_ITEMS;

    const [activeCategoryId, setActiveCategoryId] = useState(availableCategories[0]?.id ?? "");
    const [comingSoonId, setComingSoonId] = useState(null);
    const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
    const accountMenuRef = useRef(null);

    const userInfo = session?.user
        ? {
            name: session.user.name ?? defaultUserInfo.name ?? "Tom Leger",
            firstName: session.user.name?.split(" ")[0] ?? defaultUserInfo.firstName ?? "Tom",
            role: session.user.role ?? defaultUserInfo.role ?? "Admin",
            email: session.user.email ?? defaultUserInfo.email ?? "tom.leger@clever.com",
        }
        : defaultUserInfo;
    const selectedCategoryId = availableCategories.some((category) => category.id === activeCategoryId)
        ? activeCategoryId
        : availableCategories[0]?.id ?? "";
    const activeCategory = availableCategories.find((category) => category.id === selectedCategoryId)
        ?? availableCategories[0];
    const visibleApps = portalApps.filter((app) => app.categoryId === selectedCategoryId);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (accountMenuRef.current && !accountMenuRef.current.contains(event.target)) {
                setIsAccountMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = async () => {
        await signOut({ callbackUrl: "/login" });
    };

    const handleTileClick = (app) => {
        if (app.launchMode === "dashboard" && app.launchTarget) {
            onLaunchApp(app.launchTarget);
            return;
        }

        setComingSoonId(app.id);
        setTimeout(() => setComingSoonId(null), 1600);
    };

    const handleTopNavClick = (itemId) => {
        if (itemId === "dashboard") {
            onEnterDashboard();
            return;
        }

        if (itemId === "account") {
            setIsAccountMenuOpen((prev) => !prev);
            return;
        }

        setIsAccountMenuOpen(false);
    };

    return (
        <div className={styles.portalPage}>
            <div className={styles.portalFrame}>
                <header className={styles.portalHeader}>
                    <div className={styles.headerLeft}>
                        <span className={styles.logoText}>Clever</span>
                        <span className={styles.userName}>{userInfo.name}</span>
                    </div>

                    <nav className={styles.headerNav} aria-label="Portal navigation">
                        {navItems.map((item) => {
                            const isPortal = item.id === "portal";
                            const isAccount = item.id === "account";
                            const isActive = isPortal || (isAccount && isAccountMenuOpen);

                            return (
                                <div
                                    key={item.id}
                                    className={styles.navItemWrap}
                                    ref={isAccount ? accountMenuRef : null}
                                >
                                    <button
                                        type="button"
                                        className={`${styles.navItem} ${isActive ? styles.navItemActive : ""} ${isAccount && isActive ? styles.accountItemActive : ""}`}
                                        onClick={() => handleTopNavClick(item.id)}
                                        aria-expanded={isAccount ? isAccountMenuOpen : undefined}
                                    >
                                        <Icon name={item.icon} size={22} className={styles.navIcon} />
                                        <span className={styles.navLabel}>{item.label}</span>
                                    </button>

                                    {isAccount && isAccountMenuOpen ? (
                                        <div className={styles.accountMenu} role="menu">
                                            <div className={styles.accountMenuInner}>
                                                <h2 className={styles.accountGreeting}>
                                                    Hi, {userInfo.firstName}
                                                </h2>
                                                <p className={styles.accountRole}>{userInfo.role}</p>
                                                <p className={styles.accountEmail}>{userInfo.email}</p>

                                                <button type="button" className={styles.accountAction}>
                                                    <Icon name="mfa" size={24} className={styles.accountActionIcon} />
                                                    <span>MFA settings</span>
                                                </button>
                                                <button
                                                    type="button"
                                                    className={styles.accountAction}
                                                    onClick={handleLogout}
                                                >
                                                    <Icon name="logout" size={24} className={styles.accountActionIcon} />
                                                    <span>Log out</span>
                                                </button>
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                            );
                        })}
                    </nav>
                </header>

                <div className={styles.portalBody}>
                    <aside className={styles.categoryRail} aria-label="Portal categories">
                        {availableCategories.map((category) => (
                            <button
                                key={category.id}
                                type="button"
                                className={`${styles.categoryButton} ${selectedCategoryId === category.id ? styles.categoryButtonActive : ""}`}
                                onClick={() => setActiveCategoryId(category.id)}
                            >
                                {category.label}
                            </button>
                        ))}
                    </aside>

                    <main className={styles.mainPanel}>
                        <section className={styles.noticeCard}>
                            <div className={styles.noticeTitleRow}>
                                <span className={styles.noticeStar} aria-hidden="true">
                                    ★
                                </span>
                                <p className={styles.noticeTitle}>
                                    {notice?.title ?? "We've streamlined your Portal organization experience"}
                                </p>
                            </div>

                            {notice?.body?.[0] ? (
                                <p className={styles.noticeText}>
                                    {notice.body[0]}{" "}
                                    <a href={notice.learnMoreHref ?? "#"} className={styles.noticeLink}>
                                        {notice.learnMoreLabel ?? "Learn more here."}
                                    </a>
                                </p>
                            ) : null}

                            {notice?.body?.[1] ? (
                                <p className={styles.noticeText}>{notice.body[1]}</p>
                            ) : null}
                        </section>

                        <section className={styles.resourcesSection}>
                            <h1 className={styles.resourcesTitle}>Resources</h1>
                            <h2 className={styles.resourceCategoryTitle}>
                                {activeCategory?.label ?? "More Apps"}
                            </h2>

                            <div className={styles.appsGrid}>
                                {visibleApps.map((app) => (
                                    <button
                                        key={app.id}
                                        type="button"
                                        className={`${styles.appTile} ${app.launchMode === "comingSoon" ? styles.comingSoonTile : ""}`}
                                        onClick={() => handleTileClick(app)}
                                    >
                                        <div className={styles.appIconFrame}>
                                            <div
                                                className={styles.appIcon}
                                                style={{
                                                    background: app.iconBackground,
                                                    color: app.iconTextColor,
                                                }}
                                            >
                                                <span className={styles.appIconText}>{app.iconText}</span>
                                            </div>
                                        </div>
                                        <span className={styles.appName}>{app.name}</span>
                                        {comingSoonId === app.id ? (
                                            <span className={styles.comingSoonToast}>Coming soon</span>
                                        ) : null}
                                    </button>
                                ))}
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
}
