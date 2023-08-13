import {AspectRatio} from '@chakra-ui/react'

export default function VideoPLayer({videoId}){
    return (
            <AspectRatio maxH='90vh' ratio={1}>
                <iframe
                    title='naruto'
                    src={`https://www.youtube.com/embed/${videoId}`}
                />
            </AspectRatio>
    )
}