import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('https://playwright.dev/')
})

test('has title', async ({ page }) => {
  await expect(page).toHaveTitle(/Playwright/)
})

test('get started link', async ({ page }) => {
  await page.getByRole('link', { name: 'Get started' }).click()

  await expect(page).toHaveURL(/.*intro/)
})
