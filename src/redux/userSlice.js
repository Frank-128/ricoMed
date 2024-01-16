import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const checkAndFetchUser = ()=>{
  try{ const res =  Cookies.get('authenticatedUser')
  const loggedUser = JSON.parse(res)
   if (res){
        console.log(loggedUser)

       return loggedUser.user
   }
   return ""
}catch(err){
    console.log(err)
   }
}

const userSlice= createSlice({
    name:'user',
    initialState:{
        currentUser:checkAndFetchUser(),
        users:null,
        isLoading:'',
        error:false,


    },
    reducers:{
        setCurrentUser:(state,action)=>{
            
            state.currentUser = action.payload.res
           
               const {navigate} = action.payload
                
               
                
                 navigate(`/${state.currentUser.role}`)
                 
           
        },setUsers:(state,action)=>{
            state.users = action.payload
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

export const{setCurrentUser,setIsLoading,setError,setUsers} = userSlice.actions;
export default userSlice.reducer