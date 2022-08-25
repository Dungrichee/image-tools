import { Box, Typography } from '@mui/material';
import React from 'react';

function Guide() {
    return (
        <Box>
            <Box lineHeight={22}>
                <Typography mb={1}>
                    1. Upload the photo you want to crop.
                </Typography>
                <Typography mb={1}>
                    2. Upload your file to the image compressor. It can be an image, document or even a video.
                </Typography>
                <Typography mb={1}>
                    3. Click on `Crop Images` to crop your photo.
                </Typography>
            </Box>
        </Box>
    );
}

export default Guide;
