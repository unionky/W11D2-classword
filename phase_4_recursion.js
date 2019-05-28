function range(start, end) {
    if (start === end) return [];
    let arr = range(start + 1, end);
    arr.unshift(start);
    return arr;
};
// console.log(range(1, 6));

function sumRec(arr) {
    if (arr.length === 0) return 0;
    return arr.pop() + sumRec(arr);
};

// console.log(sumRec([1, 2, 7]));
function exponent(base, exp) {
    if (exp === 0) return 1;

    return base * exponent(base, exp - 1);
};

// console.log(exponent(2, 8));


let exponent2 = function (b, exp) {
    if (exp === 0) return 1;

    if (exp % 2 === 0) {
        let ele = exponent2(b, exp/2);
        return ele * ele;
    } else {
        let ele = exponent2(b, (exp-1)/2);
        return ele * ele * b;
    }

};


// console.log(exponent2(2, 8));

function fibonnaci(n) {
    if (n === 0) return [0];
    if (n === 1) return [0];
    if (n === 2) return [0,1];

    let fibs = fibonnaci(n - 1);
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
    return fibs;
};

// console.log(fibonnaci(6));



function deepDup(arr) {
    if (!(arr instanceof Array)) return arr;
    
    return arr.map((el) => deepDup(el));
}


// console.log(deepDup([1,2,[1,3]]));



function bsearch(arr, target) {
    if (arr.length === 0) {
        return -1;
    }

    const mid = Math.floor(arr.length / 2);
    const guess = arr[mid];

    if (target === guess) {
        return mid;
    } else if (target < guess) {
        const begin = arr.slice(0, mid);
        return bsearch(begin, target);
    } else {
        const end = arr.slice(mid + 1); // without specifying an endpoint it just goes to the end
        const sub = bsearch(end, target);

        if (sub === -1) {
           return -1
        } else {
           return sub + (mid + 1);
        }
    }
}

// console.log(bsearch([1,2,3,4,5], 2));

function mergesort(arr) {
    if (arr.length === 0) return [];

    
}


function merge(begin, end) {
    const merged = [];

    while (begin.length > 0 && end.length > 0) {
        if (begin[0] < end[0]) {
           merged.push(begin.shift());
        } else {
            merged.push(end.shift());
        }
        
    }

    return merged.concat(begin, end);
}

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        const mid = Math.floor(arr.length / 2);

        const begin = mergeSort(arr.slice(0, mid));
        const end = mergeSort(arr.slice(mid));

        return merge(begin, end);
    }
}
// console.log(mergeSort([6,5,4,7,5,1,2]));



function subsets(arr) {
    if (arr.length === 0) return [[]];

    const ele = arr[0];
    const rest = subsets(arr.slice(1));

    const add_ele = rest.map(sub => [ele].concat(sub));

    return rest.concat(add_ele);
}



