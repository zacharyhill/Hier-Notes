import store from '../store.js';
import api from '../api.js';

const { dispatch } = store;

export function createEmptyNote(mousePos) {
  const state = {
    ...store.getState()
  };
  const allNotes = {
    ...state.notes
  };
  const { x, y } = mousePos;
  const newNote = {
    _id: 'new',
    dimensions: { height: 250, width: 250 },
    parent: state.notebook,
    position: { x, y: y - 75 },
    text: '',
  };
  allNotes.new = newNote;
  dispatch({
    type: 'UPDATE_NOTES',
    payload: allNotes,
  });
};

export function deleteNote(id) {
  api.delete(id);
  const notes = {
    ...store.getState().notes
  };
  delete notes[id];
  dispatch({
    type: 'UPDATE_NOTES',
    payload: notes,
  });
};

export function loadNotes() {
  dispatch({
    type: 'FETCH_NOTES_START',
  });
  api.getAll().then((notes) => {
    const newNotes = {};
    // turn array into object for constant time lookups
    for (let note of notes.data) {
      newNotes[note._id] = note;
    }
    dispatch({
      type: 'FETCH_NOTES_COMPLETE',
      payload: newNotes,
    });
  }).catch((err) => {
    dispatch({
      type: 'FETCH_NOTES_ERROR',
      payload: err,
    });
  });
};

export function saveNote(note) {
  const allNotes = Object.assign({}, store.getState().notes);
  // add note to screen with temp id while api is processing
  allNotes['new'] = Object.assign({}, note);
  dispatch({
    type: 'FETCH_NOTES_COMPLETE',
    payload: allNotes,
  })
  api.add(note).then((response) => {
    const { id } = response.data;
    const allNotes = {
      ...store.getState().notes
    };
    const temp = {
      ...allNotes['new'],
      _id: id,
    };
    delete allNotes['new'];
    allNotes[id] = temp;
    dispatch({
      type: 'UPDATE_NOTES',
      payload: allNotes,
    });
  }).catch((err) => {
    dispatch({
      type: 'FETCH_NOTES_ERROR',
      payload: err,
    });
  });
};

export function setNotebook(notebook) {
  dispatch({
    type: 'SET_NOTEBOOK',
    payload: notebook || 'home',
  });
};

export function setNotePosition(id, pos) {
  const notes = {
    ...store.getState().notes,
  };
  notes[id].position = pos;
  if (id !== 'new') {
    api.updatePosition(id, pos);
  }
  dispatch({
    type: 'UPDATE_NOTES',
    payload: notes,
  })
}

export function setNoteSize(id, dimensions, position) {
  const notes = {
    ...store.getState().notes
  };
  notes[id].dimensions = dimensions;
  if (id !== 'new') {
    api.updateSize(id, dimensions, position);
  }
  dispatch({
    type: 'UPDATE_NOTES',
    payload: notes,
  });
}

export function updateNote(note) {
  const allNotes = {
    ...store.getState().notes
  };
  allNotes[note._id] = note;
  dispatch({
    type: 'UPDATE_NOTES',
    payload: allNotes,
  });
};

export function updatePreviousNotebooks(currentNotebook) {
  const state = {
    ...store.getState()
  };
  const previousNotebooks = [];
  let foundCurrent = false;
  for (let i = 0; i < state.previousNotebooks.length; i++) {
    const notebook = state.previousNotebooks[i];
    previousNotebooks.push(notebook);
    if (notebook === currentNotebook) {
      break;
    } 
  };
  dispatch({
    type: 'UPDATE_PREVIOUS_NOTEBOOKS',
    payload: previousNotebooks,
  });
};
