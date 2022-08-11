import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Button, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'hook';
import Scrollbars from 'react-custom-scrollbars-2';
import { IoIosArrowBack } from 'react-icons/io';
import ReactWaterMark from 'react-watermark-component';

import UploadPage from 'containers/upload_page';
import UserLayout from 'containers/user_layout';
import WatermarkOptions from 'containers/watermark_options';
import { resetImages } from 'redux_store/local_image/local_image_slice';
import { changeWatermarkName } from 'redux_store/watermark_image/watermark_image_slice';

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
    const { images } = useAppSelector(({ localImageSlice }) => localImageSlice);
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
            />
        </ReactWaterMark>
    );
}

function WatermarkImage() {
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const { images } = useAppSelector(({ localImageSlice }) => localImageSlice);
    const { watermarkName, preview } = useAppSelector(
        ({ watermarkImageSlice }) => watermarkImageSlice,
    );

    useEffect(() => {
        dispatch(resetImages());
    }, [dispatch]);

    const handleBack = () => {
        dispatch(resetImages());
        dispatch(changeWatermarkName('Image tools'));
    };

    return (
        <UserLayout>
            {!images.length ? (
                <UploadPage
                    title="Watermark Image"
                    description="Resize JPG by defining new height and width pixels.
Resize many JPG images at once online."
                />
            ) : (
                <Box className={classes.page}>
                    <Box className={classes.content}>
                        <Scrollbars>
                            <Box className={classes.cropImage}>
                                <Box mt={2}>
                                    <Typography variant="h4" textAlign="center">
                                        Watermark Image
                                    </Typography>
                                </Box>
                                <Box textAlign="center" my={1}>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        onClick={handleBack}
                                        startIcon={<IoIosArrowBack />}
                                    >
                                        Back
                                    </Button>
                                </Box>

                                {!preview ? (
                                    <Box
                                        width="50%"
                                        position="relative"
                                        margin="0 auto"
                                    >
                                        <img
                                            src={images[0].src}
                                            alt={images[0].name}
                                            loading="lazy"
                                            width="100%"
                                            height="100%"
                                            style={{ opacity: 0.5 }}
                                        />
                                    </Box>
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
