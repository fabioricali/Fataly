(function () {
    /**
     * @module fataly
     * @param {String} msg message error
     */
    function fataly(msg) {
        throw new Error(msg);
    }

    /**
     * Expose module
     */
    if (typeof define === 'function' && define.amd) {
        define(fataly);
    }else if(typeof exports === 'object') {
        module.exports = fataly;
    }else{
        window.fataly = fataly;
    }
})();
