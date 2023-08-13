import {
    FormControl,
    FormHelperText,
    Input,
    Button
} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import axios from "axios";
import {io} from "socket.io-client";

export default function CommentForm({videoId}){
    const [socket, setSocket] = useState(null);
    const API_URI = process.env.REACT_APP_API_URL;
    const HOST_SOCKET = process.env.REACT_APP_HOST_SOCKET
    const [formData, setFormData] = useState({
       videoID: videoId,
       username: '',
       comment: ''
    })

    useEffect(() => {
        setSocket(io(HOST_SOCKET))
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const headers = {
            Accept: "application/json"
        }
        const comment = await axios.post(API_URI+`/api/v1/videos/${videoId}/comments`, formData, headers)

        socket.emit('from-client', comment.data.data)

        setFormData({videoID: videoId, username: "", comment: ""})
    }

    const handleOnChange = (e) => {
       const {name, value} = e.target;
       setFormData((prevData) => ({...prevData, [name]: value}));
    }
    return (
       <form onSubmit={handleSubmit}>
           <FormControl p={2}>
               <Input
                   mb={1}
                   type='text'
                   name="username"
                   value={formData.username}
                   onChange={handleOnChange}
                   placeholder="username"/>
               <Input
                   type='text'
                   name="comment"
                   value={formData.comment}
                   onChange={handleOnChange}
                   placeholder="comment"/>
               <FormHelperText>Input your comment.</FormHelperText>
               <Button
                   mt={4}
                   colorScheme='teal'
                   type='submit'
               >
                   Submit
               </Button>
           </FormControl>
       </form>
    )
}