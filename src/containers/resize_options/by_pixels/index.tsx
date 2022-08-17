import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, InputAdornment, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import { IImageSize } from 'types';
import { financial } from 'utils/calculate';
import { useAppDispatch, useAppSelector } from 'hook';
import { AspectRatioOptions } from 'constants/resize_options';
import { changeImageSize } from 'redux_store/resize/resize_slice';
import FormTextField from 'components/hook_form/form_text_field';
import FormAutocomplete from 'components/hook_form/form_autocomplete';

function ByPixels() {
    const classes = useStyles();
    const { images } = useAppSelector(({ imageSlice }) => imageSlice);
    const { size } = useAppSelector(({ resizeSlice }) => resizeSlice);

    const dispatch = useAppDispatch();

    const { control, reset, getValues } = useForm<IImageSize>({
        defaultValues: {
            width: 0,
            height: 0,
            ratio: AspectRatioOptions[0],
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

    const getAspectRatio = (id: string) => {
        const option = AspectRatioOptions.find(
            (option) => option.id === id,
        )?.id;

        if (!option || option === 'custom')
            return { ratioWidth: 1, ratioHeight: 1 };

        const [ratioW, ratioH] = option.split(':');

        return { ratioWidth: Number(ratioW), ratioHeight: Number(ratioH) };
    };

    const handleOnChange = (
        name: string,
        value: string | { id: string; name: string },
    ) => {
        const ratio = getValues('ratio');
        if (!ratio?.id) return;

        const { ratioWidth, ratioHeight } = getAspectRatio(ratio.id);

        if (name === 'ratio') {
            const { width, height } = images[0];
            if (ratio.id === 'custom') {
                return dispatch(
                    changeImageSize({
                        width,
                        height,
                    }),
                );
            } else {
                return dispatch(
                    changeImageSize({
                        width,
                        height: financial((width * ratioHeight) / ratioWidth),
                    }),
                );
            }
        }

        if (name !== 'custom' && ratio.id === 'custom') {
            return dispatch(changeImageSize({ [name]: Number(value) }));
        }

        if (name === 'width') {
            return dispatch(
                changeImageSize({
                    [name]: Number(value),
                    height: financial(
                        (Number(value) * ratioHeight) / ratioWidth,
                    ),
                }),
            );
        } else {
            return dispatch(
                changeImageSize({
                    [name]: Number(value),
                    width: financial(
                        (Number(value) * ratioWidth) / ratioHeight,
                    ),
                }),
            );
        }
    };

    return (
        <Box>
            <Typography variant="h6" my={2}>
                Only applies to one image
            </Typography>
            <Box className={classes.formSize}>
                <Typography>Ratios </Typography>
                <FormAutocomplete
                    control={control}
                    name="ratio"
                    label="Ratio Options"
                    options={AspectRatioOptions}
                    optionLabel="name"
                    handleOnChange={handleOnChange}
                    sx={{ width: 240 }}
                    isDisableClearable
                    isDisabled={images.length > 1}
                />
            </Box>
            <Box className={classes.formSize}>
                <Typography>Width </Typography>
                <FormTextField
                    control={control}
                    name="width"
                    label="Width"
                    type="number"
                    value={size.width}
                    handleOnChange={handleOnChange}
                    inputProps={{
                        endAdornment: (
                            <InputAdornment position="end">px</InputAdornment>
                        ),
                    }}
                    isDisabled={images.length > 1}
                />
            </Box>
            <Box className={classes.formSize}>
                <Typography>Height </Typography>
                <FormTextField
                    name="height"
                    label="Height"
                    control={control}
                    value={size.height}
                    handleOnChange={handleOnChange}
                    type="number"
                    inputProps={{
                        endAdornment: (
                            <InputAdornment position="end">px</InputAdornment>
                        ),
                    }}
                    isDisabled={images.length > 1}
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
