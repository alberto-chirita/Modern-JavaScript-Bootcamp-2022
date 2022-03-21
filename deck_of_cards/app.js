// function makeDeck() {
//   const deck = [];
//   const suits = ["hearts", "diamonds", "spades", "clubs"];
//   const values = "2,3,4,5,6,7,8,9,10,J,Q,K,A";
//   for (let value of values.split(",")) {
//     for (let suit of suits) {
//       deck.push({ value, suit });
//     }
//   }
//   return deck;
// }

// function drawCard(deck) {
//   return deck.pop();
// }

class Deck {
  constructor() {
    const deck = [];
    const values = "2,3,4,5,6,7,8,9,10,J,Q,K,A";
    const suits = ["hearts", "diamonds", "spades", "clubs"];
    for (let value of values.split(",")) {
      for (let suit of suits) {
        deck.push({ value, suit });
      }
    }
    this.deck = deck;
    this.drawnCards = [];
  }
  drawCard() {
    const card = this.deck.pop();
    this.drawnCards.push(card);
    return card;
  }
  drawMultiple(numCards) {
    const cards = [];
    for (let i = 0; i < numCards; i++) {
      cards.push(this.drawCard());
    }
    return cards;
  }
  shuffle() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
  }
}

const myDeck = new Deck();
myDeck.shuffle();
const card1 = myDeck.drawCard();
const card2 = myDeck.drawCard();
const cards1 = myDeck.drawMultiple(4);
console.log(myDeck.drawnCards);
