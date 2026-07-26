export default function Avatar() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-4">
      <div className="tooltip" data-tip="Son Goku from Dragon Ball">
        <img
          src="/avatar.webp"
          className="h-30 w-30 md:h-45 md:w-45 md:float-right rounded-full border-2 border-base-100 shadow-lg"
          alt="Son Goku from Dragon Ball"
          fetchPriority="high"
        />
      </div>
    </div>
  );
}
