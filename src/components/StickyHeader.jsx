import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { deepMemo } from '@hooks';

import { EPORLogo, Heart } from './Logo';
import colors from '@colors';

const HeaderContent = styled('div')`
    width: 90%;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 5%;
    left: 5%;
`;

const HeaderContainer = styled('div')`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    margin: 2em 0em;
    z-index: 999;
`;

const TestContainer = styled('div')`
    width: 3.5em;
    height: 3.5em;
    display: flex;
    border-radius: 50%;
    background-color: ${colors.white25};
    justify-content: center;
    align-items: center;
`;
const StickyHeader = ({ backgroundUrl, children, isSticky }) => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <Link to="/">
                    <EPORLogo className="logo" />
                </Link>
                <TestContainer>
                    <Heart />
                </TestContainer>
            </HeaderContent>
        </HeaderContainer>
    );
};

export default deepMemo(StickyHeader);
