(function() {
    function fataly(msg) {
        throw new Error(msg);
    }
    if (typeof define === "function" && define.amd) {
        define(fataly);
    } else if (typeof exports === "object") {
        module.exports = fataly;
    } else {
        window.fataly = fataly;
    }
})();