import { createAsyncThunk } from '@reduxjs/toolkit';

import { Client } from 'client';

export const restorationImage = createAsyncThunk<any, any>(
    'restoration/restorationImage',
    async (payload, { rejectWithValue }) => {
        try {
            const result = await Client.imageTool.restorationImage(payload);
            return result
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);
