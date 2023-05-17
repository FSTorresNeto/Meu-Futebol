import { AnyAction, combineReducers } from 'redux';
import { initialStoreState, StoreState } from './state';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { authenticationReducer } from '../features/Authentication/redux/reducer';
import { onboardingReducer } from '../features/Onboarding/redux/reducer';
import { accountReducer } from '../features/Accoount/redux/reducer';

const rootReducer = combineReducers({
	authentication: authenticationReducer,
	onboarding: onboardingReducer,
	account: accountReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;

export type RootState = StoreState;

export type RootState2 = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const State = (
	state: StoreState = initialStoreState,
	action: AnyAction
) => {
	rootReducer(state, action);
};

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
