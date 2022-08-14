import { useAppSelector } from './use_app_selector';

export const useIsRequestPending = (actionName: string) => {
    return useAppSelector(
        ({ apiStatusSlice }) =>
            apiStatusSlice?.[actionName]?.status === 'pending',
    );
};
