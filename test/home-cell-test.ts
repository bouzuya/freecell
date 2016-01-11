import assert from 'power-assert';
import Card from '../src/card';
import HomeCell from '../src/home-cell';
import Suit from '../src/suit';

describe('HomeCell', function() {
  describe('#pop', function() {
    context('when empty', function() {
      it('works', function() {
        const homeCell = new HomeCell(Suit.SPADE, []);
        assert(homeCell.getCard() === null);
        assert.deepEqual(homeCell.getCards(), []);
        assert.throws(() => homeCell.pop());
        assert(homeCell.getCard() === null);
        assert.deepEqual(homeCell.getCards(), []);
      });
    });

    context('when !empty', function() {
      it('works', function() {
        const currentCard = new Card(Suit.SPADE, 1);
        const homeCell = new HomeCell(Suit.SPADE, [currentCard]);
        assert(homeCell.getCard() === currentCard);
        assert.deepEqual(homeCell.getCards(), [currentCard]);
        assert.throws(() => homeCell.pop());
        assert(homeCell.getCard() === currentCard);
        assert.deepEqual(homeCell.getCards(), [currentCard]);
      });
    });
  });

  describe('#push', function() {
    context('when empty', function() {
      it('works', function() {
        const homeCell = new HomeCell(Suit.SPADE, []);
        assert(homeCell.getCard() === null);
        assert.deepEqual(homeCell.getCards(), []);

        // to HomeCell (S13)
        const newCard1 = new Card(Suit.SPADE, 13);
        assert.throws(() => homeCell.push(newCard1));
        assert(homeCell.getCard() === null);
        assert.deepEqual(homeCell.getCards(), []);

        // to HomeCell (S01)
        const newCard2 = new Card(Suit.SPADE, 1);
        const newHomeCell2 = homeCell.push(newCard2);
        assert(homeCell.getCard() === null);
        assert.deepEqual(homeCell.getCards(), []);
        assert(newHomeCell2.getCard() === newCard2);
        assert.deepEqual(newHomeCell2.getCards(), [newCard2]);
      });
    });

    context('when !empty', function() {
      it('works', function() {
        const currentCard = new Card(Suit.SPADE, 1);
        const homeCell = new HomeCell(Suit.SPADE, [currentCard]);
        assert(homeCell.getCard() === currentCard);
        assert.deepEqual(homeCell.getCards(), [currentCard]);

        // to HomeCell (S02)
        const newCard1 = new Card(Suit.SPADE, 2);
        const newHomeCell1 = homeCell.push(newCard1);
        assert(homeCell.getCard() === currentCard);
        assert.deepEqual(homeCell.getCards(), [currentCard]);
        assert(newHomeCell1.getCard() === newCard1);
        assert.deepEqual(newHomeCell1.getCards(), [currentCard, newCard1]);

        // to HomeCell (S01)
        const newCard2 = new Card(Suit.SPADE, 1);
        assert.throws(() => homeCell.push(newCard2));
        assert(homeCell.getCard() === currentCard);
        assert.deepEqual(homeCell.getCards(), [currentCard]);
      });
    });
  });
});
