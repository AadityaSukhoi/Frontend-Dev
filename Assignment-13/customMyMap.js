// Q 8. Add a custom prototype method myMap() to all arrays that behaves like the built-in map()
// function.
// Example:
// [1,2,3].myMap(num => num * 2); // [2,4,6]

Array.prototype.myMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

console.log([1, 2, 3].myMap(num => num * 2)); // [2, 4, 6]
