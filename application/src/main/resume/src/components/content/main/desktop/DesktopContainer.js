import Desktop from "./Desktop";
import {connect} from "react-redux";
import {
    updateBodyTextActionCreator, updateEditableActionCreator,
    updateHeadingTextActionCreator
} from "../../../../store/reducers/desktop/DesktopReducer";

let mapStateToProps = (state) => {
    return {
        desktopPage: state.desktopPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateHeading: (text) => {
            dispatch(updateHeadingTextActionCreator(text));
        },
        updateBody: (text) => {
            dispatch(updateBodyTextActionCreator(text));
        },
        updateEditable: (headingText, bodyText, editable) => {
            dispatch(updateEditableActionCreator(headingText, bodyText, editable));
        }
    };
};


let DesktopContainer = connect(mapStateToProps, mapDispatchToProps)(Desktop);

export default DesktopContainer;