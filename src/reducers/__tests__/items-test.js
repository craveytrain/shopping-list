import reducer from 'reducers/items';
import {
  setItems,
  addItem,
  removeItem,
  toggleItem,
  nameItem,
  categorizeItem
} from 'actions/items';
import deepFreeze from 'deep-freeze';

describe('items reducer', () => {
  describe('setItems', () => {
    it('should set items', () => {
      const initialState = [
        {
          name: 'Milk',
          id: 'milk'
        }
      ];

      deepFreeze(initialState);

      const nextState = reducer(
        initialState,
        setItems([
          {
            name: 'Leche'
          }
        ])
      );

      expect(nextState).toMatchSnapshot();
    });
  });

  describe('addItem', () => {
    it('should add an item to the list', () => {
      const initialState = [
        {
          name: 'Milk',
          id: 'milk'
        }
      ];

      deepFreeze(initialState);

      const nextState = reducer(
        initialState,
        addItem({
          name: 'Leche'
        })
      );

      expect(nextState).toMatchSnapshot();
    });

    it('should respect the id if given', () => {
      const initialState = [
        {
          name: 'Milk',
          id: 'milk'
        }
      ];

      deepFreeze(initialState);

      const nextState = reducer(
        initialState,
        addItem({
          name: 'Leche',
          id: 'leche'
        })
      );

      expect(nextState).toMatchSnapshot();
    });
  });

  describe('removeItem', () => {
    it('should remove an item from the list', () => {
      const initialState = [
        {
          name: 'Milk',
          id: 'milk'
        },
        {
          name: 'Leche',
          id: 'leche'
        }
      ];

      deepFreeze(initialState);

      const nextState = reducer(initialState, removeItem('milk'));

      expect(nextState).toMatchSnapshot();
    });
  });

  describe('toggleItem', () => {
    it('should check the selected item from the list', () => {
      const initialState = [
        {
          name: 'Milk',
          id: 'milk',
          checked: false
        },
        {
          name: 'Leche',
          id: 'leche',
          checked: false
        }
      ];

      deepFreeze(initialState);

      const nextState = reducer(initialState, toggleItem('milk'));

      expect(nextState).toMatchSnapshot();
    });

    it('should uncheck the selected item from the list', () => {
      const initialState = [
        {
          name: 'Milk',
          id: 'milk',
          checked: false
        },
        {
          name: 'Leche',
          id: 'leche',
          checked: true
        }
      ];

      deepFreeze(initialState);

      const nextState = reducer(initialState, toggleItem('leche'));

      expect(nextState).toMatchSnapshot();
    });
  });

  describe('nameItem', () => {
    it('should set the name of the selected item from the list', () => {
      const initialState = [
        {
          name: 'Milk',
          id: 'milk'
        },
        {
          name: 'Leche',
          id: 'leche'
        }
      ];

      deepFreeze(initialState);

      const nextState = reducer(initialState, nameItem('milk', 'Cow Milk'));

      expect(nextState).toMatchSnapshot();
    });
  });

  describe('categorizeItem', () => {
    it('should set the category of the selected item from the list', () => {
      const initialState = [
        {
          name: 'Leche',
          id: 'leche'
        }
      ];

      deepFreeze(initialState);

      const nextState = reducer(
        initialState,
        categorizeItem('leche', 'asdasdfadf')
      );

      expect(nextState).toMatchSnapshot();
    });
  });

  it('can be used with reduce', () => {
    const actionQueue = [
      setItems([
        {
          name: 'Milk',
          id: 'milk'
        },
        {
          name: 'Goat Milk',
          id: 'goat-milk'
        }
      ]),
      addItem({
        name: 'Leche'
      }),
      nameItem('milk', 'Cow Milk'),
      categorizeItem('milk', 'dairy'),
      removeItem('goat-milk'),
      toggleItem('milk')
    ];

    const finalState = actionQueue.reduce(reducer, []);

    expect(finalState).toMatchSnapshot();
  });
});
