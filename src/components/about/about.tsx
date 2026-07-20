import AboutModal from "./modal";

export default function About() {
  return (
    <div className="flex flex-col h-full w-full p-6">
      <h1 className="text-2xl md:text-4xl">About me</h1>
      <p className="pt-3">
        My main motivation for building products is seeing people enjoy using them.
      </p>
      <div className="mt-auto ml-auto">
        <AboutModal/>
      </div>
    </div>
  );
}
