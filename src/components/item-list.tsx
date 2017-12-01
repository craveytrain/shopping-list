import * as React from 'react';
import Item, { ItemProps } from 'components/item';

export interface ItemListProps {
  items?: ItemProps[];
  onItemClick?: (id: string) => void;
}

const ItemList: React.SFC<ItemListProps> = ({items, onItemClick}) => (
  <ul>
    {items.map(item => <Item key={item.id} onClick={onItemClick.bind(this, item.id)} {...item} />)}
  </ul>
);

export default ItemList;
