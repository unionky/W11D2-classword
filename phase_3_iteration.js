Array.prototype.bubbleSort = function() {
    let sorted = false;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < this.length; i++) {
           if (this[i] > this[i + 1]) {
            //    let left = this[i]
            //    let right = this[i + 1]
            // [a,b] = [b,a]
               [this[i], this[i + 1]] = [this[i + 1], this[i]];
               sorted = false;
           }
        }
    }
    return this;
};

// console.log([5,4,3,2,1].bubbleSort());

String.prototype.substrings = function() {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        for (let k = i+1; k <= this.length; k++) {
            arr.push(this.slice(i, k));  // slice end is exclusive
        }
    }
    return arr;
};
console.log("xyz".substrings());




