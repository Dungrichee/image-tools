import { Box, Typography } from '@mui/material';
import React from 'react';

function Trusted() {
    return (
        <Box textAlign="center" bgcolor="#f5f5f5" p={6}>
            <Typography variant="h4" mb={1}>
                Your trusted online image editor
            </Typography>
            <Typography maxWidth={700} margin="0 auto">
                Image Tool is your simple solution for editing images online.
                Access all the tools you need to enhance your images easily,
                straight from the web, fast processing speed. Don&apos;t save any images and all are free.
            </Typography>
        </Box>
    );
}

export default Trusted;
