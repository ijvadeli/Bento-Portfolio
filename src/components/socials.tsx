import Github from "../assets/github.svg"
import X from "../assets/x.svg"
import Apple from "../assets/apple-music.svg"

export default function Socials() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="grid w-72 h-32 md:w-full md:h-full grid-cols-3 gap-3 p-6">
        <div>
          <a href="https://github.com/ijvadeli" target="_blank" className="btn h-full w-full shadow-lg rounded-2xl p-4.5" aria-label="Link to my Github account"><img src={Github} alt="Github logo"/></a>
        </div>
        <div>
          <a href="https://x.com/Helixx642269" target="_blank" className="btn h-full w-full shadow-lg rounded-2xl" aria-label="Link to my X account"><img src={X} alt="X Logo"/></a>
        </div>
        <div>
          <a href="https://music.apple.com/profile/Helixx" target="_blank" className="btn h-full w-full shadow-lg rounded-2xl" aria-label="Link to my Apple Music account"><img src={Apple} alt="Apple Music Logo"/></a>
        </div>
      </div>
    </div>
  );
}
