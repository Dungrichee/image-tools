import React, { useEffect, useState } from 'react';
import { Box, FormControlLabel, FormLabel, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

import { useAppDispatch, useAppSelector } from 'hook';
import { resetImages } from 'redux_store/image_storage/image_slice';
import { restorationImage } from 'redux_store/restoration/actions';
import { toastMessage } from 'redux_store/toast';
import { CompareSlider } from 'components/compare_slide';

import DeleteImageButton from 'components/delete_image_button';
import UserLayout from 'containers/user_layout';
import UploadPage from 'containers/upload_page';
import RestorationOptions from 'containers/restoration_options';

function ImageRestoration() {
    const dispatch = useAppDispatch();
    const classes = useStyles();
    const { images } = useAppSelector(({ imageSlice }) => imageSlice);

    const [restoredImage, setRestoredImage] = useState<string | ''>('');
    const [sideBySide, setSideBySide] = useState<boolean>(false);

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

        dispatch(restorationImage({ imageDataUri }))
            .unwrap()
            .then((data) => setRestoredImage(data.imageUrl))
            .catch((error) => toastMessage.error(error.message));
    };

    return (
        <UserLayout>
            {!images.length ? (
                <UploadPage
                    title="Restoration image"
                    description="Sharpen colors and enhance faces, turn damaged photos into cherished memories."
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

                        <Box
                            display="flex"
                            alignItems="center"
                            flexDirection="column"
                            position="relative"
                            px={2}
                        >
                            <Box textAlign="center">
                                <FormLabel sx={{ mr: 1 }}>
                                    Side by Side
                                </FormLabel>
                                <FormControlLabel
                                    control={
                                        <IOSSwitch
                                            sx={{ m: 1 }}
                                            defaultChecked={sideBySide}
                                            onChange={() =>
                                                setSideBySide(
                                                    (prevState) => !prevState,
                                                )
                                            }
                                        />
                                    }
                                    label="Compare"
                                />
                            </Box>
                            {!sideBySide && (
                                <Box
                                    display="flex"
                                    gap={2}
                                    justifyContent="center"
                                >
                                    <Box textAlign="center" flex={0.45}>
                                        <Typography
                                            component="h2"
                                            fontWeight={700}
                                        >
                                            Original Photo
                                        </Typography>
                                        <LazyLoadImage
                                            src={images[0].src}
                                            effect="blur"
                                            placeholderSrc={images[0].name}
                                            style={{
                                                borderRadius: 4,
                                                display: 'block',
                                                width: '100%',
                                                height: '100%',
                                            }}
                                            alt={images[0].name}
                                        />
                                    </Box>
                                    <Box textAlign="center" flex={0.45}>
                                        <Typography
                                            component="h2"
                                            fontWeight={700}
                                        >
                                            Restored Photo
                                        </Typography>
                                        <LazyLoadImage
                                            src={restoredImage}
                                            // loading='lazy'
                                            effect="blur"
                                            placeholderSrc={restoredImage}
                                            style={{
                                                borderRadius: 4,
                                                display: 'block',
                                                width: '100%',
                                                height: '100%',
                                            }}
                                            alt={restoredImage}
                                        />
                                    </Box>
                                </Box>
                            )}

                            {sideBySide && (
                                <Box flex={0.6} display="flex" width="620px">
                                    <CompareSlider
                                        original={images[0].src}
                                        restored={restoredImage}
                                    />
                                </Box>
                            )}
                        </Box>
                    </Box>
                    <RestorationOptions imageUrl="" />
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

const IOSSwitch = styled((props: SwitchProps) => (
    <Switch
        focusVisibleClassName=".Mui-focusVisible"
        disableRipple
        {...props}
    />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor:
                    theme.palette.mode === 'dark' ? '#2ECA45' : '#000000',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));
