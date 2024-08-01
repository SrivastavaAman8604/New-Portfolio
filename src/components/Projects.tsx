"use client";
import React,{ useEffect, useState } from "react";
import Image from 'next/image'
import { SparklesCore } from "./ui/sparkles";
import { PinContainer } from "./ui/3d-pin";

const Projects = () => {
    const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

    return (
        <div className="h-auto md:h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md z-20">
            <h1 className="md:text-7xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20">
                Projects
            </h1>
            <div className="w-[40rem] h-40 relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        
                {/* Core component */}
                <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#FFFFFF"
                />
        
                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-slate-950 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
            <div className="flex flex-col md:flex-row">
                <PinContainer
                title="Cryptocurrency App"
                href="https://crypto-master-nine.vercel.app/"
                >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] pt-4 sm:pt-0">
                    {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
                    <Image
                        src="/crypto.jpg"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100 pt-5">
                        Cryptocurrency App
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500 ">
                        Real-time insights in cryptocurrency space with React and Chakra UI.
                        </span>
                    </div>
                    </div>
                </PinContainer>
                <PinContainer
                title="Video streaming App"
                href="https://i-tube-jet.vercel.app/"
                >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] pt-4 sm:pt-0">
                    {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
                    <Image
                        src="/vr.jpg"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100 pt-5">
                        Video streaming App
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500 ">
                        Responsive platform for multimedia content consumption using Chakra UI.
                        </span>
                    </div>
                    </div>
                </PinContainer>
                <PinContainer
                title="Music Academy App"
                href="https://music-academy-rose.vercel.app/"
                >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] pt-4 sm:pt-0">
                    {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
                    <Image
                        src="/music.jpg"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100 pt-5">
                        Music Academy App
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500 ">
                        Seamless learning platform for music with advanced Next.js features.
                        </span>
                    </div>
                    </div>
                </PinContainer>
            </div>
        </div>
        
  )
}

export default Projects
