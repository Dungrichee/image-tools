import React from 'react';
import {
    Box,
    Divider,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import { useAppDispatch, useAppSelector } from 'hook';
import { changeImagePercentageOption } from 'redux_store/resize/resize_slice';
import { changeImagePercentage } from 'redux_store/image_storage/image_slice';

function ByPercentage() {
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const { percentage } = useAppSelector(({ resizeSlice }) => resizeSlice);

    const handlePercentageChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        value: string,
    ) => {
        dispatch(changeImagePercentageOption(Number(value)));
        dispatch(changeImagePercentage(Number(value)));
    };

    return (
        <Box>
            <Typography variant="h6" my={2}>
                Change size
            </Typography>
            <FormControl sx={{ width: '100%' }}>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue={percentage}
                    name="radio-buttons-group"
                    sx={{
                        width: '100%',
                    }}
                    value={percentage}
                    onChange={handlePercentageChange}
                >
                    <FormControlLabel
                        value={75}
                        labelPlacement="start"
                        control={<Radio />}
                        label="75% Smaller"
                        classes={{
                            root: classes.rootLabel,
                            label: classes.label,
                        }}
                    />
                    <Divider />
                    <FormControlLabel
                        value={50}
                        labelPlacement="start"
                        control={<Radio />}
                        label="50% Smaller"
                        classes={{
                            root: classes.rootLabel,
                            label: classes.label,
                        }}
                    />
                    <Divider />
                    <FormControlLabel
                        value={25}
                        labelPlacement="start"
                        control={<Radio />}
                        label="25% Smaller"
                        classes={{
                            root: classes.rootLabel,
                            label: classes.label,
                        }}
                    />
                    <Divider />
                </RadioGroup>
            </FormControl>
        </Box>
    );
}

export default ByPercentage;

const useStyles = makeStyles(() => ({
    rootLabel: {
        marginLeft: 0,
        padding: '8px 0px',
    },
    label: {
        flex: 1,
    },
}));
