import { createSlice } from '@reduxjs/toolkit';

import { IImage } from 'types';
import { calculatePercentage } from 'utils/calculate';

interface ILocalImageSlice {
    images: IImage[];
}

const initialState: ILocalImageSlice = {
    images: [],
};

const imageSlice = createSlice({
    initialState,
    name: 'imageSlice',
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
            state.images.length = 0;
        },
        changeImagePercentage: (state, action) => {
            state.images = state.images.map((image) => ({
                ...image,
                resizedWidth: calculatePercentage(image.width, action.payload),
                resizedHeight: calculatePercentage(
                    image.height,
                    action.payload,
                ),
            }));
        },
    },
});

const { reducer, actions } = imageSlice;

export const { uploadImages, deleteImage, resetImages, changeImagePercentage } =
    actions;
export default reducer;
