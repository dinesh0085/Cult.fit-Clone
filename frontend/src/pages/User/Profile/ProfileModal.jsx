import { Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent,  PopoverTrigger, Text } from "@chakra-ui/react"

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/User/Login/login.action";



export const ProfileModal = () =>{
    const dispatch = useDispatch();

    return (
        <>
            <Popover>
                <PopoverTrigger>
                    <PersonOutlineIcon />
                    {/* <Button>Trigger</Button> */}
                </PopoverTrigger>
                <PopoverContent bgColor="blackAlpha.700">
                    <PopoverArrow />
                    <PopoverCloseButton />
                    {/* <PopoverHeader>Are you sure you want to logout?</PopoverHeader> */}
                    <PopoverBody 
                        p="20px"
                        
                    >
                        <Text fontSize="1.5rem">Are you sure you want to logout?</Text>
                        <Button mt="50px" colorScheme="red" onClick={()=>dispatch(logout())}>Logout</Button> 
                    </PopoverBody>
                </PopoverContent>
            </Popover>
            {/* <Box cursor={"pointer"} onClick={onOpen}>
                <PersonOutlineIcon />
            </Box> */}

            {/* <Modal
                size={"md"}
                color={"rgba(255, 255, 255, 0.7);"}
                onClose={onClose}
                isOpen={isOpen}
                // isCentered
                ml="40%"
            >
                <ModalOverlay />
                <ModalContent bg={"black"} color={"white"}>
                <ModalCloseButton />
                
                <ModalBody minH={"350px"}>
                    <Text>Logout</Text>
                </ModalBody>
                </ModalContent>
            </Modal> */}
        </>
       
    )
}