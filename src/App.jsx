import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import greenCircle from "./assets/green.svg";
import star from "./assets/star.svg";
const headerNav = ["Reciters", "Music", "About Us", "Blog"];

function App() {
  return (
    <>
      <Header headerNav={headerNav} />
      <Hero greenCircle={greenCircle} star={star} />
    </>
  );
}

export default App;
