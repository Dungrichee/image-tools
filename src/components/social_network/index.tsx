import React from 'react';
import { FacebookOutlined, Instagram, YouTube } from '@mui/icons-material';
import { Box, Fab } from '@mui/material';
import Link from 'next/link';

interface ISocialIcon {
    href: string;
    color?:
        | 'inherit'
        | 'default'
        | 'primary'
        | 'secondary'
        | 'success'
        | 'error'
        | 'info'
        | 'warning';
    icon: any;
}

function SocialIcon(props: ISocialIcon) {
    const { href, color = 'default', icon: ICon } = props;
    return (
        <Box>
            <Link href={href}>
                <a target="_blank" rel="noopener noreferrer">
                    <Fab color={color} size="small">
                        <ICon />
                    </Fab>
                </a>
            </Link>
        </Box>
    );
}

function SocialNetwork() {
    return (
        <Box display="flex" justifyContent="space-around" flex={1}>
            <SocialIcon
                href="https://www.facebook.com"
                icon={FacebookOutlined}
                color="primary"
            />
            <SocialIcon
                href="https://www.youtube.com"
                icon={YouTube}
                color="error"
            />
            <SocialIcon
                href="https://instagram.com"
                icon={Instagram}
                color="secondary"
            />
        </Box>
    );
}

export default SocialNetwork;
