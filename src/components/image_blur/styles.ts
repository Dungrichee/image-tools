import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
    imageWrap: {
        width: '50%',
        position: 'relative',
        margin: '0 auto',
        borderRadius: 4,
        overflow: 'hidden',
    },
    blur: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: '#575656',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#f5f5f5',
        '& span': {
            cursor: 'pointer',
        },
        borderRadius: 4,
        backgroundImage: 'linear-gradient(to right, #18181d, #6c6c6c, #18181d)',
    },
    img: {
        opacity: 0.5,
        borderRadius: 4,
        display: 'block',
    },
}));
