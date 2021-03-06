"use strict";
/**
 * Created by user on 2018/4/17/017.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexOr = exports.hexAnd = exports.hexAndAny = exports.debug_options = exports.debug = exports.debug_inspect = exports.token_add_info = exports.toHex = exports.debug_token = void 0;
const util = require("util");
__exportStar(require("./core"), exports);
const debug_1 = require("./debug");
Object.defineProperty(exports, "debug_token", { enumerable: true, get: function () { return debug_1.debug_token; } });
Object.defineProperty(exports, "toHex", { enumerable: true, get: function () { return debug_1.toHex; } });
Object.defineProperty(exports, "token_add_info", { enumerable: true, get: function () { return debug_1.token_add_info; } });
function debug_inspect(argv, options = {}) {
    options = Object.assign({
        colors: true,
    }, options);
    return argv.map(function (b) {
        return util.inspect(b, options);
    }, []);
}
exports.debug_inspect = debug_inspect;
function debug(...argv) {
    return console.log(...debug_inspect(argv));
}
exports.debug = debug;
function debug_options(argv, options) {
    return console.log(...debug_inspect(argv, options));
}
exports.debug_options = debug_options;
function hexAndAny(n, ...argv) {
    if (!argv.length) {
        return n;
    }
    for (let v of argv) {
        let r = (n & v);
        if (r) {
            return r;
        }
    }
    return 0;
}
exports.hexAndAny = hexAndAny;
function hexAnd(n, ...argv) {
    if (argv.length) {
        let r = 0;
        for (let v of argv) {
            let p = n & v;
            if (!p) {
                return 0;
            }
            r |= v;
        }
        return r;
    }
    return n;
}
exports.hexAnd = hexAnd;
function hexOr(n, ...argv) {
    for (let v of argv) {
        n |= v;
    }
    return n;
}
exports.hexOr = hexOr;
// @ts-ignore
exports.cloneDeep = require('lodash.clonedeep');
//let p = hexAnd(0x6000 | 0x8000, 0x2000, 0x4000)
//debug(p, toHex(p));
//# sourceMappingURL=index.js.map