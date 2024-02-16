import React, { PropsWithChildren } from 'react';
import Navbar from '../components/navbar/navbar.component';

const Layout = ({ children }) => {
    return (
        <div>
            {/* Your layout structure */}
            <header>
                <title>Your Website Title</title>
                <meta name="description" content="Your website description" />
            </header>
            <main>
                <div className='w-full flex justify-center'>
                    <Navbar />
                    <div className='container mt-16'>{children}</div>
                </div>
            </main >
            <footer>
                {/* Footer content */}
            </footer>
        </div >
    );
};

export default Layout;
