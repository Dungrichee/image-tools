import React from 'react';
import { Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { IoIosArrowBack } from 'react-icons/io';
// import { removeBackgroundFromImageBase64, RemoveBgResult } from 'remove.bg';

import { useAppDispatch, useAppSelector } from 'hook';
import UserLayout from 'containers/user_layout';
import UploadPage from 'containers/upload_page';
import { resetImages } from 'redux_store/local_image/local_image_slice';
import { resizeImages as convertImageToBase64 } from 'utils/resize';
import { removeBackgroundImage } from 'redux_store/remove_bg/remove_bg_action';
import { useIsRequestPending } from 'hook/use_get_status';
import { LoadingButton } from '@mui/lab';

function RemoveBackground() {
    const dispatch = useAppDispatch();
    const classes = useStyles();
    const { images } = useAppSelector(({ localImageSlice }) => localImageSlice);
    const { base64img } = useAppSelector(({ removeBgSlice }) => removeBgSlice);
    const loading = useIsRequestPending('removeBackgroundImage');

    const onRemoveBg = (imgBase64: string) => {
        dispatch(removeBackgroundImage(imgBase64));
    };

    const handleRemoveBg = () => {
        convertImageToBase64(
            {
                image: images[0],
                width: images[0].width,
                height: images[0].height,
                isRemoveBg: true,
            },
            undefined,
            onRemoveBg,
        );
    };

    const handleBack = () => {
        dispatch(resetImages());
    };

    return (
        <UserLayout>
            {!images.length ? (
                <UploadPage
                    title="Remove background image"
                    description="Crop JPG by defining new height and width pixels.
Resize many JPG images at once online."
                />
            ) : (
                <Box className={classes.page}>
                    <Box className={classes.content}>
                        <Box textAlign="center" my={2}>
                            <Button
                                variant="contained"
                                size="small"
                                onClick={handleBack}
                                startIcon={<IoIosArrowBack />}
                            >
                                Back
                            </Button>
                        </Box>
                        <Box width="30%" position="relative" margin="0 auto">
                            <img
                                src={!base64img ? images[0].src : base64img}
                                alt={images[0].name}
                                loading="lazy"
                                width="100%"
                                height="100%"
                            />
                        </Box>
                        <Box textAlign="center" my={2}>
                            <LoadingButton
                                loading={loading}
                                variant="contained"
                                size="small"
                                onClick={handleRemoveBg}
                                endIcon={<IoIosArrowBack />}
                            >Process</LoadingButton>
                        </Box>
                    </Box>
                </Box>
            )}
        </UserLayout>
    );
}

export default RemoveBackground;
const useStyles = makeStyles(() => ({
    page: {},
    content: {},
}));
