Array.prototype.myuniq = function() {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (!arr.includes(this[i]))  arr.push(this[i]) 
    }
    return arr;
};

// console.log([1,2,3,4,5,1,2,3].myuniq());

Array.prototype.twoSum = function() {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        for (let k = i+1; k < this.length; k++) {
            if (this[i] + this[k] === 0) arr.push([i , k])
        }
    }
    return arr;
};


// console.log([1,2,3,4,5,-1,-2,-3].twoSum());





Array.prototype.transpose = function () {

    const columns = Array.from(
        { length: this[0].length },
        () => Array.from({ length: this.length })
    );

    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this[i].length; j++) {
            columns[j][i] = this[i][j];
        }
    }

    return columns;
};

console.log([[1,3,6], [2,4,6], [2,2,2]].transpose())




