import { CheckIcon } from "@chakra-ui/icons";
import { BsDot } from "react-icons/bs";
import { Box, Button, Center, Flex, Heading, HStack, Icon, Image, List, ListIcon, ListItem, Show, Stack, Text } from "@chakra-ui/react"
import { FitnessCarousel2 } from "../FitnessCarousel2";
import { FitnessCarousalTop } from "../FitnessCarouselTop";
import { Plans } from "../Plans";
import { FAQs } from "../FAQs";
import { SliderComponent } from "../SliderComponent";
import { TopCards } from "../TopCards";

const midSectionContent = [
    {
        name: "Anil Kala",
        course: "Vinyasa Yoga: Stamina",
        courseType: "YOGA",
        level: "INTERMEDIATE",
        duration:"50 Min",
        live:"22+LIVE",
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_2,f_auto,fl_progressive//image/diy/4a80e1c1-4bbd-4d92-b042-9ac1b6345bc0",
    },
    {
        name: "Suvini Mehra",
        course: "Cardio HEAT",
        courseType: "CARDIO",
        level: "INTERMEDIATE",
        duration:"45 Min",
        live:"24+LIVE",
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_2,f_auto,fl_progressive//image/diy/b56dc2d1-0e60-479a-bbc9-d728d0a7406c",
    },
    {
        name: "Swati Joshi",
        course: "Dance Fitness Xtreme",
        courseType: "DANCE",
        level: "INTERMEDIATE",
        duration:"50 Min",
        live:"26+LIVE",
        image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_2,f_auto,fl_progressive//image/diy/27013b41-1817-452c-9223-cc777d69fcf3",
    }
]


export const CarepassHome = () => {

    return (
        <Box bgColor="#12151A" color="white">

        {/* --------- Top view ------------  */}
       
        <Flex 
            ml="10%" w="80%" 
            justifyContent="space-between"
            direction={{base:"column", md:"row"}}
            gap="20px"
            >
                <Stack 
                pt="40px"
                spacing="20px" 
                w={{md:"45%"}} 
                textAlign="left">
                    <Heading fontSize="5xl">
                        carepass <Text as="span" color="orange.300">Home</Text>
                    </Heading>
                    <Heading fontSize="5xl">
                        Best of at-home group workouts
                    </Heading>
                    

                    <List fontSize="1.5rem" color="whiteAlpha.700" fontWeight="bold">
                        <ListItem>
                            <ListIcon color="red.400" p="2px" border="1px" borderRadius="50%" as={CheckIcon} />
                            1200+ at-home workouts across formats including strength, dance & yoga
                        </ListItem>

                        <ListItem>
                            <ListIcon color="red.400" p="2px" border="1px" borderRadius="50%" as={CheckIcon} />
                            30+ goal based fitness programs
                        </ListItem>

                        <ListItem>
                            <ListIcon color="red.400" p="2px" border="1px" borderRadius="50%" as={CheckIcon} />
                            Meditation sessions, health podcasts and more
                        </ListItem>
                    </List>

                    <Stack >
                        <Text fontWeight="bold" color="whiteAlpha.700" fontSize="md">Starting at Rs. 96/month</Text>
                        <Flex gap="10px">
                            
                            <Button color="red.500">TAKE 7 DAYS FREE TRAIL</Button>
                        </Flex>

                        
                    </Stack>

                </Stack>
                <Box w={{md:"52%"}}>
                    <Image borderRadius="20px" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_968,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/f0414a74-8808-485c-9e4f-e9c78258b6f2.png" />
               
                </Box>
            </Flex>

      
            <Show below="md">
                <TopCards />
            </Show>

            {/* ------- Carousal ---------  */}
            
            <FitnessCarousalTop />

            {/* ----------Carousal 2------------- */}
            
            
            <Flex 
            w="80%"
            my="60px"
            alignItems="center"
            justifyContent="space-between"
            direction={{base:"column", md:"row"}}
            >
                <HStack>
                    <Heading fontSize="3xl">Centers near</Heading>
                    <Text fontSize="xl" textDecor="underline">Hinjewadi</Text>
                </HStack>
                <Heading cursor="pointer" fontSize="2xl" color="blue.400">VIEW ALL</Heading>
            </Flex>
            <FitnessCarousel2 />


            {/* ------------ mid section ---------- */}
            
            <Box my="50px">
                <Text color="whiteAlpha.700" fontWeight="bold" fontSize="2xl">AT-CENTER</Text>
                <Heading fontSize="5xl">Trainer-led group classes</Heading>
            </Box>
            

            {/* ----- carousel------------ */}

            <SliderComponent />

            <Box my="50px">
                <Text color="whiteAlpha.700" fontWeight="bold" fontSize="2xl">AT-HOME</Text>
                <Heading fontSize="5xl">Unlimited home workouts with calorie tracking</Heading>
            </Box>
            


            <Flex w="70%" 
            justifyContent="space-between"
            direction={{base:"column", md:"row"}}
            gap="10px"
            >
                {
                    midSectionContent.map((item, i) => (
                        <Box w={{base:"100%", md:"32%"}} position="relative" >
                            <Image borderTopLeftRadius="10px" borderTopRightRadius="10px"  w="100%" h="200px" src={item.image} />
                            <Stack spacing={3} borderRadius="0 0 10px 10px" textAlign="center" bgColor="gray.700" p="10px">
                                <Text fontSize="1.1rem" color="whiteAlpha.700">{item.name}</Text>
                                <Heading fontSize="2xl">{item.course}</Heading>
                                <Flex flexWrap="wrap" alignItems="center" color="whiteAlpha.700" justifyContent="center" gap="5px">
                                    <Text>{item.courseType}</Text>
                                    <Icon fontSize="xl" as={BsDot} />
                                    <Text>{item.level}</Text>
                                    <Icon fontSize="xl" as={BsDot} />
                                    <Text>{item.duration}</Text>
                                </Flex>
                                <Center>
                                    <Button  
                                    w="fit-content"
                                    bgColor="blackAlpha.400"
                                    boxSizing="border-box"
                                    _hover={{
                                        bgColor:"blackAlpha.300"
                                    }}
                                    > <Icon color="blue.400" fontSize="2xl" as={BsDot} /> JOIN</Button>
                                </Center>
                            </Stack>
                            <Button 
                            position="absolute"
                            top="5px"
                            left="5px"
                            
                            bgColor="blackAlpha.500">{item.live}</Button>
                        </Box>
                    ))
                }
            </Flex>

            <Box my="50px">
                <Heading fontSize="5xl">Choose your carepass</Heading>
                <Text color="whiteAlpha.700" fontWeight="bold" fontSize="2xl">3 flexible plans to suit your fitness needs</Text>
            </Box>
            

            <Plans />

            <Heading fontSize="5xl" my="50px" mt="130px">FREE TRIALS</Heading> 

            <Flex 
            h={{base:"300px", "1024":"350px", lg:"400px"}} 
            w="60%" 
            justifyContent="space-between" 
            alignItems="center"
            gap="20px"
            direction={{base:"column", md:"row"}}
            // border="1px"
            >
                <Box  w= {{base:"100%", md:"33%"}}>
                    <Image h={{base:"100%", md:"90%"}} src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/22ae2a86-60e9-4de3-9180-678f40b69eb0.png" />
                </Box>
                <Box w= {{base:"100%", md:"33%"}}>
                    <Image h="100%" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/2ce1e296-e894-4f65-9dc1-d6ed11c031ae.png" />
                </Box>
                <Box w= {{base:"100%", md:"33%"}}>
                    <Image h={{base:"100%", md:"90%"}} src = "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/1300abe0-318e-489c-8205-dc770cfe6e54.png" />
                </Box>
               
              
              
            </Flex>   


            {/* ----------- FAQs section ------------ */}
            <FAQs />      
        </Box>
    )
}


