import Card from './card';

interface Cell {
  getCard(): Card;
  getCards(): Card[];
  pop(): Cell;
  push(card: Card): Cell;
}

export default Cell;