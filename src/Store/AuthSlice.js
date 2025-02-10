import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    
        name:"auth",
        initialState:{
            isLoggedIn:false,
            user:null
        },
        reducers:{
            setLoggedIn:function(state,action){
                state.isLoggedIn=true
                state.user=action.payload
            },
            setLoggedOut:function(state){
                state.isLoggedIn=false
                state.user=null
            },

                }
})

export const{setLoggedIn,setLoggedOut}=AuthSlice.actions;
export default AuthSlice.reducer;