import { createAsyncThunk } from '@reduxjs/toolkit';
import { Client } from 'client';

export const sendEmail = createAsyncThunk<any, any>(
    'contact/sendEmail',
    async (payload, { rejectWithValue }) => {
        try {
            await Client.imageTool.sendEmail(payload);
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);
