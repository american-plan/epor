import React from 'react'
import { PrismicLink } from '@prismicio/react'

export const HomepageBanner = ({
  title,
  description,
  linkUrl,
  linkLabel,
  backgroundUrl,
}) => (
  <section
    className="homepage-banner"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${backgroundUrl})`,
    }}
  >
    
    <div>
      <section className='card'>
        <h4 className='title'>End Poverty & Overcome Racism</h4>
        <button className='banner-button'>Join the Fight</button>
      </section>
      <section className='group'>
        <text>
          01
          
          <h4 className='title'>What is the American plan?</h4>
          <p>Read the full text of our American Plan to End Poverty and Overcome Racism</p>
        </text>
        <text>
          02
          
          <h4 className='title'>Ten Points for Action</h4>
          <p>The American Plan identifies 10 keys areas for tackling poverty and racism</p>
        </text>
        <text>
          03
          <div className='retangle' style={{backgroundColor:'orangered'}}></div>
          <div className='retangle' style={{backgroundColor:'white'}}></div>
          <div className='retangle' style={{backgroundColor:'gray'}}></div>
          <h4 className='title'>About Us</h4>
          <p>The diverse ideas and people behind the American Plan</p>
        </text>
      </section>
    </div>

  </section>
)