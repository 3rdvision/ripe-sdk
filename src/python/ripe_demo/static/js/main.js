window.onload = function() {
    var ripe = new Ripe("https://www.my-swear.com/", "vyner", {}, {
        target: document.getElementById("configurator"),
        currency: "EUR",
        country: "PT"
    });
    ripe.render();

    var frame1 = document.getElementById("frame-1");
    var frame2 = document.getElementById("frame-2");
    var frame3 = document.getElementById("frame-3");
    var setPart = document.getElementById("set-part");
    var getPrice = document.getElementById("get-price");

    frame1.addEventListener("click", function() {
        ripe.render(null, 1);
    });

    frame2.addEventListener("click", function() {
        ripe.render(null, 2);
    });

    frame3.addEventListener("click", function() {
        ripe.render(null, 3);
    });

    setPart.addEventListener("click", function() {
        ripe.setPart("side", "suede", "navy")
        ripe.render(null, 3);
    });

    getPrice.addEventListener("click", function() {
        ripe.getPrice(function(result) {
            alert(result.total.price_final);
        });
    });
};