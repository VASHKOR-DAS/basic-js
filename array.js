// var er akadhik value likhte hole tar majhe comma dite hoy

var friendsAge = [15, 17, 14, 16];
console.log(friendsAge);

// array er 1st possition 0
//  position search korte hole [] dite hoy

var friendsAge = [15, 17, 14, 16];
console.log(friendsAge[1]);

// var er value change korte hole

var friendsAge = [15, 17, 14, 16];
friendsAge[1] = 50;
console.log(friendsAge);

// position set kora, nam onujayi

var friendsAge = [15, 17, 14, 16];
sonaliAge = friendsAge[3];
console.log(sonaliAge);

// pisition janar jnno
// like "14 er position jana nai"

var friendsAge = [15, 17, 14, 16];
var position = friendsAge.indexOf(14);
console.log(position);

// jodi kono element na thake array er majhe tobe -1 result dibe

var friendsAge = [15, 17, 14, 16];
var position = friendsAge.indexOf(18);
console.log(position);

// array er var er majhe kono element last a add korte chaile .push

var friendsAge = [15, 17, 14, 16];
friendsAge.push(18);
console.log(friendsAge);

// last a akadhik Element add korte chaile
var friendsAge = [15, 17, 14, 16];
friendsAge.push(18);
friendsAge.push(19);
console.log(friendsAge);

// array er length koto ta jante chaile
var friendsAge = [15, 17, 14, 16];
console.log(friendsAge.length)

// push korar por length

var friendsAge = [15, 17, 14, 16];
friendsAge.push(18);
friendsAge.push(19);
console.log(friendsAge.length);

// last er kono Element k ber korte hole .pop

var friendsAge = [15, 17, 14, 16];
console.log(friendsAge);
friendsAge.pop();
console.log(friendsAge);