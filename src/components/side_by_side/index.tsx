import React, { useState } from 'react';
import { Box, FormControlLabel, FormLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';

import { IImage } from 'types';
import Selected from './selected';
import Unselected from './unselected';

interface ISideBySide {
    image: IImage;
    newImg: string;
}

function SideBySide(props: ISideBySide) {
    const [sideBySide, setSideBySide] = useState<boolean>(false);

    return (
        <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            position="relative"
            px={2}
        >
            <Box textAlign="center">
                <FormLabel sx={{ mr: 1 }}>Side by Side</FormLabel>
                <FormControlLabel
                    control={
                        <IOSSwitch
                            sx={{ m: 1 }}
                            defaultChecked={sideBySide}
                            onChange={() =>
                                setSideBySide((prevState) => !prevState)
                            }
                        />
                    }
                    label="Compare"
                />
            </Box>

            {sideBySide ? (
                <Selected image={props.image} newImg={props.newImg} />
            ) : (
                <Unselected image={props.image} newImg={props.newImg} />
            )}
        </Box>
    );
}

export default SideBySide;

const IOSSwitch = styled((props: SwitchProps) => (
    <Switch
        focusVisibleClassName=".Mui-focusVisible"
        disableRipple
        {...props}
    />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor:
                    theme.palette.mode === 'dark' ? '#2ECA45' : '#000000',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));
