import axios from "axios";
import {useEffect, useState} from "react";

const useRequestAPI = async (method, path, data = {}, params = {}, depend = false) => {
    const [responses, setResponses] = useState(null);
    const API_URL = process.env.REACT_APP_API_URL;

    const headers = {
        Accept: "application/json"
    }

    useEffect( () => {
        if (path){
            let ignore = false;
            axios({
                method: method,
                url: API_URL+path,
                data: data,
                headers: headers,
                params: params
            })
                .then(responses => setResponses(responses.data))
            return () => {
                ignore = true
            };
        }
    }, [path, depend])

    return responses

}

export {useRequestAPI}