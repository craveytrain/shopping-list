import reducer from 'reducers/categories';
import {
  setCategories,
  addCategory,
  removeCategory,
  nameCategory
} from 'actions/categories';
import deepFreeze from 'deep-freeze';

describe('categories reducer', () => {
  describe('setCategories', () => {
    it('should set categories', () => {
      const initialState = [
        {
          name: 'Dairy',
          id: 'dairy'
        }
      ];

      deepFreeze(initialState);

      const nextState = reducer(
        initialState,
        setCategories([
          {
            name: 'Meat'
          }
        ])
      );

      expect(nextState).toMatchSnapshot();
    });
  });

  describe('addCategory', () => {
    it('should add a category to the list', () => {
      const initialState = [
        {
          name: 'Dairy',
          id: 'dairy'
        }
      ];

      deepFreeze(initialState);

      const nextState = reducer(
        initialState,
        addCategory({
          name: 'Meat',
          id: 'meat'
        })
      );

      expect(nextState).toMatchSnapshot();
    });
  });

  describe('removeCategory', () => {
    it('should remove a category from the list', () => {
      const initialState = [
        {
          name: 'Dairy',
          id: 'dairy'
        },
        {
          name: 'Meat',
          id: 'meat'
        }
      ];

      deepFreeze(initialState);

      const nextState = reducer(initialState, removeCategory('dairy'));

      expect(nextState).toMatchSnapshot();
    });
  });

  describe('nameCategory', () => {
    it('should set the name of the selected category from the list', () => {
      const initialState = [
        {
          name: 'Dairy',
          id: 'dairy'
        },
        {
          name: 'Meat',
          id: 'meat'
        }
      ];

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
      setCategories([
        {
          name: 'Dairy',
          id: 'dairy'
        },
        {
          name: 'Produce',
          id: 'produce'
        }
      ]),
      addCategory({
        name: 'Meat'
      }),
      nameCategory('dairy', 'Milk & Cheese'),
      removeCategory('produce')
    ];

    const finalState = actionQueue.reduce(reducer, []);

    expect(finalState).toMatchSnapshot();
  });
});
