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
                    image="https://images.unsplash.com/photo-1585391444542-62acc4f5fa46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    heading="Trip to Marrakesh"
                    text="Between tradition and modernity, Marrakech is the promise of unequalled sensations. Strolling the Jemaa El-Fna square and the souks with their shimmering colours and oriental smells, the red city offers you a complete change of scenery. Horse-drawn carriage rides, sunny terraces, travelling artists and other day and night activities will give a tates of wishful comeback."
                />
                <TripData
                    image="https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    heading="Trip to Chefchaouen"
                    text="Built on a mountainside, Chefchaouen is a city with a special vibes. It unique charm gives an impression of unreality. With its blue-rinsed houses, the whole city seems to be bathed in azure. You walk around as if you were in a dream."
                />
                    <TripData
                    image="https://images.unsplash.com/photo-1489493585363-d69421e0edd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    heading="Trip to Merzouga"
                    text="Merzouga is one of the gates of the Sahara which is a small magnetic village located in the middle of the sands. It’s the territory of the Erg Chebbi, a world of dunes, palm groves, tracks and hikes. Roam through the desert and explore these expansive sand bathed in sunshine and a magic atmosphere. You walk in the middle of these arid vastness when, at the bend of a dune."
                />

            </div>
        </div>
    )

}

export default Trip; 