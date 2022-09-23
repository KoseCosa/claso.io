import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="w-full h-full text-center flex flex-col justify-around">
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl">Contact Page</h1>
        <form className="bg-slate-100 text-zinc-900">
          <label>Name:</label>
          <br />
          <input className="border" type="text"></input>
          <br />
          <label>E-mail:</label>
          <br />
          <input type="email"></input>
          <br />
          <label>Message:</label>
          <br />
          <textarea />
          <br />
          <input type="submit"></input>
        </form>
        <Link href="/">Back to home</Link>
      </div>
    </div>
  );
};

export default Home;
