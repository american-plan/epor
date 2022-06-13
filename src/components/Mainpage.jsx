import React from "react";
import { deepMemo } from "@hooks";
import background from "@images/mainpage-background.png"

import styled from "@emotion/styled";

const Main = styled('div')`
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



const mainpage = () => {

    return(
        <Main className="gradient-bg" backgroundUrl = {background}>

        </Main>
    );
}



export default deepMemo(mainpage)