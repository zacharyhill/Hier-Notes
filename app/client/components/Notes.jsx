import React, { Component } from 'react';
import NoteBox from './NoteBox.jsx';

const Notes = (props) => {
  document.body.style.margin = '0';
  const boardStyle = {
    backgroundAttachment: 'fixed',
    backgroundImage: 'url("/images/cat1.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100vw 100vh',
    height: '100%',
    overflow: 'auto',
    position: 'fixed',
    width: '100%',
    paddingBottom: '0',
  };
  
  return (
    <div
      style={boardStyle}
      onMouseMove={props.trackMouse}
    >
      {Object.values(props.notes).map((note) => {
        if (note.parent === props.notebook) {
          return (
            <NoteBox
              deleteNote={props.deleteNote}
              key={note._id}
              note={note}
              saveNote={props.saveNote}
              setNotePosition={props.setNotePosition}
              setNoteSize={props.setNoteSize}
              updateNote={props.updateNote}
            />
          );
        }
      }
    )}
  </div>);
};

export default Notes;