import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="font-body bg-gray-50">
      <Head>
        <title>dashxanurag</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam quidem
        dolor magnam nesciunt doloremque laudantium modi vero. Delectus, quae
        mollitia! Saepe est dolore ea modi quam repudiandae? Nulla, architecto
        impedit!
      </p>
    </div>
  );
}
