import { CreateUser } from './models/createUser';

export interface OnboardingState {
	createUser?: CreateUser;
	errorMessage?: string;
}

export class InitialOnboardingState implements OnboardingState {
	constructor(public createUser?: CreateUser) {}
}

export class StartOnboardingState implements OnboardingState {
	constructor(public createUser?: CreateUser) {}
}

export class SuccessOnboardingState implements OnboardingState {
	constructor(public createUser?: CreateUser) {}
}

export class FailOnboardingState implements OnboardingState {
	constructor(public createUser?: CreateUser, public errorMessage?: string) {}
}

export class UpdateOnboardingState implements OnboardingState {
	constructor(public createUser?: CreateUser) {}
}
