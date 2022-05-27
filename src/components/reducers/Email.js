// const emailReducer =(state = false, action)=>{

//     switch (action.type){
//         case 'IS_OK':
//             return !state;
//         default:
//             return state;
//     }
// }

// export default emailReducer;

import { createSlice } from "@reduxjs/toolkit";

export const emailSlice = createSlice({
    name: 'emailer',
    initialState:{
        emails: false
    },

    reducers:{
        isOk:(state)=>{
            state.emails = true;
        },

        isNok:(state)=>{
            state.emails = false;
        }

    }
});

export const {isOk, isNok }= emailSlice.actions;

export default emailSlice.reducer;