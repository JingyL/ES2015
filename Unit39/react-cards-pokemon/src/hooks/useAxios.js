import { useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

const useAxios = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const addData = async (restOfUrl = "") => {
        try {
            console.log(restOfUrl);
            const response = await axios.get(`${url}${restOfUrl}`);
            console.log(response.data)
            setData(d => [...d, { ...response.data, id: uuid() }]);
        } catch (error) {
            setError(error);
        }
    }
    const clearData =  () => setData([]);

    return [data, addData, error, clearData];
}
export default useAxios;