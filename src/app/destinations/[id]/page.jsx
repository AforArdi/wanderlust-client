import { Button, Card } from "@heroui/react";
import Link from "next/link";
import { MdOutlineKeyboardArrowLeft, MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { getDestinationById } from "../../../lib/data";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { FaRegCalendarAlt, FaLongArrowAltRight } from "react-icons/fa";
import AlertModal from "@/components/AlertModal";
import EditModal from "@/components/EditModal";
import BookingCard from "@/components/shared/BookingCard";

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
                    <EditModal destination={destination}></EditModal>
                    <AlertModal destination={destination}></AlertModal>
                </div>
            </div>
            <Card>
                <Image src={imageUrl} alt={destinationName} height={400} width={800}
                    className="object-cover"></Image>

                <Card.Header>
                    <div className="flex justify-between">
                        <div>
                            <Card.Title>{destinationName}</Card.Title>
                            <div className="flex items-center gap-2">
                                <CiLocationOn></CiLocationOn>
                                <span>{country}</span>
                            </div>
                            <h2 className="text-2xl font-bold">{destinationName}</h2>
                            <div className="flex items-center gap-2">
                                <FaRegCalendarAlt></FaRegCalendarAlt>
                                {duration}
                            </div>
                            <h2 className="text-3xl font-bold">Overview</h2>
                                <p>{description}</p>
                        </div>
                        <BookingCard destination={destination}></BookingCard>
                    </div>
                </Card.Header>


            </Card>
        </div>
    );
}

export default DestinationDetailsPage;