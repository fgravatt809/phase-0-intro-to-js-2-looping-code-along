function writeCards(names, event) {
    const cards = []
  for (let i = 0; i < names.length; i++) {
    console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  console.log(cards);

  return(cards);
  
}

writeCards;

function countDown(num) {
    let loop = num
    while (loop >= 0) {
        console.log(loop--);
    }
}
    