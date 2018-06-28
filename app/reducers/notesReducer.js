
const initialState = {
  previousNotebooks: [],
  notebook: 'home',
  notes: {},
};

const notesReducer = (prevState=initialState, action) => {
  const state = {
    ...prevState
  };

  switch(action.type) {
    case 'FETCH_NOTES_COMPLETE': {
      state.notes = action.payload;
      state.fetched = true;
      state.fetching = false;
      break;
    }
    case 'FETCH_NOTES_ERROR': {
      console.log('error', action.payload);
      state.error = action.payload;
      state.fetching = false;
      break;
    }
    case 'FETCH_NOTES_START': {
      state.fetching = true;
      break;
    }
    case 'SET_NOTEBOOK': {
      state.notebook = action.payload;
      break;
    }
    case 'UPDATE_NOTES': {
      state.notes = action.payload;
      break;
    }
    case 'UPDATE_PREVIOUS_NOTEBOOKS': {
      state.previousNotebooks = action.payload;
      break;
    }
    default: {
      break;
    }
  }
  return state;
};

export default notesReducer;
