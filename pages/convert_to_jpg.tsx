import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hook';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import UploadPage from 'containers/upload_page';
import UserLayout from 'containers/user_layout';
import DeleteImageButton from 'components/delete_image_button';
import ConvertOptions from 'containers/convert_options';
import { resetImages } from 'redux_store/image_storage/image_slice';

function ConvertToJPG() {
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
                    title="Convert image to JPG"
                    description="Convert PNG to JPG, SVG to JPG, camera raw files like NEF and CR2 to JPG. Convert image to JPG online"
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
                    <ConvertOptions type="JPG" />
                </Box>
            )}
        </UserLayout>
    );
}

export default ConvertToJPG;
const useStyles = makeStyles(() => ({
    page: {
        display: 'flex',
        flex: 1,
    },
    content: {
        flex: 1,
    },
}));
