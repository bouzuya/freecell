import Card from './card';
import Cell from './cell';

class ColumnCell implements Cell {
  constructor(private cards: Card[]) {
  }

  getCard(): Card {
    if (this.cards.length === 0) return null;
    return this.cards[this.cards.length - 1];
  }

  getCards(): Card[] {
    return this.cards;
  }

  pop(): ColumnCell {
    if (this.cards.length === 0) throw new Error();
    return new ColumnCell(this.cards.slice(0, this.cards.length - 1));
  }

  push(newCard: Card): ColumnCell {
    if (newCard === null) throw new Error();
    const currentCard = this.getCard();
    if (currentCard === null)
      return new ColumnCell(this.cards.concat([newCard]));
    if (newCard.isSameColor(currentCard)) throw new Error();
    if (newCard.number !== currentCard.number - 1) throw new Error();
    return new ColumnCell(this.cards.concat([newCard]));
  }
}

export default ColumnCell;
