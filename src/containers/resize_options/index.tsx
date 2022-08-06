import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
    Box,
    Button,
    Divider,
    Tab,
    Tabs,
    Typography,
} from '@mui/material';
import { AiOutlinePercentage } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { RiPixelfedLine } from 'react-icons/ri';
import { SiConvertio } from 'react-icons/si';

import Guide from './guide';
import ByPercentage from './by_percentage';
import ByPixels from './by_pixels';

function ResizeOptions() {
    const classes = useStyles();
    const [tab, setTab] = useState(0);

    const handleChange = (event: React.SyntheticEvent, value: number) => {
        setTab(value);
    };

    return (
        <Box className={classes.options}>
            <Typography variant="h4" textAlign="center" my={3}>
                Resize Options
            </Typography>
            <Box>
                <Divider />
                <Tabs
                    value={tab}
                    onChange={handleChange}
                    aria-label="icon label tabs example"
                >
                    <Tab
                        icon={<RiPixelfedLine size={32} />}
                        label="By pixels"
                        classes={{ root: classes.tab }}
                    />
                    <Tab
                        icon={<AiOutlinePercentage size={32} />}
                        label="By percentage"
                        classes={{ root: classes.tab }}
                    />
                    <Tab
                        icon={<BsInfoCircle size={32} />}
                        label="How to resize"
                        classes={{ root: classes.tab }}
                    />
                </Tabs>
                <Divider />
            </Box>
            <Box flex={1}>
                {!tab && <ByPixels />}
                {tab === 1 && <ByPercentage />}
                {tab === 2 && <Guide />}
            </Box>
            <Box textAlign="center">
                <Button
                    variant="contained"
                    size="large"
                    endIcon={<SiConvertio />}
                >
                    Resize IMAGES
                </Button>
            </Box>
        </Box>
    );
}

export default ResizeOptions;

const useStyles = makeStyles(() => ({
    options: {
        background: '#f5f5f5',
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 451,
        width: 451,
    },
    tab: {
        textTransform: 'capitalize',
        padding: '12px  28px',
    },
}));
