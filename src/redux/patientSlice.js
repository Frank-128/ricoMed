import { createSlice } from "@reduxjs/toolkit";

const patientSlice = createSlice({
    name:"patient",
    initialState:{
        is_adding_patient:false,
    },
    reducers:{
        add_patient:(state,action)=>{
             state.is_adding_patient = true
        },
        remove_add_patient:(state,action)=>{
            state.is_adding_patient = false
       }
    }
})

export const {add_patient,remove_add_patient} = patientSlice.actions
export default patientSlice.reducer