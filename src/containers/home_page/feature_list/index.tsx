import React from 'react';
import { Box, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { BiCrop } from 'react-icons/bi';
import { MdOutlineBrandingWatermark } from 'react-icons/md';
import { RemoveCircleOutlineOutlined, Restore } from '@mui/icons-material';
import { TbResize } from 'react-icons/tb';

import FeatureItem from './feature_item';

function FeatureList() {
    const classes = useStyles();
    return (
        <Box>
            <Box textAlign="center" m={3}>
                <Typography variant="h4" className={classes.title}>
                    Applications
                </Typography>
            </Box>
            <Box
                display="flex"
                justifyContent="center"
                flexWrap="wrap"
                width="60%"
                margin="0 auto"
            >
                 <FeatureItem
                    functionName="Restoration Image"
                    functionDes="Sharpen colors and enhance faces, turn damaged photos into cherished memories."
                    icon={Restore}
                    iconSx={{
                        width: 72,
                        height: 72
                    }}
                    to=""
                />
                 <FeatureItem
                    functionName="Remove background"
                    functionDes="Remove background from images for free using artificial intelligence."
                    icon={RemoveCircleOutlineOutlined}
                    iconSx={{
                        width: 72,
                        height: 72
                    }}
                    to=""
                />
                <FeatureItem
                    functionName="Resize Image"
                    functionDes="Resize JPG, PNG, SVG or GIF by defining new height and width pixels. Change image dimensions in bulk."
                    icon={TbResize}
                    to=""
                />
                {/* <FeatureItem
                    functionName="Convert to JPG"
                    functionDes="Convert PNG to JPG, SVG to JPG, camera raw files like NEF and CR2 to JPG. Convert image to JPG online."
                    icon={AiOutlineFileJpg}
                    to=""
                />
                <FeatureItem
                    functionName="Convert to PNG"
                    functionDes="Convert JPG to PNG, SVG to PNG, camera raw files like NEF and CR2 to PNG. Convert image to PNG online."
                    icon={MdOutlineImage}
                    to=""
                /> */}
                <FeatureItem
                    functionName="Crop Image"
                    functionDes="Crop pictures online to get an exact cutout of the photo you want."
                    icon={BiCrop}
                    to=""
                />
                <FeatureItem
                    functionName="Watermark Image"
                    functionDes="Add watermark to your pictures."
                    icon={MdOutlineBrandingWatermark}
                    to=""
                />
            </Box>
        </Box>
    );
}

export default FeatureList;

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        position: 'relative',
        paddingBottom: 8,
        '&::before': {
            content: "''",
            width: 100,
            height: 5,
            backgroundColor: theme.palette.primary.main,
            position: 'absolute',
            left: '50%',
            bottom: 0,
            transform: 'translateX(-50%)',
            borderRadius: 10,
        },
    },
}));
