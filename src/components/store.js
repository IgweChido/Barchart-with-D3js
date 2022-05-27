import { configureStore } from "@reduxjs/toolkit";
import emailSlice from './reducers/Email'
import  passwordSlice  from "./reducers/Password";
import  phoneSlice  from "./reducers/Phone";


const store = configureStore({
    reducer:{
        email: emailSlice,
        phone: phoneSlice,
        password: passwordSlice
    }
})

export default store