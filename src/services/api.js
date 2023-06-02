import axios from "axios";
import { useContext } from "react";
import { PageContext } from "../context/PageProvider";

const BASE_URL = "http://127.0.0.1:8000/charity/api/v1/ads/?page=1";

const getCharity = async (pageNumber) => {
    let url;
    url = `http://127.0.0.1:8000/charity/api/v1/ads/?page=${ pageNumber }`;
    const res = await axios.get ( url );
    console.log(res.data.results)
    return res.data.results;

}
export { getCharity }