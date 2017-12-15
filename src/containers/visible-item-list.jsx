import { connect } from 'react-redux';
import { toggleItem } from 'actions/items';
import ItemList from 'components/item-list';

const getVisibleItems = (items, filter) => {
  const visibleItems = items.allIds.map(id => items.byId[id]);
  switch (filter) {
    case 'SHOW_CHECKED':
      return visibleItems.filter(i => i.checked);
    case 'SHOW_UNCHECKED':
      return visibleItems.filter(i => !i.checked);
    case 'SHOW_ALL':
    default:
      return visibleItems;
  }
};

const mapStateToProps = (state) => ({
  items: getVisibleItems(state.items, state.filters.visibility)
});

const mapDispatchToProps = (dispatch) => ({
  onItemClick: id => dispatch(toggleItem(id))
});

const VisibleItemList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);

export default VisibleItemList;
