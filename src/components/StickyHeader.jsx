import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { deepMemo } from '@hooks';

import { EPORLogo, Heart } from './Logo';
import colors from '@colors';

const Root = styled('div')`
    flex-grow: 1;
    background-image: ${({ backgroundUrl }) =>
        (backgroundUrl && `url(${backgroundUrl})`) || 'none'};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    display: flex;
`;

const HeaderContent = styled('div')`
    width: 90%;
    position: absolute;
    display: flex;
    justify-content: space-between;
    top: 5%;
    left: 5%;
    
`;

const HeaderContainer = styled('div')`
    position: relative;
    display: flex;
    padding-top: 3.75em;
    padding-bottom: 3em;
`;

const StickyHeader = ({ backgroundUrl, children, isSticky }) => {
    return (
        <>
            {/* <Root backgroundUrl={backgroundUrl}> */}
                <HeaderContent>
                    <Link to="/">
                        <EPORLogo className="logo" />
                    </Link>
                    <div
                        style={{
                            position: 'relative',
                            width: 54,
                            height: 53,
                            borderRadius: '50%',
                            backgroundColor: colors.white25,
                            justifyContent: 'center',
                            alignContent: 'center',
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                            }}
                        >
                            <Heart />
                        </div>
                    </div>
                </HeaderContent>
            {/* </Root> */}
        </>
    );
};

export default deepMemo(StickyHeader);
