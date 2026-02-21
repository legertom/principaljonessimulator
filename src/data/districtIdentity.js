/**
 * Single source of truth for the simulated district identity.
 *
 * Import from here instead of hardcoding district/school names or
 * email domains elsewhere in the codebase.
 */

export const DISTRICT = {
    name: "Cedar Ridge School District",
    shortName: "Cedar Ridge SD",
    sidebarName: "#DEMO Cedar Ridge SD (Sandbox)...",
    emailDomain: "cedarridgesd.org",
};

export const SCHOOLS = {
    elementary: "Cedar Ridge Elementary",
    middle: "Cedar Ridge Middle School",
    high: "Cedar Ridge High School",
};
