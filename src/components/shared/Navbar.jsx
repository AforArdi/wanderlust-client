import Link from "next/link";
import NavLinks from "./NavLinks";
import Image from "next/image";
import { Button } from "@heroui/react";
import { CgProfile } from "react-icons/cg";

const navLinks = <>
    <li><NavLinks href={'/'}>Home</NavLinks></li>
    <li><NavLinks href={'/destinations'}>Destinations</NavLinks></li>
    <li><NavLinks href={'/'}>Ny Bookings</NavLinks></li>
    <li><NavLinks href={'/'}>Admin</NavLinks></li>
    <li><NavLinks href={'/add-destination'}>Add Destination</NavLinks></li>
</>

const Navbar = () => {
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
                    <Button variant="ghost"><CgProfile></CgProfile> Profile</Button>
                    <Button variant="ghost">Login</Button>
                    <Button variant="ghost">Sign Up</Button>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;