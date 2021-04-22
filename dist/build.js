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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n//@ts-ignore\nconst levels_ts_1 = __webpack_require__(/*! ./levels.ts */ \"./src/levels.ts\");\nconst main = () => {\n    const lvl1 = levels_ts_1.levels[0];\n    console.log({ lvl1 });\n    levels_ts_1.set_up_level(lvl1);\n};\nmain();\n//stuff\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/levels.ts":
/*!***********************!*\
  !*** ./src/levels.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n//@ts-ignore\nconst math_ts_1 = __webpack_require__(/*! ./math.ts */ \"./src/math.ts\");\nconst identity_map = (pt) => pt;\nconst square_mapping = ({ x, y }) => {\n    return { x: x ** 2 - y ** 2, y: 2 * x * y };\n};\nexports.levels = [\n    {\n        map: square_mapping,\n    },\n];\nconst drawCanvas = (map, canvas) => {\n    let ctx = canvas.getContext(\"2d\");\n    if (!ctx)\n        throw \"this error shouldn't happen\";\n    for (let x = 0; x < 1000; x += 10) {\n        for (let y = 0; y < 1000; y += 10) {\n            const [x2, y2] = math_ts_1.toArray(map({ x, y }));\n            console.log({ x2, y2 });\n            ctx.fillRect(x2, y2, 1, 1);\n            console.log(\"drawing\");\n        }\n    }\n    return canvas;\n};\nexports.set_up_level = (lvl) => {\n    const container = document.getElementById(\"container\");\n    if (!container)\n        throw \"cannot find container\";\n    container.innerHTML = \"\";\n    let canvas = drawCanvas(lvl.map, document.createElement(\"CANVAS\"));\n    let ctx = canvas.getContext(\"2d\");\n    // canvas.width = 200;\n    // canvas.height = 200;\n    const simHeight = window.innerHeight * 2;\n    const simWidth = window.innerWidth * 2;\n    // SimCanvas.clearRect(0, 0, SimWidth, SimHeight);\n    // ControlCanvas.clearRect(0, 0, SimWidth, SimHeight);\n    // ctx.canvas.height = simHeight;\n    // ctx.canvas.width = simWidth;\n    container.appendChild(canvas);\n};\n\n\n//# sourceURL=webpack:///./src/levels.ts?");

/***/ }),

/***/ "./src/math.ts":
/*!*********************!*\
  !*** ./src/math.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.toArray = (pt) => [pt.x, pt.y];\n\n\n//# sourceURL=webpack:///./src/math.ts?");

/***/ })

/******/ });