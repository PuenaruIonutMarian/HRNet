import { test, expect } from '@playwright/test';
import { testerData } from '../src/utils/dataGenerator/dataGenerator';

test.describe('Employees Table Page Pagination Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.context().addInitScript(() => {
      //flag is set to signal to the application that it's running in a Playwright environment and window.store accessible.
      (window as any).IS_PLAYWRIGHT = true;
    });
    await page.goto('/employees-table');
    //clears any persistent data, ensuring each test starts with a clean slate.
    await page.evaluate(() => localStorage.clear());

    // Populate Redux store with generated test data
    await page.evaluate((data) => {
      data.forEach(employee => {
        //This action manually injects data into the store, simulating a real application state.
        (window as any).store.dispatch({
          type: 'employees/addEmployee',
          payload: employee,
        });
      });
    }, testerData);
  });


  test('should display employee data in the table', async ({ page }) => {

    // Verify that the table displays data
    const table = page.locator('table');
    await expect(table).toBeVisible();

    // Verify headers
    const headers = await table.locator('thead th').allTextContents();
    expect(headers).toEqual([
      'First Name▲▼',
      'Last Name▲▼',
      'Date Of Birth▲▼',
      'Start Date▲▼',
      'Street▲▼',
      'City▲▼',
      'State▲▼',
      'Zip Code▲▼',
      'Department▲▼'
    ]);

    // Verify rows
    const firstRowCells = await table.locator('tbody tr:first-child td').allTextContents();
    expect(firstRowCells).toHaveLength(9); // Adjust based on the actual number of columns
  });

  test('should filter data in the table based on search input', async ({ page }) => {

    // Locate the search input field
    const searchInput = page.locator('#search-input');

    // Wait for the search input to be visible
    await searchInput.waitFor({ state: 'visible', timeout: 20000 });

    // Fill the search input with a query
    await searchInput.fill('John');

    // Wait for the results to update
    await page.waitForTimeout(2000); // Adjust based on your app's behavior

    // Verify that the table shows filtered results
    const rows = await page.locator('table tbody tr').count();
    await expect(rows).toBeGreaterThan(0);
  });

  test('should show a confirmation modal and handle deletion', async ({ page }) => {

    // Check if the delete button is visible
    const deleteButton = page.locator('button:has-text("Delete List of Employees")');
    await expect(deleteButton).toBeVisible();

    // Click the delete button and check if the modal is visible
    await deleteButton.click();
    const modal = page.locator('[data-testid="modal"]');
    await expect(modal).toBeVisible();

    // Verify the content inside the modal
    const modalContent = page.locator('[data-testid="modal-message"]');

    await expect(modalContent).toContainText('Are you sure you want to delete the current employee list?');
    await expect(modalContent).toContainText('If you click "Yes," the list will be replaced with mock data.');

    // Click "Yes" button inside the modal
    const yesButton = modal.locator('button:has-text("Yes")');
    await expect(yesButton).toBeVisible();
    await yesButton.click();

  });

  test('should navigate back to the home page from the employees table', async ({ page }) => {
    // Click the "Back To Home Page" link
    const backLink = page.locator('a:has-text("Back To Home Page")');
    await backLink.click();

    // Verify navigation to the home page
    await expect(page).toHaveURL('/');
    await expect(page.locator('h1')).toHaveText('HRNET');
  });

  test('should sort by Date Of Birth in ascending order', async ({ page }) => {
    const dateOfBirthHeader = page.locator('th:has-text("Date Of Birth▲▼")');
    await dateOfBirthHeader.click();

    // Verify sorting order (ascending)
    const rows = await page.locator('tbody tr').allTextContents();
    const dates = rows.map(row => row.split('\n')[2]);
    const sortedDates = [...dates].sort();
    expect(dates).toEqual(sortedDates);
  });

  test('should sort by Date Of Birth in descending order', async ({ page }) => {
    const dateOfBirthHeader = page.locator('th:has-text("Date Of Birth▲▼")');
    await dateOfBirthHeader.click();
    // Click again to toggle to descending
    await dateOfBirthHeader.click(); 

    // Verify sorting order (descending)
    const rows = await page.locator('tbody tr').allTextContents();
    const dates = rows.map(row => row.split('\n')[2]); 
    const sortedDates = [...dates].sort().reverse();
    expect(dates).toEqual(sortedDates);
  });

  test('should display correct number of rows when selecting 10 rows per page', async ({ page }) => {
    const rowsPerPageSelector = page.locator('#rows-per-page');
    await rowsPerPageSelector.selectOption({ value: '10' });

    // Verify the number of rows displayed
    const rows = await page.locator('tbody tr').count();
    expect(rows).toBe(10);
  });

  test('should display correct number of rows when selecting 25 rows per page', async ({ page }) => {
    const rowsPerPageSelector = page.locator('#rows-per-page');
    await rowsPerPageSelector.selectOption({ value: '25' });

    // Verify the number of rows displayed
    const rows = await page.locator('tbody tr').count();
    expect(rows).toBe(25);
  });

  test('should navigate to the next page when clicking the next button', async ({ page }) => {
    // Ensure there are multiple pages
    const nextButton = page.locator('button:has-text("»")');
    await nextButton.click();

    // Verify that the current page number has increased
    const currentPage = page.locator('.pagination .active');
    await expect(currentPage).toHaveText('2'); 
  });

  test('should navigate to the previous page when clicking the previous button', async ({ page }) => {
    // Ensure there are multiple pages and navigate to a different page first
    const nextButton = page.locator('button:has-text("»")');
    await nextButton.click();
    const previousButton = page.locator('button:has-text("«")');
    await previousButton.click();

    // Verify that the current page number has decreased
    const currentPage = page.locator('.pagination .active');
    await expect(currentPage).toHaveText('1');
  });

});

