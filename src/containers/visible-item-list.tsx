import { connect } from 'react-redux';
import { toggleItem, Item } from 'actions/items';
import { Visability } from 'actions/filters';
import ItemList from 'components/item-list';
import { State } from 'reducers';

const getVisibleItems = (items: Item[], filter: Visability): Item[] => {
  switch (filter) {
    case 'SHOW_CHECKED':
      return items.filter(i => i.checked);
    case 'SHOW_UNCHECKED':
      return items.filter(i => !i.checked);
    case 'SHOW_ALL':
    default:
      return items;
  }
};

const mapStateToProps = (state: State): { items: Item[] } => ({
  items: getVisibleItems(state.items, state.filters.visibility)
});

const mapDispatchToProps = (dispatch: any): any => ({
  onItemClick: (id: string) => dispatch(toggleItem(id))
});

const VisibleItemList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);

export default VisibleItemList;
