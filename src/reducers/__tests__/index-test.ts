import reducer from 'reducers';
import { setState } from 'actions';
import * as deepFreeze from 'deep-freeze';

describe('index reducer', () => {
  describe('setState', () => {
    it('should set state', () => {
      const initialState = {};

      deepFreeze(initialState);

      const nextState = reducer(initialState, setState({
        categories: [
          {
            name: 'Meat',
            id: 'meat'
          }
        ],
        items: [
          {
            name: 'Steak',
            id: 'steak',
            checked: false,
            category: 'meat'
          }
        ]
      }
      ));

      expect(nextState).toMatchSnapshot();
    });
  });
});
