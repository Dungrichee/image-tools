import React, { CSSProperties } from 'react';
import { Autocomplete, SxProps, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

interface IFormAutocompleteProps {
    name: string;
    label: string;
    control: any;
    options: object[];
    optionLabel: string;
    style?: CSSProperties;
    sx?: SxProps;
    size?: 'small' | 'medium' | undefined;
    ml?: string | number;
    mr?: string | number;
    isDisableClearable?: boolean;
    isMultiple?: boolean; //Nếu là true thì defaultValue là [] | [...] còn false thì phải là {} | {...} | null;
    value?: object | null;
    handleOnChange?: (name: string, value: any) => void;
    limitTags?: number;
    isDisabled?: boolean;
}

function FormAutocomplete(props: IFormAutocompleteProps) {
    const {
        name,
        label,
        control,
        isMultiple = false,
        options = [],
        optionLabel,
        size = 'small',
        isDisableClearable = false,
        value,
        handleOnChange,
        limitTags = 2,
        isDisabled,
        sx
    } = props;

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, field: { onChange }, fieldState: { error } }) => (
                <Autocomplete
                    multiple={isMultiple}
                    sx={sx}
                    filterSelectedOptions={isMultiple}
                    options={options}
                    getOptionLabel={(option: any) => option[optionLabel] || ''}
                    size={size}
                    value={value !== undefined ? value : field.value}
                    limitTags={limitTags}
                    disableClearable={isDisableClearable}
                    disabled={isDisabled}
                    onChange={(e, option) => {
                        onChange(option);
                        if (handleOnChange) {
                            handleOnChange(name, option);
                        }
                    }}
                    noOptionsText="Không có lựa chọn"
                    isOptionEqualToValue={(option, value) =>
                        option?.[optionLabel] === value?.[optionLabel]
                    }
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            name={name}
                            label={label}
                            variant="outlined"
                            error={!!error}
                            disabled={isDisabled}
                            helperText={error ? error.message : null}
                        />
                    )}
                />
            )}
        />
    );
}

export default FormAutocomplete;
