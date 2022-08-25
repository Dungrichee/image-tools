import { Box, Typography } from '@mui/material';
import React from 'react';

function Guide() {
    return (
        <Box>
            <Typography variant="h6" my={2}>
                How to add a watermark?
            </Typography>
            <Box lineHeight={22}>
                <Typography mb={1}>
                    1. Upload the photo you want to add a watermark to it.
                </Typography>
                <Typography mb={1}>
                    2. Customize the parameters to suit the watermark image
                </Typography>
                <Typography mb={1}>
                    3. Click on `Continue` button to download your photo.
                </Typography>
            </Box>
        </Box>
    );
}

export default Guide;
