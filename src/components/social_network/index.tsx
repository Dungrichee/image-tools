import { FacebookOutlined, Instagram, YouTube } from '@mui/icons-material';
import { Box, Fab } from '@mui/material';
import React from 'react';

function SocialNetwork() {
    return (
        <Box display="flex" justifyContent="space-around" flex={1}>
            <Box>
                <Fab color="primary" aria-label="facebook" size='small'>
                    <FacebookOutlined />
                </Fab>
            </Box>
            <Box>
                <Fab color="error" aria-label="youtube" size='small'>
                    <YouTube />
                </Fab>
            </Box>
            <Box>
                <Fab color="secondary" aria-label="instagram" size='small'>
                    <Instagram />
                </Fab>
            </Box>
        </Box>
    );
}

export default SocialNetwork;
