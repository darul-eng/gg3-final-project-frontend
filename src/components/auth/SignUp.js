import {
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement, Link,
    Stack,
    Text
} from "@chakra-ui/react";
import {ViewIcon, ViewOffIcon} from "@chakra-ui/icons";
import {Link as LinkRouter, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

export default function SignUp({showPassword, setShowPassword}){
    const API_URI = process.env.REACT_APP_API_URL
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({...prevData, [name]: value}));
    }
    const handleRegister = async (e) => {
        e.preventDefault();

        const headers = {
            Accept: "application/json"
        }

        const responses = await axios.post(API_URI+`/api/v1/users/signup`, formData, {
            headers: headers
        });
        const data = responses.data;
        console.log(data.code)
        if (data.code === 201) {
            navigate('/login');
        }else{
            console.log(responses.data?.message)
            setFormData({username: "", password: ""})
        }

    }

    return (
        <form onSubmit={handleRegister}>
            <FormControl id="email" isRequired>
                <FormLabel>Username</FormLabel>
                <Input type="text" name="username" value={formData.username} onChange={handleOnChange}/>
            </FormControl>
            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input type={showPassword ? 'text' :"password"} name="password" value={formData.password} onChange={handleOnChange} />
                    <InputRightElement h={'full'}>
                        <Button
                            variant={'ghost'}
                            onClick={() => setShowPassword((showPassword) => !showPassword)}
                        >
                            {showPassword ? <ViewIcon /> : <ViewOffIcon/>}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <Stack
                spacing={10}
                pt={2}
            >
                <Button
                    loadingText="Submitting"
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                        bg: 'blue.500'
                    }}
                    type='submit'
                >
                    Sign Up
                </Button>
            </Stack>
            <Stack pt={6}>
                <Text align={'center'}>
                    Already a user? <Link color={'blue.400'}><LinkRouter to='/login'>Sign In</LinkRouter></Link>
                </Text>
            </Stack>
        </form>
    )
}