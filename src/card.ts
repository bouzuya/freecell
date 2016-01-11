import Suit from './suit';

class Card {
  suit: Suit;
  number: number;

  constructor(suit: Suit, number: number) {
    const suits = [
      Suit.SPADE,
      Suit.HEART,
      Suit.CLUB,
      Suit.DIAMOND
    ];
    if (suits.indexOf(suit) === -1) throw new Error('invalid suit');
    if (number < 1 || 13 < number) throw new Error('invalid number');
    this.suit = suit;
    this.number = number;
  }

  isSameColor(card: Card) {
    if (!card) return false;
    if (this._isRed() && card._isRed()) return true;
    if (this._isBlack() && card._isBlack()) return true;
    return false;
  }

  _isBlack(): boolean {
    return this.suit === Suit.SPADE || this.suit === Suit.CLUB; 
  }

  _isRed(): boolean {
    return !this._isBlack();
  }
}

export default Card;