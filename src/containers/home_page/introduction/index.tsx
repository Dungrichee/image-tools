import React from 'react';
import { Box, Typography } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import optimizeImage from 'assets/images/introduction/optimize_image.png';
import editPhoto from 'assets/images/introduction/edit_photo.png';
import smartResize from 'assets/images/introduction/smart_resize.png';

function Introduction() {
    return (
        <Box display="flex" flex={1} position="relative">
            <Box flex={0.8} display="flex" m="64px auto" py={8}>
                <Box
                    flex={0.5}
                    display="flex"
                    alignItems="center"
                    flexDirection="column"
                    justifyContent="center"
                    position="relative"
                >
                    <Box
                        position="absolute"
                        width="400px"
                        // width="60%"
                        // height="140%"
                        height="400px"
                        top="-50px"
                        left="-10%"
                        zIndex={-1}
                        borderRadius="30% 70% 70% 30% / 30% 30% 70% 70% "
                        sx={{
                            backgroundImage:
                                'linear-gradient(to right bottom, #ccc8aa, #decfbb, #e9d8cd, #efe3e0, #f1efef)',
                        }}
                    ></Box>
                    <Typography variant="h2">Free AI Image Tools</Typography>
                    <Typography>100% Automatically and Free</Typography>

                    <Box>
                        <LazyLoadImage
                            src={optimizeImage.src}
                            effect="blur"
                            placeholderSrc={optimizeImage.src}
                            style={{
                                borderBottomLeftRadius: 4,
                                borderBottomRightRadius: 4,
                                display: 'block',
                                width: '20%',
                                margin: '0 auto',
                            }}
                            alt={optimizeImage.src}
                        />
                    </Box>

                    <Box
                        position="absolute"
                        width="60px"
                        // width="60%"
                        // height="140%"
                        height="60px"
                        bottom="20px"
                        right="10%"
                        zIndex={-1}
                        borderRadius="34% 66% 73% 27% / 22% 32% 68% 78%  "
                        sx={{
                            backgroundImage:
                                'linear-gradient(to right bottom, #ccc8aa, #decfbb, #e9d8cd, #efe3e0, #f1efef)',
                        }}
                    ></Box>
                </Box>

                <Box display="flex" flex={0.5} position="relative">
                    <Box
                        position="absolute"
                        width="100px"
                        // width="60%"
                        // height="140%"
                        height="100px"
                        bottom="-20px"
                        left="-50px"
                        borderRadius="30% 70% 70% 30% / 30% 30% 70% 70% "
                        sx={{
                            backgroundImage:
                                'linear-gradient(to left top, #ccc8aa, #decfbb, #e9d8cd, #efe3e0, #f1efef)',
                        }}
                    ></Box>
                    <LazyLoadImage
                        src={editPhoto.src}
                        effect="blur"
                        placeholderSrc={editPhoto.src}
                        style={{
                            borderBottomLeftRadius: 4,
                            borderBottomRightRadius: 4,
                            display: 'block',
                            width: '100%',
                        }}
                        alt={editPhoto.src}
                    />
                    {/* <LazyLoadImage
                        src={smartResize.src}
                        effect="blur"
                        placeholderSrc={smartResize.src}
                        style={{
                            borderBottomLeftRadius: 4,
                            borderBottomRightRadius: 4,
                            display: 'block',
                            width: '60%',
                        }}
                        alt={smartResize.src}
                    />

                    <Box
                        position="absolute"
                        width="300px"
                        // width="60%"
                        // height="140%"
                        height="300px"
                        bottom="-100px"
                        right="-10%"
                        borderRadius="85% 15% 47% 53% / 67% 74% 26% 33%"
                        sx={{
                            backgroundImage:
                                'linear-gradient(to left top, #ccc8aa, #decfbb, #e9d8cd, #efe3e0, #f1efef)',
                        }}
                    ></Box> */}
                </Box>
            </Box>
        </Box>
    );
}

export default Introduction;
