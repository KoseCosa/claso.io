import type { NextPage } from "next";
import Link from "next/link";
import Card from "../components/card";

const Home: NextPage = () => {
  return (
    <div className="w-full h-full text-center flex flex-col justify-around items-center">
      <div className="max-w-2xl w-full">
        <Card>
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-2xl text-left font-bold">Contact me</h1>
            <Link href="/">
              <div className="font-bold underline hover:cursor-pointer">
                Go Home
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-left text-left">
            <p>
              {
                "The form below isn't working yet but once it's working you can use it to contact me 😅"
              }
            </p>
            <form>
              <label className="font-bold">Name:</label>
              <br />
              <input className="w-full border" type="text"></input>
              <br />
              <label className="font-bold">E-mail:</label>
              <br />
              <input className="w-full border" type="email"></input>
              <br />
              <label className="font-bold">Message:</label>
              <br />
              <textarea className="w-full border" />
              <br />
              <input
                className="font-bold underline hover:cursor-pointer"
                type="submit"
              ></input>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
