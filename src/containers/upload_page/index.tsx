import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { IUploadPage } from 'types';
import FunctionInfo from 'components/function_info';
import UploadImageCard from 'components/upload_image_card';

function UploadPage(props: IUploadPage) {
    const classes = useStyles();
    const { title, description, isMultiple, callback } = props;
    return (
        <Box className={classes.section}>
            <FunctionInfo title={title} description={description} />
            <UploadImageCard isMultiple={isMultiple} callback={callback} />
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
