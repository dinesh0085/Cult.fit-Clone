import styles from "./testSinglePage.module.css";
import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { TimeIcon, CalendarIcon } from "@chakra-ui/icons";
import { Link, useParams } from "react-router-dom";
import { addCart } from "../redux/Cart/cartAction";
import { useDispatch } from "react-redux";

const id1 = "639879faae12ba6f42a8623a";
const tok =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2MzliM2ViMzVkY2EyODRkNGVkZmNjZWMiLCJpYXQiOjE2NzEzMzc4NDEsImV4cCI6MTY3MTc2OTg0MX0.gAyGngbn3cF5P1hv5kKD7O0aLjDdEuAmTtV04Q6Fu9g";
const token = localStorage.getItem("token") || tok;

const TestSinglePage = ({ setc }) => {
  setc("#15171C");
  const [test, setTest] = useState();
  const { id } = useParams();
  console.log(id);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://starter-express-api-nine.vercel.app/care/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTest(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  console.log(test);

  const handleAddCart = () => {
    dispatch(addCart(test._id, token)).then((res) => {
      if (res) {
        alert("Product added to cart successfully!");
      } else {
        alert("Please Login");
      }
    });
  };

  return (
    <div className="care_main">
      {/* labtest  navbar  */}

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

      {/* labtest  navbar  */}

      <Box className={styles.testPage}>
        <Box className={styles.testLeft}>
          <Image
            marginTop="30px"
            width="75%"
            height="60%"
            borderRadius="1rem"
            src={test && test.image}
          ></Image>
        </Box>

        <Box className={styles.testRight}>
          {/* -----------Link_--------------- */}
          <Text textAlign={"left"} color={"grey"} fontSize="12px">
            <Link to="/">Home</Link> {">"} <Link to="/care">Care</Link> {">"}{" "}
            <Link to="/care">Diagnostic Tests</Link> {">"}{" "}
            <Link>{test && test.title}</Link>{" "}
          </Text>

          <Box className={styles.buynowbox} p="3%" marginTop={"20px"}>
            <Box
              className={styles.titleAndPrice}
              display="flex"
              justifyContent={"space-between"}
            >
              <Heading fontSize={"2xl"}>{test && test.title}</Heading>
              <Box
                display={"flex"}
                alignItems="center"
                justifyContent={"center"}
              >
                <Text
                  fontSize="sm"
                  marginRight={"5px"}
                  color="grey"
                  textDecoration="line-through"
                >
                  ₹ {test && test.price}{" "}
                </Text>
                <Text fontSize="md" fontWeight={"bold"} color="black">
                  ₹ {test && test.dprice}{" "}
                </Text>
              </Box>
            </Box>

            <Text
              marginTop={"10px"}
              color={"grey"}
              fontSize="12px"
              textAlign={"justify"}
            >
              {" "}
              {test && test.desc}{" "}
            </Text>

            <Box
              className={styles.testAndBuynow}
              display="flex"
              justifyContent={"space-between"}
              alignItems="center"
            >
              {/* 73 Tests
       Report Ready in 36 Hrs */}
              <Box
                className={styles.testAndReports}
                fontSize="12px"
                marginTop={"20px"}
                textAlign={"left"}
              >
                <TimeIcon></TimeIcon> {test && test.tests.length} Tests
                <br></br>
                <CalendarIcon></CalendarIcon> Report Ready in{" "}
                {test && test.tests.length * 2} Hrs
              </Box>

              <Button
                onClick={handleAddCart}
                bg={"#fa3b52"}
                borderRadius="2rem"
                color="white"
                fontSize={"12px"}
              >
                Buy Now
              </Button>
            </Box>
          </Box>

          <Heading fontSize={"16px"} marginTop="40px" textAlign={"left"}>
            Tests Included
          </Heading>

          {/* --------test included---------- */}
          <SimpleGrid
            className={styles.testincluded}
            marginTop={"3%"}
            columns={[2, 3, 3, 4]}
            spacing={0}
            width="90%"
          >
            {test &&
              test.tests.map((el) => {
                return (
                  <Box
                    display="flex"
                    flexDirection={"column"}
                    justifyContent="center"
                    alignItems={"center"}
                    p={"2px"}
                  >
                    <Box
                      borderRadius="1rem"
                      boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
                    >
                      <Image
                        borderRadius="1rem"
                        height="90px"
                        src={el.image}
                      ></Image>
                    </Box>

                    <Text
                      marginTop={"10px"}
                      fontSize={{ sm: "7px", md: "8px", lg: "10px" }}
                      color="black"
                    >
                      {el.title}
                    </Text>
                  </Box>
                );
              })}
          </SimpleGrid>
          {/* --------test included---------- */}

          {/* --------Recommended Addons---------- */}

          <Box
            className={styles.RecommendedAddons}
            bg={"#f5f5f5"}
            p="20px"
            marginTop="40px"
            borderRadius={"10px"}
          >
            <Heading fontSize={"16px"} textAlign={"left"}>
              Recommended Addons
            </Heading>

            <SimpleGrid
              marginTop={"3%"}
              columns={[2, 3, 3, 4]}
              spacing={0}
              width="90%"
            >
              {test &&
                test.recomends.map((el) => {
                  return (
                    <Box
                      display="flex"
                      flexDirection={"column"}
                      justifyContent="center"
                      alignItems={"center"}
                      p={"2px"}
                    >
                      <Box
                        borderRadius="1rem"
                        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
                      >
                        <Image
                          borderRadius="1rem"
                          height="90px"
                          src={el.image}
                        ></Image>
                      </Box>

                      <Text
                        marginTop={"10px"}
                        fontSize={{ sm: "7px", md: "8px", lg: "10px" }}
                        color="black"
                      >
                        {el.title}
                      </Text>
                      <Text
                        marginTop={"2px"}
                        fontSize={{ sm: "7px", md: "8px", lg: "10px" }}
                        color="black"
                      >
                        ₹ {el.price.toFixed(0)}
                      </Text>
                    </Box>
                  );
                })}
            </SimpleGrid>
          </Box>
          {/* --------Recommended Addons---------- */}
        </Box>
      </Box>

      {/* --------Test Description---------- */}
      <Box bg={"#171a26"} paddingTop="40px">
        <Text w={"80%"} margin="auto" color={"#a2977f"} marginBottom="10px">
          What is {test && test.title} Test?
        </Text>
        <Text
          w={"80%"}
          margin="auto"
          color={"#5d5f68"}
          fontSize={"12px"}
          marginBottom="20px"
        >
          Polycystic Ovarian Disease profile test or PCOD profile test refers to
          a set of tests that are done to assess the hormone levels and their
          functions in the body. This test is usually done for women who
          experience symptoms of Polycystic Ovarian Disease. This is a common
          disorder that affects women between the age of 15 and 44 who are in
          their reproductive stage. Women who have this disease find it
          difficult to conceive and have several health issues too. The main
          complication of PCOD arises from the cysts that get formed on the
          ovaries. This prevents the release of eggs and hence face a troubled
          pregnancy. Other symptoms that indicate PCOD are irregular periods,
          breakouts & acne, hair fall, weight gain, and facial hair growth. A
          PCOD test is done to diagnose if a woman suffers from this disorder.
          It will help the health specialist to understand the cause of your
          symptoms. It also rules out any other potential health issues since
          many other health conditions may also show symptoms that are similar
          to PCOD. Once the doctor has determined whether you have a PCOD or
          not, he or she can move forward with a suitable treatment. Here are
          some of the common PCOD tests you can expect in a package: Complete
          Haemogram Thyroid Stimulating Hormone (TSH) Follicle Stimulating
          Hormone (FSH) Luteinising Hormone (LH) Insulin - Fasting Prolactin
          Testosterone Total The PCOD test price varies based on the number of
          tests that are included in the package. In case you or any of your
          loved ones have symptoms of PCOD, just connect to your doctor and get
          PCOD check up done. You can also search for “Gynaecologist Near Me”
          and consult one. Nowadays, you can also book PCOD test online and get
          the tests done at home. Just select our PCOD panel test and we will
          send an expert to collect your samples soon. Keep reading to know
          more.
        </Text>

        <Text w={"80%"} margin="auto" color={"#a2977f"} marginBottom="10px">
          How {test && test.title} test is done?
        </Text>
        <Text
          color={"#5d5f68"}
          w={"80%"}
          margin="auto"
          fontSize={"12px"}
          marginBottom="20px"
        >
          A PCOD profile test is done by taking blood samples. At times, the
          doctor also takes a pelvic exam and ultrasound to see the development
          of the cyst. But when it comes to checking the hormone levels and
          other PCOD symptoms, doctors prefer blood tests. The doctor or other
          health care provider will extract a small amount of blood from a vein
          in your arm. To make sure you get the correct results, it is suggested
          that you should fast for at least 10 hours. So, you can schedule the
          test in the morning. You can drink water. For some diagnoses, the
          doctors may also need saliva or urine samples. It will depend on the
          types of tests you have taken in the package. The samples are then
          sent to a laboratory wherein the experts conduct several tests to
          determine the underlying cause. If you have applied for PCOD test at
          home with us, the reports will be sent to you within 72 hours. We
          assure quality testing with our state-of-the-art facilities and DMLT &
          WHO-certified phlebotomists.
        </Text>

        <Text w={"80%"} margin="auto" color={"#a2977f"} marginBottom="10px">
          {test && test.title} test procedure.
        </Text>
        <Text
          color={"#5d5f68"}
          w={"80%"}
          margin="auto"
          fontSize={"12px"}
          marginBottom="20px"
        >
          The procedure for PCOD profile test is quite simple and easy. You will
          just have to consult a doctor first, who will suggest you diagnostic
          tests based on your symptoms. They will suggest centres or hospitals
          where you can get a PCOD check-up done. They will also tell you what
          to expect and how to prepare for the test. Usually, there is no
          special preparation required for PCOD test. This is why you can now
          also take them at home. Just book a slot and a healthcare provider
          will come to your house for collecting the samples. You may, however,
          need to fast for at least 10-12 hours in advance. The service provider
          will inform you about it of if there is any other requirement. Once
          you have the session booked and chosen the package of tests, you can
          visit the centre (if going for offline PCOD test) and give your
          samples i.e., blood. It will be further used in the laboratory for
          determining the following things: Hormones like Follicle-stimulating
          hormone (FSH) and luteinizing hormone (LH) Dehydroepiandrosterone
          (DHEA) and testosterone levels Thyroid-stimulating hormone (TSH) level
          Prolactin In some cases, your urine sample may also be taken. For
          instance, to check your response to sugar, you may have to go through
          Oral Glucose Tolerance Test. For the OGTT, your blood will be drawn
          and then you will be given a very sweet, sugary solution to drink.
          After one or two hours, blood tests will be again drawn. Urine samples
          may be also be collected. Again, you can talk to your doctor or the
          clinic to check the type of tests you need to take. They can give you
          a better suggestion on what exactly to expect and how the procedure
          will take place.
        </Text>

        <Text w={"80%"} margin="auto" color={"#a2977f"} marginBottom="10px">
          {" "}
          How does {test && test.title} at home work?
        </Text>
        <Text
          color={"#5d5f68"}
          w={"80%"}
          margin="auto"
          fontSize={"12px"}
          marginBottom="20px"
        >
          Thanks to technological advancement and the internet, you can now book
          PCOD test online and get testing done at home. The PCOD test price is
          also competitive and you can get best services at affordable prices.
          You can also choose the tests you want in a package and get a
          customized PCOD test at home. Our PCOD test at home package contains
          32 tests that range from complete haemogram analysis and FSH test to
          prolactin test and testosterone level test. You can also try our add
          on tests such as Electrolyte profile, and Vitamin B9 level tests. All
          these tests are done by certified phlebotomists from Healthians – our
          partners. Here is how the complete process of PCOD test at home work:
          You first need to visit our website or open our app to book an
          appointment. Enter your details and then schedule a booking. Mostly,
          your blood test collection will be should be scheduled on the 3rd day
          of your menstrual cycle. Incase you have urine test also, book it
          after your menstruation. You can then make the payment and confirm the
          booking. A trained Phlebotomists (Sample Collector) will be assigned
          to you. He/she will visit you on the scheduled time for the collection
          of samples. Keeping the covid-19 regulations in mind, you will be
          required to take all the necessary precautions. You are also required
          to fast for at least 10 hours prior to the sample collection. The
          sample collector will take your blood or urine samples and transport
          it to the nearest collection centre while maintaining the integrity of
          the sample. The whole process is of high quality with 46 touch-point
          technology. So, rest assured about the quality and overall testing.
          Once the results are processed, medical team will verify the results
          and create a smart report along with historical trends and vital’s
          information submitted by you along with simple interpretations. It
          will be a digital report and will be available to you within 72 hours.
          Some tests may take some time but the digital reports will be shared
          with you as soon as possible. Once you have the reports, you can
          consult your doctors about the treatment plan. At Care.Fit, we also
          give you online consultation from experts. In addition to PCOD test,
          you can also opt for other tests such as pregnancy test, hair fall
          screening or even a full body checkup with Care.Fit. Just explore our
          website or download our app. We will make sure you get a comfortable
          and high-quality health check up from the comfort of your home.
        </Text>

        <Text w={"80%"} margin="auto" color={"#a2977f"} marginBottom="10px">
          What does my result mean?
        </Text>
        <Text
          color={"#5d5f68"}
          w={"80%"}
          margin="auto"
          fontSize={"12px"}
          marginBottom="20px"
        >
          By now, you have learned that PCOD test is done to check the level of
          hormones in your body. It also helps in understanding if there is any
          change or fluctuation in the general functioning of the hormones, how
          that affects your body. Along with hormones, PCOD panel test also
          checks insulin levels and red blood cell count. You can easily check
          what the levels mean in the table below. However, it is recommended
          that you should always consult a doctor to get a proper analysis of
          your PCOD test and also suggest the steps or treatment plan to be
          followed. But in case you wish to have an understanding of the
          results, you can take a look at the normal range of the hormones. Here
          is the general range that can give you an idea of what your reports
          suggest: Test Normal Range Follicle Stimulating Hormone (FSH) 4.7 to
          21.5 mIU/mL Hemoglobin (Hgb) 12.0-15.2 gm/dL Red Blood Cell Count
          (RBC) 3.8-5.5x106/µL White Blood Cell Count (WBC) 4.1-10.9x103/µL
          Testosterone Total 15 to 70 ng/dL Thyroid Stimulating Hormone (TSH)
          0.4 and 4.0 mU/L These values can fluctuate based on your condition.
          If there is a major change, you should definitely seek an expert’s
          help. They can help you understand what these changes mean and how you
          can control your PCOD for a healthier life. If you have any more
          queries related to PCOD test or their results, feel free to contact
          us. We have a panel of trained health experts who can solve all your
          queries and suggest you the best treatment options.
        </Text>
      </Box>
      {/* --------Test Description---------- */}
    </div>
  );
};

export default TestSinglePage;
