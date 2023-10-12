import Head from 'next/head';
import React from 'react';

import logoIco from 'assets/logo/logo_seo.png';

const title = 'Image Tools - High-Quality Image Editing';

function HeaderPage() {
    return (
        <Head>
            <title>{title}</title>

            <meta property="og:title" content={title} />
            <meta name="name" content={title} />
            <meta property="og:site_name" content="Image Tool" />
            <meta name="alternateName" content={title} />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />

            <meta name="theme-color" content="#fff" />

            <meta name="author" content="Dungriche" />
            <meta
                property="article:publisher"
                content="https://www.facebook.com/nguyendung.dev/"
            />

            <meta name="robots" content="index, follow" />
            <meta
                name="googlebot"
                content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
            />
            <meta
                name="bingbot"
                content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
            />
            <meta
                name="description"
                content="Unlock the full potential of your images with our expert image editing services. We specialize in image restoration, background removal, resizing, and conversion, providing you with the perfect visual solutions."
            />
            <meta
                name="dc.description"
                content="Unlock the full potential of your images with our expert image editing services. We specialize in image restoration, background removal, resizing, and conversion, providing you with the perfect visual solutions."
            />
            <meta
                property="og:description"
                content="Unlock the full potential of your images with our expert image editing services. We specialize in image restoration, background removal, resizing, and conversion, providing you with the perfect visual solutions."
            />
            <meta
                name="twitter:description"
                content="Unlock the full potential of your images with our expert image editing services. We specialize in image restoration, background removal, resizing, and conversion, providing you with the perfect visual solutions."
            />

            <meta property="og:image" content={logoIco.src} />
            <meta property="og:image:alt" content="Image Tool" />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="uk" />
            <meta property="og:url" content="https://www.imgtool.online/" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta property="twitter:image" content={logoIco.src} />
            <meta name="thumbnail" content={logoIco.src} />

            {/* Link */}
            <link rel="icon" href={logoIco.src} />

            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
            />

            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
            />

            <link
                rel="icon"
                type="image/png"
                sizes="192x192"
                href="/favicon-192x192.png"
            />

            <link rel="apple-touch-icon" href="/favicon-32x32.png" />

            <link
                rel="search"
                href="/opensearch.xml"
                type="application/opensearchdescription+xml"
                title="Image Tool"
            />
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-XLEHS2JL1W"></script>
            <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());

            gtag('config', 'G-XLEHS2JL1W');
            </script>
        </Head>
    );
}

export default HeaderPage;
