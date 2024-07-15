"use client"
import React from 'react'
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { SocialIcon } from 'react-social-icons'

const Hero = () => {
    
  return (
    <div className='h-[40] pt-40'>
        <LampContainer>
        <motion.div
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
            }}
            className="mt-20 sm:mt-0 bg-gradient-to-br from-slate-300 to-slate-500 py-2 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-2xl sm:text-xl px-40"
        >
            <h1 className="text-2xl md:text-5xl pt-20 md:pt-10 my-10 md:my-6 text-white">Hi<span className='text-yellow-300'>👋</span>, I'm Aman Srivastava</h1>
            <p className=' md:text-2xl sm:text-xl'>Specializing in high-impact web development, I excel in creating user-friendly websites and applications that consistently surpass expectations. With a proven track record, I ensure your projects achieve tangible success and growth through effective web solutions.</p>
            <div className='flex justify-center pt-10 space-x-4'>
                <SocialIcon url="https://github.com/SrivastavaAman8604" />
                <SocialIcon url="www.linkedin.com/in/aman-srivastava-21b54b166" />
                <SocialIcon url="https://x.com/AmanSri69599917" />
            </div>
        </motion.div>
        </LampContainer>
    </div>
  )
}

export default Hero
