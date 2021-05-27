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

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst config = {\n    colors: {\n        red: \"#FF0000\",\n        black: \"#000000\",\n    },\n    game: {\n        update_speed: 110,\n        dots_per_level: 200,\n        dot_spacing: 4,\n    },\n    player: {\n        width: 10,\n        height: 10,\n        speed: 2,\n    },\n    dot: {\n        width: 2,\n        height: 2,\n    },\n};\nexports.default = config;\n\n\n//# sourceURL=webpack:///./src/config.ts?");

/***/ }),

/***/ "./src/game_logic.ts":
/*!***************************!*\
  !*** ./src/game_logic.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst config_1 = __importDefault(__webpack_require__(/*! ./config */ \"./src/config.ts\"));\nconst index_1 = __webpack_require__(/*! ./index */ \"./src/index.ts\");\nconst levels_1 = __webpack_require__(/*! ./levels */ \"./src/levels.ts\");\nconst math_1 = __webpack_require__(/*! ./math */ \"./src/math.ts\");\nconst make_movement = (movement) => {\n    let x = 0;\n    let y = 0;\n    const { up, right } = movement;\n    if (up === \"backward\")\n        x -= 1;\n    if (up === \"forward\")\n        x += 1;\n    if (right === \"backward\")\n        x -= 1;\n    if (up === \"forward\")\n        x += 1;\n    return { x, y };\n};\nconst key_to_direction = (key) => {\n    switch (key) {\n        case \"ArrowUp\":\n            return { right: \"still\", up: \"forward\" };\n        case \"ArrowDown\":\n            return { right: \"still\", up: \"backward\" };\n        case \"ArrowLeft\":\n            return { right: \"backward\", up: \"still\" };\n        case \"ArrowRight\":\n            return { right: \"forward\", up: \"still\" };\n        default:\n            return { right: \"still\", up: \"still\" };\n    }\n};\nexports.game_loop = () => {\n    setInterval(() => {\n        let state = index_1.get_state();\n        let canvas = levels_1.get_canvas();\n        index_1.move_player(math_1.scale_point(make_movement(state.movement), config_1.default.player.speed));\n        levels_1.draw_level_on_canvas(state.current_level.map, canvas, levels_1.get_origin(canvas.getContext(\"2d\")), state.player_position);\n    }, config_1.default.game.update_speed);\n};\nexports.add_controls = () => {\n    console.log(\"add_controls\");\n    window.onkeydown = (e) => {\n        if (new Set([\"ArrowUp\", \"ArrowDown\", \"ArrowLeft\", \"ArrowRight\"]).has(e.key))\n            e.preventDefault();\n        index_1.merge_state({ movement: key_to_direction(e.key) });\n    };\n    window.onkeyup = (_e) => index_1.merge_state({ movement: { right: \"still\", up: \"still\" } });\n};\n\n\n//# sourceURL=webpack:///./src/game_logic.ts?");

/***/ }),

/***/ "./src/html_controls.ts":
/*!******************************!*\
  !*** ./src/html_controls.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst _1 = __webpack_require__(/*! . */ \"./src/index.ts\");\nconst levels_1 = __webpack_require__(/*! ./levels */ \"./src/levels.ts\");\nfunction appendLevels(lvls, selector) {\n    for (const l of lvls) {\n        const option = document.createElement(\"option\");\n        option.value = l.name;\n        option.innerText = l.name;\n        selector.appendChild(option);\n    }\n    return selector;\n}\nfunction add_html_listeners() {\n    const selector = appendLevels(levels_1.levels, document.querySelector(\"#mapping_selector\"));\n    display_info(selector.value);\n    selector.addEventListener(\"change\", (_e) => {\n        display_info(selector.value);\n        const new_lvl = levels_1.levels.find((l) => l.name === selector.value);\n        if (!new_lvl)\n            return;\n        _1.merge_state({ current_level: new_lvl });\n        levels_1.set_up_level(new_lvl);\n    });\n}\nexports.add_html_listeners = add_html_listeners;\nfunction display_info(selection) {\n    console.log(selection);\n    const lvl = levels_1.levels.find((l) => l.name === selection);\n    if (!lvl)\n        throw \"cannot find lvl\";\n    const display = document.getElementById(\"display\");\n    display.innerText = lvl.equation;\n}\n\n\n//# sourceURL=webpack:///./src/html_controls.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst game_logic_1 = __webpack_require__(/*! ./game_logic */ \"./src/game_logic.ts\");\nconst html_controls_1 = __webpack_require__(/*! ./html_controls */ \"./src/html_controls.ts\");\nconst levels_1 = __webpack_require__(/*! ./levels */ \"./src/levels.ts\");\nconst math_1 = __webpack_require__(/*! ./math */ \"./src/math.ts\");\nlet state = {\n    player_position: { x: 0, y: 0 },\n    current_level: levels_1.levels[0],\n    movement: {\n        up: \"still\",\n        right: \"still\",\n    },\n};\nexports.merge_state = (s) => exports.set_state({ ...state, ...s });\nexports.set_state = (s) => {\n    state = s;\n    return state;\n};\nexports.get_state = () => state;\nexports.set_player_position = (pt) => {\n    state.player_position = pt;\n    return state;\n};\nexports.move_player = (pt) => {\n    state.player_position = math_1.add_points(state.player_position, pt);\n    return state;\n};\nconst main = () => {\n    levels_1.set_up_level(state.current_level);\n    html_controls_1.add_html_listeners();\n    game_logic_1.add_controls();\n    game_logic_1.game_loop();\n};\nmain();\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/levels.ts":
/*!***********************!*\
  !*** ./src/levels.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst _1 = __webpack_require__(/*! . */ \"./src/index.ts\");\nconst config_1 = __importDefault(__webpack_require__(/*! ./config */ \"./src/config.ts\"));\nconst math_1 = __webpack_require__(/*! ./math */ \"./src/math.ts\");\nconst utils_1 = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\nconst identity_map = (pt) => math_1.from_array([pt.x * 4, pt.y * 4]);\nconst square_mapping = ({ x, y }) => {\n    return { x: (x ** 2 - y ** 2) / 20, y: (2 * x * y) / 20 };\n};\nconst inverse_mapping = ({ x, y }) => {\n    let d = x ** 2 + y ** 2;\n    return math_1.scale_point(math_1.from_array([x / d, -y / d]), 10000);\n};\nconst sqrt_mapping = (pt) => math_1.add_points(math_1.scale_point(math_1.exponentiaite_point(pt, 0.5), 50), math_1.from_array([-500, 0]));\nconst rotational_mapping = ({ x, y }) => math_1.scale_point(math_1.from_array([y, -x]), 20);\nconst d_mapping = (z) => math_1.scale_point(math_1.divide(math_1.add_points(math_1.from_array([0, 1]), math_1.multiply(z, math_1.from_array([-1, 0]))), math_1.add_points(math_1.from_array([0, 1]), z)), 200);\nexports.levels = [\n    {\n        name: \"square mapping\",\n        equation: \"z→z^2\",\n        map: square_mapping,\n    },\n    {\n        name: \"identity mapping\",\n        equation: \"z→z\",\n        map: identity_map,\n    },\n    {\n        name: \"inverse mapping\",\n        equation: \"z→1/z\",\n        map: inverse_mapping,\n        starting_position: { x: 0, y: -49 },\n    },\n    {\n        name: \"sqrt mapping\",\n        equation: \"z→sqrt(z)\",\n        map: sqrt_mapping,\n    },\n    {\n        name: \"rotational mappng\",\n        equation: \"z→iz\",\n        map: rotational_mapping,\n    },\n    {\n        name: \"idk what this is called mappng\",\n        equation: \"z→i(i-z)/(i+z)\",\n        map: d_mapping,\n    },\n];\nconst make_preimage = (bound, step) => {\n    const range = utils_1.step_range(-bound, bound, step);\n    return new Set(utils_1.cartesian_product_map(range, range, (x, y) => math_1.from_array([x, y])));\n};\nexports.draw_level_on_canvas = (map, canvas, origin, player_position) => {\n    const ctx = canvas.getContext(\"2d\");\n    if (!ctx)\n        return canvas;\n    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);\n    const pre_image = make_preimage(config_1.default.game.dots_per_level, config_1.default.game.dot_spacing);\n    const shifted_map = (pt) => math_1.add_points(origin, map(pt));\n    const image = utils_1.set_map(pre_image, shifted_map);\n    image.forEach((pt) => ctx.fillRect(pt.x, pt.y, config_1.default.dot.height, config_1.default.dot.width));\n    const mapped_player = math_1.add_points(map(player_position), origin);\n    ctx.fillStyle = config_1.default.colors.red;\n    ctx.fillRect(mapped_player.x, mapped_player.y, config_1.default.player.height, config_1.default.player.width);\n    ctx.fillStyle = config_1.default.colors.black;\n    return canvas;\n};\nexports.set_up_level = (lvl) => {\n    let container = document.getElementById(\"container\");\n    container = exports.set_up_canvas(lvl, container);\n};\nexports.set_up_canvas = (lvl, container) => {\n    container.innerHTML = \"\";\n    let canvas = document.createElement(\"CANVAS\");\n    const simHeight = window.innerHeight;\n    const simWidth = window.innerWidth;\n    const ctx = canvas.getContext(\"2d\");\n    if (!ctx)\n        return container;\n    ctx.canvas.height = simHeight;\n    ctx.canvas.width = simWidth;\n    const origin = exports.get_origin(ctx);\n    const player_pos = lvl.starting_position || math_1.from_array([0, 0]);\n    const drawnCanvas = exports.draw_level_on_canvas(lvl.map, canvas, origin, player_pos);\n    _1.set_player_position(player_pos);\n    container.appendChild(drawnCanvas);\n    return container;\n};\nexports.get_canvas = () => document.querySelector(\"#container > canvas\");\nexports.get_origin = (ctx) => math_1.from_array([ctx.canvas.width / 2, ctx.canvas.height / 2]);\n\n\n//# sourceURL=webpack:///./src/levels.ts?");

/***/ }),

/***/ "./src/math.ts":
/*!*********************!*\
  !*** ./src/math.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.to_array = (pt) => [pt.x, pt.y];\nexports.from_array = ([x, y]) => {\n    return {\n        x,\n        y,\n    };\n};\nexports.add_points = (pt1, pt2) => exports.from_array([pt1.x + pt2.x, pt1.y + pt2.y]);\nexports.scale_point = (pt, scale) => exports.from_array([pt.x * scale, pt.y * scale]);\nexports.multiply = (pt1, pt2) => exports.from_array([pt1.x * pt2.x - pt1.y * pt2.y, pt1.x * pt2.y + pt1.y * pt2.x]);\nexports.conjugate = (pt) => exports.from_array([pt.x, -pt.y]);\nexports.divide = (pt1, pt2) => exports.scale_point(exports.multiply(pt1, exports.conjugate(pt2)), 1 / (pt2.x ** 2 + pt2.y ** 2));\nexports.rectangular_to_polar = (pt) => {\n    return {\n        r: Math.sqrt(pt.x ** 2 + pt.y ** 2),\n        theta: Math.atan(pt.y / pt.x),\n    };\n};\nexports.exponentiaite_point = (pt, power) => {\n    const { r, theta } = exports.rectangular_to_polar(pt);\n    return exports.polar_to_rectangular({\n        r: r ** power,\n        theta: theta * power,\n    });\n};\nexports.polar_to_rectangular = (pol) => exports.from_array([pol.r * Math.cos(pol.theta), pol.r * Math.sin(pol.theta)]);\nexports.show = (p) => p.y > 0 ? `${p.x}+${p.y}i` : `${p.x}${p.y}i`;\nexports.showp = (p) => console.log(exports.show(p));\n\n\n//# sourceURL=webpack:///./src/math.ts?");

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