import { SignIn } from './models/signIn';

export enum AuthenticationActionTypes {
	SIGN_IN_START = 'SIGN_IN_START',
	SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
	SIGN_IN_FAIL = 'SIGN_IN_FAIL',

	UPDATE_USER_CREATION = 'UPDATE_USER_CREATION',
}

export interface SignInStart {
	type: 'SIGN_IN_START';
}
export interface SignInSuccess {
	type: 'SIGN_IN_SUCCESS';
	payload: SignIn;
}
export interface SignInFail {
	type: 'SIGN_IN_FAIL';
	payload: string;
}

export interface UpdateUserCreation {
	type: 'UPDATE_USER_CREATION';
}

export type AuthenticationActionType =
	| SignInStart
	| SignInSuccess
	| SignInFail
	| UpdateUserCreation;
