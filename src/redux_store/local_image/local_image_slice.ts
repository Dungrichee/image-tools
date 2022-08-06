import { createSlice } from '@reduxjs/toolkit';
import { IImage, IImageSize } from 'types';

interface ILocalImageSlice {
    images: IImage[];
    percentage: 25 | 50 | 75;
    size: IImageSize;
    tab: number;
}

const initialState: ILocalImageSlice = {
    images: [],
    percentage: 50,
    size: {
        width: 0,
        height: 0,
    },
    tab: 0,
};

const localImageSlice = createSlice({
    initialState,
    name: 'localImages',
    reducers: {
        uploadImages: (state, action) => {
            state.images.push(action.payload);
        },
        deleteImage: (state, action) => {
            state.images = state.images.filter(
                (image) => image.id !== action.payload,
            );
        },
        resetImages: (state) => {
            state.images = [];
        },
        changeImageSize: (state, action) => {
            state.size = { ...state.size, ...action.payload };
        },
        changeImagePercentage: (state, action) => {
            state.percentage = action.payload
        }
    },
});

const { reducer, actions } = localImageSlice;
export const { uploadImages, deleteImage, resetImages, changeImageSize, changeImagePercentage } = actions;
export default reducer;
