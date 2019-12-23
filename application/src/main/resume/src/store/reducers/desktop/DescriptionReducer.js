const ADD_DESC = 'ADD_DESC';
const UPDATE_DESC_TEXT = 'UPDATE_DESC_TEXT';
const CHANGE_DESC_EDITABLE = 'CHANGE_DESC_EDITABLE';

let initState = {
    descPage: {
        id: 1,
        editable: true,
        desc: 'Введите описание объекта'
    }
};

const descriptionReducer = (state = initState, action = {}) => {

    switch (action.type) {
        case ADD_DESC:
            let addCopyState = {
                descPage: {
                    id: 1,
                    editable: true,
                    desc: 'Введите описание'
                }
            };
            return addCopyState;
        case UPDATE_DESC_TEXT:
            let updateBodyCopyState = {...state};
            updateBodyCopyState.descPage.desc = action.newDesc;
            return updateBodyCopyState;
        case CHANGE_DESC_EDITABLE:
            let updateEditableCopyState = {...state};
            updateEditableCopyState.descPage.desc = action.newDesc;
            updateEditableCopyState.descPage.editable = action.newEditable;
            return updateEditableCopyState;
        default:
            return state;

    }
};

export const addDescTextActionCreator = () => {
    return {
        type: ADD_DESC
    }
};
export const updateDescTextActionCreator = (newDesc) => {
    return {
        type: UPDATE_DESC_TEXT,
        newDesc: newDesc
    }
};
export const updateDescEditableActionCreator = (newDesc, editable) => {
    return {
        type: CHANGE_DESC_EDITABLE,
        newDesc: newDesc,
        newEditable: editable
    }
};

export default descriptionReducer;