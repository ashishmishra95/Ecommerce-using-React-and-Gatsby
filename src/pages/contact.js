import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'// In order to fetch the image

import Layout from "../components/layout"
import SEO from "../components/seo"
// importing Hero component in index.js
import Hero from "../components/Reusable/Hero"
import InfoBlock from "../components/Reusable/InfoBlock"
import Contact from "../components/Contact/Contact"




const ContactPage = ({data}) => (
  <Layout>
  <SEO title = "Home"/>
    <Hero 
    img = {data.img.childImageSharp.fluid}// we have used this to demestified the data which has been used above for image
    title = "Contact us"
    subtitle = ""
    heroClass = "aboutus-background"
    />
    <InfoBlock head = "How we can help?"/>
    <Contact/>
    
  </Layout>
)
// Writing graphql query to access image
export const myQuery = graphql`
{
    img: file(relativePath: {eq: "contact.png"}){
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

}
`

export default ContactPage
