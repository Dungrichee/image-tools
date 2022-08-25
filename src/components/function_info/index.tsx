import React from 'react';
import { Box, Typography } from '@mui/material';

import { IFunctionInfo } from 'types';

function FunctionInfo(props: IFunctionInfo) {
    const { title, description } = props;
    return (
        <Box textAlign="center" mt={3} mb={2}>
            <Typography variant="h3" mb={0.5}>{title}</Typography>
            <Typography maxWidth={520}>{description}</Typography>
        </Box>
    );
}

export default FunctionInfo;
