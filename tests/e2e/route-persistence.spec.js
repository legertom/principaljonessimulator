const { test, expect } = require("@playwright/test");

async function login(page) {
    await page.goto("/login");
    await page.getByLabel("Email Address").fill("principal@example.com");
    await page.getByLabel("Password").fill("password");

    await Promise.all([
        page.waitForURL("**/"),
        page.getByRole("button", { name: "Log in" }).click(),
    ]);
}

test.beforeEach(async ({ page }) => {
    await login(page);
});

test("refresh persists dashboard IDM route", async ({ page }) => {
    await page.goto("/dashboard/idm");

    await expect(page).toHaveURL(/\/dashboard\/idm$/);
    await expect(page.getByRole("heading", { name: "Clever IDM" })).toBeVisible();

    await page.reload();

    await expect(page).toHaveURL(/\/dashboard\/idm$/);
    await expect(page.getByRole("heading", { name: "Clever IDM" })).toBeVisible();
});

test("refresh persists IDM provisioning step route", async ({ page }) => {
    await page.goto("/dashboard/idm");
    await page.getByRole("button", { name: "Edit Google provisioning" }).click();

    await expect(page).toHaveURL(/\/dashboard\/idm\/provisioning\/connect$/);

    await page.getByRole("button", { name: "Set login credentials" }).click();
    await expect(page).toHaveURL(/\/dashboard\/idm\/provisioning\/credentials$/);

    await page.reload();

    await expect(page).toHaveURL(/\/dashboard\/idm\/provisioning\/credentials$/);
    await expect(page.getByText("Set login credentials").first()).toBeVisible();
});

test("refresh persists portal route", async ({ page }) => {
    await page.goto("/dashboard/sis-sync");
    await page.getByRole("button", { name: "Portal" }).click();

    await expect(page).toHaveURL(/\/$/);

    await page.reload();

    await expect(page).toHaveURL(/\/$/);
    await expect(page.getByRole("heading", { name: "Your Applications" })).toBeVisible();
});

test("browser back and forward keeps portal/dashboard route history", async ({ page }) => {
    await page.goto("/dashboard/dashboard");
    await expect(page).toHaveURL(/\/dashboard\/dashboard$/);

    await page.getByRole("button", { name: "Portal" }).click();
    await expect(page).toHaveURL(/\/$/);

    await page.goBack();
    await expect(page).toHaveURL(/\/dashboard\/dashboard$/);

    await page.goForward();
    await expect(page).toHaveURL(/\/$/);
});
