import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {dialogsReducer} from "./dialogs-reducer";




let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer

});
let store = createStore(reducers);
//@ts-ignore
window.store=store;

export default store;