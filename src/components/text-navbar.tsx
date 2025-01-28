"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full">
      {/* Top section with logos and title */}
      <div className="w-full bg-white px-4 py-2 md:py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <Image
            width={150}
            height={80}
            src="/logo/rvu-logo.webp"
            alt="RV University logo"
            className="h-12 w-auto md:h-16 lg:h-20 object-contain"
          />

          <div className="flex flex-col items-center text-center flex-1 px-2 text-black">
            <h1 className="font-black text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
              International Conference on Sustainable Technologies
            </h1>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base mt-1">
              06-07 November 2025 // Bengaluru, Karnataka, India
            </p>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base">
              Tagline
            </p>
          </div>

          <Image
            width={150}
            height={80}
            src="/logo/ieee-logo.webp"
            alt="IEEE logo"
            className="h-12 w-auto md:h-16 lg:h-20 object-contain"
          />
        </div>
      </div>

      {/* Navigation menu */}
      <div className="w-full bg-[#1f2d36]">
        <ul className="max-w-7xl mx-auto flex flex-row items-center justify-between px-2 md:px-4">
          <NavbarMenuItem pathname="Home" active={pathname === "/"} path="/" />
          <NavbarMenuItem
            pathname="About"
            active={pathname === "/about"}
            path="/about"
          />
          <NavbarMenuItem
            pathname="Committee"
            active={pathname === "/committee"}
            path="/committee"
          />
          <NavbarMenuItem
            pathname="Tracks"
            active={pathname === "/tracks"}
            path="/tracks"
          />
          <NavbarMenuItem
            pathname="Contact"
            active={pathname === "/contact"}
            path="/contact"
          />
          <NavbarMenuItem
            pathname="Timeline"
            active={pathname === "/timeline"}
            path="/timeline"
          />
        </ul>
      </div>
    </nav>
  );
}

export function NavbarMenuItem({
  pathname,
  path,
  active,
}: {
  pathname: string;
  path: string;
  active: boolean;
}) {
  return (
    <Link href={path} className="flex-1 text-center">
      <li
        className={`py-3 px-2 md:px-4 lg:px-6 hover:bg-[#d5b173] hover:text-black text-white
          ${active ? "bg-[#d5b173] text-black" : ""}
          text-xs sm:text-sm md:text-base whitespace-nowrap`}
      >
        {pathname}
      </li>
    </Link>
  );
}
