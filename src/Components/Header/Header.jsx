import moonImg from "../../assets/moon.svg";
import sunImg from "../../assets/sun.svg";
import taj from "../../assets/taj.svg";
const Header = ({ headerNav }) => {
  return (
    <header className="header flex h-full justify-between items-center p-3 ">
      <div className="favicon-container flex justify-between items-center">
        <img src={taj} alt="taj" className="favicon w-5/12" />
        <div className="font-bold text-2xl ">Qoib</div>
      </div>
      <div className="nav-container hidden md:flex items-center justify-between gap-10">
        {headerNav.map((navel, i) => {
          return (
            <div key={i} className="nav-el text-xl">
              {navel}
            </div>
          );
        })}
      </div>
      <div className="dark-mode-toggle flex items-center gap-3">
        <div className="image-container py-1 bg-black bg-opacity-60 px-4 rounded-full flex justify-center border-white border-2  gap-4">
          <img src={moonImg} alt="light" className="light-mode w-6" />
          <img src={sunImg} alt="dark" className="dark-mode w-6" />
        </div>
        <div className="button-container bg-white bg-opacity-40 border-white py-1 px-3 rounded-3xl border-2">
          <button className="sign-in text-base  font-light">Sign in</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
