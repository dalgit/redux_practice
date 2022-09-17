import { combineReducers, createStore } from "redux";
import counterReducer from "./counter";

//sliceReducer들을 하나의 rootReducer로 combine
const rootReducer = combineReducers({
  count: counterReducer,
});

const store = createStore(rootReducer);

export default store;
