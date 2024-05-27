"use client"
import React from "react";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RiArrowLeftLine, RiSendPlaneFill } from "@remixicon/react";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="h-[100vh] w-full dark:bg-black bg-background  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Card className="w-[30rem] m-auto bg-white bg-opacity-40 backdrop-blur-sm">
        <CardHeader className="flex flex-col gap-1">
          <CardTitle className="flex gap-4 items-center">
            <RiSendPlaneFill size={20} />
            React Out
          </CardTitle>
          <CardDescription>Use the form below to quickly get in touch</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" className="bg-white/60" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email Id</Label>
                <Input id="email" placeholder="Your email id" className="bg-white/60" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Message</Label>
                <Textarea id="email" className="h-[10rem] bg-white/60" placeholder="Write your message" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" className="gap-3" onClick={() => window.location.assign("/")}>
            <RiArrowLeftLine size={18} />
            Go Home
          </Button>
          <Button>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
