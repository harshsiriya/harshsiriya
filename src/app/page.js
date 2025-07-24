import About from "@/components/About";
import Achievements from "@/components/Achievements";
import GetInTouch from "@/components/GetInTouch";
import Hero from "@/components/Hero";
import Hobbies from "@/components/Hobbies";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Work from "@/components/Work";


export default function Home() {
  return (
    <div className="bg-[#ff5e41] tiktok-sans flex flex-col text-[#FFFFFD]">
      <div className="h-[10%] w-full">
        <Navbar />
      </div>
      <div className="h-[90%] w-full">
        <Hero />
      </div>
      <About/>
  
      <div className="flex justify-center items-center min-h-screen bg-[#ff5e41] ">
       <Skills />
      </div>
      <div className="flex justify-center items-center min-h-screen bg-[#ff5e41] ">
       <Work />
      </div>
       <div className="flex justify-center items-center min-h-screen bg-[#ff5e41] ">
       <Projects />
      </div>
      <div className="flex justify-center items-center min-h-screen bg-[#ff5e41] ">
       <Achievements />
      </div>
      <div className="flex justify-center items-center bg-[#ff5e41] ">
      <Hobbies />
    </div>
     <div className="flex justify-center items-center min-h-screen bg-[#ff5e41] ">
       <GetInTouch />
      </div>
    </div>
  );
}
