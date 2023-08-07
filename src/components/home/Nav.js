import {Box, Flex, Heading, HStack, IconButton, Input, InputGroup, InputRightElement, Spacer} from "@chakra-ui/react";
import {ArrowBackIcon, SearchIcon} from "@chakra-ui/icons";
import {useState} from "react";

export default function Nav(){
    const [isSearchVisible, setIsSearchVisible] = useState(false)

    function handleSearchIcon(){
        setIsSearchVisible(!isSearchVisible)
    }

    return (
        <Flex as="nav" p="20px" my="10px" alignItems="center">
            <HStack spacing="20px">
                <ArrowBackIcon />
                <Heading fontSize="md">Play</Heading>
            </HStack>
            <Spacer/>
            <HStack spacing="20px">
                <InputGroup >
                    {isSearchVisible && (
                        <Input placeholder="Search"/>
                    )}
                </InputGroup>
                <SearchIcon
                    onMouseEnter={handleSearchIcon}
                    onClick={handleSearchIcon}
                    cursor="pointer"
                />
            </HStack>
        </Flex>
    )
}