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
} from "@chakra-ui/react";
import {ArrowBackIcon, SearchIcon} from "@chakra-ui/icons";
import {useState} from "react";
import {useNavigate} from "react-router-dom"
import {useSetVideos} from "../hooks/useSetVideos";
import {useCookies} from "react-cookie";

export default function Nav({isDetail}){
    const navigate = useNavigate();
    const [isSearchVisible, setIsSearchVisible] = useState(false)
    const [search, setSearch] = useState("");
    const [depend, setDepend] = useState(false)
    const [cookies, setCookies] = useCookies(["username", "urlProfileImage"])

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

    const handleLogout = () => {
        setCookies('access_token', "");
        setCookies('username', "");
        setCookies('urlProfileImage', "");
        navigate('/login');
    }

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
                            {cookies.username}
                        </Text>
                    </Box>
                    <Avatar src={cookies.urlProfileImage} _hover={{ cursor: 'pointer'}} onClick={handleLogout}/>
                </HStack>
            )}
        </Flex>
    )
}