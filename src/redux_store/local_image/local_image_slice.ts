import { createSlice } from '@reduxjs/toolkit';

import { IImage, IImageSize } from 'types';
import { calculatePercentage } from 'utils/calculate';
import { AspectRatioOptions } from 'constants/resize_options';

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
        ratio: AspectRatioOptions[0],
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
        changeTab: (state, action) => {
            state.tab = action.payload;
        },
        changeImagePercentage: (state, action) => {
            state.percentage = action.payload;
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

const { reducer, actions } = localImageSlice;

export const {
    uploadImages,
    deleteImage,
    resetImages,
    changeTab,
    changeImageSize,
    changeImagePercentage,
} = actions;
export default reducer;
