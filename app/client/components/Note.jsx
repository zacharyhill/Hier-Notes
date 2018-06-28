import React from 'react';
import DragNDrop from './DragNDrop.jsx';
import NoteMenu from './NoteMenu.jsx';

const note = (props) => {
  return (
    // wrap in resizable drag n drop component
    <NoteMenu
      deleteNote={props.deleteNote}
      id={props.note._id}
      notebook={props.note.notebook}
      parent={props.note.parent}
    >
      <DragNDrop
        note={props.note}
        setNotePosition={props.setNotePosition}
        setNoteSize={props.setNoteSize}
      >
        <div style={props.noteStyle}>
          {props.note.text}
        </div>
      </DragNDrop>
    </NoteMenu>
  );
};

export default note;
