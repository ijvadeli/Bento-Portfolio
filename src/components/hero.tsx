export default function HeroSection() {
  return (
    <header className="h-full w-full p-6 flex flex-col justify-center gap-3">
      <h1 className="text-3xl md:text-6xl">Hoi, I'm IJsbrand!</h1>
      <h2 className="text-xl md:text-2xl text-neutral">
        I'm a Software <span className="text-base-content">Developer</span> &{" "}
        <span className="text-base-content">Designer</span>
        <br />
        working at <span className="text-primary-content">Home.</span>
      </h2>
    </header>
  );
}
