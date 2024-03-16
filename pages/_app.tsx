
import React from 'react';
import type { AppProps } from 'next/app';
import Layout from './layout';
import '../styles/global.css'
import '../styles/app.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};

export default MyApp;