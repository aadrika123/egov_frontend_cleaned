import { useQuery } from "react-query";
import axios from "axios";

let token = window.localStorage.getItem("token");
const header = {
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  },
};
const fetchdataquery = () => {
  return axios.get(`http://192.168.0.166/api/saf-out`, header);
};

export const OutboxQuery = (enableState) => {
  return useQuery(["levelCandidate-query"], () => fetchdataquery(), {
    enabled: enableState,
  });
};
