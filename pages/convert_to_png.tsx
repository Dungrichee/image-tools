import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hook';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';

import UserLayout from 'containers/user_layout';
import UploadPage from 'containers/upload_page';
import DeleteImageButton from 'components/delete_image_button';
import ConvertOptions from 'containers/convert_options';
import { resetImages } from 'redux_store/image_storage/image_slice';

function ConvertToPNG() {
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const { images } = useAppSelector(({ imageSlice }) => imageSlice);
    useEffect(() => {
        return () => {
            dispatch(resetImages());
        };
    }, []);
    return (
        <UserLayout>
            {!images.length ? (
                <UploadPage
                    title="Convert image to PNG"
                    description="Convert JPG by defining new height and width pixels.
Resize many JPG images at once online."
                />
            ) : (
                <Box className={classes.page}>
                    <Box className={classes.content}>
                        <Box textAlign="center" my={2}>
                            <DeleteImageButton
                                callback={() => console.log('')}
                            />
                        </Box>

                        <Box width="50%" position="relative" margin="0 auto">
                            <img
                                src={images[0]?.src}
                                alt={images[0]?.name}
                                loading="lazy"
                                width="100%"
                                height="100%"
                                id="imgEl"
                            />
                        </Box>
                    </Box>
                    <ConvertOptions type="PNG" />
                </Box>
            )}
        </UserLayout>
    );
}

export default ConvertToPNG;
const useStyles = makeStyles(() => ({
    page: {
        display: 'flex',
        flex: 1,
    },
    content: {
        flex: 1,
    },
}));
