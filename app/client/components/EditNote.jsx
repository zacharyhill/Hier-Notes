import React, { Component } from 'react';
import DragNDrop from './DragNDrop.jsx';
import NoteMenu from './NoteMenu.jsx';

class EditNote extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      writingNote: false,
      namingNotebook: true,
    };
  }

  listenForKeyBindings(event) {
    // listen for key combo: <shift+enter>
    if (event.nativeEvent.keyCode === 13) {
      if(event.nativeEvent.shiftKey){
        event.preventDefault();
        const editedNote = { ...this.props.note };
        if (this.state.writingNote) {
          editedNote.text = this.state.text;
          this.props.saveNote(editedNote);
          this.setState({ text: '' });
        } else if (this.state.namingNotebook) {
          editedNote.notebook = this.state.text;
          this.props.updateNote(editedNote);
          this.setState({
            writingNote: true,
            namingNotebook: false,
            text: '',
          });
        }
      }
    // listen for key <esc>
    } else if (event.keyCode === 27) {
      this.props.deleteNote('new');
    }
  }

  handleTextChange(event) {
    const text = event.target.value;
    this.setState({ text });
  }

  render() {
    const editNoteStyle = {
      ...this.props.noteStyle,
      display: 'flex',
      height: '250px',
      position: 'relative',
      top: this.props.note.position.y,
      left: this.props.note.position.x,
      width: '196px'
    };

    const textAreaStyle = {
      border: 'none',
      backgroundColor: 'transparent',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      outline: 'none',
      padding: 0,
      resize: 'none',
      width: '100%',
    };

    const textStyle = { 
      ...textAreaStyle,
      display: this.state.writingNote ? 'block' : 'none'
    };

    const notebookStyle = {
      ...textAreaStyle,
      display: this.state.namingNotebook ? 'block' : 'none',
      fontSize: '1.4rem'
    };
    
    return (
      <NoteMenu
        id={this.props.note._id}
      >
        <div style={editNoteStyle}>
          <textarea
            autoFocus={this.state.namingNotebook}
            onChange={this.handleTextChange.bind(this)}
            onKeyDown={this.listenForKeyBindings.bind(this)} // for escape key
            onKeyPress={this.listenForKeyBindings.bind(this)}
            placeholder="notebook-name"
            style={notebookStyle}
            value={this.state.text}
          />
          <textarea
            autoFocus={this.state.writingNote}
            onChange={this.handleTextChange.bind(this)}
            onKeyDown={this.listenForKeyBindings.bind(this)} // for escape key
            onKeyPress={this.listenForKeyBindings.bind(this)}
            placeholder="note text"
            style={textStyle}
            value={this.state.text}
          />
        </div>
      </NoteMenu>
    );
  }

}

export default EditNote;
