import type { PlaywrightBrowserLauncher } from 'automation-extra';
import { PlaywrightExtra } from 'automation-extra';
import * as playwrightCore from 'playwright-core';
export * from 'automation-extra';
/**
 * Augment the provided Playwright browser launcher with plugin functionality.
 *
 * Using `addExtra` will always create a fresh PlaywrightExtra instance.
 *
 * @example
 * import playwright from 'playwright'
 * import { addExtra } from 'playwright-extra'
 *
 * const chromium = addExtra(playwright.chromium)
 * chromium.use(plugin)
 *
 * @param launcher - Playwright (or compatible) browser launcher
 */
export declare const addExtra: (launcher: PlaywrightBrowserLauncher) => PlaywrightExtra;
/**
 * This object can be used to launch or connect to Chromium, returning instances of ChromiumBrowser.
 *
 * The **default exports** will behave exactly the same as the regular playwright
 * (just with extra plugin functionality) and can be used as a drop-in replacement.
 *
 * Behind the scenes it will try to require either `playwright`
 * or `playwright-core` from the installed dependencies.
 *
 * Please note that due to imports being cached this will result in a single
 * PlaywrightExtra instance, even when used in different files. If you need multiple
 * instances (e.g. different plugins) please use `addExtra`.
 *
 * @example
 * // javascript import
 * const { chromium } = require('playwright-extra')
 *
 * // typescript/es6 module import
 * import { chromium } from 'playwright-extra'
 *
 * // Add plugins
 * chromium.use(...)
 */
export declare const chromium: PlaywrightExtra;
/** This object can be used to launch or connect to Firefox, returning instances of FirefoxBrowser. */
export declare const firefox: PlaywrightExtra;
/** This object can be used to launch or connect to WebKit, returning instances of WebKitBrowser. */
export declare const webkit: PlaywrightExtra;
/** Returns playwright specific errors */
export declare const errors: typeof playwrightCore.errors;
/** Selectors can be used to install custom selector engines. */
export declare const selectors: playwrightCore.Selectors;
/** Returns a list of devices to be used with browser.newContext([options]) or browser.newPage([options]). */
export declare const devices: {
    [key: string]: {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Blackberry PlayBook": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Blackberry PlayBook landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "BlackBerry Z30": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "BlackBerry Z30 landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Galaxy Note 3": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Galaxy Note 3 landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Galaxy Note II": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Galaxy Note II landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Galaxy S III": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Galaxy S III landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Galaxy S5": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Galaxy S5 landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Galaxy S8": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Galaxy S8 landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Galaxy S9+": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Galaxy S9+ landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Galaxy Tab S4": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Galaxy Tab S4 landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPad (gen 6)": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPad (gen 6) landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPad (gen 7)": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPad (gen 7) landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPad Mini": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPad Mini landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPad Pro 11": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPad Pro 11 landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPhone 6": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPhone 6 landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPhone 6 Plus": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPhone 6 Plus landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPhone 7": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPhone 7 landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPhone 7 Plus": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPhone 7 Plus landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPhone 8": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPhone 8 landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPhone 8 Plus": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPhone 8 Plus landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPhone SE": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPhone SE landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPhone X": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPhone X landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPhone XR": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPhone XR landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPhone 11": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPhone 11 landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPhone 11 Pro": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPhone 11 Pro landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPhone 11 Pro Max": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPhone 11 Pro Max landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPhone 12": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPhone 12 landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPhone 12 Pro": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPhone 12 Pro landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPhone 12 Pro Max": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "iPhone 12 Pro Max landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "JioPhone 2": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "JioPhone 2 landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Kindle Fire HDX": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Kindle Fire HDX landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "LG Optimus L70": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "LG Optimus L70 landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Microsoft Lumia 550": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Microsoft Lumia 550 landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Microsoft Lumia 950": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Microsoft Lumia 950 landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Nexus 10": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Nexus 10 landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Nexus 4": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Nexus 4 landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Nexus 5": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Nexus 5 landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Nexus 5X": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Nexus 5X landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Nexus 6": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Nexus 6 landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Nexus 6P": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Nexus 6P landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Nexus 7": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Nexus 7 landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Nokia Lumia 520": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Nokia Lumia 520 landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Nokia N9": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Nokia N9 landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Pixel 2": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Pixel 2 landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Pixel 2 XL": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Pixel 2 XL landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Pixel 3": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Pixel 3 landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Pixel 4": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Pixel 4 landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Pixel 4a (5G)": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Pixel 4a (5G) landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Pixel 5": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
    "Pixel 5 landscape": {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    };
} & {
    viewport: playwrightCore.ViewportSize;
    userAgent: string;
    deviceScaleFactor: number;
    isMobile: boolean;
    hasTouch: boolean;
    defaultBrowserType: "chromium" | "firefox" | "webkit";
}[];
declare const _default: {
    addExtra: (launcher: PlaywrightBrowserLauncher) => PlaywrightExtra;
    chromium: PlaywrightExtra;
    firefox: PlaywrightExtra;
    webkit: PlaywrightExtra;
    errors: typeof playwrightCore.errors;
    selectors: playwrightCore.Selectors;
    devices: {
        [key: string]: {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Blackberry PlayBook": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Blackberry PlayBook landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "BlackBerry Z30": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "BlackBerry Z30 landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Galaxy Note 3": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Galaxy Note 3 landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Galaxy Note II": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Galaxy Note II landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Galaxy S III": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Galaxy S III landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Galaxy S5": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Galaxy S5 landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Galaxy S8": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Galaxy S8 landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Galaxy S9+": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Galaxy S9+ landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Galaxy Tab S4": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Galaxy Tab S4 landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPad (gen 6)": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPad (gen 6) landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPad (gen 7)": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPad (gen 7) landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPad Mini": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPad Mini landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPad Pro 11": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPad Pro 11 landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPhone 6": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPhone 6 landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPhone 6 Plus": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPhone 6 Plus landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPhone 7": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPhone 7 landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPhone 7 Plus": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPhone 7 Plus landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPhone 8": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPhone 8 landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPhone 8 Plus": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPhone 8 Plus landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPhone SE": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPhone SE landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPhone X": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPhone X landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPhone XR": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPhone XR landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPhone 11": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPhone 11 landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPhone 11 Pro": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPhone 11 Pro landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPhone 11 Pro Max": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPhone 11 Pro Max landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPhone 12": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPhone 12 landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPhone 12 Pro": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPhone 12 Pro landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPhone 12 Pro Max": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "iPhone 12 Pro Max landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "JioPhone 2": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "JioPhone 2 landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Kindle Fire HDX": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Kindle Fire HDX landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "LG Optimus L70": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "LG Optimus L70 landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Microsoft Lumia 550": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Microsoft Lumia 550 landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Microsoft Lumia 950": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Microsoft Lumia 950 landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Nexus 10": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Nexus 10 landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Nexus 4": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Nexus 4 landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Nexus 5": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Nexus 5 landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Nexus 5X": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Nexus 5X landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Nexus 6": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Nexus 6 landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Nexus 6P": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Nexus 6P landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Nexus 7": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Nexus 7 landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Nokia Lumia 520": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Nokia Lumia 520 landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Nokia N9": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Nokia N9 landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Pixel 2": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Pixel 2 landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Pixel 2 XL": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Pixel 2 XL landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Pixel 3": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Pixel 3 landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Pixel 4": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Pixel 4 landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Pixel 4a (5G)": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Pixel 4a (5G) landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Pixel 5": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
        "Pixel 5 landscape": {
            viewport: playwrightCore.ViewportSize;
            userAgent: string;
            deviceScaleFactor: number;
            isMobile: boolean;
            hasTouch: boolean;
            defaultBrowserType: "chromium" | "firefox" | "webkit";
        };
    } & {
        viewport: playwrightCore.ViewportSize;
        userAgent: string;
        deviceScaleFactor: number;
        isMobile: boolean;
        hasTouch: boolean;
        defaultBrowserType: "chromium" | "firefox" | "webkit";
    }[];
};
export default _default;
