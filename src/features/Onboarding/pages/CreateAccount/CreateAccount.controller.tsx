import { ChangeEvent, useEffect, useState } from 'react';
import { CreateAccountView } from './CreateAccount.view';

export const CreateAccount = () => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [disableButton, setDisableButton] = useState(true);

	useEffect(() => {
		userName !== null && password.length >= 8 && password === confirmPassword
			? setDisableButton(true)
			: setDisableButton(false);
	}, [password, userName]);

	const onUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
		setUserName(event.target.value);
	};

	const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	const onConfirmPassword = (event: ChangeEvent<HTMLInputElement>) => {
		setConfirmPassword(event.target.value);
	};

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
	};

	const onMoveToSignIn = () => {};

	const onRegisterUser = () => {};

	return (
		<CreateAccountView
			userName={userName}
			password={password}
			confirmPassword={confirmPassword}
			loading={loading}
			errorMessage={errorMessage}
			showPassword={showPassword}
			disableButton={disableButton}
			onUserNameChange={onUserNameChange}
			onPasswordChange={onPasswordChange}
			onConfirmPassword={onConfirmPassword}
			handleClickShowPassword={handleClickShowPassword}
			handleMouseDownPassword={handleMouseDownPassword}
			onMoveToSignIn={onMoveToSignIn}
			onRegisterUser={onRegisterUser}
		/>
	);
};
