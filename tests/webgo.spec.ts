import { test, expect } from "@playwright/test";
test.beforeEach(async ({ page }) => {
  await page.goto("https://webgopros.com");
});

test("webapp title & screenshot", async ({ page }) => {
  console.log(page.title);
  await expect(page).toHaveURL("https://webgopros.com");
  await expect(page.locator("#id-footer")).toBeVisible();
  await expect(page.locator('footer[id="id-footer" ] p')).toBeVisible();
});

test("web confirm about page assertion", async ({ page }) => {
  const viewportSize = await page.evaluate(() => {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  });

  if (viewportSize.width <= 991) {
    await page.locator(".navbar-toggler-icon").click();
    await page.locator('a[href="/about"]').click();
  } else {
    await page.locator('a[href="/about"]').click();
  }

  await expect(page.locator("h1")).toBeVisible();
  await expect(page.locator("#id-footer")).toBeVisible();
  await expect(page.locator('footer[id="id-footer" ] p')).toBeVisible();
});

test("web confirm contact page assertion", async ({ page }) => {
  const viewportSize = await page.evaluate(() => {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  });

  if (viewportSize.width <= 991) {
    await page.locator(".navbar-toggler-icon").click();
    await page.locator('a[href="/contact"]').click();
  } else {
    await page.locator('a[href="/contact"]').click();
  }

 await expect(page.locator("img#contact_me")).toBeVisible();
 const iframeElement = page.locator('iframe[title="Google Map"]').contentFrame();
 const map =iframeElement.owner();
 await expect(map).toBeVisible();
 await expect(page.locator("#id-footer")).toBeVisible();
 await expect(page.locator('footer[id="id-footer" ] p')).toBeVisible();
});

test("home page assertion", async ({ page }) => {
  await expect(page).toHaveTitle("Mohammad Rahman Portfolio");
  const frameLocator = page.locator("iframe[class='video_one']").contentFrame();
  const locator = frameLocator.owner();
  await expect(locator).toBeVisible();
});
