import { AccountActionType } from './actionTypes';
import {
	AccountState,
	InitialAccountState,
	StartAccountState,
	SuccessAccountState,
	FailAccountState,
	UpdateAccountState,
} from './state';

const InitialState: AccountState = new InitialAccountState();

export const accountReducer = (
	state = InitialState,
	action: AccountActionType
) => {
	switch (action.type) {
		case 'LEAGUES_TEAMS_START':
			return new StartAccountState(state.leaguesTeams, state.userData);

		case 'LEAGUES_TEAMS_SUCCESS':
			return new SuccessAccountState(action.payload);

		case 'LEAGUES_TEAMS_FAIL':
			return new FailAccountState(
				state.leaguesTeams,
				state.userData,
				action.payload,
				false
			);

		case 'UPDATE_LEAGUES_TEAMS':
			return new UpdateAccountState(state.leaguesTeams, state.userData);

		default:
			return state;
	}
};
