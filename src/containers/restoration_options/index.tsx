import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Divider, Typography } from '@mui/material';
import { DownloadOutlined } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';

import { useAppDispatch } from 'hook';
import { useDelayLoading } from 'hook/use_delay_loading';
import { resetSlice } from 'redux_store/watermark_image/watermark_image_slice';
import Loading from 'components/loading';

interface IRestorationOptions {
    imageUrl: string;
}

function RestorationOptions(props: IRestorationOptions) {
    const dispatch = useAppDispatch();

    const classes = useStyles();
    const { loading } = useDelayLoading();
    const { imageUrl } = props;

    useEffect(() => {
        return () => {
            dispatch(resetSlice());
        };
    }, [dispatch]);

    const onDownload = async () => {
        if (!imageUrl) return;

        console.log(imageUrl);

        // dispatch(downloadImage({ imageDataUri }))
    };

    return (
        <Box className={classes.options}>
            <Typography variant="h4" textAlign="center" my={3}>
                Restoration image
            </Typography>
            <Box>
                <Divider />
                <Typography className={classes.note}>
                    Image will be converted to .
                </Typography>
            </Box>
            <Box flex={1}></Box>
            <Box textAlign="center">
                <LoadingButton
                    startIcon={
                        loading ? <Loading size={22} /> : <DownloadOutlined />
                    }
                    variant="contained"
                    size="large"
                    onClick={onDownload}
                    disabled={loading}
                >
                    Download
                </LoadingButton>
            </Box>
        </Box>
    );
}

export default RestorationOptions;

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
