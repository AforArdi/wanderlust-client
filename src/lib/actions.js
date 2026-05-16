'use server';

import { redirect } from "next/navigation";
import { authClient } from "./auth-client";
import { auth } from "./auth";
import { headers } from "next/headers";

export const AddDestinationAction = async (formData) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const newDestination = Object.fromEntries(formData.entries());
    const res = await fetch('http://localhost:5000/destinations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
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
    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const res = await fetch(`http://localhost:5000/destinations/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        }
    })
    const data = await res.json();

    if (data.deletedCount > 0) {
        redirect('/destinations');
    }
    return data;
}

export const UpdateAction = async (id, destination) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const res = await fetch(`http://localhost:5000/destinations/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
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
    // because this function is called from server component, we can use auth to get the token.
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`http://localhost:5000/bookings/${userId}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const data = await res.json();
    return data;
}

export const AddBookings = async (newBooking) => {
    // because this function is called from client component, we need to use authClient to get the token.
    // const { data: tokenData, error } = await authClient.token();
    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const res = await fetch('http://localhost:5000/bookings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify(newBooking)
    })
    const data = await res.json();
    return data;
}

export const DeleteBooking = async (id) => {
    // const { data: tokenData, error } = await authClient.token();
    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const res = await fetch(`http://localhost:5000/bookings/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        }
    })
    const data = await res.json();
    return data;
}