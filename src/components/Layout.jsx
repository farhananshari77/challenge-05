import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
                <div className='main-height'>

                </div>    
            </main>
            <Footer />
        </>
    );
};

export default Layout;