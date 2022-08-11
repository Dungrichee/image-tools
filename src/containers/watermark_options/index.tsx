import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Button, Divider, Tab, Tabs, Typography } from '@mui/material';
import { BsInfoCircle } from 'react-icons/bs';
import { RiPixelfedLine } from 'react-icons/ri';
import { SiConvertio } from 'react-icons/si';
import { LoadingButton } from '@mui/lab';

import Guide from './guide';
import WatermarkSettings from './watermark_settings';
import { useAppDispatch, useAppSelector } from 'hook';
import { changeTab } from 'redux_store/local_image/local_image_slice';
import { previewImage } from 'redux_store/watermark_image/watermark_image_slice';

function WatermarkOptions() {
    const classes = useStyles();
    const dispatch = useAppDispatch();

    const { images, tab } = useAppSelector(
        ({ localImageSlice }) => localImageSlice,
    );

    const { preview } = useAppSelector(
        ({ watermarkImageSlice }) => watermarkImageSlice,
    );

    const handleChange = (event: React.SyntheticEvent, value: number) => {
        dispatch(changeTab(value));
    };

    const onSubmit = () => {
        console.log('on submit');
    };

    const onPreview = () => {
        dispatch(previewImage());
    };

    return (
        <Box className={classes.options}>
            <Typography variant="h4" textAlign="center" my={3}>
                Watermark image
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
                        label="Settings"
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
                {!tab && <WatermarkSettings />}
                {tab === 1 && <Guide />}
            </Box>
            <Box textAlign="center">
                <Button
                    variant="contained"
                    size="large"
                    style={{ marginRight: 8 }}
                    color="inherit"
                    onClick={onPreview}
                    disabled={preview}
                >
                    Preview
                </Button>
                <LoadingButton
                    endIcon={<SiConvertio />}
                    variant="contained"
                    size="large"
                    onClick={onSubmit}
                    disabled={images.length > 1 && tab === 0}
                >
                    Make Water
                </LoadingButton>
            </Box>
        </Box>
    );
}

export default WatermarkOptions;

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
        width: '50%',
    },
}));
