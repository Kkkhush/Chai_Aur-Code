// make an array consisting list of teas
const teas =["Green tea","Black tea","oolong tea","White tea","Herbal Tea"]
console.log(teas);

// add "Chamomile tea" to the existing list of teas

teas.push("Chamomile tea");

// remove "oolong tea" from the list of teas
const index = teas.indexOf("oolong tea");
if(index>-1){
    teas.splice(index,1);
}
// start from specified index and then remove only one element this time


// filter method : filter the list to only include teas that are caffeinated
const caffeinatedTeas = teas.filter((tea) => tea !== "Herbal Tea" );


// sort list of teas in alphabetical order
console.log(teas.sort());

//   Use a for loop to print each type of tea in the array

for(let i=0; i <teas.length; i++){
    console.log(teas[i]);
}

// Use a for loop to count how many teas are caffeinated (excluding "Herbal Tea")


for(let i=0;i<teas.length; i++){
    let caffinatedMyTeas = 0;
    if(teas[i] !== "Herbal Tea"){
          caffinatedMyTeas++;
    }
}

// Use a for loop to create a new array with all tea names in uppercase.

const uppcaseTeas = []
for(let i=0;i<teas.length; i++){
    uppcaseTeas.push(teas[i].toUpperCase())
}

// Use a for loop to find the tea name with the most characters.

let longestTea = ""
for(let i=0;i<teas.length; i++){
    if(teas[i].length > longestTea.length){
        longestTea = teas[i]
    }
}

// Use a for loop to reverse the order of teas in the array.

const reversedArray =[]
for(let i= teas.length -1; i>= 0; i--){
    reversedArray.push(teas[i])
}


