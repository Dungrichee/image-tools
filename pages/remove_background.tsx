import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { useAppDispatch, useAppSelector } from 'hook';
import { resizeImages as convertImageToBase64 } from 'utils/resize';
import { removeBackgroundImage } from 'redux_store/remove_bg/remove_bg_action';
import { useIsRequestPending } from 'hook/use_get_status';
import { resetSlice } from 'redux_store/remove_bg/remove_bg_slice';
import { resetImages } from 'redux_store/image_storage/image_slice';
import UserLayout from 'containers/user_layout';
import UploadPage from 'containers/upload_page';
import RemoveBgOptions from 'containers/remove_bg_options';
import ImageBlur from 'components/image_blur';
import DeleteImageButton from 'components/delete_image_button';

function RemoveBackground() {
    const dispatch = useAppDispatch();
    const classes = useStyles();
    const { images } = useAppSelector(({ imageSlice }) => imageSlice);
    const { base64img } = useAppSelector(({ removeBgSlice }) => removeBgSlice);
    const loading = useIsRequestPending('removeBackgroundImage');

    // const onRemoveBg = useCallback(
    //     (imgBase64: string) => {
    //         dispatch(removeBackgroundImage(imgBase64));
    //     },
    //     [dispatch],
    // );

    // const handleRemoveBg = useCallback(() => {
    //     console.log({ images }, 'remove background');
    //     if (!images.length) return;
    //     convertImageToBase64(
    //         {
    //             image: images[0],
    //             width: images[0]?.width,
    //             height: images[0]?.height,
    //             isRemoveBg: true,
    //         },
    //         undefined,
    //         onRemoveBg,
    //     );
    // }, [images, onRemoveBg]);

    useEffect(() => {
        dispatch(resetSlice());
        dispatch(resetImages());
        // handleRemoveBg();
        // return () => {
        //     dispatch(resetSlice());
        //     dispatch(resetImages());
        // };
    }, [dispatch]);

    const onRemoveBg = (imgBase64: string) => {
        dispatch(removeBackgroundImage(imgBase64));
    };

    const handleRemoveBg = () => {
        convertImageToBase64(
            {
                image: images[0],
                width: images[0].width,
                height: images[0].height,
                isRemoveBg: true,
            },
            undefined,
            onRemoveBg,
        );
    };

    return (
        <UserLayout>
            {!images.length ? (
                <UploadPage
                    title="Remove background image"
                    description="Crop JPG by defining new height and width pixels.
Resize many JPG images at once online."
                    type="remove_bg"
                />
            ) : (
                <Box className={classes.page}>
                    <Box className={classes.content}>
                        <Box textAlign="center" my={2}>
                            <DeleteImageButton
                                callback={() => dispatch(resetSlice())}
                            />
                        </Box>

                        {!base64img ? (
                            <ImageBlur
                                src={images[0].src}
                                name={images[0].name}
                                onPreviewImage={handleRemoveBg}
                                isAsyncAction
                                isLoading={loading}
                            />
                        ) : (
                            <Box
                                width="50%"
                                position="relative"
                                margin="0 auto"
                            >
                                <img
                                    src={base64img}
                                    alt={images[0].name}
                                    loading="lazy"
                                    width="100%"
                                    height="100%"
                                />
                            </Box>
                        )}
                    </Box>
                    <RemoveBgOptions />
                </Box>
            )}
        </UserLayout>
    );
}

export default RemoveBackground;
const useStyles = makeStyles(() => ({
    page: {
        display: 'flex',
        flex: 1,
    },
    content: {
        flex: 1,
    },
}));
