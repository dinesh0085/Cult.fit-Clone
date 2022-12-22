import { Box, Button, Center, Divider, Flex, Heading, HStack, Icon, Image, Stack, Text } from "@chakra-ui/react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";

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
        title: "MULTIFIT (GRAND TAMANNA)",
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
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide:0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 515,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    return (
        <Box w="80%" mt="40px">
            <Slider {...settings}>
                {
                    content.map((item, i) => (
                        <Box p="10px" key={i} >
                            <Box>
                                <Image borderRadius="20px 20px 0 0" w="100%" h="250px" src={item.img} />
                            </Box>
                            <Box minH="180px" bgColor="gray.600" pb="5px" borderRadius="0 0 20px 20px">
                                <Flex p="20px" mt="10px" 
                                justifyContent="space-between"
                                textAlign="left"
                                direction={{base:"column", lg:"row"}}
                                >
                                    <Stack textAlign="left">
                                        <Heading noOfLines={1} fontSize="4xl">{item.title}</Heading>
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
                                        <Button 
                                        bgColor="gray.500"
                                        _hover={{
                                            bgColor:"gray.800"
                                        }}
                                        >{item.buttonText}</Button>
                                    </Box>
                                </Flex>
                                {(i !== content.length-1) ? <Divider /> : <Text></Text>}
                                <Text m="20px" textAlign="left">{(i!==content.length-1) ? `Unlimited access starting at Rs. ${item.price}` : " "}</Text>
                            </Box>
                            
                        </Box>
                    ))
                }
            </Slider>
        </Box>
    )
}