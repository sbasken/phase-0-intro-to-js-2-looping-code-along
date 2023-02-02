// Code your solutions in this file
function writeCards(names, occasion) {
    let messages = [];
    for (let name of names) {
        messages.push(`Thank you, ${name}, for the wonderful ${occasion} gift!`)
    }
    return messages
}

function countDown(num) {
    for (let i = num; num >= 0; num--) {
        console.log(num)
    }

}

countDown(9)