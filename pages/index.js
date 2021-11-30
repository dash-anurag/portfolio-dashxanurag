import Head from "next/head";
import Navbar from "../components/Navbar";
import MobileNav from "../components/MobileNav";

export default function Home() {
  return (
    <div className="font-body bg-gray-100 scrollbar-hide">
      <Head>
        <title>dashxanurag</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="max-w-8xl px-5 text-justify h-screen scrollbar-hide">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam quidem
          dolor magnam nesciunt doloremque laudantium modi vero. Delectus, quae
          mollitia! Saepe est dolore ea modi quam repudiandae? Nulla, architecto
          impedit!
        </p>
      </main>
      <MobileNav />
    </div>
  );
}
