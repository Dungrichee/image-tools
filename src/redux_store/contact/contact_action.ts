import { createAsyncThunk } from '@reduxjs/toolkit';

import { Client } from 'client';
import { IContactForm } from 'types/email';

export const sendEmail = createAsyncThunk<any, IContactForm>(
    'contact/sendEmail',
    async (payload, { rejectWithValue }) => {
        try {
            await Client.imageTool.sendEmail(payload);
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);
