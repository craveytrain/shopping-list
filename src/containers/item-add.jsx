import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItem } from 'actions/items';

export const AddItem = ({dispatch}) => {
  let input;

  const onSubmit = (e) => {
    e.preventDefault();

    const value = input.value.trim();

    if (!value) {
      return;
    }

    dispatch(addItem(value));
    input.value = '';
  };

  const inputRef = (i) => {
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

AddItem.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(AddItem);
