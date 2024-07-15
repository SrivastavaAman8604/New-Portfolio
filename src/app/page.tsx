// import { TracingBeam } from "@/components/ui/tracing-beam";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-slate-950">
        {/* <TracingBeam className="px-6">
        </TracingBeam> */}
          <Hero/>
          <Skills/>
        <Projects/>
        <Contact/>
    </div>
  );
}
