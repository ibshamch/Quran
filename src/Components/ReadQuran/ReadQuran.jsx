import { useQuery } from "@tanstack/react-query";
import fetchQuranData from "../../fetchQuranData";
import { useState } from "react";

const ReadQuran = () => {
  const [suratName, setSuratName] = useState("Al-Faatiha");

  const { data, isLoading, isError } = useQuery(
    ["fetchQuranData"],
    fetchQuranData
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else if (isError) {
    return <h1>Error...</h1>;
  }

  const surahs = data.data.surahs;
  const selectedSuratAyat = surahs.find(
    (surat) => surat.englishName === suratName
  );
  console.log(surahs);
  return (
    <div className="read-quran p-12 my-0 mx-auto w-11/12">
      <h1 className="text-center text-4xl">Read Quran</h1>

      <div className="quran-reading gap-5 flex mt-12">
        <div className="surah-ayat-container basis-2/6 gap-5">
          <form className="flex justify-between">
            <div className="surah">
              <label htmlFor="surah"></label>
              <select
                onChange={(e) => {
                  setSuratName(e.target.value);
                }}
                name="surah"
                className="bg-black text-2xl"
                id="surah"
              >
                {surahs.map((surat) => {
                  return (
                    <option key={surat.number} value={surat.englishName}>
                      {surat.englishName}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="ayat">
              <label htmlFor="ayat" className="text-2xl">
                Ayat
              </label>
              <select className="bg-black ml-12 text-2xl" name="ayat" id="ayat">
                {selectedSuratAyat &&
                  selectedSuratAyat.ayahs.map((ayat) => {
                    return <option key={ayat.number}>{ayat.number}</option>;
                  })}
              </select>
            </div>
          </form>
        </div>
        <div className="reading-container flex  items-center flex-col basis-2/3">
          {selectedSuratAyat &&
            selectedSuratAyat.ayahs.map((ayat) => {
              return (
                <p
                  key={ayat.number}
                  className="reading-p p-6 text-4xl bg-black bg-opacity-80 mb-2"
                >
                  {ayat.text}
                </p>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ReadQuran;
