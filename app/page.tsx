"use client"
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { darker_grotesque } from "./font";
import { Button } from "@/components/ui/button";
import { RiStackFill, RiDownload2Line } from "@remixicon/react";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={<></>}
      >
        <Image
          src={`/cndekart-browser.jpg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
export default function Home() {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  const smoothOptions = { damping: 30, stiffness: 500, mass: 0.8 }

  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  }

  const manageMouseMove = (e: any) => {
    const { clientX, clientY } = e;

    mouse.x.set(clientX);
    mouse.y.set(clientY);
  }

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove)
    };
  }, []);

  return (
    <div className="overflow-y-clip">
      <div className="absolute z-[-1000] blur-3xl">
        <motion.div
          className={`fixed top-0 left-0`}
          style={{
            left: smoothMouse.x,
            top: smoothMouse.y,
            backdropFilter: 'blur(100rem)',
            opacity: "0.2"
          }}
          animate={{
            backgroundColor: "#C64564",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
          }}
          initial={{
            x: 0,
            y: 0,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        />
      </div>
      <main className="px-28 h-[100%] text-center z-[100000]">
        <Navbar />
        <div className="flex flex-col m-auto w-[50rem] mt-[5rem] z-[100000]">
          <div className="rounded-full bg-white opacity-50 flex pl-2 pr-0 py-2 font-medium text-sm items-center gap-2 w-[13.3rem] mx-auto">
            <img src="./greeting-hand.jpg" />
            Hey, Great to meet you
          </div>
          <div className="flex flex-col gap-5 mt-[-0.8rem]">
            <h1 className={cn(darker_grotesque.className, "font-semibold text-[5rem]")}>Anish Chattopadhyay</h1>
            <p className="text-lg leading-8 w-[45rem] mx-auto">
              Hey, I am a <strong>full stack web and mobile developer</strong> passionate to build solutions for business. Currently in my final year of pursuing B.Tech in Computer Science. Interested in checking out my work?
            </p>
          </div>
          <div className="flex gap-5 mt-[3.5rem] mx-auto">
            <Button variant="default" className="gap-3 w-[9rem]">
              <RiStackFill size={20} />
              <p>My Work</p>
            </Button>
            <Button variant="outline" className="gap-5 w-[9rem]">
              <p>Resume</p>
              <RiDownload2Line size={20} />
            </Button>
          </div>
        </div>
        <div className="flex flex-col mt-[10rem]">
          <h2 className={cn(darker_grotesque.className, "font-semibold text-[3.5rem]")}>My Work</h2>
          <p>These are couple of the projects I worked on</p>
          <HeroScrollDemo />
        </div>
      </main>
    </div>
  );
}
