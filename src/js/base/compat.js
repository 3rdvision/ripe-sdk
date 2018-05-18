if (typeof window === "undefined" && typeof require !== "undefined") {
    var base = require("./base"); // eslint-disable-line no-redeclare
    var ripe = base.ripe; // eslint-disable-line no-redeclare
}

/**
 * Assigns a certain set of values in the provided object to the
 * first parameter of the call (target).
 *
 * @param {String} target The target of the assign operation meaning
 * the object to which the values will be assigned.
 */
ripe.assign = function(target) {
    if (typeof Object.assign === "function") {
        return Object.assign.apply(this, arguments);
    }

    if (target === null) {
        throw new TypeError("Cannot assign undefined or null object");
    }

    var to = Object(target);
    for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];
        if (nextSource == null) {
            continue;
        }
        for (var nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
            }
        }
    }
    return to;
};

if (typeof require !== "undefined" && typeof XMLHttpRequest === "undefined") { // eslint-disable-line no-use-before-define
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; // eslint-disable-line no-redeclare
}

if (typeof module !== "undefined") {
    module.exports = {
        XMLHttpRequest: XMLHttpRequest
    };
}
