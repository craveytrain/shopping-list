import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'rmwc/List';

const Item = ({name, checked, onClick}) => (
  <ListItem
    style={{textDecoration: checked ? 'line-through' : 'none'}}
    onClick={onClick}
  >
    {name}
  </ListItem>
);

Item.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};

export default Item;
