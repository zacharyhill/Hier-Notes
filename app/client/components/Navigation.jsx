import React from 'react';
import NavLink from './NavLink.jsx';

const navigation = (props) => {
  const notebooks = props.previousNotebooks;
  const latestNotebook = props.previousNotebooks[props.previousNotebooks.length - 1];
  if (latestNotebook !== props.notebook) {
    notebooks.push(props.notebook);
  }
  return notebooks.map((notebook) => (
    <NavLink
      itemStyle={props.itemStyle}
      key={notebook}
      notebook={notebook}
      enterNotebook={props.enterNotebook}  
    />
  ))
};



export default navigation;