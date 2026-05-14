'use client'

import Link from "next/link";
import NavLinks from "./NavLinks";
import Image from "next/image";
import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { Avatar } from "@heroui/react";

const navLinks = <>
    <li><NavLinks href={'/'}>Home</NavLinks></li>
    <li><NavLinks href={'/destinations'}>Destinations</NavLinks></li>
    <li><NavLinks href={'/'}>My Bookings</NavLinks></li>
    <li><NavLinks href={'/'}>Admin</NavLinks></li>
    <li><NavLinks href={'/add-destination'}>Add Destination</NavLinks></li>
</>

const Navbar = () => {
    const {
        data: session,
        isPending, //loading state
        error, //error object
    } = authClient.useSession();
    const user = session?.user;
    console.log(user);

    const handleSignout = async () => {
        await authClient.signOut();
        toast.success("You've been logged out")
        redirect('/signin');
    }

    return (
        <div>
            <nav className="flex items-center justify-between p-4">
                <ul className="flex items-center gap-4">
                    {navLinks}
                </ul>
                <Image
                    src={'/assets/Wanderlast.png'} alt="Wanderlust Logo" height={120} width={120}
                ></Image>
                <div className="flex items-center gap-2">
                    {user ?
                        <><Avatar>
                                    <Avatar.Image referrerPolicy="no-referrer" alt={user?.name} src={user?.image} />
                                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                                </Avatar> <Link href={'/profile'}>
                                    <Button variant="ghost">Profile</Button>
                                </Link>
                            <Button onClick={handleSignout} className={'rounded-none'} variant="danger">Logout</Button>
                        </> :
                        <>
                            <Link href={'/signin'}>
                                <Button variant="ghost">Login</Button>
                            </Link>
                            <Link href={'/signup'}>
                                <Button variant="ghost">Sign Up</Button>
                            </Link>
                        </>}
                </div>
            </nav>
        </div>
    );
}

export default Navbar;