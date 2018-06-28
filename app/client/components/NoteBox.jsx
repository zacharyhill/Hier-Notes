import React from 'react';

import EditNote from './EditNote.jsx';
import Note from './Note.jsx'

const NoteBox = (props) => {

  const noteStyle = {
    backgroundColor: 'rgba(249, 249, 249, 0.95)',
    border: '1px solid #888888',
    borderRadius: '4px',
    boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.15)',
    fontFamily: 'Fjalla One',
    fontSize: '2rem',
    height: '100%',
    padding: '14px 26px',
    paddingBottom: '0px',
    marginBottom: '0px',
  };

  if (props.note._id === 'new') {
    return (
      <EditNote
        deleteNote={props.deleteNote}
        key={props.note._id}
        note={props.note}
        noteStyle={noteStyle}
        saveNote={props.saveNote}
        setNotePosition={props.setNotePosition}
        setNoteSize={props.setNoteSize}
        updateNote={props.updateNote}
      />
    );
  }
  return (
    <Note
      deleteNote={props.deleteNote}
      key={props.note._id}
      note={props.note}
      noteStyle={noteStyle}
      setNotePosition={props.setNotePosition}
      setNoteSize={props.setNoteSize}
    />
  );
};

export default NoteBox;