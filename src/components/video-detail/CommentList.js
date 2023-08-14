import {
    Skeleton,
    Stack,
    Text,
    List,
    ListItem
} from "@chakra-ui/react";
import {io} from "socket.io-client";
import {formatDate} from "../../helpers/formatDate";

export default function CommentList({comments, setComments}){
    const socket = io(process.env.REACT_APP_HOST_SOCKET)

    socket.on("from-server", (data) => {
        const updatedComments = [...comments];
        updatedComments.unshift(data);

        setComments(updatedComments)
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
           <List spacing={3}
                 overflowY="auto"
                 maxH="60vh"
                 sx={{
                     '&::-webkit-scrollbar': {
                         width: '16px',
                         borderRadius: '8px',
                         backgroundColor: `rgba(0, 0, 0, 0.05)`,
                     },
                     '&::-webkit-scrollbar-thumb': {
                         backgroundColor: `rgba(0, 0, 0, 0.05)`,
                     },
                 }}
                css={{
                    display: 'flex',
                        flexDirection: 'column-reverse',
                }}
           >
               {comments?.map((comment, index) => {
                   return (
                       <ListItem key={index}>
                           <Text as="span" fontWeight="bold" mr={2}>{comment.username}</Text>
                           <Text as="span">{comment.comment}</Text>
                           <Text fontSize={"xs"}>{formatDate(comment.createdAt)}</Text>
                       </ListItem>
                   )
               })}
           </List>
    )
}