const api = require("./api");
const auth = require("./auth");
const base = require("./base");
const compat = require("./compat");
const errors = require("./errors");
const interactable = require("./interactable");
const logic = require("./logic");
const mobile = require("./mobile");
const observable = require("./observable");
const ripe = require("./ripe");
const utils = require("./utils");

Object.assign(module.exports, api);
Object.assign(module.exports, auth);
Object.assign(module.exports, base);
Object.assign(module.exports, compat);
Object.assign(module.exports, errors);
Object.assign(module.exports, interactable);
Object.assign(module.exports, logic);
Object.assign(module.exports, mobile);
Object.assign(module.exports, observable);
Object.assign(module.exports, ripe);
Object.assign(module.exports, utils);
