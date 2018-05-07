jest.unmock('../src/translate');
import React from 'react';
import Interpolate from '../src/interpolate';
import PropTypes from 'prop-types';

describe('interpolate', () => {
  it('should have some stuff', () => {
    expect(Interpolate.contextTypes.i18n)
      .toBe(PropTypes.object.isRequired);
    expect(Interpolate.contextTypes.t)
      .toBe(PropTypes.func.isRequired);
    const props = {};
    const context = {
      i18n: {},
      t(message) {
        return message;
      }
    };
    const interpolate = new Interpolate(props, context);
    expect(interpolate.i18n).toBe(context.i18n);
    expect(interpolate.t).toBe(context.t);
  });
});
