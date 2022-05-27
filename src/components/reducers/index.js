import emailReducer from "./Email";
import phoneReducer from "./Phone";
import passwordReducer from "./Password";

import { combineReducers } from "redux";

const allReducers = combineReducers({
    emails : emailReducer,
    phones : phoneReducer,
    passwords : passwordReducer
     
});

export default allReducers