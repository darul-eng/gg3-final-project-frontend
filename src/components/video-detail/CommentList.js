import {
    Skeleton,
    Stack,
    Text,
    List,
    ListItem
} from "@chakra-ui/react";
import {io} from "socket.io-client";

export default function CommentList({comments, setComments}){
    const socket = io("http://localhost:4000")

    socket.on("from-server", (data) => {
        setComments([...comments, data])
    })

    console.log(comments)

    if (comments === null){
        return (
            <Stack>
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
            </Stack>
        )
    }

    return (
           <List spacing={3}>
               {comments?.map((comment, index) => {
                   return (
                       <ListItem key={index}>
                           <Text as="span" fontWeight="bold" mr={2}>{comment.username}</Text>
                           <Text as="span">{comment.comment}</Text>
                       </ListItem>
                   )
               })}
           </List>
    )
}