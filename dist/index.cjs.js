/*!
 * playwright-extra v4.2.0 by berstend
 * https://github.com/berstend/puppeteer-extra/tree/master/packages/playwright-extra
 * @license MIT
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var automationExtra = require('automation-extra');
var playwrightCore = require('playwright-core');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

var playwrightCore__namespace = /*#__PURE__*/_interopNamespace(playwrightCore);

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
const addExtra = (launcher) => automationExtra.addExtraPlaywright(launcher);
const makeProduct = (name) => {
    const launcher = new automationExtra.PlaywrightExtra(name); // So we know what to require later
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
const errors = playwrightCore__namespace.errors;
/** Selectors can be used to install custom selector engines. */
const selectors = playwrightCore__namespace.selectors;
/** Returns a list of devices to be used with browser.newContext([options]) or browser.newPage([options]). */
const devices = playwrightCore__namespace.devices;
var index = {
    addExtra,
    chromium,
    firefox,
    webkit,
    errors,
    selectors,
    devices
};

exports.addExtra = addExtra;
exports.chromium = chromium;
exports.default = index;
exports.devices = devices;
exports.errors = errors;
exports.firefox = firefox;
exports.selectors = selectors;
exports.webkit = webkit;
Object.keys(automationExtra).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () {
      return automationExtra[k];
    }
  });
});


  module.exports = exports.default || {}
  Object.entries(exports).forEach(([key, value]) => { module.exports[key] = value })
//# sourceMappingURL=index.cjs.js.map
