import type { NextPage } from "next";

const Home: NextPage = () => {
  return <div className="w-full h-full text-center flex flex-col justify-around">
    <div className="flex flex-col justify-center">
      <h1 className="text-2xl">Clas Olaf Steinbru Andersen</h1>
      <h3>Software Engineer</h3>
    </div>
    <div>  
      <h1 className="text-2xl">Portofolio</h1>
    </div>
  </div>;
};

export default Home;
