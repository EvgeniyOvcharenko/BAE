// read restAPI

import axios from "axios";

const url = "https://www.bankaletihad.com/apicms/";

export default axios.create({
  baseURL: url,
  headers: {
    "Access-Control-Allow-Origin": "*",
  }
});