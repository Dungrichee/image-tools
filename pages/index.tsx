import type { NextPage } from 'next';
import Head from 'next/head';
import Box from '@mui/material/Box';
// import Scrollbars from 'react-custom-scrollbars-2';

import UserLayout from 'containers/user_layout';
import HomePage from 'containers/home_page';

const Home: NextPage = () => {
    return (
        <Box flex={1} display="flex">
            <Head>
                <title>Image Tools</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <UserLayout>
                <Box flex={1} overflow="auto">
                    <HomePage />
                    {/* <Scrollbars>
                        <Box flex={1}>
                            <HomePage />
                        </Box>
                    </Scrollbars> */}
                </Box>
            </UserLayout>
        </Box>
    );
};

export default Home;
