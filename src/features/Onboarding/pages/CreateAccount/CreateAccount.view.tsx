import { Box, Container } from '@mui/material';

interface CreateAccountViewProps {
	userName: string;
	password: string;
	confirmPassword: string;
	loading: boolean;
	errorMessage: boolean;
	showPassword: boolean;
	disableButton: boolean;
	onUserNameChange: (event: any) => void;
	onPasswordChange: (event: any) => void;
	onConfirmPassword: (event: any) => void;
	handleClickShowPassword: (event: any) => void;
	handleMouseDownPassword: (event: any) => void;
	onMoveToSignIn: VoidFunction;
	onRegisterUser: VoidFunction;
}

export const CreateAccountView: React.FC<CreateAccountViewProps> = ({
	userName,
	password,
	confirmPassword,
	loading,
	errorMessage,
	showPassword,
	disableButton,
	onUserNameChange,
	onPasswordChange,
	handleClickShowPassword,
	handleMouseDownPassword,
	onMoveToSignIn,
	onRegisterUser,
}) => {
	return <Box></Box>;
};
