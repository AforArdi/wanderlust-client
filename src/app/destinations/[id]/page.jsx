import { Button, Card } from "@heroui/react";
import Link from "next/link";
import { MdOutlineKeyboardArrowLeft, MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { getDestinationById } from "../../../lib/data";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { FaRegCalendarAlt, FaLongArrowAltRight } from "react-icons/fa";
import AlertModal from "@/components/AlertModal";

const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params;
    const destination = await getDestinationById(id);
    const { _id, destinationName, imageUrl, country, price, duration, description } = destination;

    return (
        <div className="max-w-7xl mx-auto mb-20">
            <div className="flex items-center justify-between my-5">
                <Link href={'/destinations'}>
                    <Button variant="ghost" className={'rounded-none flex items-center gap-2'}><MdOutlineKeyboardArrowLeft></MdOutlineKeyboardArrowLeft> Back to Destinations</Button>
                </Link>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" className={'rounded-none flex items-center gap-2'}><FaRegEdit></FaRegEdit> Edit</Button>
                    <AlertModal destination={destination}></AlertModal>
                </div>
            </div>
            <Card>
                <Image src={imageUrl} alt={destinationName} height={400} width={800}
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
                <div className="flex flex-col gap-2">
                    <h2 className="text-3xl font-bold">Overview</h2>
                    <p>{description}</p>
                    <Button className={'rounded-none flex items-center gap-2'}>Book Now <FaLongArrowAltRight></FaLongArrowAltRight></Button>
                </div>
            </Card>
        </div>
    );
}

export default DestinationDetailsPage;