import Image from "next/image";
import Nav1 from "./components/home/navbar1";
import Nav2 from "./components/home/navbar2";
import Caro1 from "./components/home/carousel";
import Caro2 from "./components/home/carousel2";
import Caro3 from "./components/home/carousel3";
import Desktop2 from "./components/home/desktop2";
import Desktop3 from "./components/home/desktop3";
import Desktop4 from "./components/home/desktopblog";
import Desktop6 from "./components/home/desktop6";

export default function Home() {
  return (
    <div>
      <Nav1 />
      <Nav2 />
      <Caro1  />
      <Desktop2  />
      <Desktop3  />
      <Caro2  />
      <Caro3  />
      <Desktop4  />
      <Desktop6  />
    
    </div>
  );
}
