import React from 'react';
import { Box } from '@mui/material';
import { CompareSlider } from 'components/compare_slide';

import { IImage } from 'types';

interface ISelectedProps {
    image: IImage;
    newImg: string;
}

export default function Selected(props: ISelectedProps) {
    return (
        <Box flex={0.6} display="flex" width="620px">
            <CompareSlider original={props.image.src} restored={props.newImg} />
        </Box>
    );
}
