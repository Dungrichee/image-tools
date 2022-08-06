import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';

import lightTheme from 'themes/light_theme';
import createEmotionCache from '../utility/create_emotion_cache';
import store from 'redux_store/store'
import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

function MyApp(props: any) {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps,
    } = props;
    return (
        <Provider store={store}>
            <CacheProvider value={emotionCache}>
                <ThemeProvider theme={lightTheme}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </CacheProvider>
        </Provider>
    );
}

export default MyApp;
