import { Box, Button, Center, Flex, Heading, HStack, Icon, Image, List, ListIcon, ListItem, Stack, Text } from "@chakra-ui/react"
import { FitnessCarousel2 } from "./FitnessCarousel2";
import { FitnessCarousalTop } from "./FitnessCarouselTop";
import styles from "./FitnessIndex.module.css";
import { Plans } from "./Plans";

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

            <Text>AT-CENTER</Text>
            <Heading>Trainer-led group classes</Heading>

            {/* ----- carousel------------ */}


            <Text>AT-HOME</Text>
            <Heading>Unlimited home workouts with calorie tracking</Heading>

            {/* ----- carousel------------ */}


            <Heading>Choose your carepass</Heading>
            <Text>3 flexible plans to suit your fitness needs</Text>

            <Plans />

            <Heading>FREE TRIALS</Heading> 

            <Flex>
                <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/22ae2a86-60e9-4de3-9180-678f40b69eb0.png" />
               
                <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/2ce1e296-e894-4f65-9dc1-d6ed11c031ae.png" />
              
                <Image src = "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/1300abe0-318e-489c-8205-dc770cfe6e54.png" />
              
            </Flex>   


            <Flex>
                <Stack>
                    <Heading>
                        carepass ELITE
                    </Heading>
                    <Heading>
                        Unlimited access to everything in your city
                    </Heading>
                    <Text>Unlimited access to</Text>

                    <List>
                        <ListItem>
                            <ListIcon />
                            At-center group classes
                        </ListItem>

                        <ListItem>
                            <ListIcon />
                            All ELITE & PRO gyms
                        </ListItem>

                        <ListItem>
                            <ListIcon />
                            At-home live workouts
                        </ListItem>
                    </List>

                    <Box>
                        <Text>Starting at Rs. 1499/month</Text>
                        <Flex gap="10px">
                            <Button bgColor="gray">TRY FOR FREE</Button>
                            <Button color="red.500">BUY NOW</Button>
                        </Flex>

                        <Text>
                            <Icon />
                            SALE ON NOW
                        </Text>
                    </Box>

                </Stack>
                <Box></Box>
            </Flex> 

             <Flex>
                <Box></Box>
                <Stack>
                    <Heading>
                        carepass PRO
                    </Heading>
                    <Heading>
                        Unlimited access to PRO gyms in your city
                    </Heading>
                    <Text>Unlimited access to</Text>

                    <List>
                        <ListItem>
                            <ListIcon />
                            All PRO gyms
                        </ListItem>

                        <ListItem>
                            <ListIcon />
                            At-home live workouts
                        </ListItem>

                        <ListItem>
                            <ListIcon />
                            2 sessions/month at ELITE gyms & group classes
                        </ListItem>
                    </List>

                    <Box>
                        <Text>Starting at Rs. 1666/month</Text>
                        <Flex gap="10px">
                            <Button bgColor="gray">TRY FOR FREE</Button>
                            <Button color="red.500">BUY NOW</Button>
                        </Flex>

                        <Text>
                            <Icon />
                            SALE ON NOW
                        </Text>
                    </Box>

                </Stack>
                
            </Flex>       
        </Box>
    )
}