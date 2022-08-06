import { createSlice } from '@reduxjs/toolkit';
import { IImage } from 'types';

interface ILocalImageSlice {
    images: IImage[];
}

const initialState: ILocalImageSlice = {
    images: [],
};

const localImageSlice = createSlice({
    initialState,
    name: 'localImages',
    reducers: {
        uploadImages: (state, action) => {
            state.images.push(action.payload);
        },
    },
});

const { reducer, actions } = localImageSlice;
export const { uploadImages } = actions;
export default reducer;
