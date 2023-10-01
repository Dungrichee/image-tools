import React from 'react';
import { Box, Button } from '@mui/material';
import { AiOutlineUpload } from 'react-icons/ai';

import { IImage, IUploadImageCard } from 'types';
import { useAppDispatch, useAppSelector } from 'hook';
import { uploadImages } from 'redux_store/image_storage/image_slice';
import { preSaveImages } from 'utils/images';

function SelectImageFromPC(props: IUploadImageCard) {
    const dispatch = useAppDispatch();
    const { images } = useAppSelector(({ imageSlice }) => imageSlice);
    const { percentage } = useAppSelector(({ resizeSlice }) => resizeSlice);
    const { isMultiple, callback } = props;

    const addImageToSlice = (image: IImage) => {
        dispatch(uploadImages(image));

        callback && callback(image.file)
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
            <Button
                variant="contained"
                component="label"
                endIcon={<AiOutlineUpload />}
                size="small"
                style={{ marginRight: 8 }}
            >
                Upload
                <input
                    hidden
                    accept="image/*"
                    multiple
                    type="file"
                    onChange={fileSelectedHandler}
                />
            </Button>
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
