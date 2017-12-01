import * as React from 'react';

export interface ToggleLinkProps {
  active: boolean;
  children: any;
  onClick: () => void;
}

const ToggleLink: React.SFC<ToggleLinkProps> = ({active, children, onClick}) => {
  if (active) {
    return (
      <span>
        {children}
      </span>
    );
  }

  const clickHandler = (e: any) => {
    e.preventDefault();
    onClick();
  };

  return (
    <a href="" onClick={clickHandler}>{children}</a>
  );
};

export default ToggleLink;
