import * as _ from 'lodash';
import Suit from './suit';
import Card from './card';
import Cell from './cell';
import ColumnCell from './column-cell';
import FreeCell from './free-cell';
import HomeCell from './home-cell';

class Game {
  static new(): Game {
    const suits = [
      Suit.SPADE,
      Suit.HEART,
      Suit.CLUB,
      Suit.DIAMOND
    ];
    const cards = suits
    .map(suit => {
      const cards: Card[] = [];
      for (let i = 1; i <= 13; i++) {
        cards.push(new Card(suit, i));
      }
      return cards;
    })
    .reduce((cards, suitCards) => cards.concat(suitCards), []);
    const columnCells = _.shuffle(cards)
    .reduce((columns: Card[][], item: Card, index: number) => {
      if (!columns[index % 8]) columns[index % 8] = [];
      columns[index % 8].push(item);
      return columns;
    }, [])
    .map(cards => new ColumnCell(cards));
    const freeCells = [
      new FreeCell(null),
      new FreeCell(null),
      new FreeCell(null),
      new FreeCell(null)
    ];
    const homeCells = suits.map(suit => new HomeCell(suit, []));
    const cells = <Cell[]>[]
    .concat(columnCells)
    .concat(freeCells)
    .concat(homeCells);
    return new Game(cells, null);
  }

  constructor(
    private cells: Cell[],
    private cursor: number
  ) {
  }

  isOver(): boolean {
    const homeCells = this.cells.slice(12, 16);
    return homeCells.map(i => i.getCard()).every(i => i && i.number === 13);
  }

  isSelected(): boolean {
    return this.cursor !== null;
  }

  moveTo(index: number): Game {
    // TODO: Column + index / Free + index / Home
    const fromIndex = this.cursor;
    const from = this.cells[fromIndex];
    const toIndex = index;
    const to = this.cells[toIndex];
    const card = from.getCard();
    const newCells = this.cells.slice();
    newCells[fromIndex] = from.pop();
    newCells[toIndex] = to.push(card);
    return new Game(newCells, null);
  }

  // TODO:
  select(index: number): Game {
    return new Game(this.cells, index);
  }

  unselect(): Game {
    return new Game(this.cells, null);
  }

  // TODO: for renderer
  getColumns(): Card[][] {
    return this.cells.slice(0, 8).map(cell => cell.getCards());
  }

  // TODO: for renderer
  getFreeCells(): Cell[] {
    return this.cells.slice(8, 12);
  }

  // TODO: for renderer
  getHomeCells(): Cell[] {
    return this.cells.slice(12, 16);
  }

  // TODO: for renderer
  getCursor(): number {
    return this.cursor;
  }
}

export default Game;