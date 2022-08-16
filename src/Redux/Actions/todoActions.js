import * as actionTypes from '../Constants/todoConstants';

import API from '../../API/Todo';

export const getTodos = () => async dispatch => {
	try {
		dispatch({ type: actionTypes.GET_TODOS_REQUEST });
		const data = await API.getTodoList();
		dispatch({
			type: actionTypes.GET_TODOS_SUCCESS,
			payload: JSON.stringify(data),
		});
	} catch (error) {
		dispatch({
			type: actionTypes.GET_TODOS_FAIL,
			payload:
				error.response && error.response.data.mesage
					? error.response.data.mesage
					: error.mesage,
		});
	}
};

export const getTodo = id => async dispatch => {
	try {
		dispatch({ type: actionTypes.GET_TODO_DETAILS_REQUEST });
		const data = await API.getTodoDetail(id);
		dispatch({
			type: actionTypes.GET_TODO_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: actionTypes.GET_TODO_DETAILS_FAIL,
			payload:
				error.response && error.response.data.mesage
					? error.response.data.mesage
					: error.mesage,
		});
	}
};

export const editTodo = todo => async dispatch => {
	try {
		dispatch({ type: actionTypes.EDIT_TODO_REQUEST });
		const data = await API.editTodo(todo);
		dispatch({ type: actionTypes.EDIT_TODO_SUCCESS, payload: data });
		dispatch(getTodo(todo.id));
	} catch (error) {
		dispatch({
			type: actionTypes.EDIT_TODO_FAIL,
			payload:
				error.response && error.response.data.mesage
					? error.response.data.mesage
					: error.mesage,
		});
	}
};

export const addTodo = todo => async dispatch => {
	try {
		dispatch({ type: actionTypes.ADD_TODO_REQUEST });
		const data = await API.addTodo(todo);
		dispatch({ type: actionTypes.ADD_TODO_SUCCESS, payload: data });
		dispatch(getTodos());
	} catch (error) {
		dispatch({
			type: actionTypes.ADD_TODO_FAIL,
			payload:
				error.response && error.response.data.mesage
					? error.response.data.mesage
					: error.mesage,
		});
	}
};

export const updateStatus = (id, status) => async dispatch => {
	try {
		dispatch({ type: actionTypes.UPDATE_STATUS_TODO_REQUEST });
		const data = await API.updateStatusTodo(id, status);
		dispatch({
			type: actionTypes.UPDATE_STATUS_TODO_SUCCESS,
			payload: data,
		});
		dispatch(getTodos());
	} catch (error) {
		dispatch({
			type: actionTypes.UPDATE_STATUS_TODO_FAIL,
			payload:
				error.response && error.response.data.mesage
					? error.response.data.mesage
					: error.mesage,
		});
	}
};

export const deleteTodoById = id => async dispatch => {
	try {
		dispatch({ type: actionTypes.DELETE_TODO_REQUEST });
		const data = await API.deleteTodo(id);
		dispatch({
			type: actionTypes.DELETE_TODO_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: actionTypes.DELETE_TODO_FAIL,
			payload:
				error.response && error.response.data.mesage
					? error.response.data.mesage
					: error.mesage,
		});
	}
};
