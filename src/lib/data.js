import { headers } from "next/headers";
import { auth } from "./auth";

export const getDestinations = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations`);
    const data = await res.json();
    return data;
}

export const getDestinationById = async (id) => {
    const {token} = await auth.api.getToken({
        headers: await headers()
    })
    // console.log(token);
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations/${id}`,{
        headers:{
            authorization: `Bearer ${token}`
        }
    });
    const data = await res.json();
    return data;
}