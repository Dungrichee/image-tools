import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Divider, Typography } from '@mui/material';
import { SiConvertio } from 'react-icons/si';
import { LoadingButton } from '@mui/lab';
import { toJpeg, toPng } from 'html-to-image';

import { useAppDispatch, useAppSelector } from 'hook';
import { useDelayLoading } from 'hook/use_delay_loading';
import { resetSlice } from 'redux_store/watermark_image/watermark_image_slice';
import Loading from 'components/loading';

type IConvertType = 'JPG' | 'PNG';
interface IConvertOptions {
    type: IConvertType;
}

function ConvertOptions(props: IConvertOptions) {
    const { type } = props;
    const dispatch = useAppDispatch();
    const classes = useStyles();
    const { loading, onDelayLoading } = useDelayLoading();
    const { images } = useAppSelector(({ imageSlice }) => imageSlice);

    useEffect(() => {
        return () => {
            dispatch(resetSlice());
        };
    }, [dispatch]);

    const areaCanvas = {
        canvasWidth: images[0].width,
        canvasHeight: images[0].height,
    };

    const convertImageTo = {
        JPG: async (divEl: HTMLElement) => {
            return toJpeg(divEl, {
                ...areaCanvas,
            }).then((dataUrl) => {
                const link = document.createElement('a');
                link.download = `${images[0].name}.jpg`;
                link.href = dataUrl;
                link.click();
            });
        },
        PNG: async (divEl: HTMLElement) => {
            return toPng(divEl, { ...areaCanvas })
                .then((dataUrl) => {
                    const link = document.createElement('a');
                    link.download = `${images[0].name}.png`;
                    link.href = dataUrl;
                    link.click();
                })
                .catch((error) =>
                    console.error('oops, something went wrong!', error),
                );
        },
    };

    const onSubmit = () => {
        if (!images.length) return;

        const divEl = document.querySelector('#imgEl') as HTMLElement;
        if (!divEl) return;

        onDelayLoading(() => convertImageTo[type](divEl));
    };

    return (
        <Box className={classes.options}>
            <Typography variant="h4" textAlign="center" my={3}>
                Convert options
            </Typography>
            <Box>
                <Divider />
                <Typography className={classes.note}>
                    Image will be converted to {type}.
                </Typography>
            </Box>
            <Box flex={1}></Box>
            <Box textAlign="center">
                <LoadingButton
                    endIcon={loading ? <Loading size={22} /> : <SiConvertio />}
                    variant="contained"
                    size="large"
                    onClick={onSubmit}
                    disabled={loading}
                >
                    Convert to {type}
                </LoadingButton>
            </Box>
        </Box>
    );
}

export default ConvertOptions;

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
    note: {
        padding: '8',
        marginTop: 12,
    },
}));
