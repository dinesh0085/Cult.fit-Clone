import { CheckIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Flex, Heading, HStack, Icon, Image, List, ListIcon, ListItem, Stack, Text } from "@chakra-ui/react"
import { FitnessCarousel2 } from "./FitnessCarousel2";
import { FitnessCarousalTop } from "./FitnessCarouselTop";
import styles from "./FitnessIndex.module.css";
import { Plans } from "./Plans";
import { TbDiscount } from "react-icons/tb";
import { FAQs } from "./FAQs";

export const FitnessIndex = () => {
    return (
        <Box bgColor="#12151A" color="white">

        {/* --------- Top view ------------  */}
           
            <Box
            minH="110vh"
            bgImage="url('https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1600,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/838176af-9e82-4817-b9b4-e4bd03ed7271.png')"
            position="relative"
            >
                <Button mt="35%">TRY FOR FREE</Button>

                <Flex 
                w="100%"
                position="absolute" 
                p="10px" 
                bottom="0"
                justifyContent="center"
                gap="25px" 
                color="white">
                    <Stack
                    spacing="15px"
                    className={styles.card}
                    >
                        <Text>cultpass</Text>
                        <Center>
                            <Image display="block" m="auto" w="100px" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_107,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png" alt="elite" />
                        </Center>
                        <Text fontSize="1.1rem">Starting at rs. 1035/month</Text>
                    </Stack>
                    <Stack spacing="15px" className={styles.card}>
                        <Text>cultpass</Text>
                        <Center>
                        <Image  w="100px" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_78,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro-partial.png" alt="PRO" />
                        </Center>
                        <Text fontSize="1.1rem">Starting at rs. 678/month</Text>
                    </Stack>
                    <Stack spacing="15px" className={styles.card}>
                        <Text>cultpass</Text>
                        <Center>
                        <Image w="120px" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_112,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-home-partial-1.svg" alt="home" />
                        </Center>
                        <Text fontSize="1.1rem">Starting at rs. 117/month</Text>
                    </Stack>
                </Flex>
            </Box>

            {/* ------- Carousal ---------  */}

            <FitnessCarousalTop />

            {/* ----------Carousal 2------------- */}
            
            <Flex 
            w="80%"
            my="60px"
            alignItems="center"
            justifyContent="space-between">
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


            <Box my="50px">
                <Text color="whiteAlpha.700" fontWeight="bold" fontSize="2xl">AT-HOME</Text>
                <Heading fontSize="5xl">Unlimited home workouts with calorie tracking</Heading>
            </Box>
            

            {/* ----- carousel------------ */}

            <Box my="50px">
                <Heading fontSize="5xl">Choose your carepass</Heading>
                <Text color="whiteAlpha.700" fontWeight="bold" fontSize="2xl">3 flexible plans to suit your fitness needs</Text>
            </Box>
            

            <Plans />

            <Heading fontSize="5xl" my="50px" mt="130px">FREE TRIALS</Heading> 

            <Flex h="400px" w="60%" justifyContent="space-between" alignItems="center">
                <Image h="90%" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/22ae2a86-60e9-4de3-9180-678f40b69eb0.png" />
               
                <Image h="100%" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/2ce1e296-e894-4f65-9dc1-d6ed11c031ae.png" />
              
                <Image h="90%" src = "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/1300abe0-318e-489c-8205-dc770cfe6e54.png" />
              
            </Flex>   


            <Flex mt="100px" ml="10%" w="80%" justifyContent="space-between">
                <Stack spacing="20px" w="45%" textAlign="left">
                    <Heading fontSize="4xl">
                        carepass <Text as="span" color="orange.300">ELITE</Text>
                    </Heading>
                    <Heading fontSize="5xl">
                        Unlimited access to everything in your city
                    </Heading>
                    <Heading fontSize="2xl">Unlimited access to</Heading>

                    <List fontSize="md" color="whiteAlpha.800" fontWeight="bold">
                        <ListItem>
                            <ListIcon color="red.400" p="2px" border="1px" borderRadius="50%" as={CheckIcon} />
                            At-center group classes
                        </ListItem>

                        <ListItem>
                            <ListIcon color="red.400" p="2px" border="1px" borderRadius="50%" as={CheckIcon} />
                            All ELITE & PRO gyms
                        </ListItem>

                        <ListItem>
                            <ListIcon color="red.400" p="2px" border="1px" borderRadius="50%" as={CheckIcon} />
                            At-home live workouts
                        </ListItem>
                    </List>

                    <Stack >
                        <Text fontWeight="bold" color="whiteAlpha.700" fontSize="md">Starting at Rs. 1499/month</Text>
                        <Flex gap="10px">
                            <Button bgColor="gray">TRY FOR FREE</Button>
                            <Button color="red.500">BUY NOW</Button>
                        </Flex>

                        <Flex alignItems="center" gap="5px" fontSize="0.9rem">
                            <Icon as={TbDiscount} color="orange.400" />
                            SALE ON NOW
                        </Flex>
                    </Stack>

                </Stack>
                <Box w="52%" border="1px"></Box>
            </Flex> 

            <Flex mt="100px" pb="100px" ml="10%" w="80%" justifyContent="space-between">
                <Box w="52%" border="1px"></Box>
                <Stack spacing="20px" w="45%" textAlign="left">
                    <Heading fontSize="4xl">
                        carepass <Text as="span" color="orange.300">PRO</Text>
                    </Heading>
                    <Heading fontSize="5xl">
                    Unlimited access to PRO gyms in your city
                    </Heading>
                    <Heading fontSize="2xl">Unlimited access to</Heading>

                    <List fontSize="md" color="whiteAlpha.800" fontWeight="bold">
                        <ListItem>
                            <Flex gap="2" alignItems="center">
                                <CheckIcon color="red.400" border="1px" padding="2px" borderRadius="50%" />
                                <Text>All PRO gyms</Text>
                            </Flex>                            
                        </ListItem>

                        <ListItem>
                            <Flex gap="2" alignItems="center">
                                <CheckIcon color="red.400" border="1px" padding="2px" borderRadius="50%" />
                                <Text> At-home live workouts</Text>
                            </Flex>                           
                        </ListItem>

                        <ListItem>
                            <Flex gap="2" alignItems="center">
                                <CheckIcon color="red.400" border="1px" padding="2px" borderRadius="50%" />
                                <Text>2 sessions/month at ELITE gyms & group classes</Text>
                            </Flex>
                            
                        </ListItem>
                    </List>

                    <Stack >
                        <Text fontWeight="bold" color="whiteAlpha.700" fontSize="md">Starting at Rs. 1666/month</Text>
                        <Flex gap="10px">
                            <Button bgColor="gray">TRY FOR FREE</Button>
                            <Button color="red.500">BUY NOW</Button>
                        </Flex>

                        <Flex alignItems="center" gap="5px" fontSize="0.9rem">
                            <Icon as={TbDiscount} color="orange.400" />
                            SALE ON NOW
                        </Flex>
                    </Stack>

                </Stack>

                
            </Flex>

            <Stack 
            w="70%" 
            border="1px" 
            textAlign="left"
            p="30px"
            spacing="5"
            borderRadius="20px"
            >
                <Text fontSize="5xl">carepass <Text color="hotpink" as="span">HOME</Text></Text>
                <Heading fontSize="5xl">Bring the gym home</Heading>

                <Stack>
                    <Heading fontSize="2xl">Unlimited access to</Heading>

                    <List spacing={2} fontSize="lg" fontWeight="bold" color="whiteAlpha.700">
                        <ListItem>
                            <Flex gap="2" alignItems="center">
                                <CheckIcon color="red.400" border="1px" padding="2px" borderRadius="50%" />
                                <Text>At-home workouts</Text>
                            </Flex>
                        </ListItem>
                        <ListItem>
                            <Flex gap="2" alignItems="center">
                                <CheckIcon color="red.400" border="1px" padding="2px" borderRadius="50%" />
                                <Text>Celebrity workouts</Text>
                            </Flex>
                        </ListItem>
                        <ListItem>
                            <Flex gap="2" alignItems="center">
                                <CheckIcon color="red.400" border="1px" padding="2px" borderRadius="50%" />
                                <Text>Goal-based workouts & meditation sessions</Text>
                            </Flex>
                            
                        </ListItem>
                    </List>
                </Stack>
                

                <Stack>
                    <Text color="whiteAlpha.700" fontSize="xl">Starting at Rs.117/month</Text>
                    <Flex gap="5">
                        <Button fontWeight="bold" bgColor="gray">TRY FOR FREE</Button>
                        <Button fontWeight="bold" color="red.400">BUY NOW</Button>
                    </Flex>
                </Stack>
                
                <Flex gap="5px" alignItems="center">
                    <Icon color="orange.500" as={TbDiscount} /> 
                    <Text fontSize="sm">SALE ON NOW</Text>
                </Flex>
            </Stack> 

            <Box
            mt="70px" 
            w="80%" 
            border="1px"
            >
                <Stack spacing={10} my="10" w="80%" textAlign="left">
                    <Box>
                        <Text fontSize="4xl">care transform</Text>
                        <Heading fontSize="4xl">Lose weight for good</Heading>
                    </Box>
                    

                    <List fontSize="xl" spacing={3}>
                        <ListItem>
                            <ListIcon />
                            Online Habit Coach
                        </ListItem>

                        <ListItem>
                            <ListIcon />
                            Detailed Nutritional Guidelines
                        </ListItem>

                        <ListItem>
                            <ListIcon />
                            Customized Workout Plan
                        </ListItem>

                        <ListItem>
                            <ListIcon />
                            Daily Check-ins & More!
                        </ListItem>

                    </List>

                    <Text color="blue.200">EXPLORE OFFERS</Text>
                </Stack>
            </Box>


            {/* ----------- FAQs section ------------ */}
            <FAQs />      
        </Box>
    )
}