/* eslint-env mocha */
import sum from '../utils/sum';
import { expect } from 'chai';

describe('sum', () => {
  context('when both arguments are valid numbers', () => {
    it('adds the numbers together', () => {
      expect(sum(1, 2)).to.equal(3);
    });

    it('adds the numbers together', () => {
      expect(sum(5, 3)).to.equal(8);
    });
  });

  // context('when one argument is undefined', () => {
  //   it('throws an error', () => {
  //     expect(sum(1, 2)).to.throw('undefined is not a number');
  //   });
  // });
});
