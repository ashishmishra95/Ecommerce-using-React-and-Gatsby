import React from 'react'
import Head from '../Reusable/Head'

export default function Contact() {
    return (
        <section  className = "py-3 bg-theme">
        <Head title = "Contact US"/>
        <div className="col-10 col-sm-8 mx-auto">
            <form action="https://formspree.io/mishraashish03415@gmail.com" method = "POST">
                <div className="form-group px-5">
                        <input className = "form-control" type="text" name="name" id="name" placeholder="Enter your name"/>
                </div>
                <div className="form-group px-5">
                        <input className = "form-control" type="email" name="email" id="email" placeholder="Enter your email"/>
                </div>
                <div className="form-group px-5">
                        <input className = "form-control" type="number" name="mobile" id="mobile" placeholder="Enter your number"/>
                </div>
                <div className="form-group px-5">
                        <textarea className = "form-control" type="text" name="description" id="description" placeholder="Enter your message"/>
                </div>
                <div className="row justify-content-center">
                <button type = "submit" className ="btn btn-success">Submit</button>
                </div>
            </form>    
        </div>
            
        </section>
    )
}
