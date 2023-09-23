import React from 'react';
import { Box } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import image from 'assets/images/example/resize.jpg';

function Resize() {
    return (
        <Box display="flex" justifyContent="center">
            <Box flex={0.6}>
                <LazyLoadImage
                    src={image.src}
                    effect="blur"
                    placeholderSrc={image.src}
                    style={{
                        borderBottomLeftRadius: 4,
                        borderBottomRightRadius: 4,
                        display: 'block',
                        width: '100%',
                    }}
                    alt={image.src}
                />
            </Box>
        </Box>
    );
}

export default Resize;