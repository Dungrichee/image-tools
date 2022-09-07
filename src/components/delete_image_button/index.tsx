import React, { useState } from 'react';
import { Button } from '@mui/material';
import { MdOutlineDelete } from 'react-icons/md';

import Loading from 'components/loading';
import { useAppDispatch, useAppSelector } from 'hook';
import { DELAY_TIMEOUT } from 'constants/time';
import { resetImages } from 'redux_store/image_storage/image_slice';

interface IDeleteImageButton {
    isLoading?: boolean;
    callback?: () => void;
}

function DeleteImageButton(props: IDeleteImageButton) {
    const { isLoading = false, callback } = props;
    const { images } = useAppSelector(({ imageSlice }) => imageSlice);
    const [isDeleting, setIsDeleting] = useState(false);
    const dispatch = useAppDispatch();

    const onDeleteImage = () => {
        setIsDeleting(true);
        setTimeout(() => {
            dispatch(resetImages());
            setIsDeleting(false);
            if (callback) {
                callback();
            }
        }, DELAY_TIMEOUT.button);
    };

    return (
        <Button
            variant="outlined"
            size="small"
            color="error"
            onClick={onDeleteImage}
            endIcon={
                isLoading || isDeleting ? (
                    <Loading size={18} color="red" />
                ) : (
                    <MdOutlineDelete />
                )
            }
        >
            {images.length > 1 ? 'Delete all' : 'Delete'}
        </Button>
    );
}

export default DeleteImageButton;
