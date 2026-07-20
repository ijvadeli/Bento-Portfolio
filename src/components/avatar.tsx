import AvatarImg from "../assets/avatar.png";

export default function Avatar() {
  return (
    <div className="h-full w-full flex flex-col items-center">
      <div className="h-full lg:-mr-6">
        <img src={AvatarImg} className="h-full md:float-right sm:rounded-xl lg:rounded-none"/>
      </div>
    </div>
  );
}
