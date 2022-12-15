import { Box, Button, Center, Divider, Flex, Heading, HStack, Icon, Image, List, Stack, Text } from "@chakra-ui/react"
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const content = [
    {
        title: "CARE WAKAD",
        location: "Wakad",
        type: "Group Classes",
        price:"1035/mo",
        buttonText: "TRY FOR FREE",
        img:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_300,fl_progressive,f_auto,q_auto:eco/dpr_2/v1/cult-media/v2web/centers/center_236_IMAGE_18f50b15-ffb6-4c1d-80ee-be68cab26563.png"
    },
    {
        title: "KRATOS",
        location: "Hinjewadi",
        type: "Gym",
        price:"678/mo",
        buttonText: "TRY FOR FREE",
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_300,fl_progressive,f_auto,q_auto:eco/dpr_2/image/gymfit/centers/prod/CENTER153/f5e2db6a-1992-43d6-bbef-1a57118a1946_DSC2789-HDR.JPG"
    },
    {
        title: "MULTIFIT(GRAND TAMANNA)",
        location: "Hinjewadi",
        type: "Gym",
        price:"1035",
        buttonText: "TRY FOR FREE",
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_300,fl_progressive,f_auto,q_auto:eco/dpr_2/image/gymfit/centers/prod/CENTER199/d0170bb6-9f71-42da-be1d-2c47722dec1a1.jpg"
    },
    {
        title: "MORE CENTRES",
        location: "Click on see more to expand your search",
        type: "",
        price:"",
        buttonText: "SEE MORE",
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_300,fl_progressive,f_auto,q_auto:eco/dpr_2/image/icons/cult/no_gyms.png"
    }
    
]

export const FitnessCarousel2 = () => {
    return (
        <Box w="80%" mt="40px">
            <Carousel width="70%">
                {
                    content.map((item, i) => (
                        <Box key={i} >
                            <Box>
                                <Image w="50%" h="250px" src={item.img} />
                            </Box>
                            <Flex p="20px" mt="10px" justifyContent="space-between">
                                <Stack>
                                    <Heading>{item.title}</Heading>
                                    <HStack>
                                        <Text>{item.location}</Text>
                                        {
                                            (i!==content.length-1)
                                            ?(
                                                <Center>
                                                    <Icon fontSize="0.5rem" viewBox='0 0 200 200'>
                                                        <path
                                                            fill='white'
                                                            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                                                        />
                                                    </Icon>
                                                </Center>
                                            ) : <Text as={'span'}></Text>
                                        }
                                        
                                        
                                        <Text>{item.type}</Text>
                                    </HStack>
                                </Stack>
                                <Box>
                                    <Button bgColor="gray.600">{item.buttonText}</Button>
                                </Box>
                            </Flex>
                            {(i !== content.length-1) ? <Divider /> : <Text></Text>}
                            <Text m="20px" textAlign="left">{(i!==content.length-1) ? `Unlimited access starting at Rs. ${item.price}` : " "}</Text>
                        </Box>
                    ))
                }
            </Carousel>
        </Box>
    )
}