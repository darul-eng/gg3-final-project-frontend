import Nav from "../components/home/Nav";
import {Box} from "@chakra-ui/react";
import Videos from "../components/home/Videos";

export default function Home(){
    return (
        <Box mx="10px">
            <Nav/>
            <Videos/>
        </Box>
    )
}