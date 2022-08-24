import { createSlice } from '@reduxjs/toolkit';

import { initWatermarkOptions } from 'constants/options';
import { IWatermarkOptions } from 'types/options';

interface IWatermarkImageSlice {
    imgBase64: string;
    watermark: IWatermarkOptions;
}

const initialState: IWatermarkImageSlice = {
    imgBase64: '',
    watermark: { ...initWatermarkOptions },
};

const watermarkImageSlice = createSlice({
    initialState,
    name: 'watermark',
    reducers: {
        setImgBase64: (state, action) => {
            state.imgBase64 = action.payload;
        },
        changeWatermarkParams: (state, action) => {
            state.watermark = { ...state.watermark, ...action.payload };
        },
        resetSlice: (state) => {
            state.watermark = { ...initWatermarkOptions };
        },
    },
});

const { reducer, actions } = watermarkImageSlice;

export const { resetSlice, setImgBase64, changeWatermarkParams } = actions;
export default reducer;
