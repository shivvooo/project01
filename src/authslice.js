
import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    authenticationin: false,
    Loading:false,
    error:null
}
const authSlice = createSlice({

    name:"auth",
    initialState,

    reducers:{

      loginrequest(state){

        state.Loading=true;
      },
      loginsuccess(state,action){

console.log(action.payload);        
        if(action.payload ==="yes")
        {

        state.authenticationin = true;
        state.error = null;
      }
    },
      loginerror(state,action){

        state.Loading = false;
        state.action = action.payload;
        state.error = action.payload;
      }
    }
});

export const{loginrequest,loginsuccess,loginerror}= authSlice.actions;
export default authSlice.reducer;