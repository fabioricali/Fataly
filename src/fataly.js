/**
 * @module fataly
 * @param {String} msg message error
 */
function fataly(msg) {
    throw new Error(msg);
}

/**
 * Expose module
 * @type {fataly}
 */
module.exports = fataly;
