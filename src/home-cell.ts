import Suit from './suit';
import Card from './card';
import Cell from './cell';

class HomeCell implements Cell {
  constructor(
    private suit: Suit,
    private cards: Card[]
  ) {
  }

  getCard(): Card {
    if (this.cards.length === 0) return null;
    return this.cards[this.cards.length - 1];
  }

  getCards(): Card[] {
    return this.cards;
  }

  pop(): HomeCell {
    throw new Error();
  }

  push(newCard: Card): HomeCell {
    if (newCard === null) throw new Error();
    if (newCard.suit !== this.suit) throw new Error();
    const currentCard = this.getCard();
    if (currentCard === null && newCard.number !== 1)
      throw new Error();
    if (currentCard !== null && newCard.number !== currentCard.number + 1)
      throw new Error();
    return new HomeCell(this.suit, this.cards.concat([newCard]));
  }
}

export default HomeCell;