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
    <ListItemText>{name}</ListItemText>
    <ListItemTextSecondary>{category}</ListItemTextSecondary>
  </ListItem>
);

Item.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  category: PropTypes.string,
  onClick: PropTypes.func
};

const mapStateToProps = (state, ownProps) => ({
  category: state.categories.find(category => ownProps.categoryId === category.id).name
});

export default connect(
  mapStateToProps
)(Item);
