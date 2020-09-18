if (
    typeof Deno !== "undefined" 
) {
    // eslint-disable-next-line no-redeclare
    var base = require("../base");
    require("./configurator-prc");
    // eslint-disable-next-line no-redeclare
    var ripe = base.ripe;
}

ripe.Configurator = ripe.ConfiguratorPrc;

ripe.Configurator.prototype = ripe.ConfiguratorPrc.prototype;
ripe.Configurator.prototype.constructor = ripe.Configurator;
