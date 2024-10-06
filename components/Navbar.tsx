import Image from "next/image";
import { TwemojiDuck } from "./Icons";

export default function Navbar() {
  return (
    <nav className="p-2 pb-0 flex justify-end">
      <div
        className="w-[40px] h-[40px] bg-[#777] rounded-full bg-cover cursor-pointer"
        style={{
          backgroundImage: "url(/Image.png)",
        }}
      />
    </nav>
  );
}
