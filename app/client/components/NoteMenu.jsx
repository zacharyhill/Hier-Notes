import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-3';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
 
const menuStyle = {
  backgroundColor: 'rgba(249, 249, 249, 0.9)',
  borderRaidus: '3px',
  border: '1px solid #999999',
  color: '#505050',
  cursor: 'pointer',
  fontFamily: 'Cabin',
  fontSize: '1rem',
  fontWeight: '900',
  padding: '7px 15px',
  textTransform: 'uppercase',
};

const noteMenu = (props) => {
  const deleteNote = () => {
    props.deleteNote(props.id);
  };
  const deleteStyle = {
    color: '#b23030'
  };
  const exploreStyle = {
    color: '#404040',
  };
  const notebookRoute = `/${String(props.notebook)}/`;
  return (
    <div>
      <ContextMenuTrigger id={props.id}>
        {props.children}
      </ContextMenuTrigger>
 
      <ContextMenu id={props.id} style={menuStyle}>
        <MenuItem className="menuItem">
          <Link
            to={notebookRoute}
            style={{textDecoration: 'none'}} 
          >
            <span style={exploreStyle}>
              explore
            </span>
          </Link>
        </MenuItem>
        <hr />
        <MenuItem onClick={deleteNote} className="menuItem delete">
          <span style={deleteStyle}>delete</span>
        </MenuItem>
      </ContextMenu>
    </div>
  );
};

export default noteMenu;