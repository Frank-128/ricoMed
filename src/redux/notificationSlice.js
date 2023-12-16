import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    type:"",
    message:"",
    status:false
}
const notificationSlice = createSlice({
    name:'notfications',
    initialState : initialState,
    reducers:{
        createNotification :(state,{type,payload})=>{
            console.log(payload)
            state.message = payload.message 
            state.type = payload.type 
            state.status = true

        },
        removeNotification : (state,action)=>{
            return initialState
        }

    }


})

export default notificationSlice.reducer

export const {createNotification,removeNotification} = notificationSlice.actions