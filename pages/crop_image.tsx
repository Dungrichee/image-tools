import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Button, IconButton, Tooltip, Typography } from '@mui/material';
import { FaGoogleDrive } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import Scrollbars from 'react-custom-scrollbars-2';
import { Cropper } from 'react-cropper';
import { useAppDispatch, useAppSelector } from 'hook';

import { resetImages } from 'redux_store/local_image/local_image_slice';
import UserLayout from 'containers/user_layout';
import UploadPage from 'containers/upload_page';
import CropOptions from 'containers/copy_options';
import SelectImageFromPC from 'components/select_image_from_pc';
import 'cropperjs/dist/cropper.css';

function CropImage() {
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const [cropper, setCropper] = useState<Cropper>();
    const { images } = useAppSelector(({ localImageSlice }) => localImageSlice);

    useEffect(() => {
        dispatch(resetImages())
    }, [dispatch]);

    const getCropData = () => {
        if (typeof cropper === 'undefined') return '';

        return cropper.getCroppedCanvas().toDataURL();
    };

    const handleBack = () => {
        dispatch(resetImages());
    };

    return (
        <UserLayout>
            {!images.length ? (
                <UploadPage
                    title="Crop Image"
                    description="Crop JPG, PNG or GIF by defining a rectangle in pixels.
                    Cut your image online."
                />
            ) : (
                <Box className={classes.page}>
                    <Box className={classes.content}>
                        <Scrollbars>
                            <Box className={classes.cropImage}>
                                <Box mt={2}>
                                    <Typography variant="h4" textAlign="center">
                                        Crop Image
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
                                    <SelectImageFromPC />
                                    <Tooltip
                                        title="select images from Google Drive "
                                        arrow
                                    >
                                        <IconButton color="info">
                                            <FaGoogleDrive />
                                        </IconButton>
                                    </Tooltip>
                                </Box>

                                <Box height="60%">
                                    <Cropper
                                        style={{
                                            height: ' 100%',
                                            width: '100%',
                                        }}
                                        zoomTo={0.5}
                                        initialAspectRatio={1}
                                        // preview=".img-preview"
                                        src={images[0].src}
                                        viewMode={1}
                                        minCropBoxHeight={10}
                                        minCropBoxWidth={10}
                                        // background={false}
                                        responsive={true}
                                        // autoCropArea={1}
                                        // checkOrientation={false}
                                        onInitialized={(instance) => {
                                            setCropper(instance);
                                        }}
                                        // guides={true}
                                    />
                                </Box>
                            </Box>
                        </Scrollbars>
                    </Box>

                    <CropOptions getCropData={getCropData} />
                </Box>
            )}
        </UserLayout>
    );
}

export default CropImage;

const useStyles = makeStyles(() => ({
    page: {
        display: 'flex',
        flex: 1,
    },
    content: {
        flex: 1,
        display: 'flex',
        flexWrap: 'wrap',
    },
    cropImage: {
        height: '100%',
        overflow: 'hidden',
    },
}));
