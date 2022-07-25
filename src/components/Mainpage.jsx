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
    min-width: 1434px;
    min-height: 795px;
    width: 100vw;
    height: 100vh;
    display: flex;
    place-items:center center;
`;

const itemStyle = makeStyles(()=> ({

   title:{
        flex: 1,
        lineHeight: 2.85,
        textAlign: "center",
   },

    root: {
        backgroundColor: "white",
        width: "17.25%",
        height: "17.25%",
        borderRadius: 12,
        position: "absolute",
    },

    content: {
        paddingTop: 53,
        paddingLeft: 39,
        width: "80%",
        height: "33%",
        lineHeight: 1.35
    },

    itemContent: {
        fontFamily: "Karla", 
        fontSize: "1.125em", 
        fontWeight: "bold", 
    },

    circle: {
        backgroundColor: "rgba(248,99,99,0.7)",
        width: "20%",
        height: "40%",
        borderRadius: "50%",
        position: "absolute", 
        textAlign: "center", 
        alignItems: "center", 
        justifySelf: "center",
    },

    circleContent: {
        color: "#cf1111",
        fontWeight: "bold",
        fontSize: "1.5em",
        fontFamily: "Roboto",
    }
}))


const mainpage = () => {

    const classes = itemStyle();

    return(
        <Main  backgroundUrl = {background}>
            <link href='https://fonts.googleapis.com/css?family=Karla' rel='stylesheet' />
            <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' />
           
            <div className={classes.title}>
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
            </div>
            <div>
                <Box className = {classes.root} style={{ top: "124.5%", left: "4.46%", }}>
                    <Box className = {classes.content}>
                        <a className = {classes.itemContent}> Create decent housing for all </a>
                    </Box>
                    <Box className = {classes.circle} style = {{right: "87.78%", top: "67.93%", }}>
                        <h1 className = {classes.circleContent}> 1 </h1>
                    </Box>
                </Box>
                <Box className = {classes.root} style = {{top: "116.5%", left: "30.89%", }}>
                    <Box className = {classes.content}>
                        <a className = {classes.itemContent}> Achieve equity in school funding </a>
                    </Box>
                    <Box className = {classes.circle} style = {{right: "89.31%", top: "71.75%"}}>
                        <h1 className = {classes.circleContent}> 2 </h1>
                    </Box>
                </Box>
                <Box className = {classes.root} style = {{top: "126.5%", left: "55.78%"}}>
                    <Box className = {classes.content}>
                        <a className = {classes.itemContent}> Provide employment or universal basic income </a>
                    </Box>
                    <Box className = {classes.circle} style = {{right: "89.69%", top: "71.75%"}}>
                        <h1 className = {classes.circleContent}> 3 </h1>
                    </Box>
                </Box>
                <Box className = {classes.root} style = {{top: "118.5%", left: "78.38%"}}>
                    <Box className = {classes.content}>
                        <a className = {classes.itemContent}> Conduct policy, and deliver public service </a>
                    </Box>
                    <Box className = {classes.circle} style = {{right: "89.69%", top: "71.75"}}>
                        <h1 className = {classes.circleContent}> 4 </h1> 
                    </Box>
                </Box>
                <Box className = {classes.root} style = {{top: "144.8%", left: "81%"}}>
                    <Box className = {classes.content}>
                        <a className = {classes.itemContent}> Ensure enough stores and offices </a> 
                    </Box>
                    <Box className = {classes.circle} style = {{right: "89.31%", top: "68.7%"}}>
                        <h1 className = {classes.circleContent}> 5 </h1> 
                    </Box>
                </Box>
                <Box className = {classes.root} style = {{top: "168.5%", left: "76.5%"}}>
                    <Box className = {classes.content}>
                        <a className = {classes.itemContent}> Health care coverage & a clean environment </a>
                    </Box>
                    <Box className = {classes.circle} style = {{right: "90.45%", top: "74.8%"}}>
                        <h1 className = {classes.circleContent}> 6 </h1>
                    </Box>
                </Box>
                <Box className = {classes.root} style = {{top: "183.3%", left: "56.3%",}}>
                    <Box className = {classes.content}>
                        <a className = {classes.itemContent}> Assure full voting rights </a>
                    </Box>
                    <Box className = {classes.circle} style = {{right: "87.02%", top: "71.75%"}}>
                        <h1 className = {classes.circleContent}> 7 </h1>
                    </Box>
                </Box>
                <Box className = {classes.root} style = {{top: "167.5%", left: "37.8%",}}>
                    <Box className = {classes.content}>
                        <a className = {classes.itemContent}> End the transfer of military hardware </a>
                    </Box>
                    <Box className = {classes.circle} style = {{right: "88.54%", top: "71.75%"}}>
                        <h1 className = {classes.circleContent}> 8 </h1>
                    </Box>
                </Box>
                <Box className = {classes.root} style = {{top: "179.8%", left: "17%",}}>
                    <Box className = {classes.content}>
                        <a className = {classes.itemContent}> Eliminate arrest for drug offenses </a>
                    </Box>
                    <Box className = {classes.circle} style = {{top: "70.99%", right: "88.64%",}}>
                        <h1 className = {classes.circleContent}> 9 </h1>
                    </Box>
                </Box>
                <Box className = {classes.root} style = {{top: "154.8%", left: "3.15%"}}>
                    <Box className = {classes.content}>
                        <a className = {classes.itemContent}> Etablish diverse commisions </a>
                    </Box>
                    <Box className = {classes.circle} style = {{top: "75.57%", right: "88.54%"}}>
                        <h1 className = {classes.circleContent}> 10 </h1>
                    </Box>
                </Box>
            </div>
        </Main>
    );
}



export default deepMemo(mainpage)