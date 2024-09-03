import { Footer } from "../components/common/Footer";
import { Nav } from "../components/common/Nav";
import { Advantages } from "../components/home/Advantages";
import { Examples } from "../components/home/Examples";
import { Hero } from "../components/home/Hero";

export const Home = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-col gap-8">
        <Hero />
        <Advantages />
        <Examples/>
      </div>
      <Footer />
    </>
  );
};
