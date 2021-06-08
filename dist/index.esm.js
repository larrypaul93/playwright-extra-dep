/*!
 * playwright-extra v4.2.0 by berstend
 * https://github.com/berstend/puppeteer-extra/tree/master/packages/playwright-extra
 * @license MIT
 */
import { addExtraPlaywright, PlaywrightExtra } from 'automation-extra';
export * from 'automation-extra';
import * as playwrightCore from 'playwright-core';

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
const addExtra = (launcher) => addExtraPlaywright(launcher);
const makeProduct = (name) => {
    const launcher = new PlaywrightExtra(name); // So we know what to require later
    return launcher;
};
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
const chromium = makeProduct('chromium');
/** This object can be used to launch or connect to Firefox, returning instances of FirefoxBrowser. */
const firefox = makeProduct('firefox');
/** This object can be used to launch or connect to WebKit, returning instances of WebKitBrowser. */
const webkit = makeProduct('webkit');
/** Returns playwright specific errors */
const errors = playwrightCore.errors;
/** Selectors can be used to install custom selector engines. */
const selectors = playwrightCore.selectors;
/** Returns a list of devices to be used with browser.newContext([options]) or browser.newPage([options]). */
const devices = playwrightCore.devices;
var index = {
    addExtra,
    chromium,
    firefox,
    webkit,
    errors,
    selectors,
    devices
};

export default index;
export { addExtra, chromium, devices, errors, firefox, selectors, webkit };
//# sourceMappingURL=index.esm.js.map
