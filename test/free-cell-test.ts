import assert from 'power-assert';
import Card from '../src/card';
import FreeCell from '../src/free-cell';
import Suit from '../src/suit';

describe('FreeCell', function() {
  describe('#pop', function() {
    context('when empty', function() {
      it('works', function() {
        const freeCell = new FreeCell(null);
        assert(freeCell.getCard() === null);
        assert.deepEqual(freeCell.getCards(), []);
        assert.throws(() => freeCell.pop());
        assert(freeCell.getCard() === null);
        assert.deepEqual(freeCell.getCards(), []);
      });
    });

    context('when !empty', function() {
      it('works', function() {
        const currentCard = new Card(Suit.SPADE, 1);
        const freeCell = new FreeCell(currentCard);
        assert(freeCell.getCard() === currentCard);
        assert.deepEqual(freeCell.getCards(), [currentCard]);
        const newFreeCell = freeCell.pop();
        assert(freeCell.getCard() === currentCard);
        assert.deepEqual(freeCell.getCards(), [currentCard]);
        assert(newFreeCell.getCard() === null);
        assert.deepEqual(newFreeCell.getCards(), []);
      });
    });
  });

  describe('#push', function() {
    context('when empty', function() {
      it('works', function() {
        const freeCell = new FreeCell(null);
        assert(freeCell.getCard() === null);
        assert.deepEqual(freeCell.getCards(), []);
        const newCard = new Card(Suit.SPADE, 13);
        const newFreeCell = freeCell.push(newCard);
        assert(freeCell.getCard() === null);
        assert.deepEqual(freeCell.getCards(), []);
        assert(newFreeCell.getCard() === newCard);
        assert.deepEqual(newFreeCell.getCards(), [newCard]);
      });
    });

    context('when !empty', function() {
      it('works', function() {
        const currentCard = new Card(Suit.SPADE, 1);
        const freeCell = new FreeCell(currentCard);
        assert(freeCell.getCard() === currentCard);
        assert.deepEqual(freeCell.getCards(), [currentCard]);
        const newCard = new Card(Suit.SPADE, 12);
        assert.throws(() => freeCell.push(newCard));
        assert(freeCell.getCard() === currentCard);
        assert.deepEqual(freeCell.getCards(), [currentCard]);
      });
    });
  });
});
