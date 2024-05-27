"use client"
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { RiStackFill, RiDownload2Line, RiHome2Fill, RiReactjsLine, RiUser3Fill } from "@remixicon/react";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Bricolage_Grotesque } from "next/font/google";
import { TypewriterEffectSmooth } from "@/components/ui/typewritter-effect";

const words = [
  { text: "Hey," }, { text: "Great" }, { text: "to" }, { text: "meet" }, { text: "you!" }]

export function ProjectBrowserDemo() {
  return (
    <div className="w-full flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={<></>}
      >
        <Image src="/cndekart-browser.jpg" alt="cndekart-project" width={1000} height={700} className="w-fit h-fit" />
      </ContainerScroll>
    </div>
  );
}

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-xl px-4 text-neutral-700 max-w-4xl leading-relaxed mx-auto bg-transparent"
      >
        I am a dedicated{" "}
        <Highlight className="text-dark">
          <strong>full stack web & mobile developer</strong>
        </Highlight>{" "}
        with a strong passion for creating innovative business solutions. Currently, I am in my final year of pursuing a Bachelor of Technology in Computer Science.
      </motion.h1>
    </HeroHighlight>
  );
}

const bg = Bricolage_Grotesque({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

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
            // left: smoothMouse.x,
            // top: smoothMouse.y,
            backdropFilter: 'blur(100rem)',
            opacity: "0.1"
          }}
          animate={{
            backgroundColor: "#C64564",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
          }}
          initial={{
            x: screen.width / 2.5,
            y: screen.height / 7,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        />
      </div>
      <main className="relative px-28 h-[100%] text-center z-[100000]">
        <Navbar />
        <div className="flex flex-col m-auto w-[80rem] mt-[5rem] z-[100000]">
          <div className="rounded-full bg-white opacity-50 flex pl-2 pr-0 py-2 font-medium text-sm items-center gap-2 w-[13.3rem] mx-auto">
            <img src="./greeting-hand.jpg" />
            <TypewriterEffectSmooth words={words} />
          </div>
          <div className="flex flex-col gap-5 mt-[-0.8rem]">
            <div className="flex gap-5 mx-auto">
              <Image src="/open-bracket-scribble.svg" width={100} height={100} alt="arrow-scribble" className="opacity-20" />
              <h1 className={cn(bg.className, "font-semibold text-[5rem]")}>Anish Chattopadhyay</h1>
              <Image src="/close-bracket-scribble.svg" width={100} height={100} alt="arrow-scribble" className="opacity-20" />
            </div>
            <HeroHighlightDemo />
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
        <div className="pt-[5rem] flex flex-col mt-[5rem] pb-[10rem] h-fit w-full bg-[#FDF5EB] bg-dot-black/[0.2] relative items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-[#FDF5EB] [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
          <h2 className={cn(bg.className, "font-semibold text-[3rem]")}>My Work</h2>
          <p>These are couple of the projects I worked on</p>
          <ProjectBrowserDemo />
        </div>
      </main>
    </div>
  );
}
