import reducer from 'reducers/filters';
import {
  visibilityFilter
} from 'actions/filters';
import * as deepFreeze from 'deep-freeze';

describe('filters reducer', () => {
  describe('visibilityFilter', () => {
    it('should set visibility to SHOW_ALL', () => {
      const initialState = {
        visibility: 'stuff'
      };

      deepFreeze(initialState);

      const nextState = reducer(initialState, visibilityFilter('SHOW_ALL'));

      expect(nextState).toMatchSnapshot();
    });

    it('should set visibility to SHOW_CHECKED', () => {
      const initialState = {
        visibility: 'stuff'
      };

      deepFreeze(initialState);

      const nextState = reducer(initialState, visibilityFilter('SHOW_CHECKED'));

      expect(nextState).toMatchSnapshot();
    });

    it('should set visibility to SHOW_UNCHECKED', () => {
      const initialState = {
        visibility: 'stuff'
      };

      deepFreeze(initialState);

      const nextState = reducer(initialState, visibilityFilter('SHOW_UNCHECKED'));

      expect(nextState).toMatchSnapshot();
    });
  });

  it('can be used with reduce', () => {
    const actionQueue = [
      visibilityFilter('SHOW_CHECKED')
    ];

    const finalState = actionQueue.reduce(reducer, []);

    expect(finalState).toMatchSnapshot();
  });
});
