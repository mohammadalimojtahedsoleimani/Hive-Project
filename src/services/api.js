import axios from "axios";
import { useContext } from "react";
import { PageContext } from "../context/PageProvider";

const BASE_URL = "http://127.0.0.1:8000/charity/api/v1/ads/?page=1";

const getCharity = async () => {
    let url;
    let page = 1
    if ( page === 1 ) {
        url = BASE_URL
    } else {
        url = url = `http://127.0.0.1:8000/charity/api/v1/ads/?page=${ page }`;
    }
    // const res = await axios.get ( url );
    // return res.data.results;

}
export { getCharity }