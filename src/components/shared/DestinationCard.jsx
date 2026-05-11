
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const DestinationCard = ({ destination }) => {
    const { _id, destinationName, imageUrl, country, price, duration } = destination;
    console.log(price);

    return (
        <div className="">
            <Card>
                <Image src={imageUrl} alt={destinationName} height={200} width={400}
                    className="object-cover"></Image>
                <Card.Header>
                    <Card.Title>{destinationName}</Card.Title>
                    <div className="flex items-center gap-2">
                        <CiLocationOn></CiLocationOn>
                        <span>{country}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold">{destinationName}</h2>
                        <p><span className="text-xl font-bold">${price}</span>/person</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaRegCalendarAlt></FaRegCalendarAlt>
                        {duration}
                    </div>
                </Card.Header>
                <Card.Footer className="flex gap-2">
                    <Link href={`/destinations/${_id}`}>
                        <Button variant="outline">
                            Book Now<FaArrowUpRightFromSquare></FaArrowUpRightFromSquare>
                        </Button>
                    </Link>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default DestinationCard;