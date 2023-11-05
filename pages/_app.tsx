import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import Script from "next/script";

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
                    <Script
                    strategy="afterInteractive"
                    src="https://www.googletagmanager.com/gtag/js?id=G-XLEHS2JL1W"
                    />
                    <Script
                    id="google-analytics"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-XLEHS2JL1W', {
                        page_path: window.location.pathname,
                    });
                    `,
                    }}
                    />
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
