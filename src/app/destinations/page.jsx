import { getDestinations } from "@/lib/data";

const destinations = async () => {
    const destinations = await getDestinations();
    console.log(destinations);

    return ( 
        <div className="max-w-7xl mx-auto my-10">
            <h2 className="text-4xl">Explore All Destinations</h2>
            <div>
                {
                    destinations.map(destination=> <div key={destination._id}>{destination.destinationName}</div>)
                }
            </div>
        </div>
     );
}
 
export default destinations;