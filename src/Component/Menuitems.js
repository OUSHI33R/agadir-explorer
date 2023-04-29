import { AiFillHome } from "react-icons/ai";
import { AiFillInfoCircle } from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaAddressBook } from "react-icons/fa";
export const MenuItems = [
    {
        title: 'Home',
        url: '/',
        cName: 'navbar-links',
        icon: <AiFillHome/>
    },
    {
        title: 'About',
        url: '/about',
        cName: 'navbar-links',
        icon: <AiFillInfoCircle/>
    },
    {
        title: 'Service',
        url: '/service',
        cName: 'navbar-links',
        icon: <BsFillBriefcaseFill/>
    },
    {
        title: 'Contact',
        url: '/contact',
        cName: 'navbar-links',
        icon: <FaAddressBook/>
    },
    {
        title: 'Sign Up',
        url: '/signup',
        cName: 'navbar-links-mobile',
        
    },
]