import Nav1 from "./components/home/navbar1";
import Nav2 from "./components/home/navbar2";
import Caro1 from "./components/home/homeHero";
import Caro2 from "./components/home/carousel1";
import Caro3 from "./components/home/carousel2";
import Desktop2 from "./components/home/category";
import Desktop3 from "./components/home/products";
import Desktop4 from "./components/home/trending";
import Desktop6 from "./components/home/footer";

export default function Home() {
  return (
    <>
      <Nav1 />
      <Nav2 />
      <Caro1  />
      <Desktop2  />
      <Desktop3  />
      <Caro2  />
      <Caro3  />
      <Desktop4  />
      <Desktop6  />
    </>
  );
}
