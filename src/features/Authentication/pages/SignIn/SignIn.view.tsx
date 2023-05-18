import { Box, Container } from '@mui/material';

interface ISignInViewProps {
	userName: string;
	password: string;
	loading: boolean;
	errorMessage: boolean;
	showPassword: boolean;
	disableButton: boolean;
	onUserNameChange: (event: any) => void;
	onPasswordChange: (event: any) => void;
	handleClickShowPassword: (event: any) => void;
	handleMouseDownPassword: (event: any) => void;
	onMoveToCreateAccount: VoidFunction;
	onSingIn: VoidFunction;
}

export const SignInView: React.FC<ISignInViewProps> = ({
	userName,
	password,
	loading,
	errorMessage,
	showPassword,
	disableButton,
	onUserNameChange,
	onPasswordChange,
	handleClickShowPassword,
	handleMouseDownPassword,
	onMoveToCreateAccount,
	onSingIn,
}) => {
	return <Box></Box>;
};
