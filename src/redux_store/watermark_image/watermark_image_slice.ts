import { createSlice } from '@reduxjs/toolkit';

import { initWatermarkOptions } from 'constants/options';
import { IWatermarkOptions } from 'types/options';

interface IWatermarkImageSlice {
    watermark: IWatermarkOptions;
}

const initialState: IWatermarkImageSlice = {
    watermark: { ...initWatermarkOptions },
};

const watermarkImageSlice = createSlice({
    initialState,
    name: 'watermark',
    reducers: {
        changeWatermarkParams: (state, action) => {
            state.watermark = { ...state.watermark, ...action.payload };
        },
        resetSlice: (state) => {
            state.watermark = { ...initWatermarkOptions };
        },
    },
});

const { reducer, actions } = watermarkImageSlice;

export const { resetSlice, changeWatermarkParams } = actions;
export default reducer;
