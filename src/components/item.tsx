import * as React from 'react';

export interface ItemProps {
  name: string;
  id: string;
  checked: boolean;
  category?: string;
  onClick: (event: any) => void;
}

const Item: React.SFC<ItemProps> = ({name, id, checked, category, onClick}) => (
  <li
    style={{textDecoration: checked ? 'line-through' : 'none'}}
    onClick={onClick}
  >
    {name}
  </li>
);

export default Item;
