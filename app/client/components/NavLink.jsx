import React from 'react';
import { Link } from 'react-router-3';

const NavLink = (props) => {

  const linkStyle = {
    color: 'inherit',
    textDecoration: 'none'
  };

  return (
    <Link
      to={props.notebook}
      onClick={() => {
        props.enterNotebook(props.notebook);
      }}
      style={linkStyle}
    >
      <span style={props.itemStyle}>
        {props.notebook}
      </span>
    </Link>
  );
  
};

export default NavLink;