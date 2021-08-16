import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import usersReducer from "./users-reducer";


export type AppPropsType = ReturnType<typeof rootReducer>


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer

});

const store = createStore(rootReducer);
//@ts-ignore
window.store=store;

export default store;