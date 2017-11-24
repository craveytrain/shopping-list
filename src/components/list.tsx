import * as React from 'react';
import ListItem from 'components/list-item';
const { lists } = require('data');

export interface ListProps {
  match: any;
}

const List: React.SFC<ListProps> = ({match}) => {
  const selectedList = lists.find((list: any) => list.id === match.params.list);

  return (
    <div>
      <h1>{selectedList.title}</h1>
      <ul>
        {selectedList.items.map((item: any) => <ListItem key={item.id} {...item} />)}
      </ul>
    </div>
  );
};

export default List;
