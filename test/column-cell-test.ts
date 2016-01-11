import assert from 'power-assert';
import Card from '../src/card';
import ColumnCell from '../src/column-cell';
import Suit from '../src/suit';

describe('ColumnCell', function() {
  describe('#pop', function() {
    context('when empty', function() {
      it('works', function() {
        const columnCell = new ColumnCell([]);
        assert.throws(() => columnCell.pop());
        assert(columnCell.getCard() === null);
        assert.deepEqual(columnCell.getCards(), []);
      });
    });

    context('when !empty', function() {
      it('works', function() {
        const currentCard = new Card(Suit.SPADE, 6);
        const columnCell = new ColumnCell([currentCard]);
        const newColumnCell = columnCell.pop();
        assert(columnCell.getCard() === currentCard);
        assert.deepEqual(columnCell.getCards(), [currentCard]);
        assert(newColumnCell.getCard() === null);
        assert.deepEqual(newColumnCell.getCards(), []);
      })
    });
  });

  describe('#push', function() {
    context('when empty', function() {
      it('works', function() {
        const columnCell = new ColumnCell([]);
        const newCard = new Card(Suit.SPADE, 13);
        const newColumnCell = columnCell.push(newCard);
        assert(columnCell.getCard() === null);
        assert.deepEqual(columnCell.getCards(), []);
        assert(newColumnCell.getCard() === newCard);
        assert.deepEqual(newColumnCell.getCards(), [newCard]);
      });
    });

    context('when !empty', function() {
      it('works', function() {
        const currentCard = new Card(Suit.SPADE, 6);
        const columnCell = new ColumnCell([currentCard]);
        assert(columnCell.getCard() === currentCard);
        assert.deepEqual(columnCell.getCards(), [currentCard]);

        // to ColumnCell (H05)
        const newCard1 = new Card(Suit.HEART, 5);
        const newColumnCell1 = columnCell.push(newCard1);
        assert(columnCell.getCard() === currentCard);
        assert.deepEqual(columnCell.getCards(), [currentCard]);
        assert(newColumnCell1.getCard() === newCard1);
        assert.deepEqual(newColumnCell1.getCards(), [currentCard, newCard1]);

        // to HomeCell (H07)
        const newCard2 = new Card(Suit.HEART, 7);
        assert.throws(() => columnCell.push(newCard2));
        assert(columnCell.getCard() === currentCard);
        assert.deepEqual(columnCell.getCards(), [currentCard]);

        // to HomeCell (S05)
        const newCard3 = new Card(Suit.SPADE, 5);
        assert.throws(() => columnCell.push(newCard3));
        assert(columnCell.getCard() === currentCard);
        assert.deepEqual(columnCell.getCards(), [currentCard]);
      })
    });
  });
});
