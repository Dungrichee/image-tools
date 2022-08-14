import { createSlice } from '@reduxjs/toolkit';
import { removeBackgroundImage } from './remove_bg_action';

const removeBgSlice = createSlice({
    name: 'removeBg',
    initialState: {
        base64img: null,
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(removeBackgroundImage.fulfilled, (state, action) => {
            state.base64img = action.payload;
        });
    },
});

const { reducer } = removeBgSlice;
export default reducer;
