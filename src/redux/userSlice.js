import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const userSlice= createSlice({
    name:'user',
    initialState:{
        currentUser:'',
        isLoading:'',
        error:false

    },
    reducers:{
        setCurrentUser:(state,action)=>{
            
            state.currentUser = action.payload.res
           
               const {navigate} = action.payload
                
               
                
                 navigate(`/${state.currentUser.role}`)
                 
                Swal.fire({
                    icon:'success',
                    title:state.currentUser.name,
                    text:'Login successfully!',
                    timer:1500
                })
           
        },
        setIsLoading:(state,action)=>{
            state.isLoading = action.payload
        },
        setError:(state,action)=>{
            state.error=action.payload
            Swal.fire({
                icon:'error',
                title:'login failed',
                text:'incorrect credentials',
                footer:'<Link to="/">go back home</Link>'
              })
        }
    }
})

export const{setCurrentUser,setIsLoading,setError} = userSlice.actions;
export default userSlice.reducer