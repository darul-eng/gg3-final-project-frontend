import {useParams} from "react-router-dom";


export default function VideoDetail() {
    let {videoId} = useParams()
    return (
       <>
           <h1>Video Detail</h1>
           <p>{videoId}</p>
       </>
    )
}