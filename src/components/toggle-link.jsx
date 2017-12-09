import React from 'react';
import PropTypes from 'prop-types';

const ToggleLink = ({active, children, onClick}) => {
  if (active) {
    return (
      <span>
        {children}
      </span>
    );
  }

  const clickHandler = e => {
    e.preventDefault();
    onClick();
  };

  return (
    <a href="" onClick={clickHandler}>{children}</a>
  );
};

ToggleLink.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ToggleLink;
