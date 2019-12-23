
import {connect} from "react-redux";
import Notes from "./Notes";
import {
    updateNotesEditableActionCreator,
    updateNotesTextActionCreator
} from "../../../../../store/reducers/desktop/NotesReducer";

let mapStateToPropsNotes = (state) => {

    return {
        notesPage: state.notesPage
    }
};
let mapDispatchToPropsNotes = (dispatch) => {
    return {
        updateNotes: (text) => {
            dispatch(updateNotesTextActionCreator(text));
        },
        updateNotesEditable: (newNotes, editable) => {
            dispatch(updateNotesEditableActionCreator(newNotes, editable));
        }
    };
};

let NotesContainer = connect(mapStateToPropsNotes,  mapDispatchToPropsNotes)(Notes);
export default NotesContainer;