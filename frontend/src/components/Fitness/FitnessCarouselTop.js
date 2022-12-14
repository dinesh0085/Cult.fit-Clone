import { Box, Flex, Heading, Icon, Stack, Text } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import {MinusIcon} from "@chakra-ui/icons";

const content = [
    {
        heading: "EXTRA RS. 1000 MYNTRA VOUCHER + FREE 2 MONTHS EXTENSION",
        about: "on cultpass ELITE",
        time:""
    },
    {
        heading: "EXTRA RS.750 MYNTRA VOUCHER + FREE 1.5 MONTHS EXTENSION",
        about: "on cultpass PRO",
        time:""
    },
    {
        heading: "UPTO RS. 1000 OFF + 3 MONTHS FREE",
        about: "on cult TRANSFORM",
        time:""
    }, {
        heading: "UPTO 4 MONTHS EXTENSION FREE ON ALL PACKS",
        about : "on cultpass HOME",
        time: ""
    }
]
export const FitnessCarousalTop = () => {
    const [index, setIndex] = useState(0);

    const inputIndex = useRef(null);

    useEffect(()=>{
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
    }, [index]);


    return (
        <Box>
            <Flex gap="30px">
                <Stack>
                    <Heading>{content[index].heading}</Heading>
                    <Text>{content[index].about}</Text>
                </Stack>
                <Stack>
                    <Text>--- Ends In ---</Text>
                    <Text>{content[index].time}</Text>
                </Stack>
            </Flex>
            <Flex>
                {
                    content.map((el, i) =>(
                        <MinusIcon key={i} />
                    ))
                }
            </Flex>
        </Box>
    )
}