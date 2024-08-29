import { test, expect } from '@playwright/test';

test.describe('CreateUser Page', () => {
  
  // Before each test, navigate to the CreateUser page
  test.beforeEach(async ({ page }) => {
    await page.goto('/'); 
  });

  test('should render the CreateUser page correctly', async ({ page }) => {
    // Verify Header is visible
    const header = page.getByTestId('header-container');
    await expect(header).toBeVisible();

    // Verify Header text is correct
    const headerText = page.locator('h1');
    await expect(headerText).toHaveText('HRNET');

    // Verify link is visible
    const link = page.locator('a');
    await expect(link).toBeVisible();

    // Verify link text is correct
    await expect(link).toHaveText('See All Employees');

    // Verify the title of the form is correct
    const title = page.locator('h2');
    await expect(title).toHaveText('Create Employee');

    // Verify the form is visible
    const form = page.locator('form');
    await expect(form).toBeVisible();
  });

  test('should navigate to the employees table when the link is clicked', async ({ page }) => {
    // Click the link in the Header
    const link = page.locator('text=See All Employees');
    await link.click();

    // Check that the page URL changes to the employees table route
    await expect(page).toHaveURL('/employees-table');
  });

  test('should display validation errors when submitting an empty form', async ({ page }) => {
    // Submit the form
    const submitButton = page.locator('button:has-text("Save New Employee")');
    await submitButton.click();

    // Wait for the error messages to appear
    await page.waitForTimeout(500);

    // Assert that each error message is visible
    const firstNameError = page.getByTestId('firstName-error');
    const lastNameError = page.getByTestId('lastName-error');
    const dateOfBirthError = page.getByTestId('dateOfBirth-error');
    const startDateError = page.getByTestId('startDate-error');
    const departmentError = page.getByTestId('department-error');
    const streetError = page.getByTestId('street-error');
    const cityError = page.getByTestId('city-error');
    const stateError = page.getByTestId('state-error');
    const zipCodeError = page.getByTestId('zipCode-error');

    await expect(firstNameError).toBeVisible();
    await expect(lastNameError).toBeVisible();
    await expect(dateOfBirthError).toBeVisible();
    await expect(startDateError).toBeVisible();
    await expect(departmentError).toBeVisible();
    await expect(streetError).toBeVisible();
    await expect(cityError).toBeVisible();
    await expect(stateError).toBeVisible();
    await expect(zipCodeError).toBeVisible();
  });



  test('should successfully submit the form and show modal', async ({ page }) => {
    // Fill in the form fields 
    await page.fill('input[name="firstName"]', 'John');
    await page.fill('input[name="lastName"]', 'Doe');
    await page.fill('input[name="dateOfBirth"]', '1990-01-01');
    await page.fill('input[name="startDate"]', '2024-12-29');   
    await page.selectOption('select[name="department"]', 'Engineering');
    await page.fill('input[name="street"]', '123 Main St');
    await page.fill('input[name="city"]', 'Anytown');
    await page.selectOption('select[name="state"]', 'CA');
    await page.fill('input[name="zipCode"]', '90210');

    // Submit the form and wait for the submission to be processed
    const submitButton = page.locator('button:has-text("Save New Employee")');
    await submitButton.click();

    // Wait for the modal to appear with an extended timeout
    const modal = page.locator('text=Employee Created!');
    await expect(modal).toBeVisible({ timeout: 10000 }); 

    // Locate the close button
    const closeButton = page.locator('button[role="button"]:has-text("Close")');
    await closeButton.waitFor({ state: 'visible', timeout: 5000 }); 
    await closeButton.click();

    // Ensure the modal is no longer visible
    await expect(modal).not.toBeVisible();
  });

});
