import Destination from '../Component/Destination';
import Navbar from '../Component/Navbar';
import Trip from '../Component/Trip';
import Footer from '../Component/Footer';
function TravelPlan () {

    return (
        <>
            <Navbar />
            <Destination/>
            <Trip/>
            <Footer/>
        </>
    )
}
export default TravelPlan;