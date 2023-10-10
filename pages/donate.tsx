import React from 'react';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    IconButton,
    Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ContentCopy } from '@mui/icons-material';

import paypalLogo from 'assets/images/paypal.png';
import { toastMessage } from 'redux_store/toast';

function Donate() {
    const classes = useStyles();
    const email = 'dungsky482@gmail.com';

    const handleCopy = async () => {
        if (!navigator.clipboard) return;
        await navigator.clipboard.writeText(email);
        toastMessage.success('Email copied successfully');
    };

    return (
        <Box className={classes.page}>
            <Box textAlign="center" mb={2}>
                <Typography variant="h3">Donate</Typography>
                <Typography>
                    Please support me a little fee to maintain the website Image
                    tools.
                </Typography>
            </Box>
            <Box>
                <Card
                    sx={{
                        display: 'flex',
                        boxShadow: '0 0 40px rgb(0 0 0 / 2%)',
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                Donate with
                            </Typography>

                            <Box mt={2} display="flex" alignItems="center">
                                <Typography
                                    variant="subtitle1"
                                    color="text.secondary"
                                    mr={1}
                                >
                                    Email
                                </Typography>
                                <IconButton size="small" onClick={handleCopy}>
                                    <ContentCopy />
                                </IconButton>
                            </Box>
                            <Typography
                                variant="subtitle1"
                                color="text.secondary"
                            >
                                {email}
                            </Typography>
                        </CardContent>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                pl: 1,
                                pb: 1,
                            }}
                        ></Box>
                    </Box>
                    <Box p={3}>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image={paypalLogo.src}
                            alt="Live from space album cover"
                        />
                    </Box>
                </Card>
            </Box>
        </Box>
    );
}

export default Donate;

const useStyles = makeStyles(() => ({
    page: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 24,
    },
}));
