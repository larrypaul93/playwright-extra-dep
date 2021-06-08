"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.devices = exports.selectors = exports.errors = exports.webkit = exports.firefox = exports.chromium = exports.addExtra = void 0;
const automation_extra_1 = require("automation-extra");
const playwrightCore = require("playwright-core");
__exportStar(require("automation-extra"), exports);
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
const addExtra = (launcher) => automation_extra_1.addExtraPlaywright(launcher);
exports.addExtra = addExtra;
const makeProduct = (name) => {
    const launcher = new automation_extra_1.PlaywrightExtra(name); // So we know what to require later
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
exports.chromium = makeProduct('chromium');
/** This object can be used to launch or connect to Firefox, returning instances of FirefoxBrowser. */
exports.firefox = makeProduct('firefox');
/** This object can be used to launch or connect to WebKit, returning instances of WebKitBrowser. */
exports.webkit = makeProduct('webkit');
/** Returns playwright specific errors */
exports.errors = playwrightCore.errors;
/** Selectors can be used to install custom selector engines. */
exports.selectors = playwrightCore.selectors;
/** Returns a list of devices to be used with browser.newContext([options]) or browser.newPage([options]). */
exports.devices = playwrightCore.devices;
exports.default = {
    addExtra: exports.addExtra,
    chromium: exports.chromium,
    firefox: exports.firefox,
    webkit: exports.webkit,
    errors: exports.errors,
    selectors: exports.selectors,
    devices: exports.devices
};
//# sourceMappingURL=index.js.map