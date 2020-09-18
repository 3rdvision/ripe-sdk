if (
    true 
) {
    // eslint-disable-next-line no-redeclare
    var base = require("./base");
    // eslint-disable-next-line no-redeclare
    var ripe = base.ripe;
}

/**
 * Assigns a certain set of values in the provided object to the
 * first parameter of the call (target).
 *
 * @param {String} target The target of the assign operation meaning
 * the object to which the values will be assigned.
 *
 * @ignore
 */
ripe.assign = function(target) {
    if (typeof Object.assign === "function") {
        return Object.assign.apply(this, arguments);
    }

    if (target === null) {
        throw new TypeError("Cannot assign undefined or null object");
    }

    const to = Object(target);
    for (let index = 1; index < arguments.length; index++) {
        const nextSource = arguments[index];
        if (nextSource == null) {
            continue;
        }
        for (const nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
            }
        }
    }

    return to;
};

/**
 * @ignore
 */
ripe.build = function() {
    const _arguments = Array.prototype.slice.call(arguments);
    _arguments.unshift({});
    return ripe.assign.apply(this, _arguments);
};

if (
    true
) {
    var XMLHttpRequest = null;
    if (
        true
    ) {
        // this is an hack to work around metro's (react-native bundler)
        // static analysis, needed until it supports optional imports
        // (https://github.com/react-native-community/discussions-and-proposals/issues/120)
        XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    } else {
        XMLHttpRequest = window.XMLHttpRequest;
    }
}

if (
    true  &&
    typeof fetch === "undefined" // eslint-disable-line no-use-before-define
) {
    var fetch = null;
    if (
        true
    ) {
        fetch = require("node-fetch");
    } else {
        fetch = window.fetch;
    }
}

if (typeof module !== "undefined") {
    module.exports = {
        XMLHttpRequest: XMLHttpRequest,
        fetch: fetch
    };
}
