import reducer from 'reducers/categories';
import {
  addCategory,
  removeCategory,
  nameCategory
} from 'actions/categories';
import deepFreeze from 'deep-freeze';

describe('categories reducer', () => {
  describe('addCategory', () => {
    it('should add a category to the list', () => {
      const nextState = reducer(
        {},
        addCategory({
          name: 'Meat'
        })
      );

      expect(nextState).toMatchSnapshot();
    });

    it('should add a category to the list with an id', () => {
      const nextState = reducer(
        {},
        addCategory({
          name: 'Meat',
          id: 'meat'
        })
      );

      expect(nextState).toMatchSnapshot();
    });

    it('should add a category to the list by string', () => {
      const nextState = reducer(
        {},
        addCategory('Meat')
      );

      expect(nextState).toMatchSnapshot();
    });
  });

  describe('removeCategory', () => {
    it('should remove a category from the list', () => {
      const initialState = {
        byId: {
          dairy: {
            name: 'Dairy'
          },
          meat: {
            name: 'Meat'
          }
        },
        allIds: [ 'dairy', 'meat' ]
      };

      deepFreeze(initialState);

      const nextState = reducer(initialState, removeCategory('dairy'));

      expect(nextState).toMatchSnapshot();
    });
  });

  describe('nameCategory', () => {
    it('should set the name of the selected category from the list', () => {
      const initialState = {
        byId: {
          dairy: {
            name: 'Dairy'
          },
          meat: {
            name: 'Meat'
          }
        },
        allIds: [ 'dairy', 'meat' ]
      };

      deepFreeze(initialState);

      const nextState = reducer(
        initialState,
        nameCategory('dairy', 'Milk & Cheese')
      );

      expect(nextState).toMatchSnapshot();
    });
  });

  it('can be used with reduce', () => {
    const actionQueue = [
      addCategory({
        id: 'dairy',
        name: 'Dairy'
      }),
      addCategory({
        name: 'Produce',
        id: 'produce'
      }),
      addCategory({
        name: 'Meat'
      }),
      nameCategory('dairy', 'Milk & Cheese'),
      removeCategory('produce')
    ];

    const finalState = actionQueue.reduce(reducer, {});

    expect(finalState).toMatchSnapshot();
  });
});
