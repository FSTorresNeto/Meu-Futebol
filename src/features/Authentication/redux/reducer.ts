import { AuthenticationActionType } from './actionTypes';
import {
	AuthenticationState,
	FailAuthenticationState,
	InitialAuthenticationState,
	StartAuthenticationState,
	SuccessAuthenticationState,
	UpdateAuthenticationState,
} from './state';

const InitialState: AuthenticationState = new InitialAuthenticationState();

export const authenticationReducer = (
	state = InitialState,
	action: AuthenticationActionType
) => {
	switch (action.type) {
		case 'SIGN_IN_START':
			return new StartAuthenticationState(state.signIn);

		case 'SIGN_IN_SUCCESS':
			return new SuccessAuthenticationState(action.payload);

		case 'SIGN_IN_FAIL':
			return new FailAuthenticationState(state.signIn, action.payload, false);

		case 'UPDATE_USER_CREATION':
			return new UpdateAuthenticationState(state.signIn);

		default:
			return state;
	}
};
