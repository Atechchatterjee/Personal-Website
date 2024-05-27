"use client"

import React from "react";
import { darker_grotesque } from "@/app/font";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { RiArrowRightLine, RiHomeFill, RiReactjsLine, RiStackFill, RiUser3Fill, RiUser4Fill, RiUser6Fill } from "@remixicon/react";
import { FloatingNav } from "./ui/floating-navbar";
import { Link, animateScroll as scroll } from 'react-scroll';

export function NavLink({ scrollTo, className, children, ...props }: any) {
  return (
    <Link
      activeClass="active"
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
      onClick={() => scroll.scrollTo(scrollTo ?? 650)}
      className={cn("font-medium text-sm text-[#5C5C5C] hover:text-black hover:underline hover:underline-offset-4 cursor-pointer", className)}
      {...props}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  return (
    <>
      <div className="flex flex-row flex-1 py-6 w-[80rem] mx-auto items-center">
        <p className={
          cn(darker_grotesque.className, "font-semibold text-2xl items-center mt-[-0.4rem]")
        }>://webdeveloper</p>
        <div className="flex-1 flex flex-row gap-6 justify-center">
          <NavLink scrollTo={80}>Home</NavLink>
          <NavLink scrollTo={650}>Work</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Techstack</NavLink>
        </div>
        <Button variant="outline" className="gap-5 ml-auto" onClick={() => window.location.assign("/contact")}>
          <p>Let's Talk</p>
          <RiArrowRightLine size={20} />
        </Button>
      </div>
      <FloatingNav navItems={[
        { name: "Home", link: "/", icon: <RiHomeFill size={15} />, scrollTo: 80 },
        { name: "Work", link: "/", icon: <RiStackFill size={15} />, scrollTo: 600 },
        { name: "About", link: "/", icon: <RiUser3Fill size={15} /> },
        { name: "TechStack", link: "/", icon: <RiReactjsLine size={15} /> },
      ]} />
    </>
  );
}
