import { test, expect } from '@playwright/test';

test.describe('Error Page Tests', () => {
  test('should display the 404 error page for invalid routes', async ({ page }) => {
    // Navigate to an invalid route
    await page.goto('/invalid-route');

    // Check if the page displays the 404 error correctly
    await expect(page.locator('main')).toHaveClass(/error/);
    await expect(page.locator('h1')).toHaveText('404');
    await expect(page.locator('h3')).toHaveText('Oups! The page you requested was not found.');
  });

  test('should navigate back to home page from error page', async ({ page }) => {
    // Navigate to an invalid route
    await page.goto('/invalid-route');

    // Click the "Go Back To The Home Page" link
    const goBackLink = page.locator('a:has-text("Go Back To The Home Page")');
    await expect(goBackLink).toBeVisible();
    await goBackLink.click();

    // Verify that clicking the link navigates to the home page
    await expect(page).toHaveURL('/');
    
    // Ensure the home page contains the expected content
    await expect(page.locator('h1')).toHaveText('HRNET'); 
  });
});
