import Hero from "../Hero/Hero";
import Header from "../Header/Header";

import greenCircle from "../../assets/green.svg";
import star from "../../assets/star.svg";
const headerNav = ["Reciters", "Music", "About Us", "Blog"];

const Homepage = () => {
  return (
    <div className="homepage my-0 mx-auto w-11/12">
      <Header headerNav={headerNav} />
      <Hero star={star} greenCircle={greenCircle} />
    </div>
  );
};

export default Homepage;
