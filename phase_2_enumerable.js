Array.prototype.myEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i]);
    }
};

let hey = 0;
// [1,2,3,4,5].myEach(ele => console.log(hey += ele));


Array.prototype.myMap = function (cb) {
    let arr = [];
    let i = 0;
    while (i < this.length) {
        arr.push[cb(this[i])];
        i++;
    }
    return arr;
};

// [1, 2, 3, 4, 5].myMap( el => console.log(el * 2));

Array.prototype.myReduce = function (cb, initialValue) {
    let arr = this;
}
Array.prototype.myReduce = function (func, initialValue) {

    let arr = this;

    if (initialValue === undefined) {
        initialValue = arr[0];
        arr = arr.slice(1);
    }

    

    arr.myEach(el => initialValue = func(initialValue, el));

    return initialValue;
};

console.log([1, 2, 3, 4, 5].myReduce((acc, ele) => acc + ele));

// def myreduce(acc, &prc)
//     val = nil
//     arr = self.dup
//     if acc?
//         val = acc
//     else
//         val = arr.shift
//     end
    
//     arr.myeach do |ele|
//         val = prc.call(val, ele)
//     end

//     val
// end