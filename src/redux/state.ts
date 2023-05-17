import {
	AccountState,
	InitialAccountState,
} from '../features/Accoount/redux/state';
import {
	AuthenticationState,
	InitialAuthenticationState,
} from '../features/Authentication/redux/state';
import {
	InitialOnboardingState,
	OnboardingState,
} from '../features/Onboarding/redux/state';

export type StoreState = {
	authentication: AuthenticationState;
	onboarding: OnboardingState;
	account: AccountState;
};

export const initialStoreState = {
	authentication: new InitialAuthenticationState(),
	onboarding: new InitialOnboardingState(),
	account: new InitialAccountState(),
};

export type GetState = StoreState;
export type UpdateSelectedTags = StoreState;
