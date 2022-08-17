import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from 'hook';
import FormTextField from 'components/hook_form/form_text_field';
import { changeWatermarkName } from 'redux_store/watermark_image/watermark_image_slice';
import { useDelayTimeout } from 'hook/use_delay_timeout';

function WatermarkSettings() {
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const delayTimeout = useDelayTimeout();
    const { images } = useAppSelector(({ imageSlice }) => imageSlice);
    const { watermarkName } = useAppSelector(
        ({ watermarkImageSlice }) => watermarkImageSlice,
    );

    const { control, setValue } = useForm<{ name: string }>({
        defaultValues: {
            name: '',
        },
    });

    useEffect(() => {
        setValue('name', watermarkName);
    }, [setValue, watermarkName]);

    const handleOnChange = (
        name: string,
        value: string | { id: string; name: string },
    ) => {
        delayTimeout(() => dispatch(changeWatermarkName(value)));
    };

    return (
        <Box>
            <Typography variant="h6" my={2}>
                Only applies to one image
            </Typography>
            <Box className={classes.formSize}>
                <Typography>Water name </Typography>
                <FormTextField
                    control={control}
                    name="name"
                    label="Name"
                    type="text"
                    handleOnChange={handleOnChange}
                    isDisabled={images.length > 1}
                />
            </Box>
        </Box>
    );
}

export default WatermarkSettings;

const useStyles = makeStyles(() => ({
    formSize: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
}));
