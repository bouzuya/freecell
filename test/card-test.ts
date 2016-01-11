import assert from 'power-assert';
import Card from '../src/card';
import Suit from '../src/suit';

describe('Card', function() {
  it('works', function() {
    const card = new Card(Suit.SPADE, 1);
    assert(card.suit === Suit.SPADE);
    assert(card.number === 1);
    const sameColorCard1 = new Card(Suit.SPADE, 5);
    const sameColorCard2 = new Card(Suit.CLUB, 1);
    const differentColorCard = new Card(Suit.HEART, 1);
    assert(card.isSameColor(sameColorCard1));
    assert(card.isSameColor(sameColorCard2));
    assert(!card.isSameColor(differentColorCard));
  });
});
