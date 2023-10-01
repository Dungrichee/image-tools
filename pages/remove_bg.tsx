import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { useAppDispatch, useAppSelector } from 'hook';
import { removeBackground } from 'redux_store/remove_bg/actions';
import { resetImages } from 'redux_store/image_storage/image_slice';
import { toastMessage } from 'redux_store/toast';
import { toBase64 } from 'utils/images';

import DeleteImageButton from 'components/delete_image_button';
import UserLayout from 'containers/user_layout';
import UploadPage from 'containers/upload_page';
import RemoveBackgroundOptions from 'containers/remove_bg_options';
import SideBySide from 'components/side_by_side';

function ImageRestoration() {
    const dispatch = useAppDispatch();
    const classes = useStyles();
    const { images } = useAppSelector(({ imageSlice }) => imageSlice);

    const [resultImage, setResultImage] = useState<string | ''>('');

    useEffect(() => {
        return () => {
            dispatch(resetImages());
        };
    }, [dispatch]);

    const handleUpload = async (file: File) => {
        const imageDataUri = (await toBase64(file)) as string;

        if (!imageDataUri) {
            alert('Vui lòng chọn một tệp hình ảnh để tải lên.');
            return;
        }

        dispatch(removeBackground({ imageDataUri }))
            .unwrap()
            .then((data) => setResultImage(data.imageUrl))
            .catch((error) => toastMessage.error(error.message));
    };

    return (
        <UserLayout>
            {!images.length ? (
                <UploadPage
                    title="Remove background"
                    description="Remove background from images for free using artificial intelligence."
                    callback={handleUpload}
                />
            ) : (
                <Box className={classes.page}>
                    <Box className={classes.content}>
                        <Box textAlign="center" my={2}>
                            <DeleteImageButton />
                        </Box>
                        <SideBySide image={images[0]} newImg={resultImage} />
                    </Box>
                    <RemoveBackgroundOptions imageUrl="" />
                </Box>
            )}
        </UserLayout>
    );
}

export default ImageRestoration;

const useStyles = makeStyles(() => ({
    page: {
        display: 'flex',
        flex: 1,
    },
    content: {
        flex: 1,
    },
}));
