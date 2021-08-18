"use strict";
exports.__esModule = true;
var fs = require("fs-extra");
var os = require("os");
var console_1 = require("console");
console.log;
var osthing = {
    one: os.platform(),
    two: os.userInfo()
};
var myInfo = {
    myHome: fs.readdirSync(os.homedir())
};
var logType = function (obj) {
    return typeof obj;
};
console_1.log(typeof osthing.one);
