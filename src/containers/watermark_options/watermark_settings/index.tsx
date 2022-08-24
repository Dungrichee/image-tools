import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from 'hook';
import { initWatermarkOptions } from 'constants/options';
import { changeWatermarkParams } from 'redux_store/watermark_image/watermark_image_slice';
import { useDelayTimeout } from 'hook/use_delay_timeout';
import { IWatermarkOptions } from 'types/options';
import FormTextField from 'components/hook_form/form_text_field';
import FormSlider from 'components/hook_form/form_slider';

function WatermarkSettings() {
    const dispatch = useAppDispatch();
    const delayTimeout = useDelayTimeout();
    const classes = useStyles();
    const { watermark } = useAppSelector(
        ({ watermarkImageSlice }) => watermarkImageSlice,
    );

    const { control, reset } = useForm<IWatermarkOptions>({
        defaultValues: { ...initWatermarkOptions },
    });

    useEffect(() => {
        reset(watermark);
    }, []);

    const handleOnChange = (name: string, value: string) => {
        delayTimeout(() => dispatch(changeWatermarkParams({ [name]: value })));
    };

    const handleChangeSlider = (name: string, value: number | number[]) => {
        dispatch(changeWatermarkParams({ [name]: value }));
    };

    return (
        <Box pt={3}>
            <Box className={classes.optionRow}>
                <Typography>Water text </Typography>
                <FormTextField
                    control={control}
                    name="text"
                    label="Name"
                    type="text"
                    handleOnChange={handleOnChange}
                />
            </Box>
            <Box className={classes.optionRow}>
                <Typography>Text size </Typography>
                <FormSlider
                    control={control}
                    max={64}
                    min={8}
                    name="textSize"
                    handleOnChange={handleChangeSlider}
                    currentValue={watermark.textSize}
                />
            </Box>
            <Box className={classes.optionRow}>
                <Typography>Font Family </Typography>
                <FormTextField
                    control={control}
                    name="fontFamily"
                    label="Font family"
                    type="text"
                    handleOnChange={handleOnChange}
                />
            </Box>
            <Box className={classes.optionRow}>
                <Typography>Opacity </Typography>
                <FormSlider
                    control={control}
                    max={1}
                    min={0}
                    name="opacity"
                    handleOnChange={handleChangeSlider}
                    currentValue={watermark.opacity}
                    step={0.1}
                />
            </Box>
            <Box className={classes.optionRow}>
                <Typography>Rotate </Typography>
                <FormSlider
                    control={control}
                    max={360}
                    min={-360}
                    name="rotate"
                    handleOnChange={handleChangeSlider}
                    currentValue={watermark.rotate}
                />
            </Box>
            <Box className={classes.optionRow}>
                <Typography>Text color </Typography>
                <FormTextField
                    control={control}
                    label="Text color"
                    name="textColor"
                    type="color"
                    handleOnChange={handleOnChange}
                    sx={{ width: 210 }}
                />
            </Box>
        </Box>
    );
}

export default WatermarkSettings;

const useStyles = makeStyles(() => ({
    optionRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
}));
