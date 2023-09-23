import React from 'react';
import {
    Box,
    Theme,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ExpandMore } from '@mui/icons-material';

function Questions() {
    const classes = useStyles();

    const questions = [
        {
            question: 'What is image-tools photo editor?',
            answer: 'SnapEdit.App is a visual AI platform that leverages AI technology to help automatically remove objects/people from images; retouch, enhance, colorize, correct, cartoonize, and animate photos without using Photoshop or other photo editing tools in a snap.            ',
        },
        {
            question: 'Is ImageTools Free?',
            answer: 'Currently, SnapEdit is completely FREE, allows you to use photos of any resolution/size, allows downloading in HD. It will cost you a lot of money if you use similar products like The inpaint, Cleanup Pictures,...            ',
        },
        {
            question: 'What image format are ImageTools supported?',
            answer: 'We support the most popular image formats available today: JPG, PNG, JPEG,... and allow users to download in HD with JPG.            ',
        },
        {
            question:
                'What is the maximum photo size/resolution that can be edited?',
            answer: "Don't be surprised because SnapEdit is the only site that allows you to use UNLIMITED SIZE and ABSOLUTELY FREE image editing - What The Inpaint, Cleanup Pictures, etc. or any other software don't provide.            ",
        },
        {
            question:
                'Is it sage to use ImageTools to remove unwanted objects from a photo?',
            answer: 'SnapEdit is a fully automated AI photo editor that acts only as an intermediary so we do not store any copies of your images (before and after editing). So you can safely and quickly use SnapEdit anonymously.            ',
        },
    ];

    return (
        <Box mb={3}>
            <Box textAlign="center" m={3}>
                <Typography variant="h4" className={classes.title}>
                    Frequently Asked Questions
                </Typography>
            </Box>
            <Box display="flex" justifyContent="center">
                <Box flex={0.5}>
                    <Box margin="0 auto">
                        {questions.map((question, index) => (
                            <Accordion key={index} sx={{
                                boxShadow: '0px 0px 0px 1px #f5f5f5',
                            }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMore />}
                                    // aria-controls="panel1a-content"
                                    id={`panel1a-header-${index}`}
                                >
                                    <Typography>{question.question}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>{question.answer}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Questions;

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        position: 'relative',
        paddingBottom: 8,
        '&::before': {
            content: "''",
            width: 100,
            height: 5,
            backgroundColor: theme.palette.primary.main,
            position: 'absolute',
            left: '50%',
            bottom: 0,
            transform: 'translateX(-50%)',
            borderRadius: 10,
        },
    },
}));
