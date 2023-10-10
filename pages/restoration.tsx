import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useAppDispatch, useAppSelector } from 'hook';
import { resetImages } from 'redux_store/image_storage/image_slice';
import { restorationImage } from 'redux_store/restoration/actions';
import { toastMessage } from 'redux_store/toast';
import { toBase64 } from 'utils/images';

import DeleteImageButton from 'components/delete_image_button';
import UploadPage from 'containers/upload_page';
import RestorationOptions from 'containers/restoration_options';
import SideBySide from 'components/side_by_side';

function ImageRestoration() {
    const dispatch = useAppDispatch();
    const classes = useStyles();
    const { images } = useAppSelector(({ imageSlice }) => imageSlice);

    const [restoredImage, setRestoredImage] = useState<string | ''>('');

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

        dispatch(restorationImage({ imageDataUri }))
            .unwrap()
            .then((data) => setRestoredImage(data.imageUrl))
            .catch((error) => toastMessage.error(error.message));
    };

    if (!images.length)
        return (
            <UploadPage
                title="Restoration image"
                description="Sharpen colors and enhance faces, turn damaged photos into cherished memories."
                callback={handleUpload}
            />
        );

    return (
        <Box className={classes.page}>
            <Box className={classes.content}>
                <Box textAlign="center" my={2}>
                    <DeleteImageButton />
                </Box>

                <SideBySide image={images[0]} newImg={restoredImage} />
            </Box>
            <RestorationOptions
                imageUrl={restoredImage}
                imageName={images[0].src}
            />
        </Box>
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
