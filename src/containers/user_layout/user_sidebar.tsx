import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Box,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Link from 'next/link';
import classNames from 'classnames';

import { colorTypes } from 'utils/constants';
import ComponentOptions from 'utils/routers';
import SocialNetwork from 'components/social_network';
import image from 'assets/logo/logo_seo.png';
// import Image from 'next/image';

function UserSidebar() {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const handleOpenCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Box className={classes.root}>
            <Box className={classes.sidebarHeader} py={3}>
                {/* <Image src={image.src} alt='Image Tool Logo' /> */}
                <LazyLoadImage
                    src={image.src}
                    effect="blur"
                    placeholderSrc={image.src}
                    style={{
                        borderBottomLeftRadius: 4,
                        borderBottomRightRadius: 4,
                        display: 'block',
                        width: '50%',
                        margin: '0 auto'
                    }}
                    alt={image.src}
                />
                <Link href="/">Image Tools</Link>
            </Box>
            <Box className={classes.sidebarContent}>
                <Box className={classes.pages}>
                    {ComponentOptions.map((route, index) => (
                        <React.Fragment key={index}>
                            {route?.subMenu ? (
                                <ListItemButton onClick={handleOpenCollapse}>
                                    <ListItemIcon>{route?.icon}</ListItemIcon>
                                    <ListItemText primary={route?.title} />
                                    {isOpen ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                            ) : (
                                <Link href={`${route.url}`}>
                                    <ListItemButton
                                        className={classNames({
                                            [classes.active]:
                                                router.pathname === route.url,
                                        })}
                                    >
                                        <ListItemIcon>
                                            {route?.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={route?.title} />
                                    </ListItemButton>
                                </Link>
                            )}
                            {route?.subMenu?.map((menu, index) => (
                                <Collapse
                                    in={isOpen}
                                    timeout="auto"
                                    unmountOnExit
                                    key={index}
                                >
                                    <List component="div" disablePadding>
                                        <Link href={`${menu.url}`}>
                                            <ListItemButton
                                                sx={{ pl: 4 }}
                                                className={classNames({
                                                    [classes.active]:
                                                        router.pathname ===
                                                        menu.url,
                                                })}
                                            >
                                                <ListItemIcon>
                                                    {menu?.icon}
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={menu?.title}
                                                />
                                            </ListItemButton>
                                        </Link>
                                    </List>
                                </Collapse>
                            ))}
                        </React.Fragment>
                    ))}
                </Box>
            </Box>
            <Box className={classes.sidebarBottom}>
                <SocialNetwork />
            </Box>
        </Box>
    );
}

export default UserSidebar;

const useStyles = makeStyles(() => ({
    root: {
        background: colorTypes.BG_SIDEBAR,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
        width: 230,
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
        padding: '20px',
        background: 'rgb(30, 42, 56)',
    },
    pages: {
        '& svg': {
            opacity: 0.5,
        },
    },
    divider: {
        margin: '30px 0 10px 0',
    },
    active: {
        background: 'rgb(30, 42, 56)',
    },
    activeSub: {},
}));
