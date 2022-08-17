import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Divider, Tab, Tabs, Typography } from '@mui/material';
import { AiOutlinePercentage } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { RiPixelfedLine } from 'react-icons/ri';
import { SiConvertio } from 'react-icons/si';
import { LoadingButton } from '@mui/lab';

import { IImage } from 'types';
import { useAppDispatch, useAppSelector } from 'hook';
import { changeTab } from 'redux_store/resize/resize_slice';
import { downloadZipImageFolder, resizeImages } from 'utils/resize';
import ByPercentage from './by_percentage';
import ByPixels from './by_pixels';
import Guide from './guide';

function ResizeOptions() {
    const classes = useStyles();
    const dispatch = useAppDispatch();

    const { images } = useAppSelector(({ imageSlice }) => imageSlice);
    const { size, tab } = useAppSelector(({ resizeSlice }) => resizeSlice);

    const handleChange = (event: React.SyntheticEvent, value: number) => {
        dispatch(changeTab(value));
    };

    const resizeMultipleImages = () => {
        const newImages: { url: string; fileName: string }[] = [];

        images.forEach((image: IImage, index: number) => {
            const { file, resizedWidth, resizedHeight } = image;
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = (event) => {
                if (!event.target) return;
                const imageUrl = event.target.result;
                const image = document.createElement('img');
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');

                canvas.width = resizedWidth;
                canvas.height = resizedHeight;

                image.src = imageUrl as string;
                image.width = resizedWidth;
                image.height = resizedHeight;

                image.onload = () => {
                    if (!context) return;

                    context.drawImage(image, 0, 0, resizedWidth, resizedHeight);

                    let newImageUrl = canvas.toDataURL('image/jpeg', 100);
                    newImageUrl = newImageUrl.replace(
                        /^data:image\/(png|jpg|jpeg);base64,/,
                        '',
                    );

                    const fileName: string = `${resizedWidth} x ${resizedHeight} - ${file.name}`;

                    newImages.push({ url: newImageUrl, fileName });

                    if (index === images.length - 1) {
                        downloadZipImageFolder(newImages);
                    }
                };
            };
        });
    };

    const onSubmit = () => {
        if (tab === 0)
            return resizeImages({
                image: images[0],
                width: size.width,
                height: size.height,
            });
        if (images.length > 1) return resizeMultipleImages();
        return resizeImages({
            image: images[0],
            width: images[0].resizedWidth,
            height: images[0].resizedHeight,
        });
    };

    return (
        <Box className={classes.options}>
            <Typography variant="h4" textAlign="center" my={3}>
                Resize Options
            </Typography>
            <Box>
                <Divider />
                <Tabs
                    value={tab}
                    onChange={handleChange}
                    aria-label="icon label tabs example"
                >
                    <Tab
                        icon={<RiPixelfedLine size={32} />}
                        label="By pixels"
                        classes={{ root: classes.tab }}
                    />
                    <Tab
                        icon={<AiOutlinePercentage size={32} />}
                        label="By percentage"
                        classes={{ root: classes.tab }}
                    />
                    <Tab
                        icon={<BsInfoCircle size={32} />}
                        label="How to resize"
                        classes={{ root: classes.tab }}
                    />
                </Tabs>
                <Divider />
            </Box>
            <Box flex={1}>
                {!tab && <ByPixels />}
                {tab === 1 && <ByPercentage />}
                {tab === 2 && <Guide />}
            </Box>
            <Box textAlign="center">
                <LoadingButton
                    endIcon={<SiConvertio />}
                    variant="contained"
                    size="large"
                    onClick={onSubmit}
                    disabled={images.length > 1 && tab === 0}
                >
                    Resize IMAGES
                </LoadingButton>
            </Box>
        </Box>
    );
}

export default ResizeOptions;

const useStyles = makeStyles(() => ({
    options: {
        background: '#f5f5f5',
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 451,
        width: 451,
    },
    tab: {
        textTransform: 'capitalize',
        padding: '12px  28px',
    },
}));
