// eslint-disable-next-line no-redeclare
var base = require("./base");
require("./ripe");
// eslint-disable-next-line no-redeclare
var ripe = base.ripe;

ripe.Ripe.prototype.hasCustomization = function () {
    const tags = this.loadedConfig.tags || [];
    return !tags.includes("no_customization");
};

ripe.Ripe.prototype.hasPersonalization = function () {
    const tags = this.loadedConfig.tags || [];
    return !tags.includes("no_initials") && !tags.includes("no_personalization");
};

ripe.Ripe.prototype.hasSize = function () {
    const tags = this.loadedConfig.tags || [];
    return !tags.includes("no_size");
};
