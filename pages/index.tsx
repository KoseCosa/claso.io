import type { NextPage } from "next";
import Card from "../components/card";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col w-full h-full text-center justify-around items-center">
      <div className="w-full max-w-2xl">
        <Card>
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl">Clas Olaf Steinbru Andersen</h1>
            <h3>Web Developer and Computer Science Student</h3>
          </div>
        </Card>
      </div>
      <div className="w-full max-w-2xl">
        <Card>
          <div>
            <h1 className="text-2xl">Portofolio</h1>
            <p>Here my portofolio will be displayed</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
