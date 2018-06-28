import React from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
 

const BoardMenu = (props) => {
  const boardMenuStyle = {
    backgroundColor: 'rgba(249, 249, 249, 0.9)',
    border: '1px solid #999999',
    borderRaidus: '3px',
    color: '#4CAF50',
    cursor: 'pointer',
    fontFamily: 'Cabin',
    fontWeight: '900',
    fontSize: '1rem',
    padding: '7px 15px',
    textTransform: 'uppercase',
  };

  const addNoteClick = () => {
    props.createEmptyNote();
  };

  return (
    <div>
      <ContextMenuTrigger id={"boardMenu"}>
        {props.children}
      </ContextMenuTrigger>
 
      <ContextMenu id="boardMenu" style={boardMenuStyle}>
        <MenuItem onClick={addNoteClick}>
          Add Note
        </MenuItem>
      </ContextMenu>
 
    </div>
  );
}

export default BoardMenu;