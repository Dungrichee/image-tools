import { createSlice } from '@reduxjs/toolkit';

interface IWatermarkImageSlice {
    watermarkName: string;
    preview: boolean;
}

const initialState: IWatermarkImageSlice = {
    watermarkName: 'Image tools',
    preview: false,
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
    },
});

const { reducer, actions } = watermarkImageSlice;

export const { changeWatermarkName, previewImage } = actions;
export default reducer;
