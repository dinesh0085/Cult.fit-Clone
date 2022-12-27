import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Care.module.css";

function Care({ setc }) {
  setc("#15171C");
  const [care, setCare] = useState([]);

  useEffect(() => {
    fetch("https://starter-express-api-nine.vercel.app/care")
      .then((res) => res.json())
      .then((data) => {
        setCare(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  console.log(care);

  return (
    // --------Staring Main Div----------
    <div className="care_main">
      <Box
        h={"40px"}
        w="100%"
        bgColor={"#393a3b"}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
      >
        <Box
          color={"white"}
          bgColor={"#1d1d21"}
          display="flex"
          justifyContent={"center"}
          alignItems="center"
          p={"3px 10px"}
          borderRadius="4px"
        >
          Lab Tests
        </Box>
      </Box>

      <Box w={{ base: "100%", md: "95%", lg: "90%" }} m="auto">
        <Text
          fontSize={{ base: "14px", md: "18px", lg: "25px" }}
          marginTop="20px"
          fontWeight={"semibold"}
          color="black"
          textAlign="left"
        >
          Lab Tests
        </Text>
        <Text
          fontSize={{ base: "12px", md: "14px", lg: "16px" }}
          color="grey"
          textAlign="left"
        >
          Assess and monitor your health from the comfort of your home now.
        </Text>
        <SimpleGrid
          marginTop={"3%"}
          columns={{ sm: 2, md: 3, lg: 5 }}
          spacing={4}
        >
          {care &&
            care.map((el, i) => {
              if (i >= 0) {
                if (i == 10) {
                  return;
                }
                // ----------------single product card-------------------------
                return (
                  <Box className={styles.careCard} key={el._id}>
                    <Link to={`/details/${el._id}`}>
                      {" "}
                      <Image borderRadius="5px" src={el.image}></Image>
                    </Link>

                    {/*  price box */}
                    <Box
                      fontSize={{ base: "10px", md: "10px", lg: "12px" }}
                      color={"grey"}
                      display="flex"
                      justifyContent="space-between"
                    >
                      <Text color="black">Price</Text>
                      <Text textDecoration="line-through" color="grey">
                        ₹ {el.price}
                      </Text>
                    </Box>
                    {/*  price box */}

                    {/* offer price box */}
                    <Box
                      fontSize={{ base: "10px", md: "10px", lg: "12px" }}
                      color={"grey"}
                      display="flex"
                      justifyContent="space-between"
                    >
                      <Text color="black">Offer Price</Text>
                      <Text color="black">₹ {el.dprice}</Text>
                    </Box>
                    {/* offer price box */}
                  </Box>
                );

                // ----------------single product card-------------------------
              }
            })}
        </SimpleGrid>
      </Box>

      {/*-------------------- FAQ part -------------------*/}

      <Box
        marginTop={"30px"}
        bgColor={"#171a26"}
        paddingTop="70px"
        paddingBottom={"50px"}
      >
        <Box w={{ base: "100%", md: "95%", lg: "90%" }} m="auto">
          <Heading
            color={"white"}
            textAlign={"left"}
            fontSize={["26px", "32px", "40px", "48px"]}
          >
            FAQS
          </Heading>
          <Heading
            fontSize={{ base: "12px", md: "14px", lg: "18px" }}
            color={"grey"}
            marginTop="5px"
            textAlign={"left"}
          >
            7 QUESTIONS
          </Heading>

          <Accordion color={"white"} marginTop="20px" allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize={["12px", "16px", "20px", "24px"]}
                  >
                    Q1:- How does home sample collection work?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign="left">
                Once you have chosen a convenient time slot for your booking,
                and placed an order, our WHO certified health professionals will
                arrive at your chosen address and collect blood and/or urine
                samples. Once samples are collected, they will be processed at
                one of our partner labs closest to you and the test report will
                be available on your app and email.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize={["12px", "16px", "20px", "24px"]}
                  >
                    Q2:- Can I reschedule/cancel my diagnostic test appointment?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign="left">
                The appointment can be rescheduled or cancelled 2 hours before
                your chosen slot.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize={["12px", "16px", "20px", "24px"]}
                  >
                    Q3:- How can I receive my reports on email again ?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign="left">
                You can email your test reports by going to Profile {">"}{" "}
                Activity &Records{">"} Medical Records{">"} Diagnostic Tests and
                selecting the email reports button.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize={["12px", "16px", "20px", "24px"]}
                  >
                    Q4:- I did not get my reports on email
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign="left">
                Sometimes, mail providers mistakenly mark the reports email as
                Spam. Please check the spam folder (or) trigger the reports
                email again on the app You would have received an SMS after your
                sample collection indicating the time it would take for results
                to be available In case the communicated time has elapsed and
                you have not received your report on email, please reach out to
                us at hello@cure.fit{" "}
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize={["12px", "16px", "20px", "24px"]}
                  >
                    Q5:- What instructions should I follow for my tests?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign="left">
                All instructions that have to be followed for your tests will be
                communicated to you at the time of booking a slot. You will also
                receive an email covering the instructions.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize={["12px", "16px", "20px", "24px"]}
                  >
                    Q6:- How can I get a refund for my Full body Health Check
                    /Diagnostic Screening pack ?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign="left">
                Only if you have not completed your Full Body health check up/
                Diagnostic Screening within 1 year from the purchase date,
                please write to hello@curefit.com e.g: If heath check is
                purchased on 1/10/2019, you can write to us till 1/10/2020. We
                do not refund any amount for health check ups with a purchase
                date older than a year.{" "}
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize={["12px", "16px", "20px", "24px"]}
                  >
                    Q7:- Can I club two or more sample collection slots
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign="left">
                We are currently working on enabling multiple orders from the
                same address (for the same person or different). Till then, you
                can request the phlebotomist who comes for the sample collection
                for the first order, to add on the rest of the tests (for the
                same person or different). You can directly pay him via card /
                UPI / cash for the additional tests purchased.{" "}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>

      {/*-------------------- FAQ part -------------------*/}
    </div>
    /* --------Ending Main Div---------- */
  );
}

export default Care;
