import reducer from 'reducers/items';
import {
  addItem,
  removeItem,
  toggleItem,
  nameItem,
  categorizeItem
} from 'actions/items';
import deepFreeze from 'deep-freeze';

describe('items reducer', () => {
  describe('addItem', () => {
    it('should add an item to the list', () => {
      const nextState = reducer(
        {},
        addItem({
          name: 'Leche'
        })
      );

      expect(nextState).toMatchSnapshot();
    });

    it('should respect the id if given', () => {
      const nextState = reducer(
        {},
        addItem({
          name: 'Leche',
          id: 'leche'
        })
      );

      expect(nextState).toMatchSnapshot();
    });

    it('should add an item by string', () => {
      const nextState = reducer(
        {},
        addItem('Leche')
      );

      expect(nextState).toMatchSnapshot();
    });
  });

  describe('removeItem', () => {
    it('should remove an item from the list', () => {
      const initialState = {
        byId: {
          milk: {
            name: 'Milk'
          },
          leche: {
            name: 'Leche'
          }
        },
        allIds: [ 'milk', 'leche' ]
      };

      deepFreeze(initialState);

      const nextState = reducer(initialState, removeItem('milk'));

      expect(nextState).toMatchSnapshot();
    });
  });

  describe('toggleItem', () => {
    it('should check the selected item from the list', () => {
      const initialState = {
        byId: {
          milk: {
            name: 'Milk',
            checked: false
          },
          leche: {
            name: 'Leche',
            checked: false
          }
        },
        allIds: [ 'milk', 'leche' ]
      };

      deepFreeze(initialState);

      const nextState = reducer(initialState, toggleItem('milk'));

      expect(nextState).toMatchSnapshot();
    });

    it('should uncheck the selected item from the list', () => {
      const initialState = {
        byId: {
          milk: {
            name: 'Milk',
            checked: false
          },
          leche: {
            name: 'Leche',
            checked: true
          }
        },
        allIds: [ 'milk', 'leche' ]
      };

      deepFreeze(initialState);

      const nextState = reducer(initialState, toggleItem('leche'));

      expect(nextState).toMatchSnapshot();
    });
  });

  describe('nameItem', () => {
    it('should set the name of the selected item from the list', () => {
      const initialState = {
        byId: {
          milk: {
            name: 'Milk'
          },
          leche: {
            name: 'Leche'
          }
        },
        allIds: [ 'milk', 'leche' ]
      };

      deepFreeze(initialState);

      const nextState = reducer(initialState, nameItem('milk', 'Cow Milk'));

      expect(nextState).toMatchSnapshot();
    });
  });

  describe('categorizeItem', () => {
    it('should set the categoryId of the selected item from the list', () => {
      const initialState = {
        byId: {
          leche: {
            name: 'Leche'
          }
        },
        allIds: [ 'leche' ]
      };

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
      addItem({
        id: 'milk',
        name: 'Milk'
      }),
      addItem({
        id: 'goatMilk',
        name: 'Goat Milk'
      }),
      addItem({
        name: 'Leche'
      }),
      nameItem('milk', 'Cow Milk'),
      categorizeItem('milk', 'dairy'),
      removeItem('goatMilk'),
      toggleItem('milk')
    ];

    const finalState = actionQueue.reduce(reducer, {});

    expect(finalState).toMatchSnapshot();
  });
});
