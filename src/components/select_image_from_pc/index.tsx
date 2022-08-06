import React from 'react';
import { Box, Button, IconButton, Tooltip } from '@mui/material';
import { AiOutlineUpload } from 'react-icons/ai';
import { BsLaptop } from 'react-icons/bs';
import { v4 as uuidV4 } from 'uuid';

import { IImage } from 'types';
import { useAppDispatch, useAppSelector } from 'hook';
import { uploadImages } from 'redux_store/local_image/local_image_slice';

function SelectImageFromPC() {
    const dispatch = useAppDispatch();
    const { images } = useAppSelector(({ localImageSlice }) => localImageSlice);

    const getSizeImage = (file: File) => {
        return new Promise<IImage>((resolve, reject) => {
            const imageObj = new Image();
            imageObj.src = URL.createObjectURL(file);
            imageObj.onload = () =>
                resolve({
                    id: uuidV4(),
                    src: imageObj.src,
                    width: imageObj.width,
                    height: imageObj.height,
                    name: file.name,
                    size: file.size,
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
                    multiple
                    onChange={fileSelectedHandler}
                />
            </Button>
        </Box>
    );
}

export default SelectImageFromPC;
