import { useQuery } from "react-query";
import axios from "axios";

const fetchdataquery = () => {
  return axios.get(`http://localhost:3001/levelCandidateList`);
};

export const QueryReuse = (id) => {
  return useQuery(["levelCandidate-query"], () => fetchdataquery());
};
