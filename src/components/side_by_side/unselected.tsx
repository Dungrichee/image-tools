import React from 'react';
import { Box, Typography } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { IImage } from 'types';
import { useIsRequestPending } from 'hook/use_get_status';

interface IUnselectedProps {
    image: IImage;
    newImg: string;
}

function Unselected(props: IUnselectedProps) {
    const { image, newImg } = props;

    const isRemoveBgLoading = useIsRequestPending('removeBackground');
    const isRestorationLoading = useIsRequestPending('restorationImage');

    return (
        <Box display="flex" gap={2} justifyContent="center">
            <Box textAlign="center" flex={0.45}>
                <Typography component="h2" fontWeight={700}>
                    Original Photo
                </Typography>
                <LazyLoadImage
                    src={image.src}
                    effect="blur"
                    placeholderSrc={image.name}
                    style={{
                        borderRadius: 4,
                        display: 'block',
                        width: '100%',
                        height: '100%',
                    }}
                    alt={image.name}
                />
            </Box>
            <Box textAlign="center" flex={0.45}>
                <Typography component="h2" fontWeight={700}>
                    Result Photo
                </Typography>
                {isRemoveBgLoading || isRestorationLoading ? (
                    <Skeleton count={1} style={{ height: '90%' }} />
                ) : (
                    <LazyLoadImage
                        src={newImg}
                        effect="blur"
                        placeholderSrc={newImg}
                        style={{
                            borderRadius: 4,
                            display: 'block',
                            width: '100%',
                            height: '100%',
                        }}
                        alt={newImg}
                    />
                )}
            </Box>
        </Box>
    );
}

export default Unselected;
