import {
    Box,
    Flex,
    Heading,
    Stack
} from "@chakra-ui/react";
import {useState} from "react";
import SignIn from "../components/auth/SignIn"
import SignUp from "../components/auth/SignUp";

export default function Auth({path}){
    const [showPassword, setShowPassword] = useState(false);
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={'gray.800'}
        >
            <Stack sopacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign {path === "/signin" ? "in" : "up"} to your account</Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={'gray.700'}
                    boxShadow={'lg'}
                    p={8}
                >
                    <Stack spacing={4}>
                        {path === "/signin" ?
                            <SignIn
                                setShowPassword={setShowPassword}
                                showPassword={showPassword}/>
                            :
                            <SignUp
                                setShowPassword={setShowPassword}
                                showPassword={showPassword}
                            />}
                    </Stack>
                </Box>
            </Stack>

        </Flex>
    )
}