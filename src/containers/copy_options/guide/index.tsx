import { Box, Typography } from '@mui/material';
import React from 'react';

function Guide() {
    return (
        <Box>
            {/* <Typography variant="h6" my={2}>
                How to resize an image?
            </Typography> */}
            <Box lineHeight={22}>
                <Typography mb={1}>
                    1. Upload the photo you want to resize.
                </Typography>
                <Typography mb={1}>
                    2. In the drop-down menu, choose the format you want your
                    images to be converted to.
                </Typography>
                <Typography mb={1}>
                    3. You can also use the DPI to change the image size when it
                    comes to printing
                </Typography>
                <Typography mb={1}>
                    4. Click on `Resize Images` to resize your photo.
                </Typography>
            </Box>
        </Box>
    );
}

export default Guide;
