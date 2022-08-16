import * as actionTypes from '../Constants/userConstants';
import Cookie from 'js-cookie';

import API from '../../API/Todo';

export const login = (email, password) => async dispatch => {
	try {
		dispatch({ type: actionTypes.USER_SIGNIN_REQUEST });
		const data = await API.signIn(email, password);
		dispatch({
			type: actionTypes.USER_SIGNIN_SUCCESS,
			payload: JSON.stringify(data),
		});
		Cookie.set('userInfo', JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: actionTypes.USER_SIGNIN_FAIL,
			payload:
				error.response && error.response.data.mesage
					? error.response.data.mesage
					: error.mesage,
		});
	}
};

export const logout = () => dispatch => {
	Cookie.remove('userInfo');
	Cookie.remove('cart');
	dispatch({ type: actionTypes.USER_SIGNOUT });
};
