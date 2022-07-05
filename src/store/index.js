import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'


import { userReducer } from './reducers/user.reducer.js'
import { gigReducer } from './reducers/gig.reducer'
import { orderReducer } from './reducers/order.reducer.js'


const rootReducer = combineReducers({
    gigModule: gigReducer,
    userModule: userReducer,
    orderModule: orderReducer,
})



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))