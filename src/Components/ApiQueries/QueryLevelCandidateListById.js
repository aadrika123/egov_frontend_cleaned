import { useQuery } from "react-query";
import axios from "axios";

const fetchdataquery = (id) => {
  return axios.get(`http://localhost:3001/levelCandidateList/${id}`);
};

export const LevelCandidateQueryById = (id) => {
  return useQuery(["levelCandidateById-query",id], () => fetchdataquery(id));
};
