import * as React from 'react';
import { connect } from 'react-redux';
import { addItem, AddItemAction } from 'actions/items';

export const AddItem = ({dispatch}: {dispatch: any}) => {
  let input: any;

  const onSubmit = (e: any) => {
    e.preventDefault();

    const value = input.value.trim();

    if (!value) {
      return;
    }

    dispatch(addItem(value));
    input.value = '';
  };

  const inputRef = (i: any) => {
    input = i;
  };

  return (
    <div>
      <form
        onSubmit={onSubmit}
      >
        <input
          ref={inputRef}
        />
        <button type="submit">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default connect()(AddItem);
