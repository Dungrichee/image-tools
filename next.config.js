/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // images: {
    //   domains: ["upcdn.io", "replicate.delivery", "lh3.googleusercontent.com"],
    // },
    // async redirects() {
    //   return [
    //     {
    //       source: "/github",
    //       destination: "https://github.com/Nutlope/restorePhotos",
    //       permanent: false,
    //     },
    //     {
    //       source: "/deploy",
    //       destination: "https://vercel.com/templates/next.js/ai-photo-restorer",
    //       permanent: false,
    //     },
    //   ];
    // },
    // async headers() {
    //   return [
    //     {
    //       // matching all API routes
    //       source: "/api/:path*",
    //       headers: [
    //         { key: "Access-Control-Allow-Credentials", value: "true" },
    //         { key: "Access-Control-Allow-Origin", value: "*" },
    //         { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
    //         { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
    //       ]
    //     }
    //   ]
    // }
    // async headers() {
    //     return [
    //         {
    //             // matching all API routes
    //             source: '/api/v1/gfpgan',
    //             headers: [
    //                 { key: 'Access-Control-Allow-Credentials', value: 'true' },
    //                 {
    //                     key: 'Access-Control-Allow-Origin',
    //                     value: 'http://localhost:3000/api/v1/gfpgan',
    //                 },
    //                 {
    //                     key: 'Access-Control-Allow-Methods',
    //                     value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
    //                 },
    //                 {
    //                     key: 'Access-Control-Allow-Headers',
    //                     value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
    //                 },
    //             ],
    //         },
    //     ];
    // },
    // async rewrites() {
    //     return [
    //         {
    //             source: '/api/v1/gfpgan',
    //             destination: 'https://api.example.com/:path*',
    //         },
    //     ];
    // },
};

module.exports = nextConfig;
