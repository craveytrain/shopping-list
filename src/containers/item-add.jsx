import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'rmwc/TextField';
import Button from 'rmwc/Button';
import { connect } from 'react-redux';
import { addItem } from 'actions/items';

export const AddItem = ({dispatch}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const input = e.target.newItem;
    const value = input.value.trim();

    if (!value) {
      return;
    }

    dispatch(addItem(value));
    input.value = '';
  };

  return (
    <div>
      <form
        onSubmit={onSubmit}
      >
        <TextField label="Item..." name="newItem" />

        <Button type="submit">
          Add Item
        </Button>
      </form>
    </div>
  );
};

AddItem.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(AddItem);
