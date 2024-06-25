"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { RiMailSendFill } from "@remixicon/react";
import { FloatingNav } from "./ui/floating-navbar";
import { Link, animateScroll as scroll } from "react-scroll";
import Image from "next/image";

export function NavLink({ scrollTo, className, children, ...props }: any) {
  return (
    <Link
      activeClass="active"
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
      onClick={() => scroll.scrollTo(scrollTo ?? 650)}
      className={cn(
        "font-regular text-gray-300 hover:text-white hover:font-medium hover:underline hover:underline-offset-4 cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  return (
    <>
      <div className="absolute z-[1000000] flex flex-row flex-1 py-6 w-[80rem] mx-auto items-center  top-0 left-[50%] translate-x-[-50%] translate-y-[-150%]">
        <Image src="/logo-dark.svg" width={80} height={50} alt="logo" />
        <div className="flex-1 flex flex-row gap-8 justify-center">
          <NavLink scrollTo={80}>Home</NavLink>
          <NavLink scrollTo={970}>Work</NavLink>
          <NavLink scrollTo={3400}>Techstack</NavLink>
          <NavLink scrollTo={3800}>Contact</NavLink>
        </div>
        <Button
          variant="outline-dark"
          className="gap-3 ml-auto"
          onClick={() => scroll.scrollTo(3900)}
        >
          <RiMailSendFill size={20} />
          <p>Reach Out</p>
        </Button>
      </div>
      <FloatingNav
        className="dark"
        navItems={[
          {
            name: "Home",
            link: "/",
            scrollTo: 0,
          },
          {
            name: "Work",
            link: "/",
            scrollTo: 930,
          },
          {
            name: "TechStack",
            link: "/",
            scrollTo: 3400,
          },
          {
            name: "Contact",
            link: "/",
            scrollTo: 3900,
          },
        ]}
      />
    </>
  );
}
