import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Divider, Typography } from '@mui/material';
import { FiCrop } from 'react-icons/fi';
import { LoadingButton } from '@mui/lab';
import { saveAs } from 'file-saver';

import { useAppSelector } from 'hook';
import { useDelayLoading } from 'hook/use_delay_loading';
import Loading from 'components/loading';
import Guide from './guide';

function CropOptions({ getCropData }: { getCropData: () => string }) {
    const classes = useStyles();
    const { loading, onDelayLoading } = useDelayLoading();
    const { images } = useAppSelector(({ imageSlice }) => imageSlice);

    const onSubmit = () => {
        onDelayLoading(() => saveAs(getCropData(), images[0].name));
    };

    return (
        <Box className={classes.options}>
            <Typography variant="h4" textAlign="center" my={3}>
                How to crop an image?
            </Typography>
            <Divider />
            <Box flex={1} p={2}>
                <Guide />
            </Box>
            <Box textAlign="center">
                <LoadingButton
                    endIcon={loading ? <Loading size={22} color="#3f50b5" /> : <FiCrop />}
                    variant="contained"
                    size="large"
                    onClick={onSubmit}
                    disabled={loading}
                >
                    Crop image
                </LoadingButton>
            </Box>
        </Box>
    );
}

export default CropOptions;

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
