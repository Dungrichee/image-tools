import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootState } from 'redux_store/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
