import React from 'react';
import { CircularProgress } from '@mui/material';

interface ILoading {
    size?: number;
    sx?: any;
    color?: string;
}

function Loading(props: ILoading) {
    const { size = 36, sx, color = 'white' } = props;
    return <CircularProgress size={size} style={{ ...sx, color: color }} />;
}

export default Loading;
