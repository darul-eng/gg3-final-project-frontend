import axios from "axios";
import {useEffect, useState} from "react";

const useRequestAPI = async (method, path, data = {}, params = {}, depend = false) => {
    const [responses, setResponses] = useState(null);
    const apiUrl = process.env.REACT_APP_API_URL;

    const headers = {
        Accept: "application/json"
    }

    useEffect( () => {
        if (path){
            let ignore = false;
            axios({
                method: method,
                url: apiUrl+path,
                data: data,
                headers: headers,
                params: params
            })
                .then(responses => setResponses(responses.data))
                // .then(data => {
                //     if(!ignore){
                //         setResponses(data)
                //     }
                // });
            return () => {
                ignore = true
            };
        }
    }, [path, depend])

    return responses

}

export {useRequestAPI}