import React, { useState } from 'react';

import UserLayout from 'containers/user_layout';
// import UploadPage from 'containers/upload_page';
import {
    Box,
    Button,
    Divider,
    FormControl,
    FormControlLabel,
    // FormLabel,
    InputAdornment,
    Radio,
    RadioGroup,
    Tab,
    Tabs,
    TextField,
    Tooltip,
    Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { RiPixelfedLine } from 'react-icons/ri';
import { AiOutlinePercentage, AiOutlineInfoCircle } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { SiConvertio } from 'react-icons/si';

function ResizeImage() {
    const classes = useStyles();
    const [tab, setTab] = useState(0);

    const handleChange = (event: React.SyntheticEvent, value: number) => {
        console.log({ value });
        setTab(value);
    };

    return (
        <UserLayout>
            {/* <UploadPage
                title="Resize Image"
                description="Resize JPG by defining new height and width pixels.
Resize many JPG images at once online."
            /> */}
            <Box className={classes.page}>
                <Box className={classes.content}>content</Box>
                <Box className={classes.options}>
                    <Typography variant="h4" textAlign="center" my={3}>
                        Resize Options
                    </Typography>
                    <Box>
                        <Divider />
                        <Tabs
                            value={tab}
                            onChange={handleChange}
                            aria-label="icon label tabs example"
                        >
                            <Tab
                                icon={<RiPixelfedLine size={32} />}
                                label="By pixels"
                                classes={{ root: classes.tab }}
                            />
                            <Tab
                                icon={<AiOutlinePercentage size={32} />}
                                label="By percentage"
                                classes={{ root: classes.tab }}
                            />
                            <Tab
                                icon={<BsInfoCircle size={32} />}
                                label="How to resize"
                                classes={{ root: classes.tab }}
                            />
                        </Tabs>
                        <Divider />
                    </Box>
                    <Box flex={1}>
                        {tab !== 2 && (
                            <Typography my={2}>
                                Change size:{' '}
                                <Tooltip title="Change the size of the image">
                                    <AiOutlineInfoCircle />
                                </Tooltip>
                            </Typography>
                        )}

                        {!tab && (
                            <Box>
                                <Box className={classes.formSize}>
                                    <Typography>Width </Typography>
                                    <TextField
                                        size="small"
                                        placeholder="1-3000"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    px
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Box>
                                <Box className={classes.formSize}>
                                    <Typography>Height </Typography>
                                    <TextField
                                        size="small"
                                        placeholder="1-3000"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    px
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Box>
                            </Box>
                        )}

                        {tab === 1 && (
                            <Box>
                                <FormControl sx={{ width: '100%' }}>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="75"
                                        name="radio-buttons-group"
                                        sx={{
                                            width: '100%',
                                        }}
                                    >
                                        <FormControlLabel
                                            value="75"
                                            labelPlacement="start"
                                            control={<Radio />}
                                            label="75% Smaller"
                                            classes={{
                                                root: classes.rootLabel,
                                                label: classes.label,
                                            }}
                                        />
                                        <Divider />
                                        <FormControlLabel
                                            value="50"
                                            labelPlacement="start"
                                            control={<Radio />}
                                            label="50% Smaller"
                                            classes={{
                                                root: classes.rootLabel,
                                                label: classes.label,
                                            }}
                                        />
                                        <Divider />
                                        <FormControlLabel
                                            value="25"
                                            labelPlacement="start"
                                            control={<Radio />}
                                            label="25% Smaller"
                                            classes={{
                                                root: classes.rootLabel,
                                                label: classes.label,
                                            }}
                                        />
                                        <Divider />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                        )}

                        {tab === 2 && (
                            <Box>
                                <Typography variant="h6" my={2}>
                                    How to resize an image?
                                </Typography>
                                <Box lineHeight={22}>
                                    <Typography mb={1}>
                                        1. Upload the photo you want to resize.
                                    </Typography>
                                    <Typography mb={1}>
                                        2. In the drop-down menu, choose the
                                        format you want your images to be
                                        converted to.
                                    </Typography>
                                    <Typography mb={1}>
                                        3. You can also use the DPI to change
                                        the image size when it comes to printing
                                    </Typography>
                                    <Typography mb={1}>
                                        4. Click on `Resize Images` to resize
                                        your photo.
                                    </Typography>
                                </Box>
                            </Box>
                        )}
                    </Box>
                    <Box textAlign="center">
                        <Button
                            variant="contained"
                            size="large"
                            endIcon={<SiConvertio />}
                        >
                            Resize IMAGES
                        </Button>
                    </Box>
                </Box>
            </Box>
        </UserLayout>
    );
}

export default ResizeImage;

const useStyles = makeStyles(() => ({
    page: {
        display: 'flex',
        flex: 1,
    },
    content: {
        flex: 1,
    },
    options: {
        background: '#f5f5f5',
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 451,
        width: 451
    },
    tab: {
        textTransform: 'capitalize',
        padding: '12px  28px',
    },
    formSize: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    rootLabel: {
        marginLeft: 0,
        padding: '8px 0px',
    },
    label: {
        flex: 1,
    },
}));
