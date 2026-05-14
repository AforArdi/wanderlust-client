import CancelAlert from "@/components/CancelAlert";
import { getBookings } from "@/lib/actions";
import { auth } from "@/lib/auth";
import { Button, Card } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { GrLocation } from "react-icons/gr";
import { IoTrashBin } from "react-icons/io5";

const BookingsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const user = session?.user;
    const userId = user?.id;

    if (!userId) {
        return <div>Please log in to view bookings.</div>;
    }

    const bookings = await getBookings(userId);
    // console.log(bookings);


    return (
        <div className="max-w-7xl">
            <h1 className="text-3xl font-bold">My Bookings</h1>
            <Card>
                <div className="p-6 space-y-4">
                    {
                        bookings.map(booking =>
                            <div key={booking._id} className="flex items-center gap-4">
                                <Image src={booking.imageUrl} alt={booking.destinationName} height={100} width={300}></Image>
                                <div className="space-y-2">
                                    <h2 className="text-xl font-bold">{booking.destinationName}</h2>
                                    <p className="flex items-center gap-2"><GrLocation></GrLocation> {booking.country}</p>
                                    <p>{new Date(booking.date).toLocaleDateString()}</p>
                                    <h2 className="text-4xl font-semibold text-cyan-500">${booking.price}</h2>
                                    <div className="flex items-center gap-2">
                                        <CancelAlert bookingId={booking._id}></CancelAlert>
                                        <Button variant="outline" className={'text-cyan-500 rounded-none'}>View</Button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </Card>
        </div>
    );
}

export default BookingsPage;