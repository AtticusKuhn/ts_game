"use strict";
define("types", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("levels", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.set_up_level = exports.levels = void 0;
    var identity_map = function (pt) { return pt; };
    exports.levels = [
        {
            map: identity_map,
        },
    ];
    var drawCanvas = function (map, canvas) {
        var ctx = canvas.getContext("2d");
        if (!ctx)
            throw "this error shouldn't happen";
        for (var x = 0; x < 100; x++) {
            for (var y = 0; y < 100; y++) {
                ctx.fillRect(x, y, 1, 1);
            }
        }
        return canvas;
    };
    var set_up_level = function (lvl) {
        var container = document.getElementById("container");
        if (!container)
            throw "cannot find container";
        container.innerHTML = "";
        var canvas = drawCanvas(lvl.map, document.createElement("CANVAS"));
    };
    exports.set_up_level = set_up_level;
});
define("index", ["require", "exports", "levels"], function (require, exports, levels_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var main = function () {
        var lvl1 = levels_1.levels[0];
        levels_1.set_up_level(lvl1);
    };
});
