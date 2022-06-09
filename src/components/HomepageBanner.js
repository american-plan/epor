import React from 'react';
import { PrismicLink } from '@prismicio/react';
import Setup from './ContactModal';
import { Box } from '@mui/material';
import { fontWeight } from '@mui/system';



export const HomepageBanner = ({
}) => (
    <section className="homepage-banner">
        <div className="homepage-container">
            <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
                <div className="item-1" 
                    style={{
                        fontSize: 60, 
                        fontFamily:"Montserrat",
                        fontWeight: 800,}}> End Poverty </div>
                <div className="item-2" 
                    style={{
                        fontSize: 60, 
                        fontFamily:"Montserrat",
                        fontWeight: 800,}}> & </div>
                <div className="item-3" 
                    style={{
                        fontSize: 60, 
                        fontFamily:"Montserrat",
                        fontWeight: 800,}}> Overcome Racism</div>
                <div className="item-4"> <Setup /> </div>
                <div className="item-5"
                    style={{
                        fontSize: 36, 
                        fontFamily:"Montserrat",
                        fontWeight: 100,}}> 01 </div>  
                <div className="item-6"
                    style={{
                        fontSize: 36, 
                        fontFamily:"Montserrat",
                        fontWeight: 100,}}> 02 </div>
                <div className="item-7"
                    style={{
                        fontSize: 36, 
                        fontFamily:"Montserrat",
                        fontWeight: 100,}}> 03 </div>
                <div className="item-8">
                    <div
                        className="retangle"
                        style={{ backgroundColor: '#e02323', width: "242px",}}
                    ></div>
                    <div
                        className="retangle"
                        style={{ backgroundColor: 'white', width: "239px", }}
                    ></div>
                    <div
                        className="retangle"
                        style={{ backgroundColor: 'gray', width: "261px", }}
                    ></div>
                </div>
                <div className="item-9" 
                    style={{
                        fontSize: 24, 
                        fontFamily:"Montserrat",
                        fontWeight: 600,
                        alignSelf: "start"}}> What is the American Plan? </div>
                <div className="item-10"
                    style={{
                        fontSize: 24, 
                        fontFamily:"Montserrat",
                        fontWeight: 600,}}> Ten point for Action </div>
                <div className="item-11"
                    style={{
                        fontSize: 24, 
                        fontFamily:"Montserrat",
                        fontWeight: 600,}}> About Us </div>
        </div>
    </section>
);
