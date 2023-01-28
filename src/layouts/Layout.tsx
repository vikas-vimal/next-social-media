import React from 'react';
import Header from '@/layouts/Header';

const Layout: React.FC = ({ children }: any) => {
    return (
        <>
            <Header />
            {/* <Main /> */}
            <main>{children}</main>
            {/* <Footer /> */}
        </>
    )
}
export default Layout;