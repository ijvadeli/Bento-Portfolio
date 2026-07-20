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
      </button>
      <dialog id="about_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle absolute right-2 top-2 shadow-lg">
              ✕
            </button>
          </form>
          <h3 className="text-2xl md:text-4xl">About me</h3>
          <p className="py-4">I'm IJsbrand van de Lindt. I live in the Netherlands and my hobbies are programming and gaming. I started with learning HTML and CSS in 2023, but when I was younger I was already messing around in Scratch. I later also build games on the platform Roblox. My main motivation for building products is seeing people enjoy using them.</p>

          <h4 className="text-xl md:text-2xl">Music</h4>
          <p className="py-4">I also listen to a wide variety of music, think of bands like Pink Floyd, Metallica, Queen, Radiohead, Guns N' Roses, King Crimson, Weather Report, ELO and more. One of my favorite songs is November Rain by Guns N' Roses.</p>
          <iframe allow="autoplay *; encrypted-media *;" height="150" className="w-full;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/album/november-rain-2022-version/1644730026?i=1644730834"></iframe>
        </div>
      </dialog>
    </>
  );
}
