import * as actionTypes from '../Constants/todoConstants';

export const addTodoReducer = (state = { todo: {} }, action) => {
	switch (action.type) {
		case actionTypes.ADD_TODO_REQUEST:
			return {
				loading: true,
			};
		case actionTypes.ADD_TODO_SUCCESS:
			return {
				loading: false,
				todo: action.payload,
			};
		case actionTypes.ADD_TODO_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const editTodoReducer = (state = { todo: {} }, action) => {
	switch (action.type) {
		case actionTypes.EDIT_TODO_REQUEST:
			return {
				loading: true,
			};
		case actionTypes.EDIT_TODO_SUCCESS:
			return {
				loading: false,
				todo: action.payload,
			};
		case actionTypes.EDIT_TODO_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const getTodosReducer = (state = { todos: [] }, action) => {
	switch (action.type) {
		case actionTypes.GET_TODOS_REQUEST:
			return { loading: true, todos: [] };
		case actionTypes.GET_TODOS_SUCCESS:
			return { loading: false, todos: JSON.parse(action.payload) };
		case actionTypes.GET_TODOS_FAIL:
			return { loading: false, todos: action.payload };
		default:
			return state;
	}
};

export const getTodoDetailsReducer = (state = { todo: {} }, action) => {
	switch (action.type) {
		case actionTypes.GET_TODO_DETAILS_REQUEST:
			return {
				loading: true,
			};
		case actionTypes.GET_TODO_DETAILS_SUCCESS:
			return {
				loading: false,
				todo: action.payload,
			};
		case actionTypes.GET_TODO_DETAILS_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const updateStatusTodo = (state = { todo: {} }, action) => {
	switch (action.type) {
		case actionTypes.UPDATE_STATUS_TODO_REQUEST:
			return {
				loading: true,
			};
		case actionTypes.UPDATE_STATUS_TODO_SUCCESS:
			return {
				loading: false,
				todo: action.payload,
			};
		case actionTypes.UPDATE_STATUS_TODO_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const deleteTodo = (state = {}, action) => {
	switch (action.type) {
		case actionTypes.DELETE_TODO_REQUEST:
			return { loading: true };
		case actionTypes.DELETE_TODO_SUCCESS:
			return { loading: false, success: true };
		case actionTypes.DELETE_TODO_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
