import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Chip, Divider, IconButton, Typography } from '@mui/material';
import { CgSize } from 'react-icons/cg';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { MdDeleteOutline } from 'react-icons/md';

import { IImage } from 'types';
import { BOX_SHADOW } from 'constants/styles';

interface ICardImageProps {
    index: number;
    image: IImage;
}

function CardImage(props: ICardImageProps) {
    const { index, image } = props;
    const classes = useStyles();

    const handleClick = () => {
        console.log('id');
    };

    return (
        <Box key={index} className={classes.card}>
            <Box className={classes.btnDelete}>
                <IconButton onClick={handleClick} size="small">
                    <MdDeleteOutline size={24} color="red" />
                </IconButton>
            </Box>
            <img
                src={image.src}
                alt={image.name}
                loading="lazy"
                style={{
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    display: 'block',
                    width: '100%',
                }}
            />
            <Typography
                className={classes.cardLabel}
                variant="body2"
                color="gray"
            >
                {image.name}
            </Typography>
            <Divider />
            <Box textAlign="center" p={2}>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Chip
                        label={`${image.width} x ${image.height}`}
                        size="small"
                    />
                    <HiArrowNarrowRight style={{ margin: '0 8px' }} />
                    <Chip
                        label={`${image.width} x ${image.height}`}
                        size="small"
                        color="primary"
                    />
                </Box>
                <Box mt={1}>
                    <Chip
                        label={`${image.width} kb`}
                        size="small"
                        color="info"
                        icon={<CgSize />}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default CardImage;

const useStyles = makeStyles(() => ({
    card: {
        position: 'relative',
        boxShadow: BOX_SHADOW,
    },
    cardLabel: {
        textAlign: 'center',
        padding: 4,
    },
    btnDelete: {
        position: 'absolute',
        background: 'white',
        right: 4,
        top: 4,
        display: 'flex',
        alignItems: 'center',
        borderRadius: '50%',
        boxShadow: BOX_SHADOW,
    },
}));
