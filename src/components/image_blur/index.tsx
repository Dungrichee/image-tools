import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';

import { useAppDispatch } from 'hook';
import Loading from 'components/loading';
import { DELAY_TIMEOUT } from 'constants/time';
import { useStyles } from './styles';

interface IImageBlur {
    src: string;
    name?: string;
    onPreviewImage: any;
    isLoading?: boolean;
    isAsyncAction?: boolean;
}

function ImageBlur(props: IImageBlur) {
    const { name, src, onPreviewImage, isLoading, isAsyncAction } = props;
    const dispatch = useAppDispatch();
    const classes = useStyles();
    const [loading, setLoading] = useState(false);

    const onPreview = () => {
        if (isAsyncAction) {
            onPreviewImage();
        } else {
            setLoading((preState) => !preState);
            setTimeout(() => {
                dispatch(onPreviewImage());
                setLoading((preState) => !preState);
            }, DELAY_TIMEOUT.img);
        }
    };

    return (
        <Box className={classes.imageWrap}>
            <img
                src={src}
                alt={name}
                loading="lazy"
                width="100%"
                height="100%"
                className={classes.img}
            />
            <Box className={classes.blur}>
                {isLoading || loading ? (
                    <Loading sx={{ color: 'white' }} />
                ) : (
                    <Typography component="span" onClick={onPreview}>
                        Click here to see the results
                    </Typography>
                )}
            </Box>
        </Box>
    );
}

export default ImageBlur;
