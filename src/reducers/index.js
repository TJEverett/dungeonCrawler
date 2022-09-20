import { combineReducers } from "redux";
import test_one from "./test_one";
import test_two from "./test_two";

const rootReducer = combineReducers({
  one: test_one,
  two: test_two
});

export default rootReducer;