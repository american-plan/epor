import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { deepMemo } from '@hooks';

import { EPORLogo } from './Logo';
import Heart from './Logo';
import colors from '@colors';
import { makeStyles } from '@mui/styles';


const logoStyle = makeStyles (() => ({
    onScroll: {
        backgroundColor: "rgba(197, 45, 46, 0)" , 
        border:"1px solid #c52d2e"
    }
}))

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
    border: 1px solid none;
    background-color: ${colors.white25};
    justify-content: center;
    align-items: center;
`;
const StickyHeader = ({ backgroundUrl, children, isSticky }) => {

    const classes = logoStyle();
    const [logo, setLogo] = useState(false);

    const handlesScroll = () => {
        if(window.scrollY > 754){
            setLogo(true);
        }
        else {setLogo(false);}
    }

    window.addEventListener('scroll',handlesScroll);

    return (
        <HeaderContainer>
            <HeaderContent>
                <Link to="/">
                    <EPORLogo className="logo" />
                </Link>
                <TestContainer className = {logo ? classes.onScroll : ""}>
                    <Heart />
                </TestContainer>
            </HeaderContent>
        </HeaderContainer>
    );
};

export default deepMemo(StickyHeader);
