"use client";
import { AddBookings } from "@/lib/actions";
import { authClient } from "@/lib/auth-client";
import { Button, DateField, Label } from "@heroui/react";
import { Card } from "@heroui/react";
import { redirect } from "next/dist/server/api-utils";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa";

const BookingCard = ({ destination }) => {
    const [dateValue, setDateValue] = useState(null);
    const { _id, destinationName, imageUrl, country, price, duration, description } = destination;

    const {
        data: session,
        isPending, //loading state
        error, //error object
    } = authClient.useSession();
    const user = session?.user;

    const handleBooking = async () => {
        const bookingData = {
            userId: user?.id,
            userName: user?.name,
            userImage: user?.image,
            imageUrl,
            price,
            destinationId: _id,
            destinationName,
            country,
            date: new Date(dateValue),
        }
        await AddBookings(bookingData);
        
        if(bookingData.insertedId > 0){
            toast.success('Booking Successful!');
            redirect('/bookings');
        }
    }

    return (
        <Card>
            <div>
                <p className="text-[16px]">Starting from</p>
                {/* <h2 className="text-3xl font-semibold text-cyan-500">${price}</h2> */}
                <p className="text-[16px]">per person</p>
            </div>
            <DateField onChange={setDateValue} className="w-[256px]" name="date">
                <Label>Departure Date</Label>
                <DateField.Group>
                    <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                </DateField.Group>
            </DateField>
            <Button onClick={handleBooking} className={'rounded-none bg-cyan-500 w-full'} varient='primary'>
                Book Now <FaArrowRight></FaArrowRight>
            </Button>
        </Card>
    );
}


export default BookingCard;