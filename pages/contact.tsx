import React from 'react';
import { LoadingButton } from '@mui/lab';
import { Box, FormControl, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useForm } from 'react-hook-form';

import { useAppDispatch } from 'hook';
import { sendEmail } from 'redux_store/contact/contact_action';
import { useIsRequestPending } from 'hook/use_get_status';
import FormTextField from 'components/hook_form/form_text_field';
import UserLayout from 'containers/user_layout';

function Contact() {
    const dispatch = useAppDispatch();
    const classes = useStyles();
    const isLoading = useIsRequestPending('sendEmail');
    
    const { control, handleSubmit } = useForm({
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
    });

    const onSubmit = (data: any) => {
        dispatch(sendEmail(data));
    };

    return (
        <UserLayout>
            <Box className={classes.page}>
                <Box textAlign="center" mb={2}>
                    <Typography variant="h3">Contact</Typography>
                    <Typography>
                        Contact us and clarify any doubts you have about
                        ImageTools or report a problem.
                    </Typography>
                </Box>
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    className={classes.form}
                >
                    <Box className={classes.formContent}>
                        <FormControl margin="dense">
                            <FormTextField
                                control={control}
                                name="name"
                                label="Your Name *"
                            />
                        </FormControl>
                        <FormControl margin="dense">
                            <FormTextField
                                control={control}
                                name="email"
                                label="Your Email *"
                            />
                        </FormControl>
                        <FormControl margin="dense">
                            <FormTextField
                                control={control}
                                name="subject"
                                label="Subject *"
                            />
                        </FormControl>
                        <FormControl margin="dense">
                            <FormTextField
                                control={control}
                                name="message"
                                label="Write a message *"
                                multiline
                                rows={5}
                            />
                        </FormControl>
                    </Box>

                    <Box mt={2}>
                        <LoadingButton
                            variant="contained"
                            type="submit"
                            loading={isLoading}
                        >
                            Send message
                        </LoadingButton>
                    </Box>
                </Box>
            </Box>
        </UserLayout>
    );
}

export default Contact;

const useStyles = makeStyles(() => ({
    page: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 24,
    },
    content: {
        flex: 1,
        display: 'flex',
        flexWrap: 'wrap',
    },
    form: {
        width: '30%',
    },
    formContent: {
        display: 'flex',
        flexDirection: 'column',
    },
}));
