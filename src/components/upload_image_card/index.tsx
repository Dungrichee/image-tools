import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Button, IconButton, Tooltip, Typography } from '@mui/material';
import { AiOutlineUpload } from 'react-icons/ai';
import { FaGoogleDrive } from 'react-icons/fa';

import { IImage } from 'types';
import { useAppDispatch } from 'hook';
import { uploadImages } from 'redux_store/local_image/local_image_slice';

function UploadImageCard() {
    const classes = useStyles();
    const dispatch = useAppDispatch();

    const getSizeImage = (file: File) => {

        return new Promise<IImage>((resolve, reject) => {
            const imageObj = new Image();
            imageObj.src = URL.createObjectURL(file);
            imageObj.onload = () =>
                resolve({
                    src: imageObj.src,
                    width: imageObj.width,
                    height: imageObj.height,
                    name: file.name,
                });
            imageObj.onerror = reject;
        });

    };

    const fileSelectedHandler = (e: React.BaseSyntheticEvent) => {
        const { files } = e.target;
        if (!files.length) return;

        for (const file of files) {
            getSizeImage(file).then((response: IImage) => {
                dispatch(uploadImages(response));
            }
            );
        }

        // router.push("resize_image/resize_options")
    };

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
                <Box mb={1}>
                    <Button
                        variant="contained"
                        size="large"
                        startIcon={<AiOutlineUpload />}
                        component="label"
                    >
                        Upload Image
                        <input
                            hidden
                            accept="image/*"
                            type="file"
                            multiple
                            onChange={fileSelectedHandler}
                        />
                    </Button>
                </Box>
                <Typography variant="body2">Or drop image here</Typography>
            </Box>
            <Typography className={classes.otherOptions} variant="body2">
                Paste image or URL{' '}
                <Typography component="span" className={classes.span}>
                    ctrl
                </Typography>{' '}
                +{' '}
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
