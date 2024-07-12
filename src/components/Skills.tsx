'use client'
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";

export const projects = [
  {
      title: "HTML",
      description: "Crafting the backbone of web pages with a solid foundation in HTML, enabling the creation of structured and accessible content.",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
      title: "CSS",
      description: "Transforming plain documents into visually stunning experiences through expert use of CSS for styling and layout.",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
      title: "Bootstrap",
      description: "Building sleek, responsive websites quickly with Bootstrap, ensuring seamless functionality across all devices.",
      link: "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
  },
  {
      title: "Tailwind CSS",
      description: "Accelerating development with Tailwind CSS, leveraging utility-first principles to create custom and efficient designs.",
      link: "https://tailwindcss.com/docs",
  },
  {
      title: "JavaScript",
      description: "Bringing interactivity to life with JavaScript, creating dynamic and engaging user experiences on the web.",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
      title: "ReactJS",
      description: "Harnessing the power of ReactJS to build modular and high-performance user interfaces, ensuring a smooth user experience.",
      link: "https://reactjs.org/docs/getting-started.html",
  },
  {
      title: "NextJS",
      description: "Elevating React development with NextJS, optimizing for production-ready applications with server-side rendering and static site generation.",
      link: "https://nextjs.org/docs",
  },
  {
      title: "Git",
      description: "Maintaining a meticulous version control system with Git, ensuring a reliable and collaborative development process.",
      link: "https://git-scm.com/doc",
  },
  {
      title: "GitHub",
      description: "Leveraging GitHub as a collaborative platform to manage projects, track changes, and collaborate effectively with teams.",
      link: "https://docs.github.com/en",
  },
];


const Skills = () => {
  return (
    <div>
        <h1 className="md:text-7xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20 ">
            My Experties
        </h1>

      <HoverEffect items={projects} />
    </div>
  )
}

export default Skills
