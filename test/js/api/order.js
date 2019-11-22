const assert = require("assert");
const config = require("../config");
const ripe = require("../../../src/js");

describe("OrderAPI", function() {
    this.timeout(config.TEST_TIMEOUT);

    describe("#getOrders", function() {
        beforeEach(function() {
            if (!config.TEST_USERNAME || !config.TEST_PASSWORD) {
                this.skip();
            }
        });

        it("should be able to retrieve orders", async () => {
            let result = null;

            const remote = ripe.RipeAPI();

            result = await remote.authAdminP(config.TEST_USERNAME, config.TEST_PASSWORD);

            assert.strictEqual(result.username, config.TEST_USERNAME);
            assert.notStrictEqual(typeof result.sid, undefined);

            result = await remote.getOrders();

            assert.notStrictEqual(result.length, 0);
        });
    });

    describe("#getOrder", function() {
        beforeEach(function() {
            if (!config.TEST_USERNAME || !config.TEST_PASSWORD) {
                this.skip();
            }
        });

        it("should be able to retrieve an order information", async () => {
            let result = null;

            const remote = ripe.RipeAPI();

            result = await remote.authAdminP(config.TEST_USERNAME, config.TEST_PASSWORD);

            assert.strictEqual(result.username, config.TEST_USERNAME);
            assert.notStrictEqual(typeof result.sid, undefined);

            result = await remote.getOrderP(4488);

            assert.strictEqual(result.number, 4488);
            assert.strictEqual(result.number_s, "#004488");
        });
    });

    describe("#_getOrderReportURL", function() {
        it("should be able to generate a simple URL", async () => {
            const remote = ripe.RipeAPI();
            const result = remote._getOrderReportURL(1234, "secret-key");
            assert.strictEqual(
                result,
                "https://sandbox.platforme.com/api/orders/1234/report?key=secret-key"
            );
        });
    });

    describe("#_getOrderReportURL", function() {
        it("should be able to generate a simple URL", async () => {
            const remote = ripe.RipeAPI();
            const result = remote._getOrderReportURL(1234, "secret-key");
            assert.strictEqual(
                result,
                "https://sandbox.platforme.com/api/orders/1234/report?key=secret-key"
            );
        });
    });

    describe("#_getOrderReportPDFURL", function() {
        it("should be able to generate a simple URL", async () => {
            const remote = ripe.RipeAPI();
            const result = remote._getOrderReportPDFURL(1234, "secret-key");
            assert.strictEqual(
                result,
                "https://sandbox.platforme.com/api/orders/1234/report.pdf?key=secret-key"
            );
        });
    });

    describe("#_getOrderReportURL", function() {
        it("should be able to generate a simple URL", async () => {
            const remote = ripe.RipeAPI();
            const result = remote._getOrderReportPNGURL(1234, "secret-key");
            assert.strictEqual(
                result,
                "https://sandbox.platforme.com/api/orders/1234/report.png?key=secret-key"
            );
        });
    });

    describe("#importOrder", function() {
        beforeEach(function() {
            if (!config.TEST_USERNAME || !config.TEST_PASSWORD) {
                this.skip();
            }
        });

        it("should be able to import order", async () => {
            let result = null;

            const remote = ripe.RipeAPI();
            const uuid4 = () => {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, x => {
                    const random = (Math.random() * 16) | 0;
                    const values = x === "x" ? random : (random & 0x3) | 0x8;
                    return values.toString(16);
                });
            };

            result = await remote.authAdminP(config.TEST_USERNAME, config.TEST_PASSWORD);

            assert.strictEqual(result.username, config.TEST_USERNAME);
            assert.notStrictEqual(typeof result.sid, undefined);

            const ffOrderId = uuid4();
            result = await remote.importOrderP(ffOrderId, {
                brand: "dummy",
                model: "dummy",
                parts: {
                    piping: {
                        material: "leather_dmy",
                        color: "black"
                    },
                    side: {
                        material: "leather_dmy",
                        color: "black"
                    },
                    top0_bottom: {
                        material: "leather_dmy",
                        color: "black"
                    },
                    shadow: {
                        material: "default",
                        color: "default"
                    }
                },
                gender: "female",
                size: 20,
                meta: "client:ripe-sdk-test"
            });

            const structure = JSON.parse(result.structure);
            assert.strictEqual(result.ff_order_id, ffOrderId);
            assert.strictEqual(result.brand, "dummy");
            assert.strictEqual(result.shoe, "dummy");
            assert.strictEqual(
                JSON.stringify(structure.parts_m),
                JSON.stringify({
                    piping: {
                        material: "leather_dmy",
                        color: "black"
                    },
                    side: {
                        material: "leather_dmy",
                        color: "black"
                    },
                    top0_bottom: {
                        material: "leather_dmy",
                        color: "black"
                    },
                    shadow: {
                        material: "default",
                        color: "default"
                    }
                })
            );
            assert.strictEqual(structure.size, 20);
            assert.strictEqual(structure.gender, "female");
            assert.strictEqual(result.meta.client, "ripe-sdk-test");
        });
    });
});
