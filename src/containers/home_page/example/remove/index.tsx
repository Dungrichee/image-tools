import React from 'react';
import { Box } from '@mui/material';

import { CompareSlider } from 'components/compare_slide';
import oldImage from 'assets/images/example/old_remove_bg.png';
import newImage from 'assets/images/example/new_remove_bg.png';

function RemoveBackground() {
    return (
        <Box display="flex" justifyContent="center">
            <Box display="flex" flex={0.3}>
                <CompareSlider
                    original={oldImage.src}
                    restored={newImage.src}
                />
            </Box>
        </Box>
    );
}

export default RemoveBackground;
