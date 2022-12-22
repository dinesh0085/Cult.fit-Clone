import { Box, Flex, Heading, Icon, Stack, Text } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import {MinusIcon} from "@chakra-ui/icons";

const content = [
    {
        heading: "EXTRA RS. 1000 MYNTRA VOUCHER + FREE 2 MONTHS EXTENSION",
        about: "on cultpass ELITE",
        time:"08:00:60",
        bgColor:"red.400"
    },
    {
        heading: "EXTRA RS.750 MYNTRA VOUCHER + FREE 1.5 MONTHS EXTENSION",
        about: "on cultpass PRO",
        time:"08:00:60",
        bgColor:"blue.500",
    },
    {
        heading: "UPTO RS. 1000 OFF + 3 MONTHS FREE",
        about: "on cult TRANSFORM",
        time:"08:00:60",
        bgColor:"yellow.600",
    }, 
    {
        heading: "UPTO 4 MONTHS EXTENSION FREE ON ALL PACKS",
        about : "on cultpass HOME",
        time: "08:00:60",
        bgColor:"green.400"
    }
]
export const FitnessCarousalTop = () => {
    const [index, setIndex] = useState(0);

    const inputIndex = useRef(null);

    const handleClick= (i) =>{
        clearInterval(inputIndex.current);
        inputIndex.current = null;
        setIndex(i);
        handleInterval();
    }

    const handleInterval = () => {
        if(inputIndex.current == null){
            inputIndex.current = setInterval(()=>{
                setIndex(prev => {
                    if(prev === content.length-1)
                        return 0;
                    else    
                        return prev+1;
                });
            }, 2000);
        }
    }
    useEffect(()=>{
        handleInterval();
    }, [index]);


    return (
        <Box>
            <Flex 
            w="80%" 
            borderRadius="10px" 
            gap="30px" 
            padding="20px" 
            border="1px solid white"
            bgColor={content[index].bgColor}
            mt="60px"
            minH="150px"
            direction={{base:"column", md:"row"}}
            >
                <Stack textAlign="left" w={{base:"100%", md:"60%"}}>
                    <Heading 
                    fontSize= "3xl"
                    >{content[index].heading}</Heading>
                    <Text fontSize="xl">{content[index].about}</Text>
                </Stack>
                <Stack 
                w={{base:"100%", md:"35%"}}
                >
                    <Text fontSize="xl">--- Ends In ---</Text>
                    <Text fontSize="4xl">{content[index].time}</Text>
                </Stack>
            </Flex>
            <Flex mt="10px" gap="15px" justifyContent="center">
                {
                    content.map((el, i) =>(
                        <MinusIcon color={(i==index)?"white" : "whiteAlpha.400"} fontSize="4xl" onClick={()=> handleClick(i)} key={i} />
                    ))
                }
            </Flex>
        </Box>
    )
}