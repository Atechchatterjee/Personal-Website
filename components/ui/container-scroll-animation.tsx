"use client";
import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import { darker_grotesque } from "@/app/font";
import { Button } from "./button";
import { RiGithubFill, RiArrowRightLine } from "@remixicon/react";

export const ContainerScroll = ({
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<any>(null);
  const { scrollY, scrollYProgress } = useScroll({
    target: containerRef,
    smooth: 10,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1, 1];
  };

  const rotate = useTransform(scrollY, [0, 1000], [20, 0], { clamp: true });
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [10, 10], [0, -100]);

  useEffect(() => {
    console.log({ rotate: rotate.get() });
  });

  return (
    <div
      className="py-10 md:py-0 w-fit mx-auto relative"
      style={{
        perspective: "1000px",
      }}
    >
      <Card rotate={rotate} translate={translate} scale={scale}>
        {children}
      </Card>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div w-fit mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <>
      <motion.div
        style={{
          rotateX: rotate,
          translateY: translate,
          scale,
        }}
        className="mt-28 mx-auto h-fit w-fit rounded-[30px] shadow-2xl"
      >
        <div className=" h-fit w-fit overflow-hidden rounded-2xl dark:bg-zinc-900 md:rounded-2xl">
          {children}
        </div>
      </motion.div>
      <div className="max-w-[70rem] flex flex-col mx-auto gap-4">
        <h3
          className={cn(
            darker_grotesque.className,
            "flex-1  w-fit justify-start font-semibold text-[2.5rem]"
          )}
        >
          CND Ekart
        </h3>
        <p className="w-inherit mr-auto text-left text-lg leading-8">
          This customized e-commerce application is designed to meet the
          specific needs of the steel and fabrication industry, enabling
          businesses to effectively manage and expand their operations. This
          project was developed for CND Engineering Pvt. Ltd. during my tenure
          as a software development intern. Checkout the code and case study to
          get a better perspective about the project.
        </p>
        <div className="flex gap-5 mt-10">
          <Button variant="default" className="gap-3 w-[9rem]">
            <RiGithubFill size={20} />
            <p>Github</p>
          </Button>
          <Button variant="outline" className="gap-4 w-[9rem]">
            <p>Case Study</p>
            <RiArrowRightLine size={20} />
          </Button>
        </div>
      </div>
    </>
  );
};
