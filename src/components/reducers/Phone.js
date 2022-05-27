import { createSlice } from "@reduxjs/toolkit";

export const phoneSlice = createSlice({
    name: 'phoner',
    initialState:{
        phones: false
    },

    reducers:{
        isCorrect:(state)=>{
            state.phones = true;
        },

        isNcorrect:(state)=>{
            state.phones = false;
        }

    }
});

export const {isCorrect, isNcorrect}= phoneSlice.actions;

export default phoneSlice.reducer;