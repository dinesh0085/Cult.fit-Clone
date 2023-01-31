import { Box, Button, Flex, FormControl,  FormLabel, Heading, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeCart } from "../redux/Cart/cartAction";

const tok =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2MzliM2ViMzVkY2EyODRkNGVkZmNjZWMiLCJpYXQiOjE2NzEzMzc4NDEsImV4cCI6MTY3MTc2OTg0MX0.gAyGngbn3cF5P1hv5kKD7O0aLjDdEuAmTtV04Q6Fu9g";
const token = localStorage.getItem("token") || tok;

const iniState = {
    number:"",
    name: "",
    expiry: "",
    cvc:""
}

export const CheckoutPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [card, setCard] = useState(iniState);
    const toast = useToast();

    const { cartItems, price } = useSelector((store) => store.cart);

    const handleChange = (e) => {
        const {name, value} = e.target;

        setCard({...card, [name]:value});
        console.log(card);
    }

    const removeCartItems = ()=>{
        cartItems.map((el) => {
            
         dispatch(removeCart(el._id, token));
           
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        removeCartItems();

        toast({
              position: 'bottom-left',
              render: () => (
                <Box color='white' p={3} bg='green.500'>
                  Payment Successful
                </Box>
              ),
        });
        
        navigate("/");
        
    }

    return (
        <Box
        bgColor="gray.50"
        >
            

            <Box
            w="40%"
            m="auto"
            py="40px"
            
            >
            <Flex
            justifyContent="space-around"
            direction={{base:"column", md:"row"}}
            mb="40px"
            >
                <Heading>Total Items: {cartItems.length}</Heading>
                <Heading>Total Price: {price}</Heading>
            </Flex>

            <Box
                border="1px solid gray"
                p="20px"
                borderRadius="15px"
                bgColor="white"
            >
                <form onSubmit={handleSubmit}>

                    <FormControl isRequired>
                        <FormLabel>Card Number</FormLabel>
                        <Input name="number" value={card.number} onChange={handleChange} placeholder ="Card Number" type='number' />
                        
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Full Name</FormLabel>
                        <Input name="name" value={card.name} onChange={handleChange} placeholder="Full Name" type='text'/>
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Expiry date</FormLabel>
                        <Input name="expiry" value={card.expiry} onChange={handleChange} placeholder="MM/YY" type='text' />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>CVC</FormLabel>
                        <Input name="cvc" value={card.cvc} onChange={handleChange} placeholder="CVC" type='number' />
                    </FormControl>

                    <Button
                    mt={4} 
                    type="submit">Continue to checkout</Button>
                </form>
            </Box>

           
            </Box>
            
         
        </Box>
    )
}