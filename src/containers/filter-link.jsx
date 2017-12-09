import { connect } from 'react-redux';
import { visibilityFilter } from 'actions/filters';
import ToggleLink from 'components/toggle-link';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.filters.visibility
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(visibilityFilter(ownProps.filter))
});

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleLink);

export default FilterLink;
