import React from 'react'
import BackgroundImage from 'gatsby-background-image' // imported background image plugin
// Created image properties like title,subtitle for the image into hero section
export default function Hero({img, title, subtitle,heroClass}) {
    return (
        <BackgroundImage 
            className={heroClass}
            fluid={img}>
            <h1 className ="text-white text-uppercase text-center text-size: 12px font-weight-light">{title}</h1>
            <div>
                <h4 className ="text-warning font-weight-light">{subtitle}</h4>
            </div>
        </BackgroundImage>
    )
}
