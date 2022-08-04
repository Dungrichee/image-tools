import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';

import UserSidebar from './user_sidebar';

interface UserLayoutProps {
    children: React.ReactNode;
}

function UserLayout({ children }: UserLayoutProps) {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <UserSidebar />
            <Box className={classes.content}>{children}</Box>
        </Box>
    );
}

export default UserLayout;

const useStyles = makeStyles(() => ({
    root: {
        position: 'relative',
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        width: '80%',
    },
}));
