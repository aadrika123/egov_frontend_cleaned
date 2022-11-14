import { useQuery } from "react-query";
import axios from "axios";
import api_safInboxList from 'Components/ApiList/api_safInboxList'

let token = JSON.parse(window.localStorage.getItem('token'))
const header = {
    headers:
    {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
    }
}
const fetchdataquery = () => {
  return axios.get(api_safInboxList(),header);
};

export const InboxQuery = (enableState) => {
  return useQuery(["levelCandidate-query"], () => fetchdataquery(),{
      enabled:enableState,
      refetchOnWindowFocus:false,
      refetchOnMount:false,
      refetchOnReconnect:false
  });
};
