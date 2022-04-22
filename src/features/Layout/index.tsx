import React from 'react';
import Header from '../Header';
import Nav from '../Nav';

const Layout: React.FC<unknown> = ({ children }) => {
    return (
        <div className="layout">
            {/* <Header /> */}
            <Nav />
            {children}
        </div>
    );
};

export default Layout;