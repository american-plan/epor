import React from 'react';
import StickyHeader from './StickyHeader';
import Mainpage from './Mainpage';
import Footer from './Footer';
import './../styles/reset.css';
import './../styles/common.css';
import './../styles/style.css';

import styled from '@emotion/styled';

const Root = styled('div')`
    flex-grow: 1;
    background-image: ${({ backgroundUrl }) =>
        (backgroundUrl && `url(${backgroundUrl})`) || 'none'};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-width: 1430px;
    min-height: 800px;
    width: 100vw;
    height: 100vh;
    display: flex;
`;

export const Layout = ({ backgroundUrl, isHomepage, children, navigation }) => {
    return (
        <>
            <Root backgroundUrl={backgroundUrl}>
                <StickyHeader />
                {children}
            </Root>
            <Mainpage />
            <Footer />
        </>
    );
};
