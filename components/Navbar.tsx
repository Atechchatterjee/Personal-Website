import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Buttons";
import { IoMdMail } from "react-icons/io";

interface NavLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

function NavLink({ ...props }: NavLinkProps) {
  return (
    <Link
      className="font-medium text-[#5C5C5C] hover:text-black hover:underline hover:underline-offset-4 w-14"
      {...props}
    ></Link>
  );
}

export default function Navbar() {
  return (
    <div className="flex py-5 pr-2 w-full">
      <Image src="/logo.svg" alt="logo" width="200" height="50" />
      <div className="flex flex-row gap-5 m-auto">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/">Work</NavLink>
        <NavLink href="/">About</NavLink>
        <NavLink href="/">TechStack</NavLink>
      </div>
      <Button variant="secondary" className="py-5 px-6 flex flex-row gap-3">
        <IoMdMail />
        Hire Me
      </Button>
    </div>
  );
}
