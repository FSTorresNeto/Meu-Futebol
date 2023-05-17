import { useDispatch } from 'react-redux';

import {
	CreateUserFail,
	CreateUserStart,
	UpdateUserCreation,
} from './actionTypes';

const dispatch = useDispatch();

export const CreateUser =
	() =>
	async (
		email: string,
		phoneNumber: number,
		userName: string,
		password: string
	) => {
		try {
			dispatch(<CreateUserStart>{ type: 'CREATE_USER_START' });
		} catch {
			dispatch(<CreateUserFail>{
				type: 'CREATE_USER_FAIL',
				payload: 'Não foi possível realizar a ação',
			});
		}
	};
