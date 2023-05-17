import {
	LeaguesTeamsStart,
	LeaguesTeamsFail,
	LeaguesTeamsSuccess,
} from './actionTypes';

import axios from 'axios';
import { Dispatch } from 'redux';

export const Login =
	(email: string, password: string) => async (dispatch: Dispatch) => {
		dispatch(<LeaguesTeamsStart>{ type: 'LEAGUES_TEAMS_START' });
		try {
			const requestData = { email, password };

			const response = await axios.post('link/Login', requestData); //TODO: Colocar Endpoint

			dispatch(<LeaguesTeamsSuccess>{
				type: 'LEAGUES_TEAMS_SUCCESS',
				payload: response.data,
			});
		} catch {
			dispatch(<LeaguesTeamsFail>{
				type: 'LEAGUES_TEAMS_FAIL',
				payload: 'Não foi possível realizar Login',
			});
		}
	};
