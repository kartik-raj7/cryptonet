import axios from "axios";
import { config } from "../config";
const {baseUrl} = config;
export const axiosGet = async ( params = {}, contentType = 'application/json') => {
    let response = {};
    try {
      const result = await axios.get(baseUrl, {
        headers: {
          'Content-Type': contentType,
        },
        params,
      });
      response = result.data || {};
      response.status = result?.status <=203;
      response.message = result?.data?.message;
    } catch (e) {
      response.status = false;
      response.message = 'something went wrong';
      response.data = e;
    }
    return response;
  };