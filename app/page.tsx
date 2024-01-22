import { cn } from "@/lib/utils";
import { staatlitches } from "./font";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Button from "@/components/Buttons";
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoGitNetwork } from "react-icons/io5";
import { FaDownload } from "react-icons/fa6";

export default function Home() {
  return (
    <main>
      <div className="relative overflow-x-clip w-[100rem] m-auto">
        <Navbar />
        <div className="flex pt-[7rem]">
          <div className="relative flex flex-col gap-3 flex-1">
            <h1
              className={cn(
                staatlitches.className,
                "w-[50rem] text-[6rem] leading-[6.5rem]"
              )}
            >
              I’m{" "}
              <span className="text-[#867460] underline underline-offset-8">
                {" "}
                Anish chatterjee,
              </span>{" "}
              a developer Striving For excellence.
            </h1>
            <p className="text-[#5C5C5C] font-medium text-[1.5rem]">
              Full Stack Developer & Computer Science Student
            </p>
            <div className="circle w-4 h-4 rounded-full bg-black absolute top-[15.2rem] left-[37.5rem] outline outline-1 outline-offset-2" />
            <div className="flex flex-row gap-5 mt-16 w-[50%]">
              <Button className="w-full flex-1 flex-row  gap-3">
                <IoGitNetwork />
                My Work
              </Button>
              <Button variant="secondary" className="w-full flex-1 gap-3">
                <FaDownload />
                My Resume
              </Button>
            </div>
          </div>
          <div className="flex-1"></div>
        </div>
        <div className="flex w-full justify-end text-right pt-[6rem] pr-[6rem]">
          <div className="flex flex-col w-[25rem]">
            <h2 className={cn(staatlitches.className, "text-[2.5rem]")}>
              Connect with me
            </h2>
            <p className="text-[1.2rem]">
              Great to meet you. Want to have a conversation? Here are my
              socials
            </p>
            <div className="flex gap-10 pt-8 justify-end">
              <button>
                <FaLinkedin className="scale-[170%] hover:scale-[180%] transition-all cursor-pointer text-[#5C5C5C] hover:text-black" />
              </button>
              <button>
                <FaGithub className="scale-[170%] hover:scale-[180%] transition-all cursor-pointer text-[#5C5C5C] hover:text-black" />
              </button>
              <button>
                <FaDiscord className="scale-[170%] hover:scale-[180%] transition-all cursor-pointer text-[#5C5C5C] hover:text-black" />
              </button>
              <button>
                <IoMdMail className="scale-[170%] hover:scale-[180%] transition-all  cursor-pointer text-[#5C5C5C] hover:text-black" />
              </button>
            </div>
          </div>
        </div>
        <Image
          src="/bg-illus-1.svg"
          alt="bg-illus"
          className="absolute top-[11rem] right-[-16rem] z-[-1]"
          width="1220"
          height="420"
        />
        <div className="w-[50rem] h-[20rem] top-[27.7rem] left-[40rem] absolute bg-[url('/bg-border-1.svg')] bg-no-repeat bg-cover" />
        <div className="w-[72rem] h-[20rem] top-[50.5rem] left-[3rem] absolute bg-[url('/bg-border-2.svg')] bg-no-repeat bg-cover" />
      </div>
    </main>
  );
}
