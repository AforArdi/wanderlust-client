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