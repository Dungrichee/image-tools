import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Chip, Divider, IconButton, Typography } from '@mui/material';
import { CgSize } from 'react-icons/cg';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { MdDeleteOutline } from 'react-icons/md';

import { IImage } from 'types';
import { useAppDispatch, useAppSelector } from 'hook';
import { BOX_SHADOW } from 'constants/styles';
import { deleteImage } from 'redux_store/image_storage/image_slice';

interface ICardImageProps {
    image: IImage;
}

function CardImage(props: ICardImageProps) {
    const { image } = props;
    const { images } = useAppSelector(({ imageSlice }) => imageSlice);
    const { size, tab } = useAppSelector(({ resizeSlice }) => resizeSlice);
    const classes = useStyles();
    const dispatch = useAppDispatch();

    const handleClick = (id: string) => {
        dispatch(deleteImage(id));
    };

    const formatBytes = (size: number, b = 2) => {
        if (!size) return '0';
        const c = 0 > b ? 0 : b,
            d = Math.floor(Math.log(size) / Math.log(1024));
        return (
            parseFloat((size / Math.pow(1024, d)).toFixed(c)) +
            ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'][d]
        );
    };

    const getImageSize = () => {
        if (!images.length) return '';
        if (images.length < 2 && !tab) return `${size.width} x ${size.height}`;

        return `${image.resizedWidth} x ${image.resizedHeight}`;
    };

    return (
        <Box className={classes.card}>
            <Box className={classes.btnDelete}>
                <IconButton onClick={() => handleClick(image.id)} size="small">
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
                    {images.length > 1 && tab === 0 ? null : (
                        <React.Fragment>
                            <HiArrowNarrowRight style={{ margin: '0 8px' }} />
                            <Chip
                                label={getImageSize()}
                                size="small"
                                color="primary"
                            />
                        </React.Fragment>
                    )}
                </Box>
                <Box mt={1}>
                    <Chip
                        label={formatBytes(image.size)}
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
        padding: 8,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
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
