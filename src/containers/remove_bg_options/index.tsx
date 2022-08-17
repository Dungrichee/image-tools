import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Divider, Typography } from '@mui/material';
import { FiCrop } from 'react-icons/fi';
import { LoadingButton } from '@mui/lab';

import { useAppSelector } from 'hook';
import Guide from './guide';

function RemoveBgOptions() {
    const classes = useStyles();

    const { images } = useAppSelector(({ imageSlice }) => imageSlice);
    const { tab } = useAppSelector(({ resizeSlice }) => resizeSlice);

    const onSubmit = () => {
        console.log('on submit');
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
                    endIcon={<FiCrop />}
                    variant="contained"
                    size="large"
                    onClick={onSubmit}
                    disabled={images.length > 1 && tab === 0}
                >
                    Download
                </LoadingButton>
            </Box>
        </Box>
    );
}

export default RemoveBgOptions;

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
