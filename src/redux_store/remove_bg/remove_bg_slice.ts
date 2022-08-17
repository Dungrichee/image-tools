import { createSlice } from '@reduxjs/toolkit';

import { removeBackgroundImage } from './remove_bg_action';

interface IRemoveBgSlice {
    base64img: string | null;
}

const initialState: IRemoveBgSlice = {
    base64img: null,
};

const removeBgSlice = createSlice({
    name: 'removeBg',
    initialState,
    reducers: {
        resetSlice: (state) => {
            state.base64img = null;
        },
    },
    extraReducers(builder) {
        builder.addCase(removeBackgroundImage.fulfilled, (state, action) => {
            state.base64img = action.payload;
        });
    },
});

const { reducer, actions } = removeBgSlice;
export const { resetSlice } = actions;
export default reducer;
