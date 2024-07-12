"use client";
import React from "react";
import Link from "next/link";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/utils/cn";
import { SocialIcon } from 'react-social-icons'

const Contact = () => {
  return (
    <div className="mt-20">
        <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
    
            <Boxes />
            <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
                Want me to build something for you
            </h1>
            <div className='flex justify-center pt-10 space-x-4'>
                <SocialIcon url="https://github.com/SrivastavaAman8604" />
                <SocialIcon url="www.linkedin.com/in/aman-srivastava-21b54b166" />
                <SocialIcon url="https://x.com/AmanSri69599917" />
            </div>
        </div>
    </div>
  )
}

export default Contact
