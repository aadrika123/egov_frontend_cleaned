import { useQuery } from "react-query";
import axios from "axios";
const header = {
    headers:
    {
        Authorization: `Bearer 65|HT08LqoUzPfmRcOfNiBxWadotEJhHYHvKdyZyVc3`,
        Accept: 'application/json',
    }
}

const fetchdataquery = () => {
    return axios.get("http://192.168.0.166/api/all-workflows",header);
};

export const useQueryData = (onSuccess, onError) => {
    return useQuery("get-all-ulb", fetchdataquery, {
        onSuccess,
        onError,
        // select: (data) => {
        //     const tranformedata = data.data.map((hr) => hr.title);
        //     return tranformedata;
        // }
    });
};
