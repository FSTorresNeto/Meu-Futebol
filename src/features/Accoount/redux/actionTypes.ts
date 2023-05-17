import { LeaguesTeams } from './models/leaguesTeams';

export enum AccountActionTypes {
	LEAGUES_TEAMS_START = 'LEAGUES_TEAMS_START',
	LEAGUES_TEAMS_SUCCESS = 'LEAGUES_TEAMS_SUCCESS',
	LEAGUES_TEAMS_FAIL = 'LEAGUES_TEAMS_FAIL',

	UPDATE_LEAGUES_TEAMS = 'UPDATE_LEAGUES_TEAMS',
}

export interface LeaguesTeamsStart {
	type: 'LEAGUES_TEAMS_START';
}

export interface LeaguesTeamsSuccess {
	type: 'LEAGUES_TEAMS_SUCCESS';
	payload: LeaguesTeams;
}

export interface LeaguesTeamsFail {
	type: 'LEAGUES_TEAMS_FAIL';
	payload: string;
}

export interface UpdateLeaguesTeams {
	type: 'UPDATE_LEAGUES_TEAMS';
}

export type AccountActionType =
	| LeaguesTeamsStart
	| LeaguesTeamsSuccess
	| LeaguesTeamsFail
	| UpdateLeaguesTeams;
