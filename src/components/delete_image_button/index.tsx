import React, { useState } from 'react';
import { Button } from '@mui/material';
import { MdOutlineDelete } from 'react-icons/md';

import Loading from 'components/loading';
import { useAppDispatch } from 'hook';
import { DELAY_TIMEOUT } from 'constants/time';
import { resetImages } from 'redux_store/image_storage/image_slice';

interface IDeleteImageButton {
    isLoading?: boolean;
    callback?: () => void;
}

function DeleteImageButton(props: IDeleteImageButton) {
    const { isLoading = false, callback } = props;
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
            variant="contained"
            size="small"
            color="error"
            onClick={onDeleteImage}
            endIcon={
                isLoading || isDeleting ? (
                    <Loading size={18} />
                ) : (
                    <MdOutlineDelete />
                )
            }
        >
            Delete
        </Button>
    );
}

export default DeleteImageButton;
