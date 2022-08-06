import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

import { IImageSize } from 'types';
import { useAppDispatch, useAppSelector } from 'hook';
import { changeImageSize } from 'redux_store/local_image/local_image_slice';

function ByPixels() {
    const classes = useStyles();
    const { images } = useAppSelector(
        ({ localImageSlice }) => localImageSlice,
    );

    const dispatch = useAppDispatch();

    const { control, reset } = useForm<IImageSize>({
        defaultValues: {
            width: 0,
            height: 0,
        },
    });

    useEffect(() => {
        if (!images.length) return;

        if (images.length < 2) {
            const { width, height } = images[0];
            dispatch(changeImageSize({ width, height }));
            return reset({
                height,
                width,
            });
        }

        return reset({
            height: 0,
            width: 0,
        });
    }, [images, reset, dispatch]);

    const handleOnChange = (name: string, value: string) => {
        dispatch(changeImageSize({ [name]: Number(value) }));
    };

    return (
        <Box>
            <Typography variant="h6" my={2}>
                Only applies to one image
            </Typography>
            <Box className={classes.formSize}>
                <Typography>Width </Typography>
                <Controller
                    control={control}
                    name="width"
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Width"
                            variant="outlined"
                            name="width"
                            size="small"
                            placeholder="1-3000"
                            type="number"
                            onChange={(e) => {
                                field.onChange(e);
                                handleOnChange('width', e.target.value);
                            }}
                            disabled={!images.length || images.length > 1}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        px
                                    </InputAdornment>
                                ),
                            }}
                        />
                    )}
                    rules={{ min: 1, max: 3000 }}
                />
            </Box>
            <Box className={classes.formSize}>
                <Typography>Height </Typography>
                <Controller
                    control={control}
                    name="height"
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Height"
                            variant="outlined"
                            name="height"
                            size="small"
                            placeholder="1-3000"
                            type="number"
                            onChange={(e) => {
                                field.onChange(e);
                                handleOnChange('height', e.target.value);
                            }}
                            disabled={!images.length || images.length > 1}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        px
                                    </InputAdornment>
                                ),
                            }}
                        />
                    )}
                    rules={{ min: 1, max: 3000 }}
                />
            </Box>
        </Box>
    );
}

export default ByPixels;

const useStyles = makeStyles(() => ({
    formSize: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
}));
