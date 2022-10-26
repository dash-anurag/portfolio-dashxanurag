import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

import { AnimatePresence, motion } from "framer-motion";

// import {
//   HomeIcon,
//   AcademicCapIcon,
//   RssIcon,
//   DocumentDownloadIcon,
//   BeakerIcon,
// } from "@heroicons/react/outline";

import Footer from "./Footer";

export default function ContainerBlock({ children, ...customMeta }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => setMounted(true), []);

  const router = useRouter();

  const meta = {
    title: "dashxanurag – Full stack developer",
    description: `Full stack developer, passionate about building scalable and secure web applications.`,
    image: "../images/profile-pic.png",
    type: "website",
    ...customMeta,
  };

  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Blog", link: "/blog" },
    { name: "Resume", link: "/resume" },
  ];

  const mobileLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Blog", link: "/blog" },
    { name: "Resume", link: "/resume" },
  ];

  if (!mounted) return null;

  // console.log(`theme: ${theme}`);

  return (
    <div className="bg-white dark:bg-zinc-900 scrollbar-hide font-body">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://yourwebsite.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Anurag Dash" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dashxanurag" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      <nav className="sticky-nav flex justify-between items-center max-w-4xl w-full p-8 mt-0 mb-0 md:mt-4 md:mb-10  mx-auto bg-white dark:bg-zinc-900 bg-opacity-60 ">
        <a href="#skip" className="sr-only focus:not-sr-only">
          Skip to content
        </a>

        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-900/90 dark:ring-teal-500/50 dark:hover:ring-white/20"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
            >
              {theme === "dark" ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>

        <p
          onClick={() => router.push("/")}
          className="px-6 py-6  cursor-pointer text-2xl font-bold tracking-tighter leading-tight text-black dark:text-white hover:text-yellow-500 dark:hover:text-yellow-500"
        >
          <span className="text-red-500 text-3xl ">A</span>nurag
          <span className="text-green-500 text-3xl">D</span>ash
        </p>

        <div className="hidden sm:block rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-900/90 dark:text-zinc-200 dark:ring-white/10">
          <DesktopNav
            links={links}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            router={router}
          />
        </div>
        <div className="block sm:hidden" links={mobileLinks}>
          <MobileNav links={mobileLinks} />
        </div>
      </nav>

      <main
        id="skip"
        className="flex flex-col justify-center bg-white dark:bg-zinc-900 px-8 text-gray-900 dark:text-gray-100"
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}

export const DesktopNav = ({
  links,
  hoveredIndex,
  setHoveredIndex,
  router,
}) => {
  return (
    <>
      {links.map((navLink, index) => (
        <Link legacyBehavior href={navLink.link} key={index}>
          <a
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative rounded-lg px-3 inline-block py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900"
          >
            <AnimatePresence>
              {hoveredIndex == index && (
                <motion.span
                  className="absolute inset-0  transform bg-gray-50 dark:bg-zinc-900"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>

            <span
              className={`relative z-10 hover:text-teal-300 dark:hover:text-teal-300 ${
                router.asPath === navLink.link
                  ? "text-teal-600"
                  : "text-gray-600 dark:text-gray-50"
              }`}
            >
              {navLink.name}
            </span>
            {router.asPath === navLink.link && (
              <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
            )}
          </a>
        </Link>
      ))}
    </>
  );
};

// export const MobileNav = () => {
//   return (
//     <nav className="sm:hidden text-white bg-gray-700 flex flex-row w-full h-auto justify-between px-6 py-4  fixed bottom-0 z-auto ">
//       <Link href="/">
//         <HomeIcon className="h-6 w-6 cursor-pointer" />
//       </Link>
//       <Link href="/work">
//         <BeakerIcon className="h-6 w-6 cursor-pointer" />
//       </Link>
//       <Link href="/profile">
//         <AcademicCapIcon className="h-6 w-6 cursor-pointer" />
//       </Link>
//       <Link href="/blog">
//         <RssIcon className="h-6 w-6 cursor-pointer" />
//       </Link>
//       <Link href="/resume">
//         <DocumentDownloadIcon className="h-6 w-6 cursor-pointer" />
//       </Link>
//     </nav>
//   );
// };

export const MobileNav = ({ links }) => {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const dropIn = {
    hidden: {
      y: "-4vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "4vh",
      opacity: 0,
    },
  };

  const handleClick = (link) => {
    setOpen(false);
    router.push(link);
  };

  useEffect(() => {
    console.log("open value", open);
  }, [open]);

  return (
    <div className="w-full flex flex-row items-center space-x-2">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-md bg-gray-200 dark:bg-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-black dark:text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {open && (
          <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-x-0 mx-auto top-20 flex flex-col w-[90%]   p-4 rounded-lg shadow-xl z-[999] bg-white dark:bg-gray-800 divide-y dark:divide-gray-700"
          >
            {links.map((el) => (
              <button
                key={el?.link}
                onClick={() => handleClick(el.link)}
                className="relative font-bold px-1 py-4 sm:px-4 sm:py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900 text-left"
              >
                <AnimatePresence>
                  <span className="relative z-10">{el.name}</span>
                </AnimatePresence>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
