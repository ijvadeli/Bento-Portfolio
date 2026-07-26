import { ChevronRight } from "lucide-react";
import { X } from "lucide-react";

export default function AboutModal() {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn shadow-lg rounded-full"
        onClick={() => {
          const dialog = document.getElementById("about_modal");

          if (dialog instanceof HTMLDialogElement) {
            dialog.showModal();
          }
        }}
      >
        Read more
        <ChevronRight size={16} />
      </button>
      <dialog id="about_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle absolute right-2 top-2 shadow-lg">
              <X size={16} />
            </button>
          </form>
          <h3 className="text-xl md:text-3xl">About me</h3>
          <p className="py-2">
            I'm IJsbrand van de Lindt. I live in the Netherlands and my hobbies
            are programming and gaming. I started with learning HTML and CSS in
            2023, but when I was younger I was already messing around in
            Scratch. I later also build games on the platform Roblox. My main
            motivation for building products is seeing people enjoy using them.
          </p>

          <h4 className="text-lg md:text-2xl pt-4">Hobbies</h4>
          <p className="py-2">
            Aside from programming I really enjoy gaming in my free time. Some
            of my favorite games are Cyberpunk 2077 and Elden Ring. The part I
            love most about these games is their story, exploration and
            adventure. For Cyberpunk more the story and for Elden Ring the crazy
            world building.
          </p>
          <p>
            I also like watching anime and reading manga. My favorite series are
            One Piece (My favorite), JoJo's Bizarre Adventure and Dragon Ball.
          </p>
        </div>
      </dialog>
    </>
  );
}
