import { combineReducers } from "redux";
import story from "./story/reducer";
import app from "./app/reducer";

const rootReducer = combineReducers({
  story,
  app
});

export default rootReducer;
