import React from "react";
import { deepMemo } from "@hooks";
import background from "@images/mainpage-background.png"

import styled from "@emotion/styled";
import { Box } from "@mui/material"
import { relative } from "path";

const Main = styled('div')`
    flex-grow: 1;
    background-image: linear-gradient(0deg, rgba(45,110,195,0.15), rgba(248,37,37,0.15)), ${({ backgroundUrl }) =>
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
        <Main  backgroundUrl = {background}>
            <link href='https://fonts.googleapis.com/css?family=Karla' rel='stylesheet' />
            <div className="title">
                
                <Box style={{
                    bgcolor: "background.paper",
                    width: 686,
                    height: 106,
                    position: 'relative',
                    top: 363,
                    left: 386,
                    textAlign: "center",
                    alignContent: "center",
                    lineHeight: 2.85,
                }}>
                    <div>
                        <a style={{
                            fontFamily: "Karla",
                            fontWeight: "bold",
                            fontSize: 40,
                        }}> We work where it matters to </a>
                    </div>
                    <div>
                        <a style={{
                            fontFamily: "Karla",
                            fontWeight: "bold",
                            fontSize: 40,
                            color: "#C52D2E",
                        }}> End Poverty </a>
                        <a style={{
                            fontFamily: "Karla",
                            fontWeight: "bold",
                            fontSize: 40,
                        }}> and </a>
                        <a style={{
                            fontFamily: "Karla",
                            fontWeight: "bold",
                            fontSize: 40,
                            color: "#C52D2E",
                        }}> Overcome Racism </a>
                    </div>
                </Box>
            </div>
            
        </Main>
    );
}



export default deepMemo(mainpage)