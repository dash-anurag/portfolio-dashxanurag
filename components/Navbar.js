import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  return (
    <nav>
      <ul className="flex items-center justify-between p-8">
        <li className="text-xl dark:text-black">
          <p
            onClick={() => router.push("/")}
            className="px-4 py-2 text-black cursor-pointer italic "
          >
            <span className="text-red-400 text-3xl not-italic">A</span>nurag
            <span className="text-green-500 text-3xl not-italic">D</span>ash
          </p>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
