import reducer from 'reducers/items';
import {
  setItems,
  addItem,
  removeItem,
  checkItem,
  uncheckItem,
  nameItem,
  categorizeItem
} from 'actions/items';
import * as deepFreeze from 'deep-freeze';

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

      const nextState = reducer(initialState, setItems([
        {
          name: 'Leche'
        }
      ]));

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

      const nextState = reducer(initialState, addItem({
        name: 'Leche',
        id: 'leche'
      }));

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

  describe('checkItem', () => {
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

      const nextState = reducer(initialState, checkItem('leche'));

      expect(nextState).toMatchSnapshot();
    });
  });

  describe('uncheckItem', () => {
    it('should uncheck the selected item from the list', () => {
      const initialState = [
        {
          name: 'Milk',
          id: 'milk',
          checked: true
        },
        {
          name: 'Leche',
          id: 'leche',
          checked: false
        }
      ];

      deepFreeze(initialState);

      const nextState = reducer(initialState, uncheckItem('milk'));

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

      const nextState = reducer(initialState, categorizeItem('leche', 'asdasdfadf'));

      expect(nextState).toMatchSnapshot();
    });
  });

  it('can be used with reduce', () => {
   const actionQueue = [
     setItems([
       {
         name: 'Milk',
         id: 'milk',
         checked: false
       },
       {
         name: 'Goat Milk',
         id: 'goat-milk'
       },
       {
         name: 'Sheep Milk',
         id: 'sheep-milk',
         checked: true
       }
     ]),
     addItem({
       name: 'Leche'
     }),
     nameItem('milk', 'Cow Milk'),
     categorizeItem('Leche', 'dairy'),
     removeItem('goat-milk'),
     checkItem('milk'),
     uncheckItem('sheep-milk')
   ];

   const finalState = actionQueue.reduce(reducer, []);

   expect(finalState).toMatchSnapshot();
});
