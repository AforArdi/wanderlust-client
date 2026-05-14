import { getBookings } from "@/lib/actions";
import { auth } from "@/lib/auth";
import { Card } from "@heroui/react";
import { headers } from "next/headers";

const BookingsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const user = session?.user;
    const userId = user?.id;

    if (!userId) {
        return <div>Please log in to view bookings.</div>;
    }

    const bookings = await getBookings(userId)

    console.log(bookings);

    return (
        <div className="max-w-7xl">
            <h1 className="text-3xl font-bold">My Bookings</h1>
            <Card>
                
            </Card>
        </div>
    );
}

export default BookingsPage;