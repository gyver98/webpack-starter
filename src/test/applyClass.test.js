/* eslint-env mocha */
import applyClass from '../utils/applyClass';
// import { expect } from 'chai';
import sinon from 'sinon';

describe('apply class', () => {
  it('adds correct class', () => {
    const parent = {
      querySelectorAll: sinon.stub(),
    };
    const elStub = {
      classList: {
        add: sinon.stub(),
      },
    };
    parent.querySelectorAll.returns([elStub]);
    const expectedClass = 'something-new';
    applyClass(parent, expectedClass);
    sinon.assert.calledWith(elStub.classList.add, expectedClass);
  });
});
