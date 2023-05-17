import { SignInFail, SignInStart, SignInSuccess } from './actionTypes';

import axios from 'axios';
import { Dispatch } from 'redux';

export const Login =
	(email: string, password: string) => async (dispatch: Dispatch) => {
		dispatch(<SignInStart>{ type: 'SIGN_IN_START' });
		try {
			const requestData = { email, password };

			const response = await axios.post('link/Login', requestData); //TODO: Colocar Endpoint

			dispatch(<SignInSuccess>{
				type: 'SIGN_IN_SUCCESS',
				payload: response.data,
			});
		} catch {
			dispatch(<SignInFail>{
				type: 'SIGN_IN_FAIL',
				payload: 'Não foi possível realizar Login',
			});
		}
	};
