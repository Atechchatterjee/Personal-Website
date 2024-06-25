"use client";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  RiArrowRightLine,
  RiExternalLinkFill,
  RiGithubFill,
  RiLink,
  RiNextjsFill,
  RiNodejsFill,
  RiReactjsFill,
  RiSendPlaneFill,
  RiTailwindCssFill,
} from "@remixicon/react";
import { darker_grotesque, ibm_plex_mono } from "./font";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { animateScroll as scroll } from "react-scroll";

export default function Home() {
  return (
    <main className="relative w-full justify-center">
      <Navbar />
      <div className="mt-[10rem]">
        <div className="z-[0] absolute w-[400px] h-[400px] bg-gradient-to-l from-white to-[#dbdbdb] blur-[23rem] left-[50%] translate-x-[-50%] translate-y-[-90%]" />
        <div className="flex flex-col mt-[5rem]">
          <div className="flex bg-white/80 backdrop:blur-sm rounded-full justify-center items-center w-fit px-4 py-2 mx-auto">
            <p className="m-auto justify-center">Hey, Great to see you!</p>
          </div>
          <h1
            className={cn(
              darker_grotesque.className,
              "mx-auto mt-[-1rem] font-semibold text-white text-[6rem]"
            )}
          >
            Anish Chattopadhyay
          </h1>
          <div className="flex gap-3 mx-auto items-center">
            <p
              className={cn(
                ibm_plex_mono.className,
                "text-gray-400 italic text-lg"
              )}
            >
              Full Stack Developer based in India
            </p>
            <div className="w-[0.3rem] h-[0.3rem] bg-gray-400 rounded-full"></div>
            <p
              className={cn(
                ibm_plex_mono.className,
                "text-gray-400 italic text-lg"
              )}
            >
              final year computer science student
            </p>
          </div>
          <div className="flex gap-5 mx-auto mt-[4rem]">
            <Button
              variant="default-dark"
              className="gap-2"
              size="lg"
              onClick={() => scroll.scrollTo(970)}
            >
              My Work
              <RiArrowRightLine size={17} />
            </Button>
            <a href="/Resume.pdf" target="_blank">
              <Button variant="outline-dark" className="gap-2" size="lg">
                <RiLink size={17} />
                My Resume
              </Button>
            </a>
          </div>
          <div className="flex flex-col gap-5 py-7 pl-10 pr-20 bg-[#0F0F0F] w-[60rem] mx-auto rounded-xl mt-[10rem] border border-1 border-[#161616]">
            <div className="flex gap-3 items-center">
              <h2 className="font-medium text-2xl text-white">
                Currently working on{" "}
                <span className="underline underline-offset-8 font-bold">
                  KeeDraw
                </span>
              </h2>
              <p
                className={cn(
                  ibm_plex_mono.className,
                  "text-gray-400 italic text-lg"
                )}
              >
                - A keyboard driven diagramming tool
              </p>
            </div>
            <p className="text-gray-300 text-lg">
              It is a diagramming tool created by a developer for a developer to
              create diagrams efficiently using their keyboards without ever
              having to lift their hands off the keyboard. To checkout the
              progress of the app visit the github repository.
            </p>
            <div className="flex gap-5 mt-[2rem]">
              <Button variant="default-dark" className="gap-4 w-[8rem]">
                Live Now
                <RiExternalLinkFill size={17} />
              </Button>
              <Button variant="outline-dark" className="gap-2 w-[8rem]">
                <RiGithubFill size={17} />
                Github
              </Button>
            </div>
          </div>

          <div className="relative flex flex-col gap-6 mx-auto mt-[6rem]">
            <div className="z-[0] absolute w-[400px] h-[400px] bg-gradient-to-l from-white to-[#dbdbdb] blur-[23rem] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-70%]" />
            <h2
              className={cn(
                darker_grotesque.className,
                "text-white text-[2.5rem] font-semibold mx-auto"
              )}
            >
              My Work
            </h2>
            <Image
              width={1168}
              height={846}
              src="/cndekart-browser.jpg"
              alt="work-1"
              className="z-[100000] rounded-3xl"
            />
            <div className="flex flex-col gap-5 py-7 pl-10 pr-20 bg-[#0F0F0F] w-[60rem] mx-auto rounded-xl mt-[2rem] border border-1 border-[#161616]">
              <div className="flex gap-3 items-center">
                <h2 className="font-medium text-2xl text-white">CND E-kart</h2>
                <p
                  className={cn(
                    ibm_plex_mono.className,
                    "text-gray-400 italic text-lg"
                  )}
                >
                  - A customised e-commerce solution
                </p>
              </div>
              <p className="text-gray-300 text-lg">
                This is a customized e Commerce application to cater to the
                needs of the steel and fabrication industry allowing them to
                manager and grow their business. It is a project developed for
                CND Engineering Pvt Ltd. as a software development intern.
              </p>
              <div className="flex gap-5 mt-[2rem] items-center">
                <Button variant="default-dark" className="gap-3 w-[9rem]">
                  Case Study
                  <RiExternalLinkFill size={17} />
                </Button>
                <Button variant="outline-dark" className="gap-3 w-[9rem]">
                  <RiGithubFill size={17} />
                  Github
                </Button>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col gap-6 mx-auto mt-[6rem]">
            <div className="z-[100] absolute w-[400px] h-[400px] bg-gradient-to-l from-white to-[#dbdbdb] blur-[23rem] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-70%]" />
            <Image
              width={1168}
              height={846}
              src="/hottakesapp-screenshot.jpg"
              alt="work-1"
              className="z-[100000] rounded-3xl"
            />
            <div className="flex flex-col gap-5 py-7 pl-10 pr-20 bg-[#0F0F0F] w-[60rem] mx-auto rounded-xl mt-[2rem] border border-1 border-[#161616]">
              <div className="flex gap-3 items-center">
                <h2 className="font-medium text-2xl text-white">
                  HotTakes App
                </h2>
                <p
                  className={cn(
                    ibm_plex_mono.className,
                    "text-gray-400 italic text-lg"
                  )}
                >
                  - A community driven platform to share your hottakes
                </p>
              </div>
              <p className="text-gray-300 text-lg">
                The HotTakes App is a platform for people to host discussions
                and participate in discussions on the latest trending topics in
                tech world. This was project was developed during the appwrite
                hackathon.
              </p>
              <div className="flex gap-5 mt-[2rem] items-center">
                <Button variant="default-dark" className="gap-3 w-[9rem]">
                  Case Study
                  <RiExternalLinkFill size={17} />
                </Button>
                <Button variant="outline-dark" className="gap-3 w-[9rem]">
                  <RiGithubFill size={17} />
                  Github
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="relative flex flex-col gap-6 mx-auto mt-[6rem]">
              <h2
                className={cn(
                  darker_grotesque.className,
                  "font-medium text-[2.5rem] mx-auto text-white"
                )}
              >
                Tech Stack
              </h2>
              <div className="flex flex-col">
                <div className="flex gap-5 h-fit">
                  <div className="flex gap-5 py-4 px-4 justify-center w-[13rem] text-white bg-[#0F0F0F] mx-auto rounded-xl border border-1 border-[#161616] items-center">
                    <RiReactjsFill size={40} />
                    <p className="text-lg">React.js</p>
                  </div>
                  <div className="flex gap-5 py-4 px-4 justify-center w-[13rem] text-white bg-[#0F0F0F] mx-auto rounded-xl border border-1 border-[#161616] items-center">
                    <RiNextjsFill size={40} />
                    <p className="text-lg">Next.js</p>
                  </div>
                  <div className="flex gap-5 py-4 px-4 justify-center w-[13rem] text-white bg-[#0F0F0F] mx-auto rounded-xl border border-1 border-[#161616] items-center">
                    <RiTailwindCssFill size={40} />
                    <p className="text-lg">TailwindCSS</p>
                  </div>
                  <div className="flex gap-5 py-4 px-4 justify-center w-[13rem] text-white bg-[#0F0F0F] mx-auto rounded-xl border border-1 border-[#161616] items-center">
                    <RiNodejsFill size={40} />
                    <p className="text-lg">Node.js</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 h-fit">
                <div className="flex gap-5 py-4 px-4 justify-center w-[13rem] text-white bg-[#0F0F0F] mx-auto rounded-xl border border-1 border-[#161616] items-center">
                  <Image
                    src="/docker-icon.svg"
                    width={40}
                    height={40}
                    alt="docker-icon"
                  />
                  <p className="text-lg">Docker</p>
                </div>
                <div className="flex gap-5 py-4 px-4 justify-center w-[13rem] text-white bg-[#0F0F0F] mx-auto rounded-xl border border-1 border-[#161616] items-center">
                  <Image
                    src="/django-icon.svg"
                    width={40}
                    height={40}
                    alt="django-icon"
                  />
                  <p className="text-lg">Django</p>
                </div>
                <div className="flex gap-5 py-4 px-4 justify-center w-[13rem] text-white bg-[#0F0F0F] mx-auto rounded-xl border border-1 border-[#161616] items-center">
                  <Image
                    src="/flask-icon.svg"
                    width={40}
                    height={40}
                    alt="flask-icon"
                  />
                  <p className="text-lg">Flask</p>
                </div>
                <div className="flex gap-5 py-4 px-4 justify-center w-[13rem] text-white bg-[#0F0F0F] mx-auto rounded-xl border border-1 border-[#161616] items-center">
                  <Image
                    src="/postgresql-icon.svg"
                    width={40}
                    height={40}
                    alt="postgresql-icon"
                  />
                  <p className="text-lg">Postgresql</p>
                </div>
              </div>
            </div>
          </div>
          <div className="z-[100] h-[50rem] w-full bg-transparent bg-dot-white/[0.2] relative flex items-center justify-center mt-[8rem]">
            <div className="z-[0] absolute pointer-events-none inset-0 flex items-center justify-center bg-[#080808] [mask-image:radial-gradient(ellipse_at_bottom,transparent_0%,#080808)]"></div>
            <Card className="w-[30rem] m-auto bg-[#080808] border-[#222222]  bg-opacity-40 backdrop-blur-sm text-white">
              <CardHeader className="flex flex-col gap-1">
                <CardTitle className="flex gap-4 items-center">
                  <RiSendPlaneFill size={20} />
                  React Out
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Use the form below to quickly get in touch
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="border-[#222222] bg-[#0F0F0F]"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="email">Email Id</Label>
                      <Input
                        id="email"
                        placeholder="Your email id"
                        className="border-[#222222] bg-[#0F0F0F]"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="framework">Message</Label>
                      <Textarea
                        id="email"
                        className="h-[10rem] border-[#222222]  bg-[#0F0F0F]"
                        placeholder="Write your message"
                      />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="default-dark">Submit</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
