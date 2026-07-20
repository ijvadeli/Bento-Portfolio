import HeroSection from "./components/hero";
import Avatar from "./components/avatar";

export default function Layout() {
  return (
    <main className="flex flex-col items-center justify-center h-screen w-screen">
      <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-6 gap-6 w-full h-full md:max-h-200 md:max-w-200">
        {/* Hero Section */}
        <div className="rounded-2xl shadow-lg md:col-span-4 md:row-span-2">
          <HeroSection/>
        </div>
        {/* Avatar */}
        <div className="rounded-2xl shadow-lg md:col-span-2 md:row-span-2">
          <Avatar/>
        </div>
        {/* About */}
        <div className="rounded-2xl shadow-lg  md:col-span-2 md:row-span-2"></div>
        {/* Projects */}
        <div className="rounded-2xl shadow-lg  md:col-span-2 md:row-span-2"></div>
        {/* Socials */}
        <div className="rounded-2xl shadow-lg  md:col-span-2 md:row-span-1"></div>
        {/* Time */}
        <div className="rounded-2xl shadow-lg  md:col-span-2 md:row-span-1"></div>
        {/* Tech-Stack */}
        <div className="rounded-2xl shadow-lg  md:col-span-3 md:row-span-2"></div>
        {/* Services + Contact */}
        <div className="rounded-2xl shadow-lg md:col-span-3 md:row-span-2"></div>
      </div>
    </main>
  );
}
