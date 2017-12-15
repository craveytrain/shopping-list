import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListItem, ListItemText, ListItemTextSecondary } from 'rmwc/List';

export const Item = ({name, checked, category, onClick}) => (
  <ListItem
    ripple={true}
    style={{textDecoration: checked ? 'line-through' : 'none'}}
    onClick={onClick}
  >
    <ListItemText>
      {name}
      <ListItemTextSecondary>{category}</ListItemTextSecondary>
    </ListItemText>
  </ListItem>
);

Item.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  category: PropTypes.string,
  onClick: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
  if (ownProps.categoryId) {
    const category = state.categories.byId[ownProps.categoryId];
    if (category.name) {
      return {
        category: category.name
      };
    }
  }

  return {};
};

export default connect(
  mapStateToProps
)(Item);
