import { createSlice } from '@reduxjs/toolkit';

import { IImageSize } from 'types';
import { AspectRatioOptions } from 'constants/resize_options';

interface IResizeImageSlice {
    percentage: 25 | 50 | 75;
    size: IImageSize;
    tab: number;
}

const initialState: IResizeImageSlice = {
    percentage: 50,
    size: {
        width: 0,
        height: 0,
        ratio: AspectRatioOptions[0],
    },
    tab: 0,
};

const resizeSlice = createSlice({
    name: 'resize',
    initialState,
    reducers: {
        changeTab: (state, action) => {
            state.tab = action.payload;
        },
        changeImageSize: (state, action) => {
            state.size = { ...state.size, ...action.payload };
        },
        changeImagePercentageOption: (state, action) => {
            state.percentage = action.payload;
        },
    },
});

const { reducer, actions } = resizeSlice;
export const { changeTab, changeImagePercentageOption, changeImageSize } =
    actions;
export default reducer;
