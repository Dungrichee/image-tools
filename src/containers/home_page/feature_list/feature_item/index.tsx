import { Box, Typography } from '@mui/material';
import { BOX_SHADOW } from 'constants/styles';
import React from 'react';
import lightTheme from 'themes/light_theme';

interface IFeatureItem {
    icon: any;
    functionName: string;
    functionDes: string;
    to: string;
    iconSx?: any;
}

function FeatureItem(props: IFeatureItem) {
    const { functionDes, functionName, icon: Icon, iconSx = {} } = props;
    return (
        <Box
            textAlign="center"
            width="30%"
            ml={3}
            p={3}
            borderRadius={2}
            mb={3}
            boxShadow={BOX_SHADOW}
        >
            <Box>
                <Icon
                    size={72}
                    style={{
                        color: lightTheme.palette.primary.main,
                        ...iconSx,
                    }}
                />
            </Box>
            <Typography variant="h6">{functionName}</Typography>
            <Typography color="secondary" variant="body2">
                {functionDes}
            </Typography>
        </Box>
    );
}

export default FeatureItem;
