import { createAsyncThunk } from '@reduxjs/toolkit';

import { Client } from 'client';

export const removeBackground = createAsyncThunk<any, any>(
    'images/removeBackground',
    async (payload, { rejectWithValue }) => {
        try {
            const result = await Client.imageTool.removeBackground(payload);
            return result
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);
