import { Leagues } from './leagues';
import { Teams } from './teams';

export interface CountryList {
	name: string;
	leagues: Leagues[];
	teams: Teams[];
}
