import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdMail } from "react-icons/io";
import { darker_grotesque } from "@/app/font";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { RiArrowRightLine } from "@remixicon/react";

interface NavLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

function NavLink({ ...props }: NavLinkProps) {
  return (
    <Link
      className="font-medium text-sm text-[#5C5C5C] hover:text-black hover:underline hover:underline-offset-4 w-14"
      {...props}
    ></Link>
  );
}

export default function Navbar() {
  return (
    <div className="flex flex-row flex-1 py-6 w-[80rem] mx-auto items-center">
      <p className={
        cn(darker_grotesque.className, "font-semibold text-2xl items-center mt-[-0.4rem]")
      }>://webdeveloper</p>
      <div className="flex-1 flex flex-row gap-3 justify-center">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/">Work</NavLink>
        <NavLink href="/">About</NavLink>
        <NavLink href="/">Techstack</NavLink>
      </div>
      <Button variant="outline" className="gap-5 ml-auto">
        <p>Let's Talk</p>
        <RiArrowRightLine size={20} />
      </Button>
    </div>
  );
}
