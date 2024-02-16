import React, { PropsWithChildren } from 'react';
import Navbar from '../components/navbar/navbar.component';

const Layout: React.FC = ({ children }: PropsWithChildren) => {
    return (
        <div>
            {/* Your layout structure */}
            <header>
                <title>Your Website Title</title>
                <meta name="description" content="Your website description" />
            </header>
            <main className='flex justify-center'>
                <div >
                    <Navbar />
                    <div className='container'>{children}</div>
                </div>
            </main >
            <footer>
                {/* Footer content */}
            </footer>
        </div >
    );
};

export default Layout;
