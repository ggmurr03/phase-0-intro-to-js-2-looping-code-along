for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}
const _ = require(`lodash`)

wrapGifts(gifts);

function writeCards(stringNames, eventNames){
    let cardsArray = [];
    for (let i = 0; i < stringNames.length; i++){
        let message = `Thank you, ${stringNames[i]}, for the wonderful ${eventNames} gift!`;
        cardsArray.push(message)
    }
    return cardsArray
}
console.log(writeCards(["Frank", "Will"], "Xmas"))

function countDown(count){
    while (count > -1){
        console.log(count);
        count--
    }

}
