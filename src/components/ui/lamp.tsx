"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { SocialIcon } from 'react-social-icons'

export function LampDemo() {
  return (
    <LampContainer>
        <motion.div
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
            }}
            className="mt-20 bg-gradient-to-br from-slate-300 to-slate-500 py-2 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-2xl"
        >
            <h1 className='md:text-7xl text-4xl py-2 my-6 text-white'>Hello <span className='text-yellow-300'>👋</span>, I am Aman</h1>
            <p>I am a passionate frontend developer specializing in HTML, CSS, JavaScript, and React, with a keen interest in optimizing React applications and learning Next.js. I love collaborating on frontend projects, constantly exploring new technologies, and crafting visually stunning user interfaces.</p>
            <div className='flex justify-center pt-10 space-x-4'>
                <SocialIcon url="https://github.com/SrivastavaAman8604" />
                <SocialIcon url="www.linkedin.com/in/aman-srivastava-21b54b166" />
                <SocialIcon url="https://x.com/AmanSri69599917" />
            </div>
        </motion.div>
        </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
  className={cn(
    "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0",
    className
  )}
>
  <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
    <motion.div
      initial={{ opacity: 0.5, width: "15rem" }}
      whileInView={{ opacity: 1, width: "30rem" }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      style={{
        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
      }}
      className="absolute inset-auto right-1/2 h-56 overflow-visible w-[20rem] md:w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
    >
      <div className="absolute w-[100%] left-0 bg-slate-950 h-20 md:h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
      <div className="absolute w-20 md:w-40 h-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
    </motion.div>
    <motion.div
      initial={{ opacity: 0.5, width: "15rem" }}
      whileInView={{ opacity: 1, width: "30rem" }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      style={{
        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
      }}
      className="absolute inset-auto left-1/2 h-56 w-[20rem] md:w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
    >
      <div className="absolute w-20 md:w-40 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
      <div className="absolute w-[100%] right-0 bg-slate-950 h-20 md:h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
    </motion.div>
    <div className="absolute top-1/2 h-24 md:h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
    <div className="absolute top-1/2 z-50 h-24 md:h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
    <div className="absolute inset-auto z-50 h-18 md:h-36 w-[14rem] md:w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
    <motion.div
      initial={{ width: "8rem" }}
      whileInView={{ width: "16rem" }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="absolute inset-auto z-30 h-18 md:h-36 w-32 md:w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
    ></motion.div>
    <motion.div
      initial={{ width: "15rem" }}
      whileInView={{ width: "30rem" }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="absolute inset-auto z-50 h-0.5 w-[20rem] md:w-[30rem] -translate-y-[7rem] bg-cyan-400"
    ></motion.div>

    <div className="absolute inset-auto z-40 h-22 md:h-44 w-full -translate-y-[6.25rem] md:-translate-y-[12.5rem] bg-slate-950"></div>
  </div>

  <div className="relative z-50 flex -translate-y-40 md:-translate-y-80 flex-col items-center px-5">
    {children}
  </div>
</div>

  );
};
