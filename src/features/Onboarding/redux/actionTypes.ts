import { CreateUser } from './models/createUser';

export enum OnboardingActionTypes {
	CREATE_USER_START = 'CREATE_USER_START',
	CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS',
	CREATE_USER_FAIL = 'CREATE_USER_FAIL',

	UPDATE_USER_CREATION = 'UPDATE_USER_CREATION',
}

export interface CreateUserStart {
	type: 'CREATE_USER_START';
}
export interface CreateUserSuccess {
	type: 'CREATE_USER_SUCCESS';
	payload: CreateUser;
}
export interface CreateUserFail {
	type: 'CREATE_USER_FAIL';
	payload: string;
}

export interface UpdateUserCreation {
	type: 'UPDATE_USER_CREATION';
}

export type OnboardingActionType =
	| CreateUserStart
	| CreateUserSuccess
	| CreateUserFail
	| UpdateUserCreation;
