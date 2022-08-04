import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Button, IconButton, Tooltip, Typography } from '@mui/material';
import { AiOutlineUpload } from 'react-icons/ai';
import { FaGoogleDrive } from 'react-icons/fa';
import Image from 'next/image';
import { useRouter } from 'next/router';

function UploadImageCard() {
    const classes = useStyles();
    const [createObjectURL, setCreateObjectURL] = useState<string | null>(null);
    const router = useRouter()

    const fileSelectedHandler = (e: React.BaseSyntheticEvent) => {
        console.log({ target: e.target.files[0] });
        const file = e.target.files[0];
        setCreateObjectURL(URL.createObjectURL(file));
        router.push("resize_image/resize_options")
        
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

            {createObjectURL && (
                <Box width="100%" height="100%" position="relative">
                    <Image src={createObjectURL} layout="fill" alt="" />
                </Box>
            )}
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
