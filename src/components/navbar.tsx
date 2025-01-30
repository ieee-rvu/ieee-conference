import Image from "next/image";
import Link from "next/link";
import { segoe } from '@/lib/fonts';
export function Navbar() {
  const listItem = `h-full py-2 w-fit px-1 lg:px-10 hover:bg-[#d5b173] hover:text-black flex-wrap`;
  return (
    <nav className={`z-10 w-full h-20 md:h-28 lg:h-32 flex flex-col relative`}>
      <div
        className={`h-full flex flex-row items-center justify-evenly bg-white`}
      >
        <Image
          width={200}
          height={200}
          src={"/logo/rvu-logo.webp"}
          alt={"logo"}
          className={`pl-2 h-10 md:h-full w-fit`}
        />
        <div className={`w-full flex flex-col items-center justify-center`}>
          <span
            className={`font-black text-[0.7rem] md:text-lg lg:text-xl ${segoe.className}`}
          >
            International Conference on Sustainable Technologies
          </span>
          <span className={`text-bold text-[0.6rem] md:text-md lg:text-lg`}>
            06-07 November 2025 // Bengaluru, Karnataka, India
          </span>
          {/* <span className={`text-bold text-[0.6rem] md:text-md lg:text-lg`}>
            Tagline
          </span> */}
        </div>
        <div className={`flex flex-row items-center justify-evenly`}>
          <Image
            width={200}
            height={200}
            src={"/logo/ieee-logo.webp"}
            alt={"logo"}
            className={`pr-2 h-10 md:h-full w-fit`}
          />
          <div
            className={`w-full flex flex-col items-center justify-center text-[0.6rem] md:text-md lg:text-lg`}
          >
            <span>IEEE Bangalore Section</span>
            <span>IEEE Ramaiah University of Applied Sciences</span>
          </div>
        </div>
      </div>
      <div
        className={`h-fit bg-[#1f2d36] text-white text-[0.6rem] md:text-md lg:text-lg`}
      >
        <ul className={`flex flex-row items-center lg:gap-5 justify-evenly`}>
          <li className={listItem}>
            <Link href={"/home"}>Home</Link>
          </li>
          <li className={listItem}>
            <Link href={"/about"}>About</Link>
          </li>
          <li className={listItem}>
            <Link href={"/committee"}>Committee</Link>
          </li>
          <li className={listItem}>
            <Link href={"/tracks"}>Tracks</Link>
          </li>
          <li className={listItem}>
            <Link href={"/contact"}>Contact</Link>
          </li>
          <li className={listItem}>
            <Link href={"/timeline"}>Timeline</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
