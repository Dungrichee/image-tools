import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'hook';
import Scrollbars from 'react-custom-scrollbars-2';
import ReactWaterMark from 'react-watermark-component';

import UploadPage from 'containers/upload_page';
import UserLayout from 'containers/user_layout';
import WatermarkOptions from 'containers/watermark_options';
import {
    previewImage,
    resetSlice,
} from 'redux_store/watermark_image/watermark_image_slice';
import ImageBlur from 'components/image_blur';
import DeleteImageButton from 'components/delete_image_button';
import { resetImages } from 'redux_store/image_storage/image_slice';

const options = {
    chunkWidth: 200,
    chunkHeight: 60,
    textAlign: 'left',
    textBaseline: 'bottom',
    globalAlpha: 0.17,
    font: '16px Microsoft Yahei',
    rotateAngle: -0.26,
    fillStyle: 'white',
    color: 'white',
};

function WatermarkImageCpn({ watermarkName }) {
    const { images } = useAppSelector(({ imageSlice }) => imageSlice);
    return (
        <ReactWaterMark
            waterMarkText={watermarkName}
            openSecurityDefense
            options={options}
        >
            <img
                src={images[0].src}
                alt={images[0].name}
                loading="lazy"
                width="100%"
                height="100%"
                style={{
                    borderRadius: 4,
                    display: 'blocks',
                }}
            />
        </ReactWaterMark>
    );
}

function WatermarkImage() {
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const { watermarkName, preview } = useAppSelector(
        ({ watermarkImageSlice }) => watermarkImageSlice,
    );
    const { images } = useAppSelector(({ imageSlice }) => imageSlice);

    useEffect(() => {
        dispatch(resetImages());
        dispatch(resetSlice());
    }, [dispatch]);

    return (
        <UserLayout>
            {!images.length ? (
                <UploadPage
                    title="Watermark Image"
                    description="Resize JPG by defining new height and width pixels.
Resize many JPG images at once online."
                    type="watermark"
                />
            ) : (
                <Box className={classes.page}>
                    <Box className={classes.content}>
                        <Scrollbars>
                            <Box className={classes.cropImage}>
                                <Box textAlign="center" my={2}>
                                    <DeleteImageButton
                                        callback={() => dispatch(resetSlice())}
                                    />
                                </Box>

                                {!preview ? (
                                    <ImageBlur
                                        name={images[0].name}
                                        src={images[0].src}
                                        onPreviewImage={previewImage}
                                    />
                                ) : (
                                    <Box
                                        width="50%"
                                        height="50%"
                                        position="relative"
                                        margin="0 auto"
                                    >
                                        <WatermarkImageCpn
                                            watermarkName={watermarkName}
                                        />
                                    </Box>
                                )}
                            </Box>
                        </Scrollbars>
                    </Box>
                    <WatermarkOptions />
                </Box>
            )}
        </UserLayout>
    );
}

export default WatermarkImage;

const useStyles = makeStyles(() => ({
    page: {
        display: 'flex',
        flex: 1,
    },
    content: {
        flex: 1,
        display: 'flex',
        flexWrap: 'wrap',
        position: 'relative',
    },
    cropImage: {
        height: '100%',
        overflow: 'hidden',
    },
}));
