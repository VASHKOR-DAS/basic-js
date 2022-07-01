// mane uporer function a ja dibo seitai jekono number a apply hobe

function doubleIt(num){
    var result = num * 2;
    console.log(result);
}
doubleIt(5);
doubleIt(50);

// output result k niye laj kora

function doubleIt(num){
    var result = num * 2;
    return result;
}

var first = doubleIt(5);
var second = doubleIt(50);

// aktar besi jinish k console korle comma dite hoy

// console.log(first, second)

// jodi ber kore seta diye kaj kora hoy tobe

var first = doubleIt(5);
var second = doubleIt(50);
var total = first + second;
console.log(total);

// 2ta function k add korte chaile

function add(num1, num2) {
    var result = num1 + num2;
    return result
    // return kora hole oitar value niche save kora jabe, ba nich theke notun kore + - kora jabe
}
var sum = add(15, 17);
// ai value ta uporer function a add hobe
console.log(sum);


