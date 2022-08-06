import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { useAppDispatch, useAppSelector } from 'hook';
import { resetImages } from 'redux_store/local_image/local_image_slice';
import UserLayout from 'containers/user_layout';
import UploadPage from 'containers/upload_page';
import ResizeOptions from 'containers/resize_options';
import ImageMasonry from 'components/image_masonry';

function ResizeImage() {
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const { images } = useAppSelector(({ localImageSlice }) => localImageSlice);

    useEffect(() => {
        return () => dispatch(resetImages());
    }, [dispatch]);

    return (
        <UserLayout>
            {!images.length ? (
                <UploadPage
                    title="Resize Image"
                    description="Resize JPG by defining new height and width pixels.
Resize many JPG images at once online."
                />
            ) : (
                <Box className={classes.page}>
                    <Box className={classes.content}>
                        <ImageMasonry title='Resize images' />
                    </Box>
                    <ResizeOptions />
                </Box>
            )}
        </UserLayout>
    );
}

export default ResizeImage;

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
}));
