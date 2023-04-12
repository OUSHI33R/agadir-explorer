import "./Destination.css"
import DestinationData from "./DestinationData";
const Destination = () => {
    return (
        <div className="destination">
            <center>
             <h1> Popular Destination</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            </center>
            <DestinationData 
            className="first-des"
            heading="Taghazout"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
            img1="https://images.unsplash.com/photo-1617040969450-19109c62a563?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            img2="https://images.unsplash.com/photo-1538053367502-742497073841?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />
            <DestinationData 
            className="first-des-reverse"
            heading="AGADIR OUFELA"
            text="Lorem ipsum dolor 1234567890987654321234567890 sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
            img1="https://images.unsplash.com/photo-1617040969450-19109c62a563?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            img2="https://images.unsplash.com/photo-1538053367502-742497073841?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />

        </div>
    )
}

export default Destination;