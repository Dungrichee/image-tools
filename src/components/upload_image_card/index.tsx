import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { FaGoogleDrive } from 'react-icons/fa';

import { Client } from 'client';
import { IImage, IUploadImageCard } from 'types';
import { preSaveImages } from 'utils/images';
import { useAppDispatch, useAppSelector } from 'hook';
import { uploadImages } from 'redux_store/image_storage/image_slice';
import SelectImageFromPC from 'components/select_image_from_pc';

function UploadImageCard(props: IUploadImageCard) {
    const dispatch = useAppDispatch();
    const { percentage } = useAppSelector(({ resizeSlice }) => resizeSlice);
    const classes = useStyles();
    const dropzoneRef = useRef<HTMLElement | null>(null);
    const { isMultiple } = props;

    useEffect(() => {
        if (!dropzoneRef || !dropzoneRef?.current) return;
        dropzoneRef.current.addEventListener('dragover', dragover);
        dropzoneRef.current.addEventListener('drop', dropEnd);
        dropzoneRef.current.addEventListener('paste', onPaste)

        return () => {
            dropzoneRef?.current?.removeEventListener('dragover', dragover);
            dropzoneRef?.current?.removeEventListener('drop', dropEnd);
            dropzoneRef?.current?.removeEventListener('paste', onPaste);
        };
    }, [dropzoneRef.current]);

    const onPaste = (e: ClipboardEvent) => {
        e.preventDefault()
        const files = e.clipboardData?.files
        if(!files?.length) return
        preSaveImages(files[0], percentage).then((response: IImage) => {
            addImageToSlice(response);
        });
    }

    const dragover = (e: DragEvent) => {
        e.preventDefault();
    };

    const dropEnd = (e: DragEvent) => {
        e.preventDefault();
        if (!e.dataTransfer) return;
        const files: any = e.dataTransfer.files;
        if (!files.length) return;
        if (!isMultiple) {
            preSaveImages(files[0], percentage).then((response: IImage) => {
                addImageToSlice(response);
            });
            return;
        }

        for (const file of files) {
            preSaveImages(file, percentage).then((response: IImage) => {
                addImageToSlice(response);
            });
        }
    };

    const addImageToSlice = (image: IImage) => {
        dispatch(uploadImages(image));
    };

    const handleUploadImageByDrive = () => {
        const res = Client.imageTool.uploadWithGGDrive();
        console.log('handle upload image by driver', res);
    };

    return (
        <Box className={classes.root} ref={dropzoneRef}>
            <Box p={7}>
                <Box mb={1}>
                    <Tooltip title="Select image from Google Drive" arrow>
                        <IconButton onClick={handleUploadImageByDrive}>
                            <FaGoogleDrive size={56} />
                        </IconButton>
                    </Tooltip>
                </Box>
                <SelectImageFromPC isMultiple={isMultiple} />
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
