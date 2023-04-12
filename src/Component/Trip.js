import "./Trip.css"
import TripData from "./TripData"

function Trip (){
    return (
        <div className="trip">
           <center>
                <h1> Recent Trip</h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
           </center>
           <div className="tripcard">
                <TripData
                    image="https://images.unsplash.com/photo-1617040969450-19109c62a563?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    heading="Trip to Bali"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                    
                />

            </div>
        </div>
    )

}

export default Trip; 