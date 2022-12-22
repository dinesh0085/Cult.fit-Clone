import { Center, Flex, Image, Stack, Text } from "@chakra-ui/react"
import styles from "./FitnessIndex.module.css";


export const TopCards = () => {
    return (
        <Flex 
                w="80%"
                m="auto"
                // position={{md:"absolute"}} 
                p="10px" 
                bottom={{md:"0"}}
                justifyContent="center"
                gap="25px" 
                color="white"
                direction={{base:"column", md:"row"}}
                >
                    <Stack
                    spacing="15px"
                    className={styles.card}
                    bgColor="blue.900"
                    _hover={{
                        bgColor:"blue.800"
                    }}
                    >
                        <Text fontSize="3xl" color="whiteAlpha.700" fontWeight="bold">carepass</Text>
                        <Center>
                            <Image display="block" m="auto" w="100px" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_107,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png" alt="elite" />
                        </Center>
                        <Text color="whiteAlpha.700" fontWeight="bold" fontSize="1.1rem">Starting at rs. 1035/month</Text>
                    </Stack>
                    <Stack 
                    spacing="15px" 
                    className={styles.card}
                    bgColor="blue.900"
                    _hover={{
                        bgColor:"blue.800"
                    }}>
                        <Text fontSize="3xl" color="whiteAlpha.700" fontWeight="bold">carepass</Text>
                        <Center>
                        <Image  w="100px" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_78,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro-partial.png" alt="PRO" />
                        </Center>
                        <Text color="whiteAlpha.700" fontWeight="bold" fontSize="1.1rem">Starting at rs. 678/month</Text>
                    </Stack>
                    <Stack 
                    spacing="15px" 
                    className={styles.card}
                    bgColor="blue.900"
                    _hover={{
                        bgColor:"blue.800"
                    }}>
                        <Text fontSize="3xl" color="whiteAlpha.700" fontWeight="bold">carepass</Text>
                        <Center>
                        <Image w="120px" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_112,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-home-partial-1.svg" alt="home" />
                        </Center>
                        <Text color="whiteAlpha.700" fontWeight="bold" fontSize="1.1rem">Starting at rs. 117/month</Text>
                    </Stack>
                </Flex>
    )
}