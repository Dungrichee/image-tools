import { Box, Chip, Divider, Theme, Typography } from '@mui/material';
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';

import Restoration from './restoration';
import RemoveBackground from './remove';
import Watermark from './watermark';
import Resize from './resize';
import Crop from './crop';

type FeatureType = 'restoration' | 'remove' | 'resize' | 'crop' | 'watermark';

const features: { label: string; key: FeatureType }[] = [
    {
        label: 'Restoration',
        key: 'restoration',
    },
    {
        label: 'Remove BG',
        key: 'remove',
    },
    {
        label: 'Resize',
        key: 'resize',
    },
    {
        label: 'Crop',
        key: 'crop',
    },
    {
        label: 'Watermark',
        key: 'watermark',
    },
];

function Example() {
    const classes = useStyles();
    const [chipSelected, setChipSelected] =
        useState<FeatureType>('restoration');

    const handleChipSelected = (key: FeatureType) => {
        setChipSelected(key);
    };

    const renderChipContent = () => {
        switch (chipSelected) {
            case 'restoration':
                return <Restoration />;
            case 'remove':
                return <RemoveBackground />;
            case 'resize':
                return <Resize />;
            case 'crop':
                return <Crop />;
            case 'watermark':
                return <Watermark />;
            default:
                return null;
        }
    };

    return (
        <Box>
            <Box textAlign="center" m={3}>
                <Typography variant="h4" className={classes.title}>
                    Some examples
                </Typography>
                <Box display="flex" gap={1} p={2} justifyContent="center">
                    {features.map((feature) => (
                        <Chip
                            label={feature.label}
                            key={feature.key}
                            variant={
                                chipSelected === feature.key
                                    ? 'filled'
                                    : 'outlined'
                            }
                            onClick={() => handleChipSelected(feature.key)}
                        />
                    ))}
                </Box>
                <Box>{renderChipContent()}</Box>
            </Box>
            <Divider />
        </Box>
    );
}

export default Example;

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        position: 'relative',
        paddingBottom: 8,
        '&::before': {
            content: "''",
            width: 100,
            height: 5,
            backgroundColor: theme.palette.primary.main,
            position: 'absolute',
            left: '50%',
            bottom: 0,
            transform: 'translateX(-50%)',
            borderRadius: 10,
        },
    },
}));
