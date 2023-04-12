import Destination from '../Component/Destination';
import Hero from '../Component/Hero';
import Navbar from '../Component/Navbar';
import Trip from '../Component/Trip';
function Home () {

    return (
        <>
            <Navbar />
            <Hero
            cName="hero"
            heroImg="https://images.unsplash.com/photo-1617040969450-19109c62a563?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        
            titel="Your Journey Your Story"
            text="Choose Your favourite Destination"
            buttonText ="Travel Plan"
            url="/"
            btnClass="show"
            />
            <Destination/>
            <Trip/>
        </>
    )
}
export default Home;