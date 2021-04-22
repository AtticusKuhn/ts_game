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
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n//@ts-ignore\nconst math_ts_1 = __webpack_require__(/*! ./math.ts */ \"./src/math.ts\");\nconst utils_1 = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\nconst identity_map = (pt) => pt;\nconst square_mapping = ({ x, y }) => {\n    return { x: (x ** 2 - y ** 2) / 20, y: (2 * x * y) / 20 };\n};\nconst inverse_mapping = ({ x, y }) => {\n    let d = x ** 2 + y ** 2;\n    return math_ts_1.fromArray([x / d, -y / d]);\n};\nexports.levels = [\n    {\n        map: square_mapping,\n    },\n];\nconst make_preimage = (bound, step) => {\n    const len = Math.floor(bound / step);\n    const x_range = utils_1.step_range(-bound, bound, step);\n    const y_range = utils_1.step_range(-bound, bound, step);\n    if (x_range.length === 0 || y_range.length === 0)\n        throw \"the range is empty and thiss shouldn't happen\";\n    return new Set(\n    //@ts-ignore\n    utils_1.cartesian_product_map(x_range, y_range, (x, y) => math_ts_1.fromArray([x, y])));\n};\nconst drawCanvas = (map, canvas, origin, player_position) => {\n    let ctx = canvas.getContext(\"2d\");\n    if (!ctx)\n        throw \"this error shouldn't happen\";\n    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);\n    const pre_image = make_preimage(100, 3);\n    const shifted_map = (pt) => math_ts_1.addPoints(origin, map(pt));\n    const image = utils_1.set_map(pre_image, shifted_map);\n    console.log([...image]);\n    // const image_shifted = set_map(image, (pt) =>\n    //   fromArray([pt.x + origin.x, pt.y + origin.y])\n    // );\n    // console.log([...image]);\n    image.forEach((pt) => {\n        ctx.fillRect(pt.x, pt.y, 2, 2);\n    });\n    ctx.fillRect(player_position.x, player_position.y, 10, 10);\n    return canvas;\n};\nexports.set_up_level = (lvl) => {\n    const container = document.getElementById(\"container\");\n    if (!container)\n        throw \"cannot find container\";\n    container.innerHTML = \"\";\n    let canvas = document.createElement(\"CANVAS\");\n    const simHeight = window.innerHeight;\n    const simWidth = window.innerWidth;\n    let ctx = canvas.getContext(\"2d\");\n    ctx.canvas.height = simHeight;\n    ctx.canvas.width = simWidth;\n    const origin = math_ts_1.fromArray([simWidth / 2, simHeight / 2]);\n    let drawnCanvas = drawCanvas(lvl.map, canvas, origin, origin);\n    // canvas.width = 200;\n    // canvas.height = 200;\n    // SimCanvas.clearRect(0, 0, SimWidth, SimHeight);\n    // ControlCanvas.clearRect(0, 0, SimWidth, SimHeight);\n    container.appendChild(drawnCanvas);\n};\n// export const add_controls = (canvas: HTMLCanvasElement): HTMLCanvasElement => {\n//   canvas.addEventListener(\"\");\n// };\n\n\n//# sourceURL=webpack:///./src/levels.ts?");

/***/ }),

/***/ "./src/math.ts":
/*!*********************!*\
  !*** ./src/math.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.toArray = (pt) => [pt.x, pt.y];\nexports.fromArray = ([x, y]) => {\n    return {\n        x,\n        y,\n    };\n};\nexports.addPoints = (pt1, pt2) => exports.fromArray([pt1.x + pt2.x, pt1.y + pt2.y]);\n\n\n//# sourceURL=webpack:///./src/math.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.interval = (n) => [...Array(Math.floor(n)).keys()];\nexports.range = (lower_bound, upper_bound) => exports.interval(upper_bound - lower_bound).map((x) => x + lower_bound);\nexports.step_range = (lower_bound, upper_bound, step) => exports.interval((upper_bound - lower_bound) / step).map((x) => x * step + lower_bound);\nfunction cartesian_product_map(a, b, f) {\n    // return [].flatMap;\n    return a.flatMap((v) => b.map((w) => f(v, w)));\n}\nexports.cartesian_product_map = cartesian_product_map;\nfunction set_map(s, f) {\n    return new Set([...s].map(f));\n}\nexports.set_map = set_map;\n\n\n//# sourceURL=webpack:///./src/utils.ts?");

/***/ })

/******/ });