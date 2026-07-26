import AvatarImg from "../assets/gandalf.jpg";

export default function Avatar() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-4">
      <div className="tooltip" data-tip="You shall not pass bad UX/UI!">
        <img
          src={AvatarImg}
          className="h-30 w-30 md:h-45 md:w-45 md:float-right rounded-full border-2 shadow-lg"
          alt="Gandalf the Grey"
          fetchPriority="high"
        />
      </div>
    </div>
  );
}
