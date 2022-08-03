import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import lightTheme from 'themes/light_theme';
import createEmotionCache from '../utility/create_emotion_cache';
import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

function MyApp(props: any) {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps,
    } = props;
    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={lightTheme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
}

export default MyApp;
