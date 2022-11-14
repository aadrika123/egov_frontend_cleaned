import { useQuery } from "react-query";
import axios from "axios";

let token = JSON.parse(window.localStorage.getItem('token'))
const header = {
    headers:
    {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
    }
}
const fetchdataquery = (workflowId) => {
  return axios.get(`http://192.168.0.166/api/gen/workflow/workflow-candidates/${workflowId}`,header);
};

export const WorkflowCandidateQuery = (enableState,workflowId) => {
  return useQuery(["can-query"], () => fetchdataquery(workflowId),{
      enabled:enableState
  });
};
