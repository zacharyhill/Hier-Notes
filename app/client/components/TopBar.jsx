import React from 'react';
import Navigation from './Navigation.jsx';

const topBar = (props) => {

  const itemStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    fontFamily: 'raleway',
    fontSize: '1.5rem',
    height: '55px',
    lineHeight: '55px',
    marginRight: '4px',
    padding: '8px 15px',
    textTransform: 'uppercase',
    width: '30%',
  };
  
  const headerStyle = {
    left: 0,
    position: 'absolute',
    zIndex: 2,
  };
  
  return (
    <header
      style={headerStyle}
    >
      <Navigation
        enterNotebook={props.enterNotebook}
        itemStyle={itemStyle}
        notebook={props.notebook}
        previousNotebooks={props.previousNotebooks}
      />
  </header>
  )
}

export default topBar;