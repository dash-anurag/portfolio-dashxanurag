import Link from "next/link";
import { useRouter } from "next/router";
import { PaperAirplaneIcon } from "@heroicons/react/outline";

function Navbar() {
  const router = useRouter();

  return (
    <nav>
      <ul className="flex flex-wrap items-center justify-between px-8 py-2">
        <li className="text-xl dark:text-black ">
          <p
            onClick={() => router.push("/")}
            className="px-6 py-6 text-black cursor-pointer"
          >
            <span className="text-red-500 text-3xl ">A</span>nurag
            <span className="text-green-500 text-3xl">D</span>ash
          </p>
        </li>

        <ul className="hidden sm:flex flex-row space-x-4">
          <li className="buttonExpand">
            <Link href="/about">About</Link>
          </li>
          <li className="buttonExpand">
            <Link href="/resume">Resume</Link>
          </li>
          <li className="buttonExpand">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="buttonExpand">
            <Link href="/blog">Blogs</Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
}

export default Navbar;
