import reducer from 'reducers/items';
import {
  SET_ITEMS,
  setItems
} from 'actions/items';
import * as deepFreeze from 'deep-freeze';

describe('items reducer', () => {
  it('sets items', () => {
    const initialState = [
      {
        name: 'Milk',
        id: 'milk',
        checked: false,
        category: 'dairy'
      }
    ];

    deepFreeze(initialState);

    const nextState = reducer(initialState, setItems([
      {
        name: 'Leche'
      }
    ]));

    expect(nextState).toMatchSnapshot();
  });
});
