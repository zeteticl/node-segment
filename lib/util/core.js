"use strict";
/**
 * Created by user on 2018/4/17/017.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function enumIsNaN(v) {
    return isNaN(Number(v));
}
exports.enumIsNaN = enumIsNaN;
function enumList(varEnum, byValue) {
    let keys = Object.keys(varEnum);
    if (byValue) {
        return keys.filter(key => isNaN(Number(varEnum[key])));
    }
    else {
        return keys.filter(key => !isNaN(Number(varEnum[key])));
    }
}
exports.enumList = enumList;
const self = require("./core");
exports.default = self;