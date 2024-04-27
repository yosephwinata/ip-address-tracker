import axiosInstance from "../axios/axiosInstance";
import { IPAddressResponse } from "../types/types";
import { checkIpAddressFormat } from "../utils/helpers";

export const getIPAddress = async (
  keyword: string,
): Promise<IPAddressResponse> => {
  // Prepare the query string according to the keyword format (ip or domain)
  const apiKey = import.meta.env.VITE_API_KEY;
  let queryString;
  if (!keyword) {
    queryString = `/country,city?apiKey=${apiKey}`;
  } else if (checkIpAddressFormat(keyword)) {
    queryString = `/country,city?apiKey=${apiKey}&ipAddress=${keyword}`;
  } else {
    queryString = `/country,city?apiKey=${apiKey}&domain=${keyword}`;
  }

  // Fetch the api
  try {
    const response = await axiosInstance.get<IPAddressResponse>(queryString);
    // console.log("response", response); // Uncomment for debugging
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("No IP or domain Found");
  }
};
