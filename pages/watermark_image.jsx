import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import Scrollbars from 'react-custom-scrollbars-2';
import { Watermark } from '@hirohe/react-watermark';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { useAppDispatch, useAppSelector } from 'hook';
import UploadPage from 'containers/upload_page';
import UserLayout from 'containers/user_layout';
import WatermarkOptions from 'containers/watermark_options';
import { resetSlice } from 'redux_store/watermark_image/watermark_image_slice';
import { resetImages } from 'redux_store/image_storage/image_slice';
import DeleteImageButton from 'components/delete_image_button';

function WatermarkImage() {
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const { watermark } = useAppSelector(
        ({ watermarkImageSlice }) => watermarkImageSlice,
    );
    const { images } = useAppSelector(({ imageSlice }) => imageSlice);

    useEffect(() => {
        return () => {
            dispatch(resetImages());
            dispatch(resetSlice());
        };
    }, [dispatch]);

    return (
        <UserLayout>
            {!images.length ? (
                <UploadPage
                    title="Watermark Image"
                    description="Add watermark to your pictures."
                    type="watermark"
                />
            ) : (
                <Box className={classes.page}>
                    <Box className={classes.content}>
                        <Scrollbars>
                            <Box className={classes.watermark}>
                                <Box textAlign="center" my={2}>
                                    <DeleteImageButton
                                        callback={() => dispatch(resetSlice())}
                                    />
                                </Box>

                                <Box
                                    width="50%"
                                    position="relative"
                                    margin="0 auto"
                                    id="wrapperImage"
                                >
                                    <Watermark
                                        fontFamily={watermark.fontFamily}
                                        gutter={11}
                                        lineHeight="1.2rem"
                                        multiline
                                        opacity={watermark.opacity}
                                        rotate={watermark.rotate}
                                        show
                                        text={watermark.text}
                                        textColor={watermark.textColor}
                                        textSize={watermark.textSize}
                                        wrapperElement="div"
                                    >
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
                                        />
                                    </Watermark>
                                </Box>
                            </Box>
                        </Scrollbars>
                    </Box>
                    <WatermarkOptions />
                </Box>
            )}
        </UserLayout>
    );
}

export default WatermarkImage;

const useStyles = makeStyles(() => ({
    page: {
        display: 'flex',
        flex: 1,
    },
    content: {
        flex: 1,
        display: 'flex',
        flexWrap: 'wrap',
        position: 'relative',
    },
    watermark: {
        height: '100%',
        overflow: 'hidden',
    },
}));
