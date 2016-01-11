import assert from 'power-assert';
import Suit from '../src/suit';

describe('Suit', function() {
  it('works', function() {
    assert(typeof Suit.SPADE !== 'undefined');
    assert(typeof Suit.HEART !== 'undefined');
    assert(typeof Suit.CLUB !== 'undefined');
    assert(typeof Suit.DIAMOND !== 'undefined');
  });
});
