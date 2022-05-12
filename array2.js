// array er var er majhe kono element first a remove korte chaile .shift

var teaLine = ['Kalam', 'Salam', 'Balam'];
teaLine.shift();
console.log(teaLine);

// array er var er majhe kono element first a add korte chaile .unshift

var teaLine = ['Kalam', 'Salam', 'Balam'];
teaLine.unshift('Palam');
console.log(teaLine);

// array er var er majhe kono element first a akadhik add korte chaile .unshift

var teaLine = ['Kalam', 'Salam', 'Balam'];
teaLine.unshift('Palam');
teaLine.unshift('Jamal')
console.log(teaLine);

// array er kichu kat-te hole
// kon jayga theke suru hobe, ar kon index er age porjonto katbe 
// N.B = ate main array change hobena

var teaLine = ['Palam', 'Kalam', 'Salam', 'Jamal', 'Balam', 'Talam']    ;
var part = teaLine.slice(2, 5);
console.log(part);

// N.B

var teaLine = ['Palam', 'Kalam', 'Salam', 'Jamal', 'Balam', 'Talam']    ;
var part = teaLine.slice(2, 5);
// console.log(part);
console.log(teaLine);


//nicher aita skip kora jay
// confusing

// // main array change korte chaile .splice
// mane index 2 dile
// 1 theke 2 porjonto kata

// 3 dile 1,2,3 kata

var teaLine = ['Palam', 'Kalam', 'Salam', 'Jamal', 'Balam', 'Talam'];
var part = teaLine.splice(3);
console.log(teaLine);

// console.log part dile
// 3er por theke kata suru hobe

var teaLine = ['Palam', 'Kalam', 'Salam', 'Jamal', 'Balam', 'Talam'];
var part = teaLine.splice(3);
console.log(part);

//up aita skip kora jay
// confusing


