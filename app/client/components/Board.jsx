import React, { Component } from 'react';
import { connect } from 'react-redux';

import BoardMenu from './BoardMenu.jsx';
import Notes from './Notes.jsx';
import TopBar from './TopBar.jsx';

import api from '../../api.js';
import {
  createEmptyNote,
  deleteNote,
  loadNotes,
  setNotebook,
  saveNote,
  setNotePosition,
  setNoteSize,
  updateNote,
  updatePreviousNotebooks,
} from '../../actions/noteActions.js';


class Board extends Component {

  _onMouseMove(e) {
    this.mousePos = { x: e.screenX, y: e.screenY };
  }
  
  componentDidMount() {
    loadNotes(this.props.dispatch);
    // for future use
    this.loadUserConfig();
  }
  
  createEmptyNote() {
    createEmptyNote(this.mousePos);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.notebook !== nextProps.params.notebook) {
      setNotebook(nextProps.params.notebook);
    }
  }

  enterNotebook(notebook) {
    setNotebook(notebook);
    updatePreviousNotebooks(notebook);
  }

  loadUserConfig() {
    // add user document to mongo for wallpaper / font settings
  }

  render() {
    return (
      <BoardMenu
        createEmptyNote={this.createEmptyNote.bind(this)}
      >
        <TopBar
          enterNotebook={this.enterNotebook.bind(this)}
          notebook={this.props.notebook}
          previousNotebooks={this.props.previousNotebooks}
        />
        <Notes
          deleteNote={deleteNote}
          notebook={this.props.notebook}
          notes={this.props.notes}
          saveNote={saveNote}
          setNotePosition={setNotePosition}
          setNoteSize={setNoteSize}
          trackMouse={this._onMouseMove.bind(this)}
          updateNote={updateNote}
        />
      </BoardMenu>
    );
  }

}

const mapStateToProps = function(state) {
  return {
    notes: state.notes,
    notebook: state.notebook,
    previousNotebooks: state.previousNotebooks,
  };
};

export default connect(mapStateToProps)(Board);
