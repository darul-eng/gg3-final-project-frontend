import {
    Avatar,
    Box,
    Flex,
    Heading,
    HStack,
    Input,
    InputGroup,
    Spacer,
    Text,
    Divider
} from "@chakra-ui/react";
import {ArrowBackIcon, SearchIcon} from "@chakra-ui/icons";
import {useState} from "react";
import {useNavigate} from "react-router-dom"
import {useSetVideos} from "../hooks/useSetVideos";

export default function Nav({isDetail}){
    const navigate = useNavigate();
    const [isSearchVisible, setIsSearchVisible] = useState(false)
    const [search, setSearch] = useState("");
    const [depend, setDepend] = useState(false)

    const handleSearchIcon = () => {
        setIsSearchVisible(!isSearchVisible)
    }

    const handleGoBack = () => {
        navigate(-1);
    }

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    }

    const handleDepend = (e) => {
        if (e.key === "Enter"){
            setDepend(!depend)
        }
    }

    // custom hooks to perform setVideos from search result or get all videos
    useSetVideos(search, depend)

    return (
        <Flex as="nav" p="20px" my="10px" alignItems="center">
            <HStack spacing="20px">
                <ArrowBackIcon cursor="pointer" fontSize="xl" onClick={handleGoBack} />
                <Heading fontSize="md">Play</Heading>
            </HStack>
            <Spacer/>
            {!isDetail && (
                <HStack spacing="20px">
                    <InputGroup >
                        {isSearchVisible && (
                            <Input placeholder="Search"
                                    onChange={handleInputChange}
                                    value={search}
                                    onKeyPress={handleDepend}
                            />
                        )}
                    </InputGroup>
                    <SearchIcon fontSize="xl"
                                onClick={handleSearchIcon}
                                cursor="pointer"
                    />
                </HStack>
            )}
            {isDetail && (
                <HStack>
                    <Box ml='5' mr='3'>
                        <Text fontWeight='bold'>
                            Segun Adebayo
                        </Text>
                    </Box>
                    <Avatar src='https://bit.ly/sage-adebayo' />
                </HStack>
            )}
        </Flex>
    )
}