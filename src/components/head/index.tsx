import Head from 'next/head';
import React from 'react';

import logoIco from 'assets/logo/logo_seo.png'

function HeaderPage() {
    return (
        <Head>
            <title>
                Image Tools - High-Quality Image Editing: Best in Restoration,
                Background Removal, Resizing, and Conversion
            </title>
            <link rel="icon" href={logoIco.src} />
            <meta
                name="dc.title"
                content=" Image Tools - High-Quality Image Editing: Best in Restoration,
                Background Removal, Resizing, and Conversion"
            />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
            <meta
                name="dc.description"
                content="Unlock the full potential of your images with our expert image editing services. We specialize in image restoration, background removal, resizing, and conversion, providing you with the perfect visual solutions."
            />
            {/* <meta
                name="dc.relation"
                content="https://www.imgtool.online/introduce/"
            /> */}
            <meta name="dc.source" content="https://www.imgtool.online/" />
            <meta name="dc.language" content="uk" />
            <meta
                name="description"
                content="Unlock the full potential of your images with our expert image editing services. We specialize in image restoration, background removal, resizing, and conversion, providing you with the perfect visual solutions."
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
            <meta property="og:url" content="https://www.imgtool.online/" />
            <meta property="og:site_name" content="Image Tool" />
            <meta property="og:locale" content="uk" />
            <meta property="og:type" content="article" />
            <meta
                property="article:author"
                content="https://www.facebook.com/nguyendung.dev/"
            />
            <meta
                property="article:publisher"
                content="https://www.facebook.com/nguyendung.dev/"
            />
            <meta property="article:section" content="✅ Restoration Image" />
            <meta property="article:tag" content="Restoration Image" />
            <meta
                property="og:title"
                content=" Image Tools - High-Quality Image Editing: Best in Restoration,
                Background Removal, Resizing, and Conversion"
            />
            <meta
                property="og:description"
                content="Unlock the full potential of your images with our expert image editing services. We specialize in image restoration, background removal, resizing, and conversion, providing you with the perfect visual solutions."
            />
            <meta
                property="og:image"
                content="https://www.imgtool.online/logo-seo.png"
            />
            <meta
                property="og:image:secure_url"
                content="https://www.imgtool.online/logo-seo.png"
            />
            <meta property="og:image:width" content="800" />
            <meta property="og:image:height" content="400" />
            <meta property="og:image:alt" content="Image Tools" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="imgtool.online" />
            <meta name="twitter:creator" content="imgtool.online" />
            <meta
                name="twitter:title"
                content=" Image Tools - High-Quality Image Editing: Best in Restoration,
                Background Removal, Resizing, and Conversion"
            />
            <meta
                name="twitter:description"
                content="Unlock the full potential of your images with our expert image editing services. We specialize in image restoration, background removal, resizing, and conversion, providing you with the perfect visual solutions."
            />
            <meta
                name="twitter:image"
                content="https://www.imgtool.online/logo-seo.png"
            />
        </Head>
    );
}

export default HeaderPage;
