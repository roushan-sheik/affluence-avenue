import axios from "axios";
//NOTE - loader function
const homeLoader = async () => {
  const data = await fetchData("/luxury.json");
  return { data };
};
export default homeLoader;
//  fetch function
async function fetchData(url) {
  const data = await axios.get(url);
  return data.data;
}
