import * as React from 'react';

import { Header } from './Header';
import StickyHeader from './StickyHeader';
import { Footer } from './Footer';
import './../styles/reset.css';
import './../styles/common.css';
import './../styles/style.css';

export const Layout = ({ isHomepage, children, navigation }) => (
    <>
        <StickyHeader />
        {children}
        <Footer />
    </>
);
