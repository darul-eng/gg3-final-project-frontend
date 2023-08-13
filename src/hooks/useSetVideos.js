import {useRequestAPI} from "./useRequestAPI";
import {useVideos} from "../context/VideosContext";

const useSetVideos = (search, depend) => {
    const {videos, setVideos} = useVideos();

    let params = {
        title: search
    }
    //custom hooks to request api
    useRequestAPI("GET", `/api/v1/videos`, {}, params, depend)
        .then(responses => setVideos(responses))
}

export {useSetVideos}