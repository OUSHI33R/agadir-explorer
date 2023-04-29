import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import Footer from "../Component/Footer";
import contact from "../assest/contact.jpg"
import ContactForm from "../Component/ContactForm";
function Contact () {
    return (
        <>
            <Navbar />
            <Hero cName="hero-mid" heroImg={contact} titel="Contact Us" btnClass="hide"/>
            <ContactForm />
            <Footer />

        </>
    )
}
export default Contact;