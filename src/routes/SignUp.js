import Footer from "../Component/Footer";
import Hero from "../Component/Hero";
import NavbarWithout from "../Component/NavbarWithout";
import SignUpForm from "../Component/SignUpForm";
function SignUp (){
    return(
        <>
            <NavbarWithout />
            <Hero cName="hero-mid" heroImg="https://images.unsplash.com/photo-1584914584152-9b56c79aec32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" titel="Sign Up" btnClass="hide"/>
            <SignUpForm />
            <Footer/>
        </>
    )
}

export default SignUp;