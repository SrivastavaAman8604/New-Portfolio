'use client'
import React from 'react'
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { SocialIcon } from 'react-social-icons'

const Hero = () => {
    
  return (
    <div className='pt-40'>
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
            <h1 className='md:text-5xl text-4xl py-2 my-6 text-white'>Hello <span className='text-yellow-300'>👋</span>, I'm Aman Srivastava</h1>
            <p>I am a passionate frontend developer specializing in HTML, CSS, JavaScript, and React, with a keen interest in optimizing React applications and learning Next.js. I love collaborating on frontend projects, constantly exploring new technologies, and crafting visually stunning user interfaces.</p>
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
