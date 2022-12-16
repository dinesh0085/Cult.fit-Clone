import { Box, Button, Image, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import {CheckIcon, CloseIcon} from "@chakra-ui/icons";

export const Plans = () => {
    return (
        <TableContainer  maxWidth="65%" whiteSpace="wrap" >
            <Table size="65%" >
                <Thead>
                    <Tr>
                        <Th borderBottom="0px" p="5"></Th>
                        <Th borderBottom="0" p="5" >
                            <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_89,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png" />
                        </Th>
                        <Th borderBottom="0" p="5">
                            <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_65,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro-partial.png" />
                        </Th>
                        <Th borderBottom="0" p="5">
                            <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_93,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-home-partial-1.svg" />
                        </Th>
                    </Tr>
                </Thead>
                <Tbody >
                    <Tr>
                        <Td  maxWidth="200px" p="5" borderColor="whiteAlpha.600" borderRight="1px  solid gray">
                        ELITE Gyms & At Centre Group Classes
                        </Td>
                        <Td textAlign="center" p="5" borderColor="whiteAlpha.600"  borderRight="1px  solid gray">
                            <CheckIcon border="1px" borderRadius="50%" p="3px" color="blue.400" fontSize="xl" /> 
                            <Text>Unlimited</Text>
                        </Td>
                        <Td p="5" textAlign="center" borderRight="1px solid gray" borderColor="whiteAlpha.600" > 02 Sessions/ month</Td>
                        <Td p="5" textAlign="center" borderColor="whiteAlpha.600"  >
                            <CloseIcon border="1px" borderRadius="50%" p="3px" color="gray" fontSize="xl" />
                        </Td>
                    </Tr>
                    <Tr>
                        <Td  borderRight="1px  solid gray" borderColor="whiteAlpha.600"  maxWidth="200px" p="5">PRO Gyms</Td>
                        <Td textAlign="center" borderColor="whiteAlpha.600"  borderRight="1px  solid gray" p="5">
                            <CheckIcon border="1px" borderRadius="50%" p="3px" color="blue.400" fontSize="xl" /> 
                            <Text>Unlimited</Text>
                        </Td>
                        <Td textAlign="center" borderRight="1px solid gray" borderColor="whiteAlpha.600"  p="5">
                            <CheckIcon border="1px" borderRadius="50%" p="3px" color="blue.400" fontSize="xl" /> 
                            <Text>Unlimited</Text>
                        </Td>
                        <Td textAlign="center" p="5" borderColor="whiteAlpha.600" >
                            <CloseIcon border="1px" borderRadius="50%" p="3px" color="gray" fontSize="xl" />
                        </Td>
                    </Tr>
                    <Tr>
                        <Td borderRight="1px solid gray" borderColor="whiteAlpha.600"  maxWidth="200px" p="5">Smart workout plan</Td>
                        <Td  textAlign="center" borderRight="1px solid gray" borderColor="whiteAlpha.600"  p="5">
                            <CheckIcon border="1px" borderRadius="50%" p="3px" color="blue.400" fontSize="xl" /> 
                            <Text>Unlimited</Text>
                        </Td>
                        <Td textAlign="center" borderRight="1px solid gray" borderColor="whiteAlpha.600"  p="5">
                            <CheckIcon border="1px" borderRadius="50%" p="3px" color="blue.400" fontSize="xl" /> 
                            <Text>Unlimited</Text>                        </Td>
                        <Td textAlign="center" p="5" borderColor="whiteAlpha.600" >
                            <CloseIcon border="1px" borderRadius="50%" p="3px" color="gray" fontSize="xl" /> 
                        </Td>
                    </Tr>
                    <Tr>
                        <Td borderRight="1px solid gray" borderColor="whiteAlpha.600"  maxWidth="200px" p="5">At home workouts</Td>
                        <Td textAlign="center" borderRight="1px solid gray" borderColor="whiteAlpha.600"  p="5">
                            <CheckIcon border="1px" borderRadius="50%" p="3px" color="blue.400" fontSize="xl" /> 
                            <Text>Unlimited</Text>
                        </Td>
                        <Td textAlign="center" borderRight="1px solid gray" borderColor="whiteAlpha.600"  p="5">
                            <CheckIcon border="1px" borderRadius="50%" p="3px" color="blue.400" fontSize="xl" /> 
                            <Text>Unlimited</Text>
                        </Td>
                        <Td textAlign="center" p="5" borderColor="whiteAlpha.600" >
                            <CheckIcon border="1px" borderRadius="50%" p="3px" color="blue.400" fontSize="xl" /> 
                            <Text>Unlimited</Text>
                        </Td>
                    </Tr>
                    <Tr >
                        <Td borderBottom="0" borderRight="1px solid gray" borderColor="whiteAlpha.600"  p="5"></Td>
                        <Td textAlign="center" borderBottom="0" borderRight="1px solid gray" borderColor="whiteAlpha.600"  p="5">
                            <Text>Starting at Rs. 1499/month</Text>
                            <Button mt="10px" color="red.500"> Buy now </Button>
                        </Td>
                        <Td textAlign="center" borderBottom="0" borderRight="1px solid gray" borderColor="whiteAlpha.600"  p="5">
                            <Text>Starting at Rs. 1499/month</Text>
                            <Button mt="10px" color="red.500"> Buy now </Button>
                        </Td>
                        <Td textAlign="center" p="5" borderBottom="0" borderColor="whiteAlpha.600" >
                            <Text>Starting at Rs. 1499/month</Text>
                            <Button mt="10px" color="red.500"> Buy now </Button>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    )
}