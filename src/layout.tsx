import HeroSection from "./components/hero";

export default function Layout() {
  return (
    <main className="flex flex-col items-center justify-center h-screen w-screen">
      <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-6 gap-6 w-full h-full md:max-h-200 md:max-w-200">
        {/* Hero Section */}
        <div className="bg-amber-200 md:col-span-4 md:row-span-2">
          <HeroSection/>
        </div>
        {/* Avatar */}
        <div className="bg-amber-200 md:col-span-2 md:row-span-2"></div>
        {/* About */}
        <div className="bg-amber-200 md:col-span-2 md:row-span-2"></div>
        {/* Projects */}
        <div className="bg-amber-200 md:col-span-2 md:row-span-2"></div>
        {/* Socials */}
        <div className="bg-amber-200 md:col-span-2 md:row-span-1"></div>
        {/* Time */}
        <div className="bg-amber-200 md:col-span-2 md:row-span-1"></div>
        {/* Tech-Stack */}
        <div className="bg-amber-200 md:col-span-3 md:row-span-2"></div>
        {/* Services + Contact */}
        <div className="bg-amber-200 md:col-span-3 md:row-span-2"></div>
      </div>
    </main>
  );
}
