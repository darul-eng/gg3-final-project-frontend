import axios from "axios";
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";

const useRequestAPI = async (method, path, data = {}, params = {}, depend = false) => {
    const [responses, setResponses] = useState(null);
    const API_URL = process.env.REACT_APP_API_URL;
    const [cookies, setCookies] = useCookies(["access_token"])
    const token = cookies.access_token

    const headers = {
        Accept: "application/json",
        Authorization: `Bearer ${token}`
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