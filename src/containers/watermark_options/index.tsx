import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Divider, Tab, Tabs, Typography } from '@mui/material';
import { BsInfoCircle } from 'react-icons/bs';
import { RiPixelfedLine } from 'react-icons/ri';
import { SiConvertio } from 'react-icons/si';
import { LoadingButton } from '@mui/lab';
import { toJpeg } from 'html-to-image';

import { IImage } from 'types';
import { useAppDispatch, useAppSelector } from 'hook';
import { useDelayLoading } from 'hook/use_delay_loading';
import { resetSlice } from 'redux_store/watermark_image/watermark_image_slice';
import Loading from 'components/loading';
import WatermarkSettings from './watermark_settings';
import Guide from './guide';

function WatermarkOptions() {
    const classes = useStyles();
    const [tab, setTab] = useState(0);
    const dispatch = useAppDispatch();
    const { loading, onDelayLoading } = useDelayLoading();
    const { images } = useAppSelector(({ imageSlice }) => imageSlice);

    useEffect(() => {
        return () => {
            dispatch(resetSlice());
        };
    }, [dispatch]);

    const handleChange = (event: React.SyntheticEvent, value: number) => {
        setTab(value);
    };

    const downloadImage = async (divEl: HTMLElement, image: IImage) => {
        return toJpeg(divEl, {
            canvasWidth: image.width,
            canvasHeight: image.height,
        }).then((dataUrl) => {
            const link = document.createElement('a');
            link.download = images[0].name;
            link.href = dataUrl;
            link.click();
        });
    };

    const onSubmit = () => {
        if (!images.length) return;

        const divEl = document.querySelector(
            '#wrapperImage > div',
        ) as HTMLElement;

        if (!divEl) return;

        onDelayLoading(() => downloadImage(divEl, images[0]));
    };

    return (
        <Box className={classes.options}>
            <Typography variant="h4" textAlign="center" my={3}>
                Watermark options
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
                <LoadingButton
                    endIcon={loading ? <Loading size={22} /> : <SiConvertio />}
                    variant="contained"
                    size="large"
                    onClick={onSubmit}
                    disabled={loading}
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
