import {
    Card,
    CardBody,
    HStack,
    List,
    Stack,
    Text,
    Image,
    Heading,
    Divider,
    Skeleton,
    Link
} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {useRequestAPI} from "../../hooks/useRequestAPI"

export default function ProductList({videoId}){
    const [products, setProducts] = useState(null);

    //custom hooks to request api
    useRequestAPI("GET", `/videos/${videoId}/products`, {})
        .then(responses => setProducts(responses))

    if (products === null || products.length === 0){
        return (
            <Stack>
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
            </Stack>
        )
    }

    return (
        <Stack
            overflowY="auto"
            maxH="100vh"
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
        >
            <List>
                {products.data?.map((product, index) => {
                   return (
                       <Link key={index} href={product.linkProduct} isExternal>
                           <Card maxW='sm' m={1}>
                               <CardBody>
                                   <Image
                                       src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                       alt='Green double couch with wooden legs'
                                       borderRadius='md'
                                   />
                                   <Stack mt='6' spacing='3'>
                                       <Heading size='sm'>{product.title}</Heading>
                                       <Text color='blue.600' fontSize='md'>
                                           Rp.{(+product.price).toLocaleString("id-ID")}
                                       </Text>
                                   </Stack>
                               </CardBody>
                               <Divider />
                           </Card>
                       </Link>
                   )
                })}
            </List>
        </Stack>
    )
}