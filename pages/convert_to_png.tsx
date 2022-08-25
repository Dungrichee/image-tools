import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hook';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import UserLayout from 'containers/user_layout';
import UploadPage from 'containers/upload_page';
import DeleteImageButton from 'components/delete_image_button';
import ConvertOptions from 'containers/convert_options';
import { resetImages } from 'redux_store/image_storage/image_slice';

function ConvertToPNG() {
    const dispatch = useAppDispatch();
    const classes = useStyles();
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
                    description="Convert JPG to PNG, SVG to PNG, camera raw files like NEF and CR2 to PNG. Convert image to PNG online"
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
                            <LazyLoadImage
                                src={images[0].src}
                                alt={images[0].name}
                                effect="blur"
                                width="100%"
                                height="100%"
                                placeholderSrc={images[0].name}
                                style={{
                                    borderRadius: 4,
                                    display: 'block',
                                }}
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
