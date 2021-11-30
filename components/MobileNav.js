import Link from "next/link";

import {
  HomeIcon,
  AcademicCapIcon,
  RssIcon,
  DocumentDownloadIcon,
  BeakerIcon,
} from "@heroicons/react/outline";

function MobileNav() {
  return (
    <nav className="sm:hidden text-white bg-gray-700 flex flex-row w-full h-auto justify-between px-6 py-4  fixed bottom-0 z-auto ">
      <Link href="/">
        <HomeIcon className="h-6 w-6 cursor-pointer" />
      </Link>
      <Link href="/work">
        <BeakerIcon className="h-6 w-6 cursor-pointer" />
      </Link>
      <Link href="/profile">
        <AcademicCapIcon className="h-6 w-6 cursor-pointer" />
      </Link>
      <Link href="/blog">
        <RssIcon className="h-6 w-6 cursor-pointer" />
      </Link>
      <Link href="/resume">
        <DocumentDownloadIcon className="h-6 w-6 cursor-pointer" />
      </Link>
    </nav>
  );
}

export default MobileNav;
