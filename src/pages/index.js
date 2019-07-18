import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'// In order to fetch the image

import Layout from "../components/layout"
import SEO from "../components/seo"
// importing Hero component in index.js
import Hero from "../components/Reusable/Hero"
import InfoBlock from "../components/Reusable/InfoBlock"
import DualInfoBlock from '../components/Reusable/DualInfoBlock'
import Coursecart from '../components/Cart/Coursecart'




const IndexPage = ({data}) => (
  <Layout>
  <SEO title = "Home"/>
    <Hero 
    img = {data.img.childImageSharp.fluid}// we have used this to demestified the data which has been used above for image
    title = "I write code"
    subtitle = "ABC.com"
    heroClass = "hero-background"
    />
    <InfoBlock head = "About us"/>
    <Coursecart courses = {data.courses}/>
    <DualInfoBlock head = "Teams"/>
  </Layout>
)
// Writing graphql query to access image
export const myQuery = graphql`
{
    img: file(relativePath: {eq: "heromain.png"}){
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    courses:allContentfulCourses{
      edges{
        node{
                id
                title
                price
                category
                   image{
                       fixed(width:200,height:120){
                        ...GatsbyContentfulFixed_tracedSVG
                       }
               }
             }
           }
         }
     

}
`

export default IndexPage
