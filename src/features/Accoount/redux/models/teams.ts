import { PlayersList } from './playersList';
import { TeamsStatistics } from './teamsStatistics';

export interface Teams {
	name: string;
	players: PlayersList[];
	statistics: TeamsStatistics[];
}
