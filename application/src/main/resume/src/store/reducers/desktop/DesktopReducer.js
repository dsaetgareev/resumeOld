const ADD_DESKTOP = 'ADD_DESKTOP';
const UPDATE_HEADING_TEXT = 'UPDATE_HEADING_TEXT';
const UPDATE_BODY_TEXT = 'UPDATE_BODY_TEXT';
const CHANGE_EDITABLE = 'CHANGE_EDITABLE';
const UPDATE_DESKTOP = 'UPDATE_DESKTOP';

let initState = {
    desktopPage: {
        id: 1,
        editable: true,
        heading: 'Заголовок',
        body: 'Перевод с английского, немецкого, французского, испанского, польского, турецкого и других языков на русский и обратно. Возможность переводить ...'

    }
};

const desktopReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case ADD_DESKTOP:
            let addCopyState = {
                desktopPage: {
                    id: 0,
                    editable: true,
                    heading: 'Введите заголовок',
                    body: 'Введите тексе'
                }
            };
            return addCopyState;
        case UPDATE_HEADING_TEXT:
            let updateCopyState = {...state};
            updateCopyState.desktopPage.heading = action.newText;
            return updateCopyState;
        case UPDATE_BODY_TEXT:
            let updateBodyCopyState = {...state};
            updateBodyCopyState.desktopPage.body = action.newText;
            return updateBodyCopyState;
        case CHANGE_EDITABLE:
            let updateEditableCopyState = {...state};
            updateEditableCopyState.desktopPage.heading = action.newHeading;
            updateEditableCopyState.desktopPage.body = action.newBody;
            updateEditableCopyState.desktopPage.editable = action.newEditable;
            return updateEditableCopyState;
        case UPDATE_DESKTOP:
            let updateDesktopCopyState = {...state};
            updateDesktopCopyState.desktopPage.id = action.state.id;
            updateDesktopCopyState.desktopPage.heading = action.state.desktopPage.heading;
            updateDesktopCopyState.desktopPage.body = action.state.desktopPage.body;
            updateDesktopCopyState.desktopPage.editable = action.state.desktopPage.editable;
            return updateDesktopCopyState;
        default:
            return state;

    }
};

export const addTextActionCreator = () => {
    return {
        type: ADD_DESKTOP
    }
};

export const updateHeadingTextActionCreator = (text) => {
    return {
        type: UPDATE_HEADING_TEXT,
        newText: text
    }
};

export const updateBodyTextActionCreator = (text) => {
    return {
        type: UPDATE_BODY_TEXT,
        newText: text
    }
};

export const updateEditableActionCreator = (headingText, bodyText, editable) => {
    return {
        type: CHANGE_EDITABLE,
        newHeading: headingText,
        newBody: bodyText,
        newEditable: editable
    }
};

export const updateDesktopActionCreator = (state) => {
    return {
        type: UPDATE_DESKTOP,
        state: state
    }
};

export default desktopReducer;