import React, { ReactElement } from 'react';
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from 'next/document';
import { ServerStyleSheets } from '@mui/styles';

import lightTheme from 'themes/light_theme';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheets = new ServerStyleSheets();
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) =>
                    sheets.collect(<App {...props} />),
            });

        const initialProps = await Document.getInitialProps(ctx);

        return {
            ...initialProps,
            // Styles fragment is rendered after the app and page rendering finish.
            styles: [
                ...React.Children.toArray(initialProps.styles),
                sheets.getStyleElement(),
            ],
        };
    }

    render(): ReactElement {
        return (
            <Html lang="en">
                <Head>
                    {/* Not exactly required, but this is the PWA primary color */}
                    <meta
                        name="theme-color"
                        content={lightTheme.palette.primary.main}
                    />
                    <meta
                        name="description"
                        content="Unlock the full potential of your images with our expert image editing services. We specialize in image restoration, background removal, resizing, and conversion, providing you with the perfect visual solutions."
                    />
                    {/* <link rel="icon" href="/favicon.ico" /> */}
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,400&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
