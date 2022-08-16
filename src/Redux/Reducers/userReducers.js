import * as actionTypes from '../Constants/userConstants';

export const userLoginReducer = (state = {}, action) => {
	switch (action.type) {
		case actionTypes.USER_SIGNIN_REQUEST:
			return { loading: true };
		case actionTypes.USER_SIGNIN_SUCCESS:
			return { loading: false, userInfo: JSON.parse(action.payload) };
		case actionTypes.USER_SIGNIN_FAIL:
			return { loading: false, error: action.payload };
		case actionTypes.USER_SIGNOUT:
			return {};
		default:
			return state;
	}
};
