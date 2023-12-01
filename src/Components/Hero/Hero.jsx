import p1 from "../../assets/rating/p1.jpg";
import p2 from "../../assets/rating/p2.jpg";
import p3 from "../../assets/rating/p3.jpg";
const Hero = ({ star, greenCircle }) => {
  return (
    <section className="hero my-0 mx-auto w-11/12 p-3 mt-10">
      <div className="hero-title  mb-12">
        <h1 className="text-8xl">
          Discover the Quran, and <br /> Experience Islamic Music.
        </h1>
      </div>
      <div className="hero-sub-container gap-4 flex justify-between p-4 ">
        <div className="hero-sub-left basis-4/12   flex flex-col justify-between p-2">
          <div className="rating items-center flex justify-evenly  ">
            <div className="rating-container flex items-center gap-1 basis-5/12 ">
              <img src={p1} className="w-8 h-8 rounded-full " alt="p1" />
              <img src={p2} className="w-8 h-8 rounded-full " alt="p1" />{" "}
              <img src={p3} className="w-8 h-8 rounded-full " alt="p1" />
            </div>
            <p className="basis-11/12 mr-12">
              <strong>354k+</strong> Total Monthly Listeners in Qolab
            </p>
          </div>
          <div className="player bg-gray-400 flex flex-col gap-4">
            <p>Relaxation Radio (Surah)</p>
            <p>Surah Al-Fatihah (The Opener)</p>
            <div className="player-line flex justify-between mt-4 w-9/12">
              <div
                className="green
                border-green-400 basis-1/2 border-solid border-4
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
            <div></div>
          </div>
          <div className="swipe mt-4">
            <li>Swap Left or Right to change Category</li>
          </div>
        </div>
        <div
          className="hero-sub-right 
          basis-8/12
          border-black border-solid border-2 
          flex flex-col justify-between gap-5 p-2
          "
        >
          <div className="flex justify-between">
            <div className="border-black border-solid border-2 px-6 py-2 rounded-full text-center">
              Self-purification through the Quran
            </div>
            <div className="flex basis-6/12 px-2 justify-between items-center">
              <div className="border-black border-solid border-2 h-0 w-11/12"></div>
              <img src={star} className="w-4" alt="star" />
              <div className="border-black border-solid border-2 h-0 w-11/12"></div>
            </div>
          </div>
          <p>
            Explore the Quran's wisdom and immerse in Islamic music,connecting
            <br />
            with the spirtuality through words and melodies on out platform
          </p>
          <div className="flex basis-6/12 px-2 justify-between items-center">
            <div className="border-black border-solid border-2 h-0 w-11/12"></div>
            <img src={star} className="w-4" alt="star" />
            <div className="border-black border-solid border-2 h-0 w-3/12"></div>
          </div>
          <div className="flex items-center justify-around">
            <div className="border-black border-solid border-2 rounded-full px-3 text-center">
              Soothing
            </div>
            <div className="border-black border-solid border-2 rounded-full px-3 text-center">
              Discover peace through relaxation
            </div>
            <div className="border-black border-solid border-2 text-center rounded-full px-3">
              Explore serenity now
            </div>
            <div className="border-black border-solid border-2 rounded-full text-center px-3">
              See More stuffs
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
