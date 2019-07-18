import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'// In order to fetch the image

import Layout from "../components/layout"
import SEO from "../components/seo"
// importing Hero component in index.js
import Hero from "../components/Reusable/Hero"
import InfoBlock from "../components/Reusable/InfoBlock"
import DualInfoBlock from '../components/Reusable/DualInfoBlock'
import Teampage from "../components/About/Teampage"
import Servicetypes from "../components/Service/Servicetypes"




const ServicePage = ({data}) => (
  <Layout>
  <SEO title = "Home"/>
    <Hero 
    img = {data.img.childImageSharp.fluid}// we have used this to demestified the data which has been used above for image
    title = "I write code"
    subtitle = ""
    heroClass = "service-background"
    />
    <DualInfoBlock head = "A message form CEO.."/>
    <InfoBlock head = "About Vision"/>
    <Teampage/>
    <Servicetypes/>
    
  </Layout>
)
// Writing graphql query to access image
export const myQuery = graphql`
{
    img: file(relativePath: {eq: "service.jpg"}){
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

}
`

export default ServicePage
