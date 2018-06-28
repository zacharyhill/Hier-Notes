import React from 'react';
import Rnd from 'react-rnd';

const dragNDrop = (props) => {
  const $width = Number(props.note.dimensions.width);
  const $height = Number(props.note.dimensions.height);
  const $x = Number(props.note.position.x);
  const $y = Number(props.note.position.y);
  const noteId = String(props.note._id);

  return (
    <Rnd
      noteId={noteId}
      position={{
        x: $x,
        y: $y,
      }}
      size={{
        width: $width,
        height: $height,
      }}
      onDragStop={(e, d) => {
        const { x, y } = d;
        props.setNotePosition(noteId, { x, y });
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        const width = ref.offsetWidth;
        const height = ref.offsetHeight;
        props.setNoteSize(noteId, { width, height }, position);
      }}
    >
      {props.children}
    </Rnd>
  )
};

export default dragNDrop;