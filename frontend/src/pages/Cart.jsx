import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarts, removeCart } from "../redux/Cart/cartAction";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "./Care.module.css";

const tok =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2MzliM2ViMzVkY2EyODRkNGVkZmNjZWMiLCJpYXQiOjE2NzEzMzc4NDEsImV4cCI6MTY3MTc2OTg0MX0.gAyGngbn3cF5P1hv5kKD7O0aLjDdEuAmTtV04Q6Fu9g";
const token = localStorage.getItem("token") || tok;

function Cart({ setc }) {
  setc("#15171C");
  const dispatch = useDispatch();

  const { cartItems, price } = useSelector((store) => store.cart);
  console.log(cartItems);

  useEffect(() => {
    dispatch(getCarts(token));
    // console.log(cartItems);
  }, []);

  if(cartItems.length <= 0){
    return (
      <Stack
      w="60%"
      m="auto"
      align="Center"
      p="80px"
      >
          <Image src="https://www.pngmart.com/files/7/Cart-PNG-Transparent.png" alt="Cart Image" />
          <Heading color="blackAlpha.600">Cart is Empty!</Heading>
      </Stack>
    )
  }

  return (
    // --------Staring Main Div----------
    <div className="care_main">
      <Box w={{ base: "100%", md: "95%", lg: "90%" }} m="auto">
        <Flex
          gap="10px"
          bgColor="yellow.200"
          p="10px"
          alignItems="center"
          justifyContent="space-between"
          direction={{ base: "column", md: "row" }}
        >
          <Flex alignItems="center" gap="2">
            <Heading fontSize="xl" color="black">
              Total Cart Items:
            </Heading>
            <Heading fontSize="xl" color="black">
              {cartItems.length}
            </Heading>
          </Flex>

          <Flex alignItems="center" gap="2">
            <Heading fontSize="xl">Total Price:</Heading>
            <Heading fontSize="xl">₹ {price}</Heading>
          </Flex>

          <Link
          to="/checkout"
          >
          <Button colorScheme="orange">Checkout</Button>
            
          </Link>
          
        </Flex>

        <SimpleGrid
          my="60px"
          columns={{ sm: 1, md: 2, lg: 4 }}
          spacing={4}
        >
          {cartItems &&
            cartItems.map((el, i) => {
              if (i >= 0) {
                
                // ----------------single product card-------------------------
                return (
                  <Box className={styles.careCard} key={el._id}>
                    <Link to={`/details/${el.product._id}`}>
                      {" "}
                      <Image
                        borderRadius="5px 5px 0 0"
                        w="100%"
                        src={el.product.image}
                      ></Image>
                    </Link>

                    <Stack p="20px" bgColor="gray.200" textAlign="left">
                      <Text fontSize="xl" noOfLines={1} color="black">
                        {el.product.title}
                      </Text>
                      <Flex
                        fontSize={{ base: "10px", md: "10px", lg: "12px" }}
                        color={"grey"}
                        justifyContent="space-between"
                      >
                        <Box>
                          <Text as="span" fontSize="lg" color="black">
                            Price:
                          </Text>
                          <Text as="span" ml="10px" fontSize="lg" color="black">
                            ₹ {el.product.price}
                          </Text>
                        </Box>
                        <Box>
                          <Button
                            onClick={() => dispatch(removeCart(el._id, token))}
                            colorScheme="orange"
                          >
                            Remove
                          </Button>
                        </Box>
                      </Flex>
                    </Stack>
                  </Box>
                );
              }
            })}
        </SimpleGrid>
      </Box>
    </div>
    /* --------Ending Main Div---------- */
  );
}

export default Cart;
