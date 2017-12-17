import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TabBar, Tab } from 'rmwc/Tabs';
import { visibilityFilter } from 'actions/filters';

const visibilities = [
  {
    name: 'All',
    value: 'SHOW_ALL'
  },
  {
    name: 'Checked',
    value: 'SHOW_CHECKED'
  },
  {
    name: 'Unchecked',
    value: 'SHOW_UNCHECKED'
  }
];

export const ListTabBar = ({ visibilityIndex, onChange }) => {
  const listTab = vis => (<Tab key={vis.value}>{vis.name}</Tab>);

  return (<TabBar
    activeTabIndex={visibilityIndex || 0}
    onChange={onChange}
  >
    {visibilities.map(listTab)}
  </TabBar>);
};

ListTabBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  visibilityIndex: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  visibilityIndex: visibilities.findIndex(vis => vis.value === state.filters.visibility)
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(visibilityFilter(visibilities[e.target.value].value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTabBar);
