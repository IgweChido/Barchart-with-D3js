import { createSlice } from "@reduxjs/toolkit";

export const passwordSlice = createSlice({
    name: 'pass',
    initialState:{
        passwords: false
    },

    reducers:{
        isMatching:(state)=>{
            state.passwords = true;
        },

        isNmatching:(state)=>{
            state.passwords = false;
        }

    }
});

export const {isMatching, isNmatching}= passwordSlice.actions;

export default passwordSlice.reducer;