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

/***/ "./src/game_logic.ts":
/*!***************************!*\
  !*** ./src/game_logic.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst index_1 = __webpack_require__(/*! ./index */ \"./src/index.ts\");\nconst math_1 = __webpack_require__(/*! ./math */ \"./src/math.ts\");\nconst levels_1 = __webpack_require__(/*! ./levels */ \"./src/levels.ts\");\nexports.game_loop = () => {\n    setInterval(() => {\n        let state = index_1.get_state();\n        let canvas = levels_1.get_canvas();\n        // console.log(\"game_lopp\");\n        // console.log(\"in game loop\", state.movement);\n        if (state.movement.right === \"still\" && state.movement.up === \"still\")\n            return;\n        if (state.movement.right === \"forward\")\n            index_1.move_player(math_1.from_array([2, 0]));\n        if (state.movement.right === \"backward\")\n            index_1.move_player(math_1.from_array([-2, 0]));\n        if (state.movement.up === \"forward\")\n            index_1.move_player(math_1.from_array([0, -2]));\n        if (state.movement.up === \"backward\")\n            index_1.move_player(math_1.from_array([0, 2]));\n        levels_1.drawCanvas(state.current_level.map, canvas, levels_1.get_origin(canvas), state.player_position);\n    }, 110);\n};\nexports.add_controls = () => {\n    console.log(\"add_controls\");\n    window.onkeydown = (e) => {\n        const state = index_1.get_state();\n        // console.log(state);\n        // console.log(e.key);\n        if ([\"ArrowUp\", \"ArrowDown\", \"ArrowLeft\", \"ArrowRight\"].indexOf(e.key) > -1)\n            e.preventDefault();\n        if (e.key === \"ArrowUp\")\n            index_1.merge_state({ movement: { up: \"forward\", right: \"still\" } });\n        if (e.key === \"ArrowDown\")\n            index_1.merge_state({ movement: { up: \"backward\", right: \"still\" } });\n        if (e.key === \"ArrowLeft\")\n            index_1.merge_state({ movement: { right: \"backward\", up: \"still\" } });\n        if (e.key === \"ArrowRight\")\n            index_1.merge_state({ movement: { right: \"forward\", up: \"still\" } });\n        //  if(e.key)\n    };\n    window.onkeyup = (e) => {\n        if (e.key === \"ArrowUp\")\n            index_1.merge_state({ movement: { up: \"still\", right: \"still\" } });\n        if (e.key === \"ArrowDown\")\n            index_1.merge_state({ movement: { up: \"still\", right: \"still\" } });\n        if (e.key === \"ArrowLeft\")\n            index_1.merge_state({ movement: { right: \"still\", up: \"still\" } });\n        if (e.key === \"ArrowRight\")\n            index_1.merge_state({ movement: { right: \"still\", up: \"still\" } });\n        // keys[e.key] = false;\n    };\n};\n\n\n//# sourceURL=webpack:///./src/game_logic.ts?");

/***/ }),

/***/ "./src/html_controls.ts":
/*!******************************!*\
  !*** ./src/html_controls.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst _1 = __webpack_require__(/*! . */ \"./src/index.ts\");\nconst levels_1 = __webpack_require__(/*! ./levels */ \"./src/levels.ts\");\nfunction add_html_listeners() {\n    const selector = document.querySelector(\"#mapping_selector\");\n    for (const l of levels_1.levels) {\n        const option = document.createElement(\"option\");\n        option.value = l.name;\n        option.innerText = l.name;\n        selector.appendChild(option);\n    }\n    display_info(selector.value);\n    selector.addEventListener(\"change\", (e) => {\n        display_info(selector.value);\n        const new_lvl = levels_1.levels.find((l) => l.name === selector.value);\n        _1.merge_state({ current_level: new_lvl });\n        levels_1.set_up_level(new_lvl);\n    });\n}\nexports.add_html_listeners = add_html_listeners;\nfunction display_info(selection) {\n    console.log(selection);\n    const lvl = levels_1.levels.find((l) => l.name === selection);\n    if (!lvl)\n        throw \"cannot find lvl\";\n    const display = document.getElementById(\"display\");\n    display.innerText = lvl.equation;\n}\n\n\n//# sourceURL=webpack:///./src/html_controls.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n//@ts-ignore\nconst levels_ts_1 = __webpack_require__(/*! ./levels.ts */ \"./src/levels.ts\");\nconst math_1 = __webpack_require__(/*! ./math */ \"./src/math.ts\");\nconst html_controls_1 = __webpack_require__(/*! ./html_controls */ \"./src/html_controls.ts\");\nconst game_logic_1 = __webpack_require__(/*! ./game_logic */ \"./src/game_logic.ts\");\nlet state = {\n    player_position: { x: 0, y: 0 },\n    current_level: levels_ts_1.levels[0],\n    movement: {\n        up: \"still\",\n        right: \"still\",\n    },\n};\nexports.merge_state = (s) => exports.set_state({ ...state, ...s });\nexports.set_state = (s) => {\n    state = s;\n    return state;\n};\nexports.get_state = () => state;\nexports.set_player_position = (pt) => {\n    state.player_position = pt;\n    return state;\n};\nexports.move_player = (pt) => {\n    // console.log(\"move_player\");\n    state.player_position = math_1.add_points(state.player_position, pt);\n    return state;\n};\nconst main = () => {\n    // const lvl1 = levels[0];\n    // console.log({ lvl1 });\n    console.log(math_1.divide);\n    console.log(math_1.multiply);\n    levels_ts_1.set_up_level(state.current_level);\n    html_controls_1.add_html_listeners();\n    game_logic_1.add_controls();\n    game_logic_1.game_loop();\n};\nmain();\n//stuff\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/levels.ts":
/*!***********************!*\
  !*** ./src/levels.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n//@ts-ignore\nconst _1 = __webpack_require__(/*! . */ \"./src/index.ts\");\nconst math_1 = __webpack_require__(/*! ./math */ \"./src/math.ts\");\n//@ts-ignore\nconst math_ts_1 = __webpack_require__(/*! ./math.ts */ \"./src/math.ts\");\nconst utils_1 = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\nconst identity_map = (pt) => math_ts_1.from_array([pt.x * 4, pt.y * 4]);\nconst square_mapping = ({ x, y }) => {\n    return { x: (x ** 2 - y ** 2) / 20, y: (2 * x * y) / 20 };\n};\nconst inverse_mapping = ({ x, y }) => {\n    let d = x ** 2 + y ** 2;\n    return math_1.scale_point(math_ts_1.from_array([x / d, -y / d]), 10000);\n};\nconst test_mapping = ({ x, y }) => math_ts_1.from_array([x + y, y]);\nconst cubic_mapping = (pt) => math_1.scale_point(math_1.divide(math_ts_1.add_points(pt, math_ts_1.from_array([1, 0])), math_ts_1.add_points(pt, math_ts_1.from_array([-1, 0]))), 100);\nconst sqrt_mapping = (pt) => {\n    let { r, theta } = math_1.rectangular_to_polar(pt);\n    return math_ts_1.add_points(math_1.scale_point(math_1.polar_to_rectangular({\n        r: Math.sqrt(r),\n        theta: theta / 2,\n    }), 50), math_ts_1.from_array([-500, 0]));\n};\nconst rotational_mapping = ({ x, y }) => math_1.scale_point(math_ts_1.from_array([y, -x]), 20);\nconst d_mapping = (z) => math_1.scale_point(math_1.multiply(math_ts_1.from_array([0, 1]), math_1.divide(math_ts_1.add_points(math_ts_1.from_array([0, 1]), math_1.multiply(z, math_ts_1.from_array([-1, 0]))), math_ts_1.add_points(math_ts_1.from_array([0, 1]), z))), 200);\nexports.levels = [\n    {\n        name: \"square mapping\",\n        equation: \"z→z^2\",\n        map: square_mapping,\n    },\n    {\n        name: \"identity mapping\",\n        equation: \"z→z\",\n        map: identity_map,\n    },\n    {\n        name: \"inverse mapping\",\n        equation: \"z→1/z\",\n        map: inverse_mapping,\n        starting_position: { x: 0, y: -49 },\n    },\n    {\n        name: \"sqrt mapping\",\n        equation: \"z→sqrt(z)\",\n        map: sqrt_mapping,\n    },\n    {\n        name: \"rotational mappng\",\n        equation: \"z→iz\",\n        map: rotational_mapping,\n    },\n    {\n        name: \"idk what this is called mappng\",\n        equation: \"z→i(i-z)/(i+z)\",\n        map: d_mapping,\n    },\n];\nconst make_preimage = (bound, step) => {\n    const len = Math.floor(bound / step);\n    const x_range = utils_1.step_range(-bound, bound, step);\n    const y_range = utils_1.step_range(-bound, bound, step);\n    if (x_range.length === 0 || y_range.length === 0)\n        throw \"the range is empty and thiss shouldn't happen\";\n    return new Set(\n    //@ts-ignore\n    utils_1.cartesian_product_map(x_range, y_range, (x, y) => math_ts_1.from_array([x, y])));\n};\nexports.drawCanvas = (map, canvas, origin, player_position) => {\n    let ctx = canvas.getContext(\"2d\");\n    if (!ctx)\n        throw \"this error shouldn't happen\";\n    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);\n    const pre_image = make_preimage(200, 4);\n    const shifted_map = (pt) => math_ts_1.add_points(origin, map(pt));\n    const image = utils_1.set_map(pre_image, shifted_map);\n    // console.log(image);\n    // console.log([...image]);\n    // const image_shifted = set_map(image, (pt) =>\n    //   from_array([pt.x + origin.x, pt.y + origin.y])\n    // );\n    // console.log([...image]);\n    image.forEach((pt) => {\n        ctx.fillRect(pt.x, pt.y, 2, 2);\n    });\n    const mapped_player = math_ts_1.add_points(map(player_position), origin);\n    // console.log(\"player position\", player_position);\n    // console.log(\"mapped player\", mapped_player);\n    ctx.fillStyle = \"#FF0000\";\n    ctx.fillRect(mapped_player.x, mapped_player.y, 10, 10);\n    ctx.fillStyle = \"#000000\";\n    return canvas;\n};\nexports.set_up_level = (lvl) => {\n    const container = document.getElementById(\"container\");\n    if (!container)\n        throw \"cannot find container\";\n    container.innerHTML = \"\";\n    let canvas = document.createElement(\"CANVAS\");\n    const simHeight = window.innerHeight;\n    const simWidth = window.innerWidth;\n    let ctx = canvas.getContext(\"2d\");\n    ctx.canvas.height = simHeight;\n    ctx.canvas.width = simWidth;\n    const origin = math_ts_1.from_array([simWidth / 2, simHeight / 2]);\n    const player_pos = lvl.starting_position || math_ts_1.from_array([0, 0]);\n    let drawnCanvas = exports.drawCanvas(lvl.map, canvas, origin, player_pos);\n    _1.set_player_position(player_pos);\n    // canvas.width = 200;\n    // canvas.height = 200;\n    // SimCanvas.clearRect(0, 0, SimWidth, SimHeight);\n    // ControlCanvas.clearRect(0, 0, SimWidth, SimHeight);\n    container.appendChild(drawnCanvas);\n};\nexports.get_canvas = () => {\n    return document.querySelector(\"#container > canvas\");\n};\nexports.get_origin = (canvas) => {\n    const ctx = canvas.getContext(\"2d\");\n    return math_ts_1.from_array([ctx.canvas.width / 2, ctx.canvas.height / 2]);\n};\n\n\n//# sourceURL=webpack:///./src/levels.ts?");

/***/ }),

/***/ "./src/math.ts":
/*!*********************!*\
  !*** ./src/math.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.to_array = (pt) => [pt.x, pt.y];\nexports.from_array = ([x, y]) => {\n    return {\n        x,\n        y,\n    };\n};\nexports.add_points = (pt1, pt2) => exports.from_array([pt1.x + pt2.x, pt1.y + pt2.y]);\nexports.scale_point = (pt, scale) => exports.from_array([pt.x * scale, pt.y * scale]);\nexports.multiply = (pt1, pt2) => exports.from_array([pt1.x * pt2.x - pt1.y * pt2.y, pt1.x * pt2.y + pt1.y * pt2.x]);\nexports.conjugate = (pt) => exports.from_array([pt.x, -pt.y]);\nexports.divide = (pt1, pt2) => exports.scale_point(exports.multiply(pt1, exports.conjugate(pt2)), 1 / (pt2.x ** 2 + pt2.y ** 2));\nexports.rectangular_to_polar = (pt) => {\n    return {\n        r: Math.sqrt(pt.x ** 2 + pt.y ** 2),\n        theta: Math.atan(pt.y / pt.x),\n    };\n};\nexports.polar_to_rectangular = (pol) => exports.from_array([pol.r * Math.cos(pol.theta), pol.r * Math.sin(pol.theta)]);\nexports.show = (p) => p.y > 0 ? `${p.x}+${p.y}i` : `${p.x}${p.y}i`;\nexports.showp = (p) => console.log(exports.show(p));\n\n\n//# sourceURL=webpack:///./src/math.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.interval = (n) => [...Array(Math.ceil(n)).keys()];\nexports.range = (lower_bound, upper_bound) => exports.interval(upper_bound - lower_bound).map((x) => x + lower_bound);\nexports.step_range = (lower_bound, upper_bound, step) => exports.interval((upper_bound - lower_bound) / step).map((x) => x * step + lower_bound);\nfunction cartesian_product_map(a, b, f) {\n    return a.flatMap((v) => b.map((w) => f(v, w)));\n}\nexports.cartesian_product_map = cartesian_product_map;\nfunction set_map(s, f) {\n    return new Set([...s].map(f));\n}\nexports.set_map = set_map;\n\n\n//# sourceURL=webpack:///./src/utils.ts?");

/***/ })

/******/ });