import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/item';
import { List } from 'rmwc/List';

const ItemList = ({items, onItemClick}) => (
  <List>
    {items.map(item => <Item key={item.id} onClick={onItemClick.bind(this, item.id)} {...item} />)}
  </List>
);

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired
};

export default ItemList;
