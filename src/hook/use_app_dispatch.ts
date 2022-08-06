import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { RootState } from 'redux_store/store';

export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;

export const useAppDispatch = () => useDispatch<ThunkAppDispatch>();
