import moonImg from "../../assets/moon.svg";
import sunImg from "../../assets/sun.svg";
import taj from "../../assets/taj.svg";
const Header = ({ headerNav }) => {
  return (
    <header className="header flex justify-between items-center w-11/12 my-2 mx-auto">
      <div className="favicon-container flex justify-between items-center">
        <img src={taj} alt="taj" className="favicon w-5/12" />
        <div className="font-bold text-2xl text-blue-950">Qoib</div>
      </div>
      <div className="nav-container flex items-center justify-between gap-3">
        {headerNav.map((navel) => {
          return <div className="nav-el ">{navel}</div>;
        })}
      </div>
      <div className="dark-mode-toggle flex items-center gap-3">
        <div className="image-container py-1 px-4 rounded-full flex justify-center border-black border-2  gap-2">
          <img src={moonImg} alt="light" className="light-mode w-6" />
          <img src={sunImg} alt="dark" className="dark-mode w-6" />
        </div>
        <div className="button-container border-black py-1 px-3 rounded-3xl border-2">
          <button className="sign-in text-base font-light">Sign in</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
