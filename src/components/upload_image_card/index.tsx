import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { FaGoogleDrive } from 'react-icons/fa';

import SelectImageFromPC from 'components/select_image_from_pc';
import { IUploadImageCard } from 'types';

function UploadImageCard(props: IUploadImageCard) {
    const { type, isMultiple } = props;
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box p={7}>
                <Box mb={1}>
                    <Tooltip title="Select image from Google Drive" arrow>
                        <IconButton>
                            <FaGoogleDrive size={56} />
                        </IconButton>
                    </Tooltip>
                </Box>
                <SelectImageFromPC type={type} isMultiple={isMultiple} />
                <Typography variant="body2">Or drop image here</Typography>
            </Box>
            <Typography className={classes.otherOptions} variant="body2">
                Paste image or URL{' '}
                <Typography component="span" className={classes.span}>
                    ctrl
                </Typography>{' '}
                +
                <Typography component="span" className={classes.span}>
                    v
                </Typography>
            </Typography>
        </Box>
    );
}

export default UploadImageCard;

const useStyles = makeStyles(() => ({
    root: {
        width: 320,
        boxShadow: '0 0 40px rgb(0 0 0 / 10%)',
        borderRadius: 16,
        textAlign: 'center',
    },
    otherOptions: {
        background: '#f4f4f4',
        padding: 12,
        borderRadius: ' 0 0 16px 16px',
    },
    span: {
        background: 'white',
        border: '1px solid #dee2e6',
        padding: '2px 8px',
        borderRadius: 4,
    },
}));
