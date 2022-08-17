import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import Masonry from '@mui/lab/Masonry';
import { IconButton, Tooltip, Typography } from '@mui/material';
import { FaGoogleDrive } from 'react-icons/fa';
import { Scrollbars } from 'react-custom-scrollbars-2';

import { useAppSelector } from 'hook';
import CardImage from 'components/card_image/card_image';
import SelectImageFromPC from 'components/select_image_from_pc';

interface ImageMasonryProps {
    title: string;
}

function ImageMasonry(props: ImageMasonryProps) {
    const { title } = props;
    const classes = useStyles();
    const { images } = useAppSelector(({ imageSlice }) => imageSlice);
    return (
        <Scrollbars>
            <Box className={classes.cardList}>
                <Box mt={2}>
                    <Typography variant="h4" textAlign="center">
                        {title}
                    </Typography>
                </Box>
                <Box textAlign="center" my={1}>
                    <SelectImageFromPC />
                    <Tooltip title="select images from Google Drive " arrow>
                        <IconButton color="info">
                            <FaGoogleDrive />
                        </IconButton>
                    </Tooltip>
                </Box>
                <Masonry
                    columns={4}
                    spacing={2}
                    classes={{ root: classes.masonry }}
                >
                    {images.map((image, index) => (
                        <CardImage image={image} key={index} />
                    ))}
                </Masonry>
            </Box>
        </Scrollbars>
    );
}

export default ImageMasonry;

const useStyles = makeStyles(() => ({
    masonry: {
        margin: 0,
    },
    cardList: {
        padding: 12,
    },
}));
