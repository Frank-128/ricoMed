import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import patientSlice from "./patientSlice";
import notificationSlice from "./notificationSlice";

const store = configureStore({
    reducer: combineReducers({
        "user":userSlice,
        "patient":patientSlice,
        "notification":notificationSlice
    })
});


export default store

