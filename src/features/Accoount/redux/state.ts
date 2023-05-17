import { LeaguesTeams } from './models/leaguesTeams';
import { UserData } from './models/userData';

export interface AccountState {
	leaguesTeams?: LeaguesTeams;
	userData?: UserData;
	errorMessage?: string;
	success?: boolean;
}

export class InitialAccountState implements AccountState {
	loading?: true;
	errorMessage?: string;
	constructor(public leaguesTeams?: LeaguesTeams, public userData?: UserData) {}
}

export class StartAccountState implements AccountState {
	loading?: true;
	constructor(public leaguesTeams?: LeaguesTeams, public userData?: UserData) {}
}

export class SuccessAccountState implements AccountState {
	constructor(
		public leaguesTeams?: LeaguesTeams,
		public userData?: UserData,
		public loading?: boolean
	) {}
}

export class FailAccountState implements AccountState {
	constructor(
		public leaguesTeams?: LeaguesTeams,
		public userData?: UserData,
		public errorMessage?: string,
		public loading?: boolean
	) {}
}

export class UpdateAccountState implements AccountState {
	constructor(public leaguesTeams?: LeaguesTeams, public userData?: UserData) {}
}
