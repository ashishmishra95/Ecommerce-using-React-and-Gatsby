import React, { Component } from 'react'
import Head from '../Reusable/Head'
import Img from 'gatsby-image'

export default class h1 extends Component {
    constructor(props){
        super(props)
        this.state ={
            courses: props.courses.edges,
            mycourses: props.courses.edges,
            
        }
    }

    
    render() {
        //To check whether we are geeting all the Courses content
        // console.log(this.state.courses);
        
        return (
            <section className="py-2 bg-theme">
                <div className="container">
                    <Head className="text-dark" title= "Courses"/>
                        <div className="row">
                        {
                            this.state.mycourses.map(({node}) =>{
                                return(
                                    <div
                                    key ={node.id}
                                    className="col-10 col-md-6 d-flex my-3 mx-auto">
                                    <Img fixed = {node.image.fixed}/>
                                    <div className="flex-grow-1 px-3">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="mb-0 text-white">{node.title}</h6>
                                        <h6 className="mb-0 text-white">$ {node.price}</h6>

                                    </div>
                                    <p className="text-muted">
                                        <small className="text-white">
                                         {node.title}
                                        </small>
                                    </p>
                                    <button 
                                    data-item-id={node.id}
                                    data-item-name={node.title}
                                    data-item-price={node.price}
                                    data-item-url="https://ecommercegatsby.netlify.com/"//Random site just for cart to work
                                    data-item-image={node.image.fixed.src}
                                    className ="mb-3 btn btn-warning snipcart-add-item">Join Now</button>
                                    </div>
                                    </div>
                                )
                            })
                        }

                         </div>
                </div>
            </section>
        )
    }
}
