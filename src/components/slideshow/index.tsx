import { Box } from '@mui/material';
import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';

import ResizeImgSlide from 'assets/images/resize_image_slide.jpg';
import ConvertImgSlide from 'assets/images/convert_image_slide.jpg';
import CropImgSlide from 'assets/images/crop_image_slide.jpg';
import WatermarkImgSlide from 'assets/images/watermark_slide.jpg';

function Slideshow() {
    const images = [
        ResizeImgSlide.src,
        ConvertImgSlide.src,
        CropImgSlide.src,
        WatermarkImgSlide.src,
    ];
    return (
        <Box flex={1} position="relative">
            <SimpleImageSlider
                height={'100vh'}
                width={'100%'}
                images={images}
                showBullets={true}
                showNavs={true}
                style={{ backgroundAttachment: 'fixed' }}
            />
        </Box>
    );
}

export default Slideshow;
