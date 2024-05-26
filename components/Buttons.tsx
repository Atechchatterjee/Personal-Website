import React, { HTMLAttributes } from "react";
import { Button } from "../components/ui/button";
import { cn } from "@/lib/utils";

interface CustomButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function CustomButton({
  variant = "primary",
  className,
  children,
  ...props
}: CustomButtonProps) {
  switch (variant) {
    case "primary":
      return (
        <Button
          className={cn(
            "transition-all relative bg-[#CE5A67] py-6 hover:bg-[#CE5A67]/90 border-2 border-black rounded-none shadow-[5px_5px_rgba(0,0,0,1)] text-md font-medium hover:translate-x-[0.4rem] hover:translate-y-[0.4rem] hover:tansition-all hover:shadow-none",
            className
          )}
          {...props}
        >
          {children}
        </Button>
      );
    case "secondary":
      return (
        <Button
          className={cn(
            "transition-all relative bg-transparent py-6 border-2 border-black rounded-none shadow-[5px_5px_rgba(0,0,0,1)] text-md font-medium hover:translate-x-[0.4rem] hover:translate-y-[0.4rem] hover:tansition-all hover:shadow-none text-black hover:bg-black hover:text-white",
            className
          )}
          {...props}
        >
          {children}
        </Button>
      );
    default:
      <></>;
  }
}
