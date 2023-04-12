import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
function About () {
    return (
        <>
            <Navbar />
            <Hero cName="hero-mid" heroImg="https://images.unsplash.com/photo-1664961790960-acfccf112972?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" titel="About US"btnClass="hide"/>
        </>
    )
}
export default About;