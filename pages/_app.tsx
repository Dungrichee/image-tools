import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import lightTheme from 'themes/light_theme';
import store from 'redux_store/store';
import createEmotionCache from '../utility/create_emotion_cache';
import HeaderPage from 'components/head';
import UserLayout from 'containers/user_layout';
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
                    <HeaderPage />
                    <UserLayout>
                        <Component {...pageProps} />
                    </UserLayout>
                    <Toaster position="top-center" />
                </ThemeProvider>
            </CacheProvider>
        </Provider>
    );
}

export default MyApp;
