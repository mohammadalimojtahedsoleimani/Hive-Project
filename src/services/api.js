import axios from "axios";

const BASE_URL = "https://hive.iran.liara.run";
const getCharity = async () => {
    const res = await axios.get('http://127.0.0.1:8000/charity/api/v1/ads/');
    return res.data.results;
}
export {getCharity};