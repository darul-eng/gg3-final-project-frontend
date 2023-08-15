import Nav from "../components/Nav";
import {Box} from "@chakra-ui/react";
import Videos from "../components/home/Videos";
import {VideosProvider} from "../context/VideosContext";

export default function Home(){
    return (
        <Box mx="10px">
            <VideosProvider>
                <Nav
                    isDetail={false}
                />
                <Videos/>
            </VideosProvider>
        </Box>
    )
}