// Importing React Class Based Component
import React, { Component } from 'react'
import { Link } from 'gatsby'
import logo from "../../images/logo.png"
import {FaCartArrowDown} from "react-icons/fa"

export default class Navbar extends Component {

    // Defining 'states' to check the status of toggle bar
    state  = {
        navbarState : false,
        navbarClass : "collapse navbar-collapse",
        // TO show menu  items using loop created an array of details
        menus : [{
            id:1,
            text: "Home",
            url: "/",
        },{
            id:2,
            text: "About",
            url: '/about',
        },{
            id:3,
            text: "Services",
            url: "/services"
        },{
            id:4,
            text: "Contact",
            url: "/contact",
        }]
     }
     myToggle = () => {

        this.state.navbarState ? this.setState({
            navbarState : false,
            navbarClass : "collapse navbar-collapse",
        }) : this.setState({
            navbarState : true,
            navbarClass : "collapse navbar-collapse show",
        })

     }
    render() {
        return (
            <nav className = "navbar navbar-expand-sm bg-theme text-white">
                <Link to = "/" className = "navbar-brand ml-5">
                <img src={logo} alt="Image" width="40px"/>
                </Link>
                <button className="navbar-toggler" onClick = {this.myToggle} type="button">
                <span className="text-white">Menu</span>
                </button>
                    <div className={this.state.navbarClass}>
                        <ul className="navbar-nav ml-auto mr-5">
                        {this.state.menus.map(menu => { // We have used mapping to iterate through the our menu list using key with its id
                            return(
                            <li key = {menu.id} className="nav-item">
                                <Link to = {menu.url} className="nav-link text-white">
                                     {menu.text}
                                </Link>
                            </li>
                            )
                        })}
                            <li className="nav-item">
                            <FaCartArrowDown className="cart-icon">

                            </FaCartArrowDown>

                            </li>
                        </ul>
                    </div>
                
            </nav>
        )
    }
}
