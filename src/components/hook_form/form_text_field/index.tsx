import React from 'react';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

type TextFieldSize = 'small' | 'medium';

interface TextFieldProps {
    name: string;
    label: string;
    control: any;
    value?: string | number;
    isDisabled?: boolean;
    isRequired?: boolean;
    helperText?: string;
    type?: string;
    size?: TextFieldSize;
    style?: object;
    inputProps?: object;
    shrink?: boolean;
    handleOnChange?: (name: string, value: string) => any;
    onlyNumber?: boolean;
}

function FormTextField(props: TextFieldProps) {
    const {
        name,
        size = 'small',
        label,
        control,
        isDisabled = false,
        isRequired = false,
        type = 'text',
        helperText,
        value,
        inputProps,
        shrink,
        handleOnChange,
    } = props;

    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    {...field}
                    label={label}
                    size={size}
                    variant="outlined"
                    name={name}
                    error={!!error}
                    value={value !== undefined ? value : field.value}
                    onChange={(e) => {
                        if (handleOnChange) {
                            handleOnChange(name, e.target.value);
                        }

                        field.onChange(e);
                    }}
                    helperText={error ? error.message || helperText : null}
                    type={type}
                    InputProps={inputProps}
                    InputLabelProps={{ shrink: shrink }}
                    disabled={isDisabled}
                />
            )}
            rules={{
                required: isRequired,
            }}
        />
    );
}

export default FormTextField;
