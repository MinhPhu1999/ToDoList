import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import Cookie from 'js-cookie';

import {
	getTodosReducer,
	getTodoDetailsReducer,
} from '../Reducers/todoReducers';
import { userLoginReducer } from '../Reducers/userReducers';

const reducer = combineReducers({
	getTodos: getTodosReducer,
	getTodoDetail: getTodoDetailsReducer,

	userLogin: userLoginReducer,
});

const middleware = [thunk];
const userInfo = Cookie.getJSON('userInfo') || null;

const INITIAL_STATE = { userLogin: { userInfo } };

const store = createStore(
	reducer,
	INITIAL_STATE,
	composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
