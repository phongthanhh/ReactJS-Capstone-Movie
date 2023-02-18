import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { bookTicketManageReducer } from './reducer/bookTicketManageReducer'
import { movieManagerReducer } from './reducer/movieManagerReducer'
import { userManageReducer } from './reducer/userManageReducer'

const rootReducer = combineReducers({
  // Chứa reducer
  movieManagerReducer,
  userManageReducer,
  bookTicketManageReducer
})
// export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware));

export const store = createStore(rootReducer, applyMiddleware(thunk))
