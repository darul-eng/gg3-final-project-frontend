import {
    Card,
    CardBody,
    SimpleGrid,
    Stack,
    Text, Flex, Skeleton
} from "@chakra-ui/react";
import {TimeIcon} from "@chakra-ui/icons";
import {Link as LinkRouter} from "react-router-dom";
import {useVideos} from "../../context/VideosContext";

export default function Videos(){
    const {videos} = useVideos();

    if (videos === null){
        return (
            <Stack>
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
            </Stack>
        )
    }

    return (
        <SimpleGrid p="10px" columnGap={6} rowGap={6} minChildWidth="300px" >
            {videos.data?.map((video, index) => {
                return (
                    <LinkRouter key={index} to={`/channels/${video.videoID}`}>
                        <Card
                            bgImage={`url(${video.urlImgThumb})`}
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