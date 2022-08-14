import { createAsyncThunk } from '@reduxjs/toolkit';
import { Client } from 'client';

export const removeBackgroundImage = createAsyncThunk<any, string>(
    'removeBg/removeBackgroundImage',
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await Client.imageTool.removeBackgroundImage(
                payload,
            );
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);
