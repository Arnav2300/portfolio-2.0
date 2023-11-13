import BottomBar from "../Components/BottomBar";
import HomeContent from "../Components/HomeContent";

export default function Main() {
  return (
    <div className="pt-8 pb-28 w-full pr-4 pl-4 md:pl-36 md:pr-36 lg:pl-96 lg:pr-96 text-zinc-500 font-sans flex flex-col gap-y-20 align-middle">
      <HomeContent />
      <BottomBar />
    </div>
  );
}
