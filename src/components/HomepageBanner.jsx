import React from 'react';
import Setup from './ContactModal';
import { deepMemo } from '@hooks';

const HomepageBanner = ({}) => {
    return (
        <section className="homepage-banner">
            <div className="homepage-container">
                <link
                    href="https://fonts.googleapis.com/css?family=Montserrat"
                    rel="stylesheet"
                />
                <div
                    className="item-1"
                    style={{
                        fontSize: 60,
                        fontFamily: 'Montserrat',
                        fontWeight: 800,
                    }}
                >
                    End Poverty
                </div>
                <div
                    className="item-2"
                    style={{
                        fontSize: 60,
                        fontFamily: 'Montserrat',
                        fontWeight: 800,
                    }}
                >
                    &
                </div>
                <div
                    className="item-3"
                    style={{
                        fontSize: 60,
                        fontFamily: 'Montserrat',
                        fontWeight: 800,
                    }}
                >
                    Overcome Racism
                </div>
                <div className="item-4">
                    <Setup />
                </div>
                <div
                    className="item-5"
                    style={{
                        fontSize: 36,
                        fontFamily: 'Montserrat',
                        fontWeight: 100,
                    }}
                >
                    01
                </div>
                <div
                    className="item-6"
                    style={{
                        fontSize: 36,
                        fontFamily: 'Montserrat',
                        fontWeight: 100,
                    }}
                >
                    02
                </div>
                <div
                    className="item-7"
                    style={{
                        fontSize: 36,
                        fontFamily: 'Montserrat',
                        fontWeight: 100,
                    }}
                >
                    03
                </div>
                <div className="item-8">
                    <div
                        className="retangle"
                        style={{ backgroundColor: '#e02323', width: '242px' }}
                    ></div>
                    <div
                        className="retangle"
                        style={{ backgroundColor: 'white', width: '239px' }}
                    ></div>
                    <div
                        className="retangle"
                        style={{ backgroundColor: 'gray', width: '261px' }}
                    ></div>
                </div>
                <div
                    className="item-9"
                    style={{
                        fontSize: 24,
                        fontFamily: 'Montserrat',
                        fontWeight: 600,
                        alignContent:"center",
                        textAlign:"start",
                        lineHeight: "26px",

                    }}
                >
                    What is the American Plan?
                </div>
                <div
                    className="item-10"
                    style={{
                        fontSize: 24,
                        fontFamily: 'Montserrat',
                        fontWeight: 600,
                        lineHeight: "26px",
                        alignContent:"center",
                        textAlign:"start",
                    }}
                >
                    Ten point for Action
                </div>
                <div
                    className="item-11"
                    style={{
                        fontSize: 24,
                        fontFamily: 'Montserrat',
                        fontWeight: 600,
                        alignContent:"center",
                        textAlign:"start",
                        
                    }}
                >
                    About Us
                </div>
                <div className="item-12" 
                    style={{
                        fontSize: 14,
                        fontFamily: "MOntserrat",
                        fontWeight: 100,
                        alignContent:"center",
                        textAlign:"start",
                    }}
                >
                    Read the full text of our American Plan to End Poverty and Overcome Racism.
                </div>
                <div className="item-13"
                    style={{
                        fontSize: 14,
                        fontFamily: "MOntserrat",
                        fontWeight: 100,
                        alignContent:"center",
                        textAlign:"start",
                    }}   
                >
                    The American Plan identifies 10 key areas for tackling poverty and racism.
                </div>
                <div className="item-14"
                    style={{
                        fontSize: 14,
                        fontFamily: "MOntserrat",
                        fontWeight: 100,
                        alignContent:"center",
                        textAlign:"start",
                    }}
                >
                    The diverse ideas and people behind the American Plan.
                </div>
            </div>
        </section>
    );
};

export default deepMemo(HomepageBanner);
