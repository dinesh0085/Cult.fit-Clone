import { Box, Button, Center, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react"
import { FitnessCarousalTop } from "./FitnessCarouselTop";
import styles from "./FitnessIndex.module.css";

export const FitnessIndex = () => {
    return (
        <Box>

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
        </Box>
    )
}