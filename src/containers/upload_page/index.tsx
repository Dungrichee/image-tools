import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

import FunctionInfo from 'components/function_info';
import UploadImageCard from 'components/upload_image_card';
import { IUploadPage } from 'types';

function UploadPage(props: IUploadPage) {
    const classes = useStyles();
    const { title, description, type, isMultiple } = props;
    return (
        <Box className={classes.section}>
            <FunctionInfo title={title} description={description} />
            <UploadImageCard type={type} isMultiple={isMultiple} />
        </Box>
    );
}

export default UploadPage;

const useStyles = makeStyles(() => ({
    section: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));
