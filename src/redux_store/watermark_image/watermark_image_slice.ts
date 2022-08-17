import { createSlice } from '@reduxjs/toolkit';

interface IWatermarkImageSlice {
    watermarkName: string;
    preview: boolean;
}

const initialState: IWatermarkImageSlice = {
    watermarkName: 'Image tools',
    preview: true,
};

const watermarkImageSlice = createSlice({
    initialState,
    name: 'watermark',
    reducers: {
        changeWatermarkName: (state, action) => {
            state.watermarkName = action.payload;
            state.preview = false;
        },
        previewImage: (state) => {
            state.preview = true;
        },
        resetSlice: (state) => {
            state.watermarkName = 'Image tools';
            state.preview = true;
        },
    },
});

const { reducer, actions } = watermarkImageSlice;

export const { changeWatermarkName, previewImage, resetSlice } = actions;
export default reducer;
