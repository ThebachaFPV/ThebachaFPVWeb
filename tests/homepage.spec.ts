import { test, expect } from '@playwright/test';

// test.describe('ThebachaFPV Website', () => {
//     test('homepage loads correctly', async ({ page }) => {
//         await page.goto('/');

//         // Check if the page title is correct
//         await expect(page).toHaveTitle(/ThebachaFPV/i);

//         // Take a full page screenshot
//         await page.screenshot({
//             path: 'screenshots/homepage-full.png',
//             fullPage: true
//         });

//         // Check for main navigation elements
//         const nav = page.locator('nav');
//         await expect(nav).toBeVisible();

//         // Take a screenshot of just the navigation
//         await nav.screenshot({
//             path: 'screenshots/navigation.png'
//         });
//     });

//     test('navigation works', async ({ page }) => {
//         await page.goto('/');

//         // Test navigation to different pages
//         const links = ['Home', 'Shop', 'Videos', 'Membership', 'League'];

//         for (const linkText of links) {
//             const link = page.getByRole('link', { name: new RegExp(linkText, 'i') }).first();
//             if (await link.isVisible()) {
//                 await link.click();
//                 await page.waitForLoadState('networkidle');

//                 // Take a screenshot of each page
//                 await page.screenshot({
//                     path: `screenshots/${linkText.toLowerCase()}-page.png`,
//                     fullPage: true
//                 });

//                 // Go back to home for next iteration
//                 await page.goto('/');
//             }
//         }
//     });

//     test('mobile responsive design', async ({ page }) => {
//         // Test mobile viewport
//         await page.setViewportSize({ width: 375, height: 667 });
//         await page.goto('/');

//         await page.screenshot({
//             path: 'screenshots/mobile-homepage.png',
//             fullPage: true
//         });

//         // Test tablet viewport
//         await page.setViewportSize({ width: 768, height: 1024 });
//         await page.goto('/');

//         await page.screenshot({
//             path: 'screenshots/tablet-homepage.png',
//             fullPage: true
//         });
//     });
// });

test.describe('ThebachaFPV Weather Forecasts', () => {
    test('YSM 2day HRDPS', async ({ page }) => {
        // go the page
        await page.goto('https://spotwx.com/products/grib_index.php?model=hrdps_continental&lat=59.9825&lon=-111.59912&tz=America/Edmonton&label=ThebachaFPV%20-%20Fort%20Smith');
        //wait for render
        await page.waitForLoadState('networkidle');
        // make sure correct page is loaded
        await page.waitForTimeout(500);
        await page.locator('.highcharts-title:has-text("HRDPS Continental forecast for ThebachaFPV")').waitFor();



        const header = page.locator('#container_title');
        await header.screenshot({
            path:
                'src/assets/forecast-images/YSM_HRDPS_header.png',
        });

        const container_temperature = page.locator('#container_temperature');
        await container_temperature.screenshot({
            path:
                'src/assets/forecast-images/YSM_HRDPS_temp.png',
        });

        const container_precip = page.locator('#container_precip');
        await container_precip.screenshot({
            path:
                'src/assets/forecast-images/YSM_HRDPS_precip.png',
        });

        const container_wind = page.locator('#container_wind');
        await container_wind.screenshot({
            path:
                'src/assets/forecast-images/YSM_HRDPS_wind.png',
        });

        const container_llwind = page.locator('#container_llwind');
        await container_llwind.screenshot({
            path:
                'src/assets/forecast-images/YSM_HRDPS_llwind.png',
        });



        /**************** */
        await page.goto('https://spotwx.com/products/grib_index.php?model=nam_awphys&lat=60.00552&lon=-111.88494&tz=America/Yellowknife&label=ThebachaFPV%20-%20Fort%20Smith');
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(500);
        await page.locator('.highcharts-title:has-text("NAM forecast for ThebachaFPV")').waitFor();

        // Take a full page screenshot
        await page.screenshot({
            path: 'src/assets/forecast-images/YSM_NAM.png',
            omitBackground: true,
            fullPage: true
        });

    });
    test('YSM 3.5day RDPS', async ({ page }) => {

        await page.goto('https://spotwx.com/products/grib_index.php?model=rdps_10km&lat=60.00552&lon=-111.88494&tz=America/Yellowknife&label=ThebachaFPV%20-%20Fort%20Smith');
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(500);
        await page.locator('.highcharts-title:has-text("RDPS forecast for ThebachaFPV")').waitFor();



        const header = page.locator('#container_title');
        await header.screenshot({
            path:
                'src/assets/forecast-images/YSM_RDPS_header.png',
        });

        const container_temperature = page.locator('#container_temperature');
        await container_temperature.screenshot({
            path:
                'src/assets/forecast-images/YSM_RDPS_temp.png',
        });

        const container_precip = page.locator('#container_precip');
        await container_precip.screenshot({
            path:
                'src/assets/forecast-images/YSM_RDPS_precip.png',
        });

        const container_wind = page.locator('#container_wind');
        await container_wind.screenshot({
            path:
                'src/assets/forecast-images/YSM_RDPS_wind.png',
        });

        const container_llwind = page.locator('#container_llwind');
        await container_llwind.screenshot({
            path:
                'src/assets/forecast-images/YSM_RDPS_llwind.png',
        });



        /**************** */
        await page.goto('https://spotwx.com/products/grib_index.php?model=nam_awphys&lat=60.00552&lon=-111.88494&tz=America/Yellowknife&label=ThebachaFPV%20-%20Fort%20Smith');
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(500);
        await page.locator('.highcharts-title:has-text("NAM forecast for ThebachaFPV")').waitFor();

        // Take a full page screenshot
        await page.screenshot({
            path: 'src/assets/forecast-images/YSM_NAM.png',
            omitBackground: true,
            fullPage: true
        });

    });

    test('YSM 3.5 day NAM', async ({ page }) => {

        await page.goto('https://spotwx.com/products/grib_index.php?model=nam_awphys&lat=60.00552&lon=-111.88494&tz=America/Yellowknife&label=ThebachaFPV%20-%20Fort%20Smith');
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(500);
        await page.locator('.highcharts-title:has-text("NAM forecast for ThebachaFPV")').waitFor();




        const header = page.locator('#container_title');
        await header.screenshot({
            path:
                'src/assets/forecast-images/YSM_NAM_header.png',
        });

        const container_temperature = page.locator('#container_temperature');
        await container_temperature.screenshot({
            path:
                'src/assets/forecast-images/YSM_NAM_temp.png',
        });

        const container_precip = page.locator('#container_precip');
        await container_precip.screenshot({
            path:
                'src/assets/forecast-images/YSM_NAM_precip.png',
        });

        const container_wind = page.locator('#container_wind');
        await container_wind.screenshot({
            path:
                'src/assets/forecast-images/YSM_NAM_wind.png',
        });

        const container_llwind = page.locator('#container_llwind');
        await container_llwind.screenshot({
            path:
                'src/assets/forecast-images/YSM_NAM_llwind.png',
        });



    });


    test('YHY 2day HRDPS', async ({ page }) => {
        // go the page
        await page.goto('https://spotwx.com/products/grib_index.php?model=hrdps_continental&lat=60.82349&lon=-115.76294&tz=America/Yellowknife&label=ThebachaFPV%20-%20Hay%20River');
        //wait for render
        await page.waitForLoadState('networkidle');
        // make sure correct page is loaded
        await page.waitForTimeout(500);
        await page.locator('.highcharts-title:has-text("HRDPS Continental forecast for ThebachaFPV")').waitFor();



        const header = page.locator('#container_title');
        await header.screenshot({
            path:
                'src/assets/forecast-images/YHY_HRDPS_header.png',
        });

        const container_temperature = page.locator('#container_temperature');
        await container_temperature.screenshot({
            path:
                'src/assets/forecast-images/YHY_HRDPS_temp.png',
        });

        const container_precip = page.locator('#container_precip');
        await container_precip.screenshot({
            path:
                'src/assets/forecast-images/YHY_HRDPS_precip.png',
        });

        const container_wind = page.locator('#container_wind');
        await container_wind.screenshot({
            path:
                'src/assets/forecast-images/YHY_HRDPS_wind.png',
        });

        const container_llwind = page.locator('#container_llwind');
        await container_llwind.screenshot({
            path:
                'src/assets/forecast-images/YHY_HRDPS_llwind.png',
        });



        /**************** */
        await page.goto('https://spotwx.com/products/grib_index.php?model=nam_awphys&lat=60.00552&lon=-111.88494&tz=America/Yellowknife&label=ThebachaFPV%20-%20Fort%20Smith');
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(500);
        await page.locator('.highcharts-title:has-text("NAM forecast for ThebachaFPV")').waitFor();

        // Take a full page screenshot
        await page.screenshot({
            path: 'src/assets/forecast-images/YHY_NAM.png',
            omitBackground: true,
            fullPage: true
        });

    });
    test('YHY 3.5day RDPS', async ({ page }) => {

        await page.goto('https://spotwx.com/products/grib_index.php?model=rdps_10km&lat=60.82349&lon=-115.76294&tz=America/Yellowknife&label=ThebachaFPV%20-%20Hay%20River');
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(500);
        await page.locator('.highcharts-title:has-text("RDPS forecast for ThebachaFPV")').waitFor();



        const header = page.locator('#container_title');
        await header.screenshot({
            path:
                'src/assets/forecast-images/YHY_RDPS_header.png',
        });

        const container_temperature = page.locator('#container_temperature');
        await container_temperature.screenshot({
            path:
                'src/assets/forecast-images/YHY_RDPS_temp.png',
        });

        const container_precip = page.locator('#container_precip');
        await container_precip.screenshot({
            path:
                'src/assets/forecast-images/YHY_RDPS_precip.png',
        });

        const container_wind = page.locator('#container_wind');
        await container_wind.screenshot({
            path:
                'src/assets/forecast-images/YHY_RDPS_wind.png',
        });

        const container_llwind = page.locator('#container_llwind');
        await container_llwind.screenshot({
            path:
                'src/assets/forecast-images/YHY_RDPS_llwind.png',
        });



        /**************** */
        await page.goto('https://spotwx.com/products/grib_index.php?model=nam_awphys&lat=60.00552&lon=-111.88494&tz=America/Yellowknife&label=ThebachaFPV%20-%20Fort%20Smith');
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(500);
        await page.locator('.highcharts-title:has-text("NAM forecast for ThebachaFPV")').waitFor();

        // Take a full page screenshot
        await page.screenshot({
            path: 'src/assets/forecast-images/YHY_NAM.png',
            omitBackground: true,
            fullPage: true
        });

    });

    test('YSM OkToFly.com', async ({ page }) => {

        await page.goto('https://oktofly.com/loc/60.004541,-111.823387');
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(500);

        // accept the licence:
        await page.click('#acceptlicense');
        await page.waitForTimeout(500);

        // Move mouse to far left of screen to avoid hover effects
        await page.mouse.move(0, 0);
        await page.waitForTimeout(100); // Small delay for hover effects to clear



        await page.locator('#time_label').first().waitFor();



        const header = page.locator('#date_selector_canvas');
        await header.screenshot({
            path:
                'src/assets/forecast-images/YSM_OkTofly_header.png',
        });

        const container_temperature = page.locator('#timeslot_container_0');
        await container_temperature.screenshot({
            path:
                'src/assets/forecast-images/YSM_OkTofly_T0.png',
        });

        // const container_precip = page.locator('#timeslot_container_1');
        // await container_precip.screenshot({
        //     path:
        //         'src/assets/forecast-images/YSM_OkTofly_T1.png',
        // });

        // const container_wind = page.locator('#timeslot_container_2');
        // await container_wind.screenshot({
        //     path:
        //         'src/assets/forecast-images/YSM_OkTofly_T2.png',
        // });
    });

    test('YHY OkToFly.com', async ({ page }) => {

        await page.goto('https://oktofly.com/loc/60.004541,-115.779971');
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(500);

        // accept the licence:
        await page.click('#acceptlicense');
        await page.waitForTimeout(500);

        // Move mouse to far left of screen to avoid hover effects
        await page.mouse.move(0, 0);
        await page.waitForTimeout(100); // Small delay for hover effects to clear

        await page.locator('#time_label').first().waitFor();

        const header = page.locator('#date_selector_canvas');
        await header.screenshot({
            path:
                'src/assets/forecast-images/YHY_OkTofly_header.png',
        });

        const container_temperature = page.locator('#timeslot_container_0');
        await container_temperature.screenshot({
            path:
                'src/assets/forecast-images/YHY_OkTofly_T0.png',
        });

        // const container_precip = page.locator('#timeslot_container_1');
        // await container_precip.screenshot({
        //     path:
        //         'src/assets/forecast-images/YHY_OkTofly_T1.png',
        // });

        // const container_wind = page.locator('#timeslot_container_2');
        // await container_wind.screenshot({
        //     path:
        //         'src/assets/forecast-images/YHY_OkTofly_T2.png',
        // });
    });
    // smith https://oktofly.com/loc/60.004541,-111.823387
    // hay https://oktofly.com/loc/60.004541,-115.779971


    test('YSM drone map', async ({ page }) => {
        // goto the page
        await page.goto('https://nrc.canada.ca/en/drone-tool/flightMap.php');
        await page.waitForLoadState('networkidle');

        //open the map style

        await page.getByRole('button', { name: 'Change map style' }).click();
        await page.waitForTimeout(500);
        // select the sattelite layer:
        await page.getByRole('menuitemradio', { name: 'Satellite' }).click();
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(500);
        await page.getByRole('tab', { name: /Go to Operation Details tab/i }).click();
        await page.waitForTimeout(500);
        await page.check('#MICRO'); // specific for radio/checkbox

        await page.getByRole('tab', { name: /Go to Map Controls tab/i }).click();
        await page.waitForTimeout(500);
        await page.check('#zctl');


        await page.click('a[title="Map Centre"]');
        await page.waitForTimeout(500);
        await page.click('#zoomKbd');
        // 60.00552&lon=-111.88494
        await page.fill('#zoomLatNumeric', '60.0055');
        await page.fill('#zoomLonNumeric', '-111.8849');
        await page.waitForTimeout(500);
        await page.locator('#setZoomKbdButn').click();
        await page.waitForTimeout(500);

        // close the options:
        await page.click('a[title="Map Centre"]');

        // zoom in
        await page.click('button[title="Zoom in"]');
        await page.click('button[title="Zoom in"]');
        // wait for stable
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(500);
        //screencap
        await page.screenshot({
            path: 'src/assets/forecast-images/YSM_NRCAN_DroneMap1.png',
            fullPage: true
        });
        await page.click('button[title="Zoom out"]');
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(500);
        //screencap
        await page.screenshot({
            path: 'src/assets/forecast-images/YSM_NRCAN_DroneMap2.png',
            fullPage: true
        });
        await page.waitForTimeout(500);

        await page.click('a[title="Map Centre"]');
        await page.waitForTimeout(500);
        await page.click('#zoomKbd');
        // lat=60.8234&lon=-115.7629
        await page.fill('#zoomLatNumeric', '60.8234');
        await page.fill('#zoomLonNumeric', '-115.7629');
        await page.waitForTimeout(500);
        await page.locator('#setZoomKbdButn').click();
        await page.waitForTimeout(500);
        await page.click('button[title="Zoom in"]');
        await page.waitForLoadState('networkidle');

        // close the options:
        await page.click('a[title="Map Centre"]');
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(500);
        //screencap
        await page.screenshot({
            path: 'src/assets/forecast-images/YHY_NRCAN_DroneMap1.png',
            fullPage: true
        });
        await page.click('button[title="Zoom out"]');
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(500);
        //screencap
        await page.screenshot({
            path: 'src/assets/forecast-images/YHY_NRCAN_DroneMap2.png',
            fullPage: true
        });
        await page.waitForTimeout(500);
    });

});




