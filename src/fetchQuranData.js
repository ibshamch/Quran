const fetchQuranData = async ({ queryKey }) => {
  const res = await fetch("https://api.alquran.cloud/v1/quran/ar.alafasy");
  const json = await res.json();

  return json;
};
export default fetchQuranData;
