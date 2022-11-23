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
  return axios.get(`http://192.168.0.166/api/escalate`, header);
};

export const EscalateToggleQuery = (enableState) => {
  return useQuery(["escalateToggle-query"], () => fetchdataquery(), {
    enabled: enableState,
  });
};
