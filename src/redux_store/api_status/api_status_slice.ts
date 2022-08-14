import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { TRequestState } from 'types/request_status';

interface IApiState {
    // [feat: string]: {
    [action: string]: TRequestState;
    // };
}

const initialState: IApiState = {};

const isPendingAction = (action: PayloadAction) =>
    action.type.endsWith('/pending');
const isFulfilledAction = (action: PayloadAction) =>
    action.type.endsWith('/fulfilled');
const isRejectedAction = (action: PayloadAction) =>
    action.type.endsWith('/rejected');

const responseAction = (state: IApiState, action: any) => {
    const key = action?.type?.split('/')?.[1];
    const error = action.type.endsWith('/rejected') ? action.error : null;
    return {
        ...state,
        [key]: {
            status: action?.meta?.requestStatus,
            error,
        },
    };
};

const apiStatusSlice = createReducer(initialState, (builder) => {
    builder
        .addMatcher(isPendingAction, responseAction)
        .addMatcher(isFulfilledAction, responseAction)
        .addMatcher(isRejectedAction, responseAction);
});

export default apiStatusSlice;
