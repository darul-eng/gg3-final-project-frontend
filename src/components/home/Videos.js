import {
    Card,
    CardBody,
    SimpleGrid,
    Stack,
    Text, Flex
} from "@chakra-ui/react";
import {TimeIcon} from "@chakra-ui/icons";
import {Link as LinkRouter} from "react-router-dom"

const videos = [
    {
        _id: "a",
        videoId: "1",
        imgThumUrl: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
        _id: "b",
        videoId: "2",
        imgThumUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
        _id: "c",
        videoId: "2",
        imgThumUrl: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
        _id: "d",
        videoId: "4",
        imgThumUrl: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
        _id: "e",
        videoId: "5",
        imgThumUrl: "https://images.unsplash.com/photo-1584865288642-42078afe6942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },{
        _id: "f",
        videoId: "6",
        imgThumUrl: "https://images.unsplash.com/photo-1551854838-212c50b4c184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
        _id: "g",
        videoId: "7",
        imgThumUrl: "https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },{
        _id: "h",
        videoId: "8",
        imgThumUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80"
    },{
        _id: "i",
        videoId: "9",
        imgThumUrl: "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },{
        _id: "j",
        videoId: "10",
        imgThumUrl: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2030&q=80"
    },{
        _id: "k",
        videoId: "11",
        imgThumUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },{
        _id: "l",
        videoId: "12",
        imgThumUrl: "https://images.unsplash.com/photo-1590548784585-643d2b9f2925?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
    },
    {
        _id: "m",
        videoId: "13",
        imgThumUrl: "https://images.unsplash.com/photo-1603298333647-ed142dbbc9d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80"
    }
]

export default function Videos(){
    return (
        <SimpleGrid p="10px" columnGap={6} rowGap={6} minChildWidth="300px">
            {videos.map((video) => {
                return (
                    <LinkRouter to={`/channels/${video._id}`}>
                        <Card
                            bgImage={`url(${video.imgThumUrl})`}
                            bgSize="cover"
                            bgPosition="center"
                            h="xl"
                        >
                            <CardBody>
                                <Flex direction='column' h="100%" justify="flex-end" alignItems="start">
                                    <Stack spacing='0'>
                                        <Text fontSize="10px" bg="red.600" color="whitesmoke" px="3px" py="1px" borderRadius="md">
                                            Hanya saat LIVE
                                        </Text>
                                        <Text fontSize="10px" bg="green.600" color="whitesmoke" px="3px" py="1px" borderRadius="md">
                                            <TimeIcon mr="2px"/>
                                            Kupon Spesial
                                        </Text>
                                        <Text color='whitesmoke' fontSize='md' mt=".5rem">
                                            Ultra Sharp
                                        </Text>
                                        <Text color='whitesmoke' fontSize='sm'>
                                            Viger
                                        </Text>
                                    </Stack>
                                </Flex>
                            </CardBody>
                        </Card>
                    </LinkRouter>
                )
            })}
        </SimpleGrid>
    )
}