import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import contact from "../assest/contact.jpg"
function Contact () {
    return (
        <>
            <Navbar />
            <Hero cName="hero-mid" heroImg={contact} titel="Contact Us" btnClass="hide"/>
        </>
    )
}
export default Contact;