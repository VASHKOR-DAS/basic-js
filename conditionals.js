var biscuitsPrice = 12;
if(biscuitsPrice < 10){
    console.log("I will eat it")
}
else{
    console.log("Khali cha is better")
}

// double = dite hobe

var biscuitsPrice = 12;
if(biscuitsPrice == 10){
    console.log("I will eat it")
}
else{
    console.log("Khali cha is better")
}

// 12 er soman na hole
// mane 12 howa jabena

var biscuitsPrice = 10;
if(biscuitsPrice != 12){
    console.log("I will eat it")
}
else{
    console.log("Khali cha is better")
}

var biscuitsPrice = 12;
if(biscuitsPrice != 12){
    console.log("I will eat it")
}
else{
    console.log("Khali cha is better")
}


// multi-conditionals


var jobPaiso = false;
var savingAmount = 500000
if(jobPaiso == true && savingAmount > 2000){
    console.log("Aso patri khuji")
}
else{
    console.log("Tor kopale biya nai");
}

var jobPaiso = true;
var savingAmount = 500000
if(jobPaiso == true && savingAmount < 500001){
    console.log("Aso patri khuji")
}
else{
    console.log("Tor kopale biya nai");
}

// js a or likhe ||

var jobPaiso = false;
var savingAmount = 500000
if(jobPaiso == true || savingAmount < 500001){
    console.log("Aso patri khuji")
}
else{
    console.log("Tor kopale biya nai");
}


// date dekhte chaile but ata time zone set kora nai

var date = new Date()
console.log(date);
