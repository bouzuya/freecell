import Card from './card';
import Cell from './cell';

class FreeCell implements Cell {
  constructor(private card: Card) {
  }

  getCard(): Card {
    return this.card;
  }

  getCards(): Card[] {
    return this.card ? [this.card] : [];
  }

  pop(): FreeCell {
    if (this.card === null) throw new Error();
    return new FreeCell(null);
  }

  push(newCard: Card): FreeCell {
    if (newCard === null) throw new Error();
    const currentCard = this.getCard();
    if (currentCard !== null) throw new Error();
    return new FreeCell(newCard);
  }
}

export default FreeCell;