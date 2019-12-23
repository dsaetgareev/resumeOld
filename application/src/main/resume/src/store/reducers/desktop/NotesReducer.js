const ADD_NOTES = 'ADD_NOTES';
const UPDATE_NOTES_TEXT = 'UPDATE_NOTES_TEXT';
const CHANGE_NOTES_EDITABLE = 'CHANGE_NOTES_EDITABLE';

let initState = {
    notesPage: {
        id: 1,
        editable: true,
        notes: 'Введитеddd заметку'
    }
};

const notesReducer = (state = initState, action = {}) => {

    switch (action.type) {
        case ADD_NOTES:
            let addCopyState = {
                notesPage : {
                    id: 1,
                    editable: true,
                    notes: 'Введите заметку'
                }
            };
            return addCopyState;
        case UPDATE_NOTES_TEXT:
            let updateBodyCopyState = {...state};
            updateBodyCopyState.notesPage.notes = action.newNotes;
            return updateBodyCopyState;
        case CHANGE_NOTES_EDITABLE:
            let updateEditableCopyState = {...state};
            updateEditableCopyState.notesPage.notes = action.newNotes;
            updateEditableCopyState.notesPage.editable = action.newEditable;
            return updateEditableCopyState;
        default:
            return state;

    }
};

export const addNotesTextActionCreator = () => {
    return {
        type: ADD_NOTES
    }
};

export const updateNotesTextActionCreator = (newNotes) => {
    return {
        type: UPDATE_NOTES_TEXT,
        newNotes: newNotes
    }
};
export const updateNotesEditableActionCreator = (newNotes, editable) => {
    return {
        type: CHANGE_NOTES_EDITABLE,
        newNotes: newNotes,
        newEditable: editable
    }
};

export default notesReducer;