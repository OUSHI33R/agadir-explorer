import "./Trip.css"

function TripData (props){
    return(
        <div className="t-card">
            <div className="t-img">
                <img src={props.image} alt="image"/>
            </div>    
            <center>
             <h4>{props.heading}</h4>
            </center>
            <p>{props.text}</p>
        </div>   
    )

}

export default TripData;