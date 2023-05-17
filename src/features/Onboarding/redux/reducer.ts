import { OnboardingActionType } from './actionTypes';
import {
	OnboardingState,
	FailOnboardingState,
	StartOnboardingState,
	SuccessOnboardingState,
	UpdateOnboardingState,
	InitialOnboardingState,
} from './state';

const InitialState: OnboardingState = new InitialOnboardingState();

export const onboardingReducer = (
	state = InitialState,
	action: OnboardingActionType
) => {
	switch (action.type) {
		case 'CREATE_USER_START':
			return new StartOnboardingState(state.createUser);
		case 'CREATE_USER_SUCCESS':
			return new SuccessOnboardingState(state.createUser);

		case 'CREATE_USER_FAIL':
			return new FailOnboardingState(state.createUser, action.payload);

		case 'UPDATE_USER_CREATION':
			return new UpdateOnboardingState(state.createUser);

		default:
			return state;
	}
};
