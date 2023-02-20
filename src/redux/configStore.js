import { combineReducers, createStore } from "redux";
import { ThongTinMovieReducer } from "./ThongTinMovieReducer/ThongTinMovieReducer";

const rootReducer = combineReducers({
    // Chứa reducer
    ThongTinMovieReducer,    
})
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())