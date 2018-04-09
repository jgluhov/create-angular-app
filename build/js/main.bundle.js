/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/test.shim.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src sync recursive \\.spec\\.ts$":
/*!******************************!*\
  !*** ./src sync \.spec\.ts$ ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./home/home.component.spec.ts\": \"./src/home/home.component.spec.ts\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\tvar module = __webpack_require__(id);\n\treturn module;\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error('Cannot find module \"' + req + '\".');\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src sync recursive \\\\.spec\\\\.ts$\";\n\n//# sourceURL=webpack:///./src_sync_\\.spec\\.ts$?");

/***/ }),

/***/ "./src/home/home.component.spec.ts":
/*!*****************************************!*\
  !*** ./src/home/home.component.spec.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\ndescribe('HomeComponent: Spec', function () {\n    it('should be a canary test', function () {\n        expect(true).toBeTruthy();\n    });\n});\n\n\n//# sourceURL=webpack:///./src/home/home.component.spec.ts?");

/***/ }),

/***/ "./src/test.shim.ts":
/*!**************************!*\
  !*** ./src/test.shim.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// Error.stackTraceLimit = Infinity;\n// require('core-js/es6');\n// require('core-js/es7/reflect');\n// require('zone.js/dist/zone');\n// require('zone.js/dist/long-stack-trace-zone');\n// require('zone.js/dist/proxy');\n// require('zone.js/dist/sync-test');\n// require('zone.js/dist/jasmine-patch');\n// require('zone.js/dist/async-test');\n// require('zone.js/dist/fake-async-test');\nvar appContext = __webpack_require__(\"./src sync recursive \\\\.spec\\\\.ts$\");\nconsole.log('HELLLLLO', appContext.keys());\nappContext.keys().forEach(appContext);\n// const testing = require('@angular/core/testing');\n// const browser = require('@angular/platform-browser-dynamic/testing');\n// testing.TestBed.initTestEnvironment(\n//     browser.BrowserDynamicTestingModule, \n//     browser.platformBrowserDynamicTesting()\n// );\n\n\n//# sourceURL=webpack:///./src/test.shim.ts?");

/***/ })

/******/ });