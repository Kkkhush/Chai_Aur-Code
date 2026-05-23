let numberofGuest = 4;

// undefined datatype use
let pizzaSize;
// small <=2
// medium <=5
// large


// Pizza buying algorithm

if(numberofGuest<=2){
    pizzaSize="small";
}else if(numberofGuest<=5){
    pizzaSize="medium";
}else{
    pizzaSize="large";
}

console.log(pizzaSize);

