// Search details

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch


// akta condition k sudhu matro kono nidristo sorto puroner jonno set korake switch kora bole

// mane ami var k oi 1ta conditioner sathe milbe

var num = 100
switch (num) {
    case 1000:
        console.log('I am 1000')
        break;
    case 100:
        console.log('I am 100')
        break;
    case 20:
    case 10:
        console.log('I am either 20 or 10')
        break;
    default:
        console.log(`I am don't know who you are`)
}