# E2E Testing with Playwright

This project includes automated end-to-end testing using Playwright that runs on GitHub Actions.

## What it does

- **Runs E2E tests** on every push to main/develop branches and PRs
- **Captures screenshots** of different pages and viewport sizes
- **Automatically commits** updated screenshots back to the repository
- **Runs daily** to catch any regressions
- **Can be triggered manually** from the GitHub Actions tab

## Screenshots captured

The tests automatically capture:
- Full homepage screenshot
- Navigation bar screenshot
- Screenshots of each main page (Home, Shop, Videos, etc.)
- Mobile responsive screenshots (375px width)
- Tablet responsive screenshots (768px width)

## Local testing

To run tests locally:

```bash
# Run all tests
npm test

# Run tests with browser visible
npm run test:headed

# Debug tests interactively
npm run test:debug

# View test report
npm run test:report
```

## GitHub Actions workflow

The workflow (`e2e-tests.yml`) includes:
- Building the application
- Running Playwright tests
- Uploading test results as artifacts
- Committing screenshots back to the repo
- Adding screenshot comments to PRs

## Test configuration

Tests are configured in `playwright.config.ts` and use:
- Chromium, Firefox, and WebKit browsers
- Screenshots on failure
- Automatic retries on CI
- Local dev server for testing

## Adding new tests

Add new test files to the `tests/` directory following the pattern:
```typescript
import { test, expect } from '@playwright/test';

test('my new test', async ({ page }) => {
  await page.goto('/my-page');
  await page.screenshot({ path: 'screenshots/my-page.png' });
  // Add your assertions here
});
```