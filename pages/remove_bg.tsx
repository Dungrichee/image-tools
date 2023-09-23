import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { useAppDispatch, useAppSelector } from 'hook';
import { resetImages } from 'redux_store/image_storage/image_slice';

import DeleteImageButton from 'components/delete_image_button';
import UserLayout from 'containers/user_layout';
import UploadPage from 'containers/upload_page';
import RemoveBackgroundOptions from 'containers/remove_bg_options';

function ImageRestoration() {
    const dispatch = useAppDispatch();
    const classes = useStyles();
    const { images } = useAppSelector(({ imageSlice }) => imageSlice);

    // const [restoredImage, setRestoredImage] = useState<string | null>(null);

    useEffect(() => {
        return () => {
            dispatch(resetImages());
        };
    }, [dispatch]);

    const toBase64 = (file: any) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
        });

    const handleUpload = async (file: File) => {
        const imageDataUri = (await toBase64(file)) as string;

        if (!imageDataUri) {
            alert('Vui lòng chọn một tệp hình ảnh để tải lên.');
            return;
        }

        // dispatch(removeBackground({ imageDataUri }))
        //     .unwrap()
        //     .then((data) => setRestoredImage(data.imageUrl))
        //     .catch((error) => toastMessage.error(error.message));
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
                            <DeleteImageButton
                                callback={() => console.log('')}
                            />
                        </Box>

                        {/* {restoredImage && ( */}
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
                        {/* )} */}
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
