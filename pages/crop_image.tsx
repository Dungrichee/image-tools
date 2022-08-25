import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import Scrollbars from 'react-custom-scrollbars-2';
import { Cropper } from 'react-cropper';
import { useAppDispatch, useAppSelector } from 'hook';

import UserLayout from 'containers/user_layout';
import UploadPage from 'containers/upload_page';
import CropOptions from 'containers/crop_options';
import DeleteImageButton from 'components/delete_image_button';
import { resetImages } from 'redux_store/image_storage/image_slice';
import 'cropperjs/dist/cropper.css';

function CropImage() {
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const [cropper, setCropper] = useState<Cropper>();
    const { images } = useAppSelector(({ imageSlice }) => imageSlice);

    useEffect(() => {
        return () => {
            dispatch(resetImages());
        };
    }, [dispatch]);

    const getCropData = () => {
        if (typeof cropper === 'undefined') return '';

        return cropper.getCroppedCanvas().toDataURL();
    };

    return (
        <UserLayout>
            {!images.length ? (
                <UploadPage
                    title="Image Crop Tool"
                    description="Crop pictures online to get an exact cutout of the photo you want."
                />
            ) : (
                <Box className={classes.page}>
                    <Box className={classes.content}>
                        <Scrollbars>
                            <Box className={classes.cropImage}>
                                <Box textAlign="center" my={2}>
                                    <DeleteImageButton />
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
