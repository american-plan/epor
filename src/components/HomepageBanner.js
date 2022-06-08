import React from 'react';
import { PrismicLink } from '@prismicio/react';
import Setup from './ContactModal';
import { Box } from '@mui/material';



export const HomepageBanner = ({
}) => (
    <section className="homepage-banner">
        <div className="homepage-container">
                <div className="item-1">End Poverty</div>
                <Setup />
            
                
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
    </section>
);
