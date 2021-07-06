import {combineReducers, createStore } from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});
export type RootStateType = ReturnType<typeof reducers>
export type StoreDispatchType = typeof store.dispatch

export let store = createStore(reducers);

// @ts-ignore
window.store = store