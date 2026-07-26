import GithubLogo from "./img/svg/github";
import XLogo from "./img/svg/x";
import AppleMusicIcon from "./img/svg/applemusic";

export default function Socials() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="grid w-72 h-32 md:w-full md:h-full grid-cols-3 gap-3 p-6">
        <div>
          <a href="https://github.com/ijvadeli" target="_blank" className="btn h-full w-full shadow-lg rounded-2xl p-4.5" aria-label="Link to my Github account">
            <GithubLogo/>
          </a>
        </div>
        <div>
          <a href="https://x.com/Helixx642269" target="_blank" className="btn h-full w-full shadow-lg rounded-2xl" aria-label="Link to my X account">
            <XLogo/>
          </a>
        </div>
        <div>
          <a href="https://music.apple.com/profile/Helixx" target="_blank" className="btn h-full w-full shadow-lg rounded-2xl" aria-label="Link to my Apple Music account">
            <AppleMusicIcon/>
          </a>
        </div>
      </div>
    </div>
  );
}
