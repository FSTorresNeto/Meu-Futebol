import { SignIn } from './models/signIn';

export interface AuthenticationState {
	signIn?: SignIn;
	errorMessage?: string;
	success?: boolean;
}

export class InitialAuthenticationState implements AuthenticationState {
	loading?: true;
	errorMessage?: string;
	constructor(public signIn?: SignIn) {}
}

export class StartAuthenticationState implements AuthenticationState {
	loading?: true;
	constructor(public signIn?: SignIn) {}
}

export class SuccessAuthenticationState implements AuthenticationState {
	constructor(public signIn?: SignIn, public loading?: boolean) {}
}

export class FailAuthenticationState implements AuthenticationState {
	constructor(
		public signIn?: SignIn,
		public errorMessage?: string,
		public loading?: boolean
	) {}
}

export class UpdateAuthenticationState implements AuthenticationState {
	constructor(public signIn?: SignIn) {}
}
