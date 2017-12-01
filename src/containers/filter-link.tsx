import { connect } from 'react-redux';
import { visibilityFilter } from 'actions/filters';
import ToggleLink from 'components/toggle-link';
import { State  } from 'reducers';

const mapStateToProps = (state: State, ownProps: any) => ({
  active: ownProps.filter === state.filters.visibility
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  onClick: () => dispatch(visibilityFilter(ownProps.filter))
});

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleLink);

export default FilterLink;
