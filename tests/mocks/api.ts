import { Page } from '@playwright/test';

export async function setupMockApi(page: Page) {
  await page.route('**/api/employees-table', route => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([])
    });
  });
}

export async function resetMockApi(page: Page) {
  await page.unroute('**/api/employees-table');
}

export async function mockEmployees(page: Page, employees: any[]) {
  await page.route('**/api/employees-table', route => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(employees)
    });
  });
}