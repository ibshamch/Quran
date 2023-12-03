import p1 from "../../assets/rating/p1.jpg";
import p2 from "../../assets/rating/p2.jpg";
import p3 from "../../assets/rating/p3.jpg";
import play from "../../assets/play.svg";
import left from "../../assets/leftcontrol.svg";
import right from "../../assets/rightcontrol.svg";
import repeat from "../../assets/repeat.svg";
import shuffle from "../../assets/shuffle.svg";
import { Link } from "react-router-dom";
const Hero = ({ star, greenCircle }) => {
  return (
    <section className="hero  my-0  mx-auto w-11/12 flex flex-col justify-around p-3">
      <div className="hero-title">
        <h1 className="text-5xl hero-title">
          Discover the Quran, <br />
          and Experience Islamic Music.
        </h1>
      </div>
      <div className="hero-sub-container gap-4 hidden lg:flex justify-center 2xl:justify-between py-4  ">
        <div className="hero-sub-left order-1 hidden basis-4/12 p-5  2xl:flex flex-col justify-between ">
          <div className="rating items-center flex justify-evenly  ">
            <div className="rating-container flex items-center gap-2 basis-5/12 ">
              <img src={p1} className="w-8 h-8 rounded-full " alt="p1" />
              <img src={p2} className="w-8 h-8 rounded-full " alt="p1" />{" "}
              <img src={p3} className="w-8 h-8 rounded-full " alt="p1" />
            </div>
            <p className="basis-11/12 mr-12">
              <strong>354k+</strong> Total Monthly Listeners in Qolab
            </p>
          </div>
          <div className="player  bg-opacity-50 p-5 rounded-md flex  flex-col gap-4">
            <p className="text-black  self-center">Relaxation Radio (Surah)</p>
            <p className="text-black self-center">
              Surah Al-Fatihah (The Opener)
            </p>
            <div className="player-line self-center flex justify-between mt-4 w-9/12">
              <div
                className="green
                border-green-950 basis-1/2 border-solid border-4
                flex justify-end
                bg-green-400
                h-0
                relative
                "
              >
                <img
                  src={greenCircle}
                  className="w-4 absolute -top-2 -right-3"
                  alt="green"
                />
              </div>
              <div className="gray basis-1/2 border-gray-400 border-solid border-2 bg-gray-400"></div>
            </div>
            <div className="player-controls flex justify-between">
              <img src={shuffle} alt="left" className="w-12" />

              <img src={left} alt="left" className="w-12" />
              <img src={play} alt="play" className="w-12" />
              <img src={right} alt="right" className="w-12" />
              <img src={repeat} alt="left" className="w-12" />
            </div>
          </div>
          <div className=" mt-4">
            <Link to="/readQuran" className="swipe text-xl rounded-full">
              Click Here to Read Quran
            </Link>
          </div>
        </div>
        <div
          className="hero-sub-right 
          basis-8/12
          flex flex-col justify-between gap-5 p-10
          bg-black bg-opacity-50 rounded-lg 

          "
        >
          <div className="flex justify-between ">
            <div className="border-white bg-white bg-opacity-80 font-medium text-black border-solid border-2 px-6 py-2 basis-4/12 rounded-full text-md text-center">
              Self-purification through the Quran
            </div>
            <div className="flex basis-8/12 px-2 justify-between items-center">
              <div className="border-white border-solid border-2 h-0 w-11/12"></div>
              <img src={star} className="w-4" alt="star" />
              <div className="border-white border-solid border-2 h-0 w-11/12"></div>
            </div>
          </div>
          <p className="text-4xl ">
            Explore the Quran's wisdom and immerse in Islamic music, connecting
            with the spirtuality through words and melodies on out platform
          </p>
          <div className="flex basis-6/12 px-2 justify-between items-center">
            <div className="border-white border-solid border-2 h-0 w-11/12"></div>
            <img src={star} className="w-4" alt="star" />
            <div className="border-white border-solid border-2 h-0 w-3/12"></div>
          </div>
          <div className="flex items-center gap-9 ">
            <div className="border-white border-solid border-2 rounded-full py-3 px-5 text-center text-lg">
              Soothing
            </div>
            <div className="border-white border-solid border-2 rounded-full py-3 px-5 text-center text-lg">
              Discover peace through relaxation
            </div>
            <div className="border-white text-lg border-solid border-2 text-center py-3 px-5 rounded-full ">
              Explore serenity now
            </div>
            <div className="border-white text-lg border-solid border-2 rounded-full text-center py-3 px-5">
              See More stuffs
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
