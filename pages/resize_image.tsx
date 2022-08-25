import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { useAppDispatch, useAppSelector } from 'hook';
import { resetImages } from 'redux_store/image_storage/image_slice';
import UserLayout from 'containers/user_layout';
import UploadPage from 'containers/upload_page';
import ResizeOptions from 'containers/resize_options';
import ImageMasonry from 'components/image_masonry';

function ResizeImage() {
    const dispatch = useAppDispatch();
    const classes = useStyles();
    const { images } = useAppSelector(({ imageSlice }) => imageSlice);

    useEffect(() => {
        return () => {
            dispatch(resetImages());
        };
    }, [dispatch]);

    return (
        <UserLayout>
            {!images.length ? (
                <UploadPage
                    title="Resize Image"
                    description="Resize  JPG, PNG, SVG or GIF by defining new height and width pixels.
                    Change image dimensions in bulk."
                    isMultiple
                />
            ) : (
                <Box className={classes.page}>
                    <Box className={classes.content}>
                        <ImageMasonry title="Resize images" />
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
