import { Box, Button, Image, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import {CheckIcon, CloseIcon} from "@chakra-ui/icons";

export const Plans = () => {
    return (
        <TableContainer>
            <Table>
                <Thead>
                    <Tr>
                        <Th></Th>
                        <Th>
                            <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_89,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png" />
                        </Th>
                        <Th>
                            <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_65,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro-partial.png" />
                        </Th>
                        <Th>
                            <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_93,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-home-partial-1.svg" />
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>ELITE Gyms & At Centre Group Classes</Td>
                        <Td>
                            <CheckIcon />
                        </Td>
                        <Td></Td>
                        <Td>
                            <CloseIcon />
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>PRO Gyms</Td>
                        <Td>
                            <CheckIcon />
                        </Td>
                        <Td>
                            <CheckIcon />
                        </Td>
                        <Td>
                            <CloseIcon />
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Smart workout plan</Td>
                        <Td>
                            <CheckIcon />
                        </Td>
                        <Td>
                            <CheckIcon />
                        </Td>
                        <Td>
                            <CloseIcon />
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>At home workouts</Td>
                        <Td>
                            <CheckIcon />
                        </Td>
                        <Td>
                            <CheckIcon />
                        </Td>
                        <Td>
                            <CheckIcon />
                        </Td>
                    </Tr>
                    <Tr>
                        <Td></Td>
                        <Td>
                            <Text>Starting at Rs. 1499/month</Text>
                            <Button color="red.500"> Buy now </Button>
                        </Td>
                        <Td>
                            <Text>Starting at Rs. 1499/month</Text>
                            <Button color="red.500"> Buy now </Button>
                        </Td>
                        <Td>
                            <Text>Starting at Rs. 1499/month</Text>
                            <Button color="red.500"> Buy now </Button>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    )
}