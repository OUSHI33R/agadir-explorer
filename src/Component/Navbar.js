import { Component } from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillHome } from "react-icons/ai";
import { AiFillInfoCircle } from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaAddressBook } from "react-icons/fa";
import {TbGridDots} from "react-icons/tb";
import {FaTimes} from "react-icons/fa";
import { MenuItems } from "./Menuitems";

class Navbar extends Component {
    state = { clicked: false };
    handelClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="NavbarItems">
                <div className="navbar-logo">
                    <h2><SiYourtraveldottv/>Agadir Explorer.</h2>
                </div>
                <div className="menu-icons" onClick={this.handelClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars" }></i>
                </div>
                <div>
                        <ul className={this.state.clicked ? "navbar-menu active" : "navbar-menu"}>
                            {MenuItems.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link className={item.cName} to={item.url} >
                                            {item.icon} {item.title}
                                        </Link>
                                    </li>
                                )
                            })}
                            <button>Sign Up</button>
                        </ul>
                </div>
            
            </nav>
        )
    }
}
export default Navbar;
