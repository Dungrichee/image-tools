import React from 'react';
import { Slider, Stack, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';

type TextFieldSize = 'small' | 'medium';

interface FormSliderProps {
    name: string;
    control: any;
    value?: number;
    size?: TextFieldSize;
    handleOnChange?: (name: string, value: number | number[]) => any;
    min: number;
    max: number;
    currentValue?: number,
    step?: number
}

function FormSlider(props: FormSliderProps) {
    const {
        name,
        size = 'small',
        control,
        value,
        min,
        max,
        currentValue,
        step = 1,
        handleOnChange,
    } = props;

    return (
        <Stack
            spacing={2}
            direction="row"
            sx={{ width: 210 }}
            alignItems="center"
        >
            <Typography component="span" variant="body2">
                {min}
            </Typography>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Slider
                        {...field}
                        aria-label={name}
                        size={size}
                        value={value !== undefined ? value : field.value}
                        onChange={(e, value) => {
                            if (handleOnChange) {
                                handleOnChange(name, value);
                            }

                            field.onChange(e);
                        }}
                        min={min}
                        max={max}
                        step={step}
                    />
                )}
            />

            <Typography component="span" variant="body2">
                <strong>{currentValue}</strong>/{max}
            </Typography>
        </Stack>
    );
}

export default FormSlider;
