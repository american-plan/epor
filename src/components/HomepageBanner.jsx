import React from 'react';
import Setup from './ContactModal';
import { deepMemo } from '@hooks';

const HomepageBanner = ({}) => {

    const tilteStyle = {
        fontFamily: "Montserrat",
        fontSize: 60,
        fontWeight: 800,
    }

    const number = {
        fontSize: 36,
        fontFamily: 'Montserrat',
        fontWeight: 100,
    }

    const smallTitle = {
        fontSize: 24,
        fontFamily: 'Montserrat',
        fontWeight: 600,
        alignContent:"center",
        textAlign:"start",
        lineHeight: "26px", 
    }

    const content = {
        fontSize: 14,
        fontFamily: "Montserrat",
        fontWeight: 100,
        alignContent:"center",
        textAlign:"start",
    }

    return (
        <section className="homepage-banner">
            <div className="homepage-container">
                <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"/>
                <div
                    className="item-1"
                    style={ tilteStyle }
                >
                    End Poverty
                </div>
                <div
                    className="item-2"
                    style={ tilteStyle }
                >
                    &
                </div>
                <div
                    className="item-3"
                    style={ tilteStyle }
                >
                    Overcome Racism
                </div>
                <div className="item-4">
                    <Setup />
                </div>
                <div
                    className="item-5"
                    style={ number }
                >
                    01
                </div>
                <div
                    className="item-6"
                    style={ number }
                >
                    02
                </div>
                <div
                    className="item-7"
                    style={ number }
                >
                    03
                </div>
                <div className="item-8">
                    <div
                        className="retangle"
                        style={{ backgroundColor: '#e02323', width: '16.15em' }}
                    ></div>
                    <div
                        className="retangle"
                        style={{ backgroundColor: 'white', width: '15em' }}
                    ></div>
                    <div
                        className="retangle"
                        style={{ backgroundColor: 'gray', width: '16.5em' }}
                    ></div>
                </div>
                <div
                    className="item-9"
                    style={ smallTitle }
                >
                    What is the American Plan?
                </div>
                <div
                    className="item-10"
                    style={ smallTitle }
                >
                    Ten point for Action
                </div>
                <div
                    className="item-11"
                    style={ smallTitle }
                >
                    About Us
                </div>
                <div className="item-12" 
                    style={ content }
                >
                    Read the full text of our American Plan to End Poverty and Overcome Racism.
                </div>
                <div className="item-13"
                    style={ content }   
                >
                    The American Plan identifies 10 key areas for tackling poverty and racism.
                </div>
                <div className="item-14"
                    style={ content }
                >
                    The diverse ideas and people behind the American Plan.
                </div>
            </div>
        </section>
    );
};

export default deepMemo(HomepageBanner);
