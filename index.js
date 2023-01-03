// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(``)
    
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(names, eventName) {
    const messages = [];
    let i = 0;
    while(i < names.length) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
        i++;
    }
    return messages;
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(num) {
    for (let i=num; i > -1; i--) {
        console.log(i);
    }
}

countDown(10)