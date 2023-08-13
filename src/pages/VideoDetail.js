import {useParams} from "react-router-dom";
import {Box, Grid, VStack} from "@chakra-ui/react";
import ProductList from "../components/video-detail/ProductList";
import VideoPLayer from "../components/video-detail/VideoPlayer";
import CommentList from "../components/video-detail/CommentList";
import CommentForm from "../components/video-detail/CommentForm";
import Nav from "../components/Nav";
import {VideosProvider} from "../context/VideosContext";
import {useEffect, useState} from "react";
import axios from "axios";


export default function VideoDetail() {
    let {videoId} = useParams()
    const [comments, setComments] = useState([])
    const API_URI = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(`${API_URI}/api/v1/videos/${videoId}/comments`).then(responses => setComments(responses.data.data))
    }, [])

    return (
        <Box maxH="100vh" overflow="hidden">
            <VideosProvider>
               <Nav
                    isDetail={true}
               />
               <Grid
                   templateColumns={{base: "1fr", md: "1fr 5fr 1fr"}}
                   templateRows={{base: "auto", md: "auto"}}
                   gap={2}
                   display={{ base: "block", md: "grid" }}
               >

                   <ProductList
                        videoId={videoId}
                   />
                   <VideoPLayer
                       videoId={videoId}

                   />
                   <VStack alignItems="left" >
                       <Box position="absolute" bottom="0">
                           <CommentList
                               display={{base: "none", md: "block"}}
                               comments={comments}
                               setComments={setComments}
                           />
                           <CommentForm
                                videoId={videoId}
                           />
                       </Box>

                   </VStack>
               </Grid>
            </VideosProvider>
        </Box>
    )
}