import { ChangeEvent, useEffect, useState } from 'react';
import { SignInView } from './SignIn.view';

export const SignIn = () => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [disableButton, setDisableButton] = useState(true);

	useEffect(() => {
		userName !== null && password.length >= 8
			? setDisableButton(true)
			: setDisableButton(false);
	}, [password, userName]);

	const onUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
		setUserName(event.target.value);
	};

	const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
	};

	const onMoveToCreateAccount = () => {};

	const onSingIn = () => {};

	return (
		<SignInView
			userName={userName}
			password={password}
			loading={loading}
			errorMessage={errorMessage}
			showPassword={showPassword}
			disableButton={disableButton}
			onUserNameChange={onUserNameChange}
			onPasswordChange={onPasswordChange}
			handleClickShowPassword={handleClickShowPassword}
			handleMouseDownPassword={handleMouseDownPassword}
			onMoveToCreateAccount={onMoveToCreateAccount}
			onSingIn={onSingIn}
		/>
	);
};
