import { redirect } from "next/navigation";

export const AddDestinationAction = async (formData) => {
    const newDestination = Object.fromEntries(formData.entries());
    const res = await fetch('http://localhost:5000/destinations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newDestination)
    })
    const data = await res.json();

    if (data.insertedId) {
        redirect('/destinations');
    }
    return data;
}
export const DeleteAction = async (id) => {
    const res = await fetch(`http://localhost:5000/destinations/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await res.json();

    if (data.deletedCount > 0) {
        redirect('/destinations');
    }
    return data;
}

export const UpdateAction = async (id, destination) => {
    const res = await fetch(`http://localhost:5000/destinations/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(destination)
    })
    const data = await res.json();

    if (data.modifiedCount > 0) {
        redirect(`/destinations/${id}`);
        alert('Destination updated');
    }
    return data;
}

export const getBookings = async (userId) => {
    const res = await fetch(`http://localhost:5000/bookings/${userId}`);
    const data = await res.json();
    return data;
}

export const AddBookings = async (newBooking) => {
    const res = await fetch('http://localhost:5000/bookings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBooking)
    })
    const data = await res.json();
    return data;
}

export const DeleteBooking = async (id) => {
    const res = await fetch(`http://localhost:5000/bookings/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await res.json();
    return data;
}