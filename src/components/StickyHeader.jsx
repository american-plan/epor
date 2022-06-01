import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { deepMemo } from '@hooks';

import { EPORLogo, Heart } from './Logo';

const HeaderContainer = styled('div')`
    padding-top: 3.75em;
    padding-bottom: 3em;
`;

const HeaderContent = styled('div')`
    display: flex;
    justify-content: space-between;
`;

const StickyHeader = ({ children, isSticky }) => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <Link to="/">
                    <EPORLogo className="logo" />
                </Link>
                <Heart />
            </HeaderContent>
        </HeaderContainer>
    );
};

export default deepMemo(StickyHeader);
