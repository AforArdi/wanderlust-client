import DestinationCard from "@/components/shared/DestinationCard";
import { getDestinations } from "@/lib/data";

const destinations = async () => {
    const destinations = await getDestinations();

    return ( 
        <div className="max-w-7xl mx-auto my-10">
            <h2 className="text-4xl">Explore All Destinations</h2>
            <div className="grid grid-cols-3 gap-3">
                {
                    destinations.map(destination=> <DestinationCard key={destination._id}
                    destination={destination}
                    ></DestinationCard>)
                }
            </div>
        </div>
     );
}
 
export default destinations;