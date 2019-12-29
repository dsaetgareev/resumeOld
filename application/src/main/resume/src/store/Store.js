import {applyMiddleware, combineReducers, createStore} from "redux";
import desktopReducer from "./reducers/desktop/DesktopReducer";
import descriptionReducer from "./reducers/desktop/DescriptionReducer";
import notesReducer from "./reducers/desktop/NotesReducer";
import dataBaseReducer from "./reducers/desktop/DataBaseReducer";
import navReducer from "./reducers/nav/NavbarReducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers({
    desktopPage: desktopReducer,
    descPage: descriptionReducer,
    notesPage: notesReducer,
    pages: dataBaseReducer,
    titles: navReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;