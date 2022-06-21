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
        lineHeight: 1.35
    },

    itemContent: {
        fontFamily: "Karla", 
        fontSize: 18, 
        fontWeight: "bold", 
    },

    circle: {
        backgroundColor: "rgba(248,99,99,0.7)",
        width: 50,
        height: 50,
        borderRadius: "50%",
        position: "absolute", 
        textAlign: "center", 
        alignItems: "center", 
        justifySelf: "center",
    },

    circleContent: {
        color: "#cf1111",
        fontWeight: "bold",
        fontSize: 24,
        fontFamily: "Roboto",
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
                        <a className = {classes.itemContent}> Create decent housing for all </a>
                    </Box>
                    <Box className = {classes.circle} style = {{right: 230, top: 89, }}>
                        <h1 className = {classes.circleContent}> 1 </h1>
                    </Box>
                </Box>
                <Box className = {classes.root} style = {{top: 908, left: 443, }}>
                    <Box className = {classes.content}>
                        <a className = {classes.itemContent}> Achieve equity in school funding </a>
                    </Box>
                    <Box className = {classes.circle} style = {{right: 234, top: 94}}>
                        <h1 className = {classes.circleContent}> 2 </h1>
                    </Box>
                </Box>
                <Box className = {classes.root} style = {{top: 992, left: 800}}>
                    <Box className = {classes.content}>
                        <a className = {classes.itemContent}> Provide employment or universal basic income </a>
                    </Box>
                    <Box className = {classes.circle} style = {{right: 235, top: 94}}>
                        <h1 className = {classes.circleContent}> 3 </h1>
                    </Box>
                </Box>
                <Box className = {classes.root} style = {{top: 898, left: 1124}}>
                    <Box className = {classes.content}>
                        <a className = {classes.itemContent}> Conduct policy, and deliver public service </a>
                    </Box>
                    <Box className = {classes.circle} style = {{right: 235, top: 94}}>
                        <h1 className = {classes.circleContent}> 4 </h1> 
                    </Box>
                </Box>
                <Box className = {classes.root} style = {{top: 1093, left: 1145}}>
                    <Box className = {classes.content}>
                        <a className = {classes.itemContent}> Ensure enough stores and offices </a> 
                    </Box>
                    <Box className = {classes.circle} style = {{right: 234, top: 90}}>
                        <h1 className = {classes.circleContent}> 5 </h1> 
                    </Box>
                </Box>
                <Box className = {classes.root} style = {{top: 1291, left: 1080}}>
                    <Box className = {classes.content}>
                        <a className = {classes.itemContent}> Health care coverage & a clean environment </a>
                    </Box>
                    <Box className = {classes.circle} style = {{right: 237, top: 98}}>
                        <h1 className = {classes.circleContent}> 6 </h1>
                    </Box>
                </Box>
                <Box className = {classes.root} style = {{top: 1435, left: 808,}}>
                    <Box className = {classes.content}>
                        <a className = {classes.itemContent}> Assure full voting rights </a>
                    </Box>
                    <Box className = {classes.circle} style = {{right: 228, top: 94}}>
                        <h1 className = {classes.circleContent}> 7 </h1>
                    </Box>
                </Box>
                <Box className = {classes.root} style = {{top: 1305, left: 518,}}>
                    <Box className = {classes.content}>
                        <a className = {classes.itemContent}> End the transfer of military hardware </a>
                    </Box>
                    <Box className = {classes.circle} style = {{right: 232, top: 94}}>
                        <h1 className = {classes.circleContent}> 8 </h1>
                    </Box>
                </Box>
                <Box className = {classes.root} style = {{top: 1401, left: 216,}}>
                    <Box className = {classes.content}>
                        <a className = {classes.itemContent}> Eliminate arrest for drug offenses </a>
                    </Box>
                    <Box className = {classes.circle} style = {{top: 93, right: 227,}}>
                        <h1 className = {classes.circleContent}> 9 </h1>
                    </Box>
                </Box>
                <Box className = {classes.root} style = {{top: 1186, left: 23}}>
                    <Box className = {classes.content}>
                        <a className = {classes.itemContent}> Etablish diverse commisions </a>
                    </Box>
                    <Box className = {classes.circle} style = {{top: 99, right: 232}}>
                        <h1 className = {classes.circleContent}> 10 </h1>
                    </Box>
                </Box>
            </div>
            
        </Main>
    );
}



export default deepMemo(mainpage)