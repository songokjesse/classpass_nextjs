import Image from "next/image";
import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl">
                    <Image
                        className="h-8 w-auto"
                        src="/logo.svg"
                        alt="ClassPass Logo"
                        width={180}
                        height={37}
                     />
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="#">Courses</Link></li>
                    <li><Link href="#">Timetable</Link></li>
                    <li><Link href="#">Attendance</Link></li>
                    <li>
                                <SignedOut>
                                    <SignInButton/>
                                 </SignedOut>
                                 <SignedIn>
                                    <UserButton/>
                                </SignedIn>
                    </li>
                </ul>
            </div>
        </div>
    )
}
