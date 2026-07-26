import HeroSection from "./components/hero";
import Avatar from "./components/avatar";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Socials from "./components/socials";
import Time from "./components/local-time/time";

export default function Layout() {
  return (
    <main className="flex flex-col items-center justify-center h-screen w-screen bg-base-300">
      <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-6 gap-6 w-full h-full md:max-h-200 md:max-w-200">
        {/* Hero Section */}
        <div className="bg-base-100 rounded-2xl shadow-lg md:col-span-4 md:row-span-2">
          <HeroSection />
        </div>
        {/* Avatar */}
        <div className="bg-base-100 rounded-2xl shadow-lg  md:col-span-2 md:row-span-2">
          <Avatar />
        </div>
        {/* About */}
        <div className="bg-base-100 rounded-2xl shadow-lg  md:col-span-2 md:row-span-2">
          <About />
        </div>
        {/* Projects */}
        <div className="bg-base-100 rounded-2xl shadow-lg  md:col-span-2 md:row-span-2">
          <Projects/>
        </div>
        {/* Socials */}
        <div className="bg-base-100 rounded-2xl shadow-lg  md:col-span-2 md:row-span-1">
          <Socials/>
        </div>
        {/* Time */}
        <div className="bg-base-100 rounded-2xl shadow-lg  md:col-span-2 md:row-span-1">
          <Time/>
        </div>
        {/* Tech-Stack */}
        <div className="bg-base-100 rounded-2xl shadow-lg  md:col-span-3 md:row-span-2"></div>
        {/* Services + Contact */}
        <div className="bg-base-100 rounded-2xl shadow-lg md:col-span-3 md:row-span-2"></div>
      </div>
    </main>
  );
}
