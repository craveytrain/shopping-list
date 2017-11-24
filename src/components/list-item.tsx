import * as React from 'react';

export interface ListItemProps {
  title: string;
  checked: boolean;
}

const ListItem: React.SFC<ListItemProps> = ({title, checked}) => {
  return (
    <li>
      <input type="checkbox" checked={checked}/>{title}
    </li>
  );
};

export default ListItem;
