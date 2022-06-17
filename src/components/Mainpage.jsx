import React from "react";
import { deepMemo } from "@hooks";
import background from "@images/mainpage-background.png"

import styled from "@emotion/styled";
import { Box } from "@mui/material"
import { makeStyles } from "@mui/styles";

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

const itemStyle = makeStyles(()=> ({
    root: {
        backgroundColor: "white",
        width: 262,
        height: 131,
        borderRadius: 12,
        position: "absolute",
    },

    content: {
        paddingTop: 53,
        paddingLeft: 39,
        width: 201,
        height: 42,
    },

    circle: {
        backgroundColor: "rgba(248,99,99,0.7)",
        width: 50,
        height: 50,
        borderRadius: "50%",
    },

    circleContent: {
        color: "#cf1111",
        fontWeight: "bold",
        fontSize: 24,
    }
}))



const mainpage = () => {

    const classes = itemStyle();

    return(
        <Main  backgroundUrl = {background}>
            <link href='https://fonts.googleapis.com/css?family=Karla' rel='stylesheet' />
            <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' />
            
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
            <div className="items">
                <Box className = {classes.root} style={{ top: 944, left: 61, }}>
                    <Box className = {classes.content}>
                    <a style={{
                        fontFamily: "Karla", 
                        fontSize: 18, 
                        fontWeight: "bold", 
                        lineHeight: "normal",}}> Create decent housing for all </a>
                    </Box>
                    <Box className = {classes.circle} style = {{right: 230, top: 89, position: "absolute", textAlign: "center", justifyItem: "center"}}>
                        <a className = {classes.circleContent} style = {{fontFamily: "Roboto", }}> 1 </a>
                    </Box>
                </Box>
            </div>
            
        </Main>
    );
}



export default deepMemo(mainpage)