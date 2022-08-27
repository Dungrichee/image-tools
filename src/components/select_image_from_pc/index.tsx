import React from 'react';
import { Box, Button, IconButton, Tooltip } from '@mui/material';
import { AiOutlineUpload } from 'react-icons/ai';
import { BsLaptop } from 'react-icons/bs';

import { IImage, IUploadImageCard } from 'types';
import { useAppDispatch, useAppSelector } from 'hook';
import { uploadImages } from 'redux_store/image_storage/image_slice';
import { preSaveImages } from 'utils/images';

function SelectImageFromPC(props: IUploadImageCard) {
    const dispatch = useAppDispatch();
    const { images } = useAppSelector(({ imageSlice }) => imageSlice);
    const { percentage } = useAppSelector(({ resizeSlice }) => resizeSlice);
    const { isMultiple } = props;

    const addImageToSlice = (image: IImage) => {
        dispatch(uploadImages(image));
    };

    const fileSelectedHandler = (e: React.BaseSyntheticEvent) => {
        const { files } = e.target;
        if (!files.length) return;

        for (const file of files) {
            preSaveImages(file, percentage).then((response: IImage) => {
                addImageToSlice(response);
            });
        }
    };

    if (images.length)
        return (
            <Tooltip title="Upload from your computer" arrow>
                <IconButton component="label">
                    <BsLaptop />
                    <input
                        hidden
                        accept="image/*"
                        type="file"
                        multiple
                        onChange={fileSelectedHandler}
                    />
                </IconButton>
            </Tooltip>
        );

    return (
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
                    multiple={isMultiple}
                    onChange={fileSelectedHandler}
                />
            </Button>
        </Box>
    );
}

export default SelectImageFromPC;
