import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import {
    Badge,
    Typography,
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Box,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Link from 'next/link';

import { colorTypes } from 'utils/constants';
import ComponentOptions from 'utils/routers';

function UserSidebar() {
    const classes = useStyles();
    const [isFilmOpen, setIsFilmOpen] = useState(false);

    const handleOpenFilmCollapse = () => {
        setIsFilmOpen(!isFilmOpen);
    };

    return (
        <Box className={classes.root}>
            <Box className={classes.sidebarHeader} py={3}>
                Image Tools
            </Box>
            <Box className={classes.sidebarContent}>
                <Box className={classes.pages}>
                    {ComponentOptions.map((route, index) => (
                        <React.Fragment key={index}>
                            {route?.subMenu ? (
                                <ListItemButton
                                    onClick={handleOpenFilmCollapse}
                                >
                                    <ListItemIcon>{route?.icon}</ListItemIcon>
                                    <ListItemText primary={route?.title} />
                                    {isFilmOpen ? (
                                        <ExpandLess />
                                    ) : (
                                        <ExpandMore />
                                    )}
                                </ListItemButton>
                            ) : (
                                <ListItemButton>
                                    <ListItemIcon>{route?.icon}</ListItemIcon>
                                    <Link href={`${route.url}`}>
                                        <ListItemText primary={route?.title} />
                                    </Link>
                                </ListItemButton>
                            )}
                            {route?.subMenu?.map((menu, index) => (
                                <Collapse
                                    in={isFilmOpen}
                                    timeout="auto"
                                    unmountOnExit
                                    key={index}
                                >
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                                {menu?.icon}
                                            </ListItemIcon>
                                            <Link href={`${menu.url}`}>
                                                <ListItemText
                                                    primary={menu?.title}
                                                />
                                            </Link>
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            ))}
                        </React.Fragment>
                    ))}
                </Box>
            </Box>
            <Box className={classes.sidebarBottom}>
                <Box>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        variant="dot"
                    >
                        {/* <Avatar alt="Dungriche.dev" src={avatarImage.src} /> */}
                    </StyledBadge>
                </Box>
                <Box>
                    <Typography>Nguyễn Dũng</Typography>
                    <Typography variant="body2">Super admin</Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default UserSidebar;

const useStyles = makeStyles(() => ({
    root: {
        width: '15%',
        background: colorTypes.BG_SIDEBAR,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
        '& *': {
            color: colorTypes.textWhite,
        },
    },
    sidebarHeader: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
    },
    sidebarContent: {
        flex: 'auto',
    },
    sidebarBottom: {
        display: 'flex',
        padding: '10px',
        background: 'rgb(30, 42, 56)',
        '& > div': {
            paddingLeft: '8px',
        },
    },
    pages: {
        '& svg': {
            opacity: 0.5,
        },
    },
    divider: {
        margin: '30px 0 10px 0',
    },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));
