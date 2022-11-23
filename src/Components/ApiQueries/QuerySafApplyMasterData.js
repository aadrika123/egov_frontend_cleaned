import { useQuery } from "react-query";
import axios from "axios";

let token = window.localStorage.getItem('token')
const header = {
    headers:
    {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
    }
}

const fetchdataquery = (assType) => {
  return axios.get(`http://192.168.0.166/api/saf/apply`,header,{"assessment_type":assType});
};

export const QuerySafApplyMasterData = (enableStatus,assType) => {
  return useQuery(["levelCandidate-query"], () => fetchdataquery(assType),{enabled:enableStatus});
};
