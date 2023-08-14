import {
    Button,
    Checkbox,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement, Link,
    Stack
} from "@chakra-ui/react";
import {ViewIcon, ViewOffIcon} from "@chakra-ui/icons";
import {Link as LinkRouter, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import {useCookies} from "react-cookie"

export default function SignIn({showPassword, setShowPassword}){
    const API_URI = process.env.REACT_APP_API_URL
    const [cookies, setCookies] = useCookies(["access_token", "username", "urlProfileImage"])
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({...prevData, [name]: value}));
    }
    const handleLogin = async (e) => {
        e.preventDefault();

        const headers = {
            Accept: "application/json"
        }

        const responses = await axios.post(API_URI+`/api/v1/users/signin`, formData, {
            headers: headers
        });
        const data = responses.data;

        if (data.code === 200) {
            console.log(data.data.token);
            setCookies('access_token', data.data.token);
            setCookies('username', data.data.username);
            setCookies('urlProfileImage', data.data.urlProfileImage);
            navigate('/channels');
        }else{
            console.log(responses.data?.message)
            setFormData({username: "", password: ""})
        }

    }
    return (
        <form onSubmit={handleLogin}>
            <FormControl id="email" isRequired>
                <FormLabel>Username</FormLabel>
                <Input type="text"  name="username" value={formData.username} onChange={handleOnChange}/>
            </FormControl>
            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input type={showPassword ? 'text' :"password"} name="password" value={formData.password} onChange={handleOnChange}/>
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
            >
                <Stack
                    direction={{base: 'column', sm: 'row'}}
                    align={'start'}
                    justify={'space-between'}
                >
                    <Checkbox>Remember me</Checkbox>
                    <Link color={'blue.400'}><LinkRouter to='/'>Sign Up</LinkRouter></Link>
                </Stack>
                <Button
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                        bg: 'blue.500'
                    }}
                    type="submit"
                >
                    Sign in
                </Button>
            </Stack>
        </form>
    )
}