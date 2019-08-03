import { combineReducers } from "redux";
import githubreducer from "./githubReducer";

const rootReducer = combineReducers({
  github: githubreducer
});

export default rootReducer;
