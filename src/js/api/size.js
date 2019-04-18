if (typeof require !== "undefined") {
    // eslint-disable-next-line no-redeclare
    var base = require("../base");
    // eslint-disable-next-line no-redeclare
    var ripe = base.ripe;
}

/**
 * Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 * sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 *
 * @param {Object} options Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 * sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 * @param {Function} callback Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 * sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 */
ripe.Ripe.prototype.getSizes = function(options, callback) {
    callback = typeof options === "function" ? options : callback;
    options = typeof options === "function" || options === undefined ? {} : options;
    const url = this.url + "sizes";
    options = Object.assign(options, {
        url: url,
        method: "GET"
    });
    options = this._build(options);
    return this._cacheURL(options.url, options, callback);
};

/**
 * Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 * sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 *
 * @param {Object} scale Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 * sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 * @param {Object} value Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 * sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 * @param {Object} gender Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 * sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 * @param {Object} options Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 * sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 * @param {Function} callback Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 * sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 */
ripe.Ripe.prototype.sizeToNative = function(scale, value, gender, options, callback) {
    callback = typeof options === "function" ? options : callback;
    options = typeof options === "function" || options === undefined ? {} : options;
    const url = this.url + "sizes/size_to_native";
    options = Object.assign(options, {
        url: url,
        method: "GET",
        params: {
            scale: scale,
            value: value,
            gender: gender
        }
    });
    options = this._build(options);
    return this._cacheURL(options.url, options, callback);
};

/**
 * Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 * sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 *
 * @param {Object} scale Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 * sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 * @param {Object} values Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 * sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 * @param {Object} genders Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 * sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 * @param {Object} options Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 * sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 * @param {Function} callback Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 * sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 * @return {XMLHttpRequest} The XMLHttpRequest instance of the API request.
 */
ripe.Ripe.prototype.sizeToNativeB = function(scales, values, genders, options, callback) {
    callback = typeof options === "function" ? options : callback;
    options = typeof options === "function" || options === undefined ? {} : options;

    const scalesP = [];
    const valuesP = [];
    const gendersP = [];

    for (let index = 0; index < scales.length; index++) {
        scalesP.push(scales[index]);
        valuesP.push(values[index]);
        gendersP.push(genders[index]);
    }

    const url = this.url + "sizes/size_to_native_b";

    options = Object.assign(options, {
        url: url,
        method: "GET",
        params: {
            scales: scalesP,
            values: valuesP,
            genders: gendersP
        }
    });
    options = this._build(options);

    return this._cacheURL(options.url, options, callback);
};

/**
 * Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 * sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 *
 * @param {Object} scale Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 * sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 * @param {Object} value Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 * sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 * @param {Object} gender Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 * sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 * @param {Object} options Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 * sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 * @param {Function} callback Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 * sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 * @return {XMLHttpRequest} The XMLHttpRequest instance of the API request.
 */
ripe.Ripe.prototype.nativeToSize = function(scale, value, gender, options, callback) {
    callback = typeof options === "function" ? options : callback;
    options = typeof options === "function" || options === undefined ? {} : options;
    const url = this.url + "sizes/native_to_size";
    options = Object.assign(options, {
        url: url,
        method: "GET",
        params: {
            scale: scale,
            value: value,
            gender: gender
        }
    });
    options = this._build(options);
    return this._cacheURL(options.url, options, callback);
};

/**
 * Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 * sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 *
 * @param {Object} scales Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 * sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 * @param {Object} values Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 * sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 * @param {Object} genders Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 * sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 * @param {Object} options Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 * sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 * @param {Function} callback Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 * sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
* @return {XMLHttpRequest} The XMLHttpRequest instance of the API request.
 */
ripe.Ripe.prototype.nativeToSizeB = function(scales, values, genders, options, callback) {
    callback = typeof options === "function" ? options : callback;
    options = typeof options === "function" || options === undefined ? {} : options;

    const scalesP = [];
    const valuesP = [];
    const gendersP = [];

    for (let index = 0; index < scales.length; index++) {
        scalesP.push(scales[index]);
        valuesP.push(values[index]);
        gendersP.push(genders[index]);
    }

    const url = this.url + "sizes/native_to_size_b";

    options = Object.assign(options, {
        url: url,
        method: "GET",
        params: {
            scales: scalesP,
            values: valuesP,
            genders: gendersP
        }
    });
    options = this._build(options);

    return this._cacheURL(options.url, options, callback);
};
